// The Cloudflare entry. `workerFrom` builds the app on the first request, which
// is when `env` exists.
//
// The imports are literal paths on purpose: a bundler cannot follow a computed
// one, and everything the worker serves has to be in the bundle because workerd
// has no disk to read from.

import { workerFrom } from '@transclude/core/worker';
import * as bundle from './dist/server/assets.js';
import * as entry from './dist/server/entry.js';
import manifest from './dist/routes.json';
import config from './transclude.config.js';

const app = workerFrom({ config, manifest, entry, bundle });

/** The host the site calls itself, which is the one it should answer on. */
const canonicalHost = new URL(config.metadataBase).hostname;

export default {
  fetch(request, env, ctx) {
    // `www` is attached to this worker as a second custom domain so that it
    // resolves at all, but serving the site at two hostnames would split how
    // search engines index it. It answers once, permanently, and points here.
    // `config.canonical` only writes the <link> tag; it redirects nothing.
    const url = new URL(request.url);
    if (url.hostname !== canonicalHost && url.hostname.endsWith(`.${canonicalHost}`)) {
      url.hostname = canonicalHost;
      return Response.redirect(url.toString(), 301);
    }

    return app.fetch(request, env, ctx);
  },
};
