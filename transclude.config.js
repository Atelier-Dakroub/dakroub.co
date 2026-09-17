// Every path the framework needs is here, relative to `appDir` unless it says
// otherwise. `npx transclude-check` reads this too.

import { site } from './app/data/site.js';
import { written } from './app/data/timeline.js';

export default {
  appDir: 'app',
  routesDir: 'routes',
  elementsDir: 'elements',
  stylesheet: 'app/styles/global.css',

  // Dev and production both listen here, so this app has one port. `PORT` in the
  // environment wins.
  port: 1960,

  // `never` redirects /about/ to /about with a 301, so a page has one URL.
  trailingSlash: 'never',

  // Signs cookies, which is what makes one usable as a session. This site reads
  // no cookies — reading one would make every page personal and stop it being
  // prerendered — but the hook is here if that ever changes.
  cookieSecret: globalThis.process?.env?.COOKIE_SECRET ?? null,

  // The origin `ctx.absolute()` resolves against, and the one the canonical link
  // and the sitemap are built from.
  metadataBase: site.origin,
  canonical: true,

  // Each page gets a policy built from the hashes of what it inlines. Inline
  // `style` attributes still work: this site sets `view-transition-name` and a
  // few custom properties that way, and `style-src` cannot hash an attribute.
  csp: true,

  // The browser fetches or renders the next document before the click. It is
  // what makes a multi-page site feel like it has a router, and it costs no
  // JavaScript of ours. `/backstage` is a dev-only page and is not in the build,
  // so there is nothing to exclude.
  speculate: { eagerness: 'moderate' },

  sitemap: { hostname: site.origin },

  feed: {
    hostname: site.origin,
    title: `${site.name} — the timeline`,
    description: site.tagline,
    language: 'en',
    // Newest first by the day the entry went up, not by the year it is about. A
    // reader sorts on this date and shows what has arrived since it last looked,
    // so an entry written this morning about 1983 has to be dated this morning.
    // Dated 1983 it lands under fifty years of back catalogue and is never seen.
    //
    // The year is still the first thing in the title, which is where a reader
    // wants it: the date says when to read this, the title says what it is about.
    // Entries that went up together keep the timeline's order, newest year first.
    items: () =>
      [...written]
        .reverse()
        .sort((a, b) => (a.published < b.published ? 1 : a.published > b.published ? -1 : 0))
        .map((entry) => ({
          title: `${entry.year} — ${entry.title}`,
          path: `/log/${entry.id}`,
          date: entry.published,
          description: entry.dek ?? '',
        })),
  },

  outDir: 'dist',
  typesFile: 'app/transclude-env.d.ts',
};
