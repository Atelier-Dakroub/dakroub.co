// The one place the seven entry files become a timeline.
//
// Everything a loader needs is a function here. Pages ask questions; this file
// answers them. Nothing here reads a request, so it is all prerenderable.

import { entries as green } from './entries/01-green-phosphor.js';
import { entries as eight } from './entries/02-eight-bits.js';
import { entries as beige } from './entries/03-beige-box.js';
import { entries as source } from './entries/04-view-source.js';
import { entries as standards } from './entries/05-standards.js';
import { entries as responsive } from './entries/06-responsive.js';
import { entries as platform } from './entries/07-platform.js';
import { eras, eraOf, span } from './eras.js';
import { trackBy, tracks, mine } from './tracks.js';

/** @typedef {import('./types.js').Entry} Entry */
/** @typedef {import('./types.js').Era} Era */

/** Authored order, era by era. Within a year the file's order is kept. */
const authored = [...green, ...eight, ...beige, ...source, ...standards, ...responsive, ...platform];

// An id is a URL. Two entries sharing one would make `/log/<id>` ambiguous and
// the second would never be reachable, so it is a startup error rather than a
// mystery in six months.
const seen = new Set();
for (const entry of authored) {
  if (seen.has(entry.id)) throw new Error(`[data] two entries share the id "${entry.id}"`);
  seen.add(entry.id);
}

/**
 * Every entry that is not a draft, oldest first.
 *
 * `Array.prototype.sort` is stable, so entries of the same year come out in the
 * order the file lists them. That is the contract the entry files document: keep
 * a year's entries in the order you want them read.
 */
export const all = authored.filter((entry) => !entry.draft).sort((a, b) => a.year - b.year);

/** Entries with a `body`, which is what earns an entry a page of its own. */
export const written = all.filter((entry) => Boolean(entry.body));

/** Entries still carrying a note to self. `/backstage` is this list. */
export const unwritten = authored.filter((entry) => Boolean(entry.needs));

/** @type {Record<string, Entry>} */
const byId = Object.fromEntries(all.map((entry) => [entry.id, entry]));

/**
 * @param {string} id
 * @returns {Entry|null}
 */
export const findEntry = (id) => byId[id] ?? null;

/**
 * Does this entry have a page? Only the written ones do, so the timeline knows
 * whether to draw a link or plain text.
 *
 * @param {Entry} entry
 * @returns {string|null}
 */
export const hrefFor = (entry) => (entry.body ? `/log/${entry.id}` : null);

/**
 * The one before and the one after, in timeline order, among entries that have
 * a page. A detail page is a spread in a book: there is a way onwards.
 *
 * @param {string} id
 * @returns {{ previous: Entry|null, next: Entry|null }}
 */
export function neighbors(id) {
  const at = written.findIndex((entry) => entry.id === id);
  if (at < 0) return { previous: null, next: null };
  return { previous: written[at - 1] ?? null, next: written[at + 1] ?? null };
}

