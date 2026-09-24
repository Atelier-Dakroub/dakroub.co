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
    //
    // Plain `http` is the same split. The zone serves it rather than upgrading
    // it, so a crawler that found `http://dakroub.co/` got the whole site a
    // second time with a canonical pointing away from every page. Both fixes
    // go out as one redirect, so `http://www.` is one hop and not two. The
    // scheme comes from the header the edge adds, not from `request.url`:
    // `wrangler dev` rewrites the URL to `http://dakroub.co` and sends no
    // header, so reading the URL would redirect every local request.
    const url = new URL(request.url);
    const insecure = request.headers.get('x-forwarded-proto') === 'http';
    const sub = url.hostname !== canonicalHost && url.hostname.endsWith(`.${canonicalHost}`);
    if (sub || (url.hostname === canonicalHost && insecure)) {
      url.hostname = canonicalHost;
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    return app.fetch(request, env, ctx);
  },
};
