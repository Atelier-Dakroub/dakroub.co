/** @typedef {import('./types.js').Track} Track */

/**
 * The layers, in the order the filter row shows them. The ones marked `mine`
 * come first and are drawn filled; the rest are the room I was in, and are
 * drawn hollow.
 *
 * `glyph` is drawn in CSS, not with a font, so the marker on the spine says
 * which layer an entry is without a legend.
 *
 * @type {Array<{ id: Track, label: string, plural: string, blurb: string, mine: boolean }>}
 */
export const tracks = [
  {
    id: 'machine',
    label: 'Machine',
    plural: 'Machines',
    blurb: 'Every computer that sat in front of me, and what it cost.',
    mine: true,
  },
  {
    id: 'play',
    label: 'Play',
    plural: 'Games',
    blurb: 'What I played, and what it taught me about systems.',
    mine: true,
  },
  {
    id: 'learn',
    label: 'Learn',
    plural: 'Learning',
    blurb: 'School, degrees, and the things I set out to teach myself.',
    mine: true,
  },
  {
    id: 'make',
    label: 'Made',
    plural: 'Things made',
    blurb: 'Programs, sites, tools, experiments. Mostly for an audience of one.',
    mine: true,
  },
  {
    id: 'work',
    label: 'Work',
    plural: 'Work',
    blurb: 'Paid, shipped, and answerable to somebody.',
    mine: true,
  },
  {
    id: 'tech',
    label: 'Tech',
    plural: 'The industry',
    blurb: 'What the industry did that year, whether or not I noticed.',
    mine: false,
  },
  {
    id: 'world',
    label: 'World',
    plural: 'The world',
    blurb: 'The films, the songs, the news. What was on while the machine booted.',
    mine: false,
  },
];

/** @type {Record<string, { id: Track, label: string, plural: string, blurb: string, mine: boolean }>} */
export const trackBy = Object.fromEntries(tracks.map((t) => [t.id, t]));

/** The four that are about me, for the "just me" view. */
export const mine = tracks.filter((t) => t.mine).map((t) => t.id);
