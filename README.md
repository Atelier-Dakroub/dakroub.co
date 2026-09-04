# dakroub.co

Fifty years with computers as one vertical scroll: a time capsule, a portfolio
and a resume in the same document. Built with
[transclude](https://transclude.dev), and it ships **no client-side
JavaScript**.

```sh
npm install
npm run dev        # http://localhost:1960
```

| | |
| --- | --- |
| `npm run dev` | the dev server, with hot reload |
| `npm run check` | types, from the shapes your loaders return |
| `npm run build` | write `dist/` |
| `npm start` | serve the build |
| `npm run preview` | build, then serve the build |

## What is here

| URL | What it is |
| --- | --- |
| `/` | The flow. Seven chapters, every entry, in order. |
| `/era/<slug>` | One chapter, with its essay and its entries. |
| `/log/<id>` | One entry, long form. Only entries with a `body` get one. |
| `/work` | The resume. Styled for paper as well as for a screen. |
| `/projects`, `/projects/<slug>` | Selected work, with the reasoning left in. |
| `/about` | Who this is, and how to read the timeline. |
| `/colophon` | How the site is built, and what it is arguing. |
| `/backstage` | **Dev only.** Everything still waiting to be written. |
| `/feed.xml`, `/sitemap.xml`, `/robots.txt` | Housekeeping, generated. |

Everything is prerendered to a file except `/`, which answers `?tag=`, the tags
under an entry are links, and so is server-rendered and held for an hour.

## Filling it in

**Start at `/backstage`.** It only exists while `npm run dev` is running, it is
never built, and it lists every entry, role and project still carrying a note to
yourself. Work down that list and it empties.

All of the content is plain JavaScript objects under `app/data/`. No CMS, no
frontmatter, no build step of its own.

| File | What it holds |
| --- | --- |
| `app/data/site.js` | Your name, role, tagline, email, links. **Edit this first.** |
| `app/data/entries/*.js` | Seven files, one per chapter. This is the timeline. |
| `app/data/eras.js` | The seven chapters: ranges, colors, textures, essays. |
| `app/data/work.js` | Roles, capabilities, toolchain. `/work` is this file. |
| `app/data/projects.js` | The long project write-ups. |
| `app/data/tracks.js` | The layers. Adding one adds a filter. |
| `app/data/timeline.js` | Derived views. You should not need to touch it. |

### Adding an entry

Open the file for the chapter it belongs to and add an object, keeping the
array in year order:

```js
{
  id: 'the-amiga',             // unique across every file, it is the URL
  year: 1987,
  date: '1987-03',             // optional, and only used for the small type
  track: 'machine',            // machine | play | learn | make | work | tech | world
  title: 'The Amiga 500',
  dek: 'One line, on the timeline, under the title.',
  tags: ['commodore', 'hardware'],
  feature: true,               // breaks the column and takes more room
  spec: [
    { label: 'CPU', value: 'Motorola 68000 · 7.16 MHz' },
    { label: 'RAM', value: '512 KB' },
  ],
  links: [{ href: 'https://example.com', label: 'Something to read' }],
  body: `<p>Long form. Plain HTML, it is yours, so it is not escaped.</p>`,
}
```

Two fields decide how much of the site an entry gets:

- **`body`** gives it a page at `/log/<id>`, a line in the sitemap and an item
  in the feed. Without one it stays a line on the timeline.
- **`feature`** makes it a card rather than a line, and gives it a
  `view-transition-name`, so clicking it morphs into its page.

Two more control the writing:

- **`needs: 'a note'`** puts it on `/backstage` and shows an *unwritten* chip.
  Delete the line when it is done.
- **`draft: true`** removes it from the site entirely, without deleting it.

### Company marks on the resume

Every role on `/work` shows a small tinted square. With no logo it is a monogram
of the company's initials, which is what all of them are at the moment and is a
finished default rather than a gap.

`app/data/brands.js` is the registry: a label, a monogram, and optionally a
`logo`. A role names its row with `brand: 'kajabi'`; a role with no row still
gets a mark derived from the company name, so nothing there is required.

To use a real mark, drop an SVG into `app/icons/logos/` and name it on the row:

```js
// app/icons/logos/heyo.svg
heyo: { label: 'Heyo', initials: 'HE', logo: 'heyo' },
```

The build compiles that directory into one `/logos.svg`, so a page fetches a
single file however many marks it shows. Every file needs a `viewBox`, should
draw with `fill="currentColor"` so it takes the color of the text beside it in
both themes and in print, and should be the square part of a brand rather than a
wide wordmark. `app/icons/logos/README.md` has the longer version, including the
trademark note.

### Adding a picture

There are none at the moment, which is why the pages load instantly. To add one,
make `app/public/media/`, drop the file in, anything in `app/public/` is copied
to the site root as-is, and point an entry at it:

```js
image: {
  src: '/media/amiga.jpg',
  alt: 'An Amiga 500 on a desk, next to a stack of floppy disks.',
  width: 1600,
  height: 1067,
  caption: 'Optional, shown underneath in small type.',
},
```

`width` and `height` are the file's real pixel dimensions and they are not
optional: without them the paragraph below the picture jumps when it loads. The
same field works on a project in `app/data/projects.js`.

### Adding a chapter

Add an object to `app/data/eras.js` with a slug, a range that does not overlap
the others, three colors and a texture name, then add a block for that texture
in `app/styles/eras.css`. Nothing else needs editing: the front page, the
chapter index, the era pages, the progress bar and the sitemap all read the same
array.

## Before you send anyone the link

1. Work `/backstage` down to nothing.
2. Set `inProgress: false` in `app/data/site.js`, which removes the note in the
   footer.
3. Check `metadataBase` and `sitemap.hostname` in `transclude.config.js` are the
   domain you are actually deploying to.
4. `npm run check && npm run build`.

## The stylesheet

`app/styles/global.css` imports the rest in the order the cascade needs them.
Only the reset is in a `@layer`; everything after it is unlayered, because a
layered rule always loses to an unlayered one and the framework hoists custom
element styles unlayered.

| File | What it decides |
| --- | --- |
| `tokens.css` | Type scale, spacing, color, the registered custom properties. |
| `base.css` | Bare elements and `.prose`. |
| `layout.css` | The shell, and the one named grid the whole site sits on. |
| `timeline.css` | The flow: chapters, the spine, the scroll-driven instruments. |
| `eras.css` | Seven palettes and their CSS textures. |
| `pages.css` | Everything that is not the timeline. |
| `motion.css` | View transitions, and what reduced motion turns off. |
| `print.css` | `/work`, on paper. |

No web font is loaded. Three system stacks do the work, and
`--font-display` / `--font-body` in `tokens.css` are the two places to change if
you add one.

## Deploying

`npm run build` writes `dist/`. `dist/static` holds every prerendered page and
any static host will serve it, but `/` is server-rendered, so the deployment
that serves the whole site is `npm start` (Node, Bun or Deno) or a worker built
on `dist/server`. See
[the deployment docs](https://transclude.dev/docs) for the runtimes.