/** Every tag in use, with how often, most used first. */
export function tagIndex() {
  /** @type {Map<string, number>} */
  const counts = new Map();
  for (const entry of all) {
    for (const tag of entry.tags ?? []) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/**
 * What the timeline page was asked for.
 *
 * Two parameters. A layer, which the filter row sets, and a tag, which the
 * pills under an entry set. Both are ordinary links, so both are URLs somebody
 * can send to somebody else, and neither needs a line of client JavaScript.
 *
 * @param {string} url
 * @returns {{ tag: string, track: string, label: string, active: boolean }}
 */
export function readQuery(url) {
  const params = new URL(url).searchParams;
  const tag = params.get('tag') ?? '';
  const track = trackBy[params.get('track') ?? ''] ? (params.get('track') ?? '') : '';

  return {
    tag,
    track,
    // What the note above the results calls this view.
    label: track ? trackBy[track].plural.toLowerCase() : tag,
    active: Boolean(tag || track),
  };
}

/**
 * The filter row: one link per layer, carrying how many entries it holds. The
 * link on the layer already showing clears the filter, so the row is its own
 * off switch and there is no eighth control to explain.
 *
 * @param {{ track?: string }} query
 * @returns {Array<{ id: string, label: string, count: number, href: string, current: string | false, swatch: string }>}
 */
export function filters({ track = '' } = {}) {
  return tracks.map((one) => ({
    id: one.id,
    label: one.plural,
    count: all.filter((entry) => entry.track === one.id).length,
    href: one.id === track ? '/#stream' : `/?track=${one.id}#stream`,
    current: one.id === track ? 'true' : false,
    // Set here for the same reason the legend sets it here: a template cannot
    // build a custom property name out of a value.
    swatch: `--marker: var(--track-${one.id})`,
  }));
}

/**
 * The entries a query asks for. An era, a layer, a tag, or none of them.
 *
 * @param {{ era?: string, tag?: string, track?: string }} query
 * @returns {Entry[]}
 */
export function stream({ era = '', tag = '', track = '' } = {}) {
  const range = era ? eras.find((one) => one.slug === era) : null;

  return all.filter((entry) => {
    if (range && (entry.year < range.from || entry.year > range.to)) return false;
    if (tag && !(entry.tags ?? []).includes(tag)) return false;
    if (track && entry.track !== track) return false;
    return true;
  });
}

/**
 * A list of entries cut into chapters, so the timeline can render an era header
 * and then that era's entries. An era with nothing in it is left out, which is
 * what makes a filtered timeline skip empty chapters instead of showing seven
 * headers and four entries.
 *
 * @param {Entry[]} list
 * @returns {Array<{ era: Era, entries: Entry[] }>}
 */
export function chapters(list) {
  return eras
    .map((era) => ({
      era,
      entries: list.filter((entry) => entry.year >= era.from && entry.year <= era.to),
    }))
    .filter((chapter) => chapter.entries.length > 0);
}

/**
 * How far through the fifty years a given year is, 0 to 1. The spine, the year
 * counter and the chapter rail all measure themselves with this.
 *
 * @param {number} year
 * @returns {number}
 */
export const progressOf = (year) => {
  const first = eras[0].from;
  const last = eras[eras.length - 1].to;
  return Math.min(1, Math.max(0, (year - first) / (last - first)));
};

export { eras, eraOf, span, tracks };

// ── Presentation ────────────────────────────────────────────────────────────
// The shape a template wants, rather than the shape the author writes. Doing it
// here keeps every page's loader to about ten lines and keeps the markup free
// of conditionals.

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/**
 * One entry, ready for `<time-entry>`.
 *
 * `vt` is the view transition name, for a page that shows few enough entries to
 * afford one. The timeline does not pass it: a named element is a snapshot the
 * browser takes on every navigation, and seventy-nine of them made going back
 * to this page stutter on iOS. The chapter openers keep theirs, which is the
 * morph worth having.
 *
 * @param {Entry} entry
 */
export function view(entry) {
  const month = entry.date?.length >= 7 ? Number(entry.date.slice(5, 7)) : 0;
  return {
    id: entry.id,
    href: hrefFor(entry) ?? '',
    // A month for a moment, a span for a job. The year itself is already in the
    // rail beside the entry, so this line never repeats it.
    stamp: entry.until ? `→ ${entry.until}` : month ? MONTHS[month - 1] : '',
    track: entry.track,
    trackLabel: trackBy[entry.track]?.label ?? entry.track,
    title: entry.title,
    dek: entry.dek ?? '',
    // Built here, because a tag with a space in it has to be encoded and a
    // template has no `encodeURIComponent`.
    tags: (entry.tags ?? []).map((tag) => ({
      label: tag,
      href: `/?tag=${encodeURIComponent(tag)}`,
    })),
    mine: mine.includes(entry.track),
    feature: Boolean(entry.feature),
    needs: entry.needs ?? '',
    vt: entry.feature && entry.body ? `e-${entry.id}` : 'none',
  };
}

/**
 * Entries cut into years, in order. The year is a sticky heading in the rail
 * and the entries flow past it, which is the whole reading rhythm of the page.
 *
 * @param {Entry[]} list
 */
export function byYear(list) {
  /** @type {Array<{ year: number, entries: ReturnType<typeof view>[] }>} */
  const out = [];
  for (const entry of list) {
    const last = out[out.length - 1];
    if (last && last.year === entry.year) last.entries.push(view(entry));
    else out.push({ year: entry.year, entries: [view(entry)] });
  }
  return out;
}

/**
 * The whole page, chapter by chapter: an era, the color the era before it was
 * (so the two can be blended into each other), and that era's years.
 *
 * @param {Entry[]} list
 */
export function flow(list) {
  return chapters(list).map(({ era, entries }, index, all) => ({
    era,
    previous: index === 0 ? 'transparent' : all[index - 1].era.bg,
    count: entries.length,
    years: byYear(entries),
  }));
}
