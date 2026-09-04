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
    // Newest first, which for a fifty-year timeline means the present.
    items: () =>
      [...written].reverse().map((entry) => ({
        title: `${entry.year} — ${entry.title}`,
        path: `/log/${entry.id}`,
        date: entry.date ? `${entry.date}-01`.slice(0, 10) : `${entry.year}-01-01`,
        description: entry.dek ?? '',
      })),
  },

  outDir: 'dist',
  typesFile: 'app/transclude-env.d.ts',
};
