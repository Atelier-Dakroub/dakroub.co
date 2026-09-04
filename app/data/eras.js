/** @typedef {import('./types.js').Era} Era */

/**
 * Seven chapters over fifty years. The ranges do not overlap and they leave no
 * gap, because `eraOf(year)` has to answer for every year on the timeline.
 *
 * Each one carries its own three colors. `styles/eras.css` reads them off the
 * section as custom properties, so a chapter is themed by data rather than by
 * seven hand-written blocks of CSS.
 *
 * The arc is deliberate: dark room, dark room, then the lights come on for the
 * beige years and the web, and the lights go back down for the present.
 *
 * @type {Era[]}
 */
export const eras = [
  {
    slug: 'green-phosphor',
    from: 1976,
    to: 1983,
    kicker: 'Chapter one',
    name: 'Green Phosphor',
    dek: 'A cursor blinking in a dark room, and a machine that did exactly what you typed and nothing else.',
    dark: true,
    texture: 'scanlines',
    bg: 'oklch(11% 0.02 150)',
    ink: 'oklch(94% 0.15 148)',
    accent: 'oklch(86% 0.16 80)',
    body: `
      <p>Computers arrive in houses. Not many houses, and not for any reason
      anybody can defend to a spouse, but they arrive. The Apple II, the
      Commodore PET and the TRS-80 all ship in 1977, and for the first time a
      person can own the whole machine: the schematic is in the box.</p>

      <p>The screen is one color and the color is green. There is no mouse and
      no window. There is a prompt, and the prompt is a genuine question. The
      first thing anyone does with a home computer is type at it until it
      answers, and the second thing is play a game made entirely of sentences.</p>
    `,
  },
  {
    slug: 'eight-bits',
    from: 1984,
    to: 1990,
    kicker: 'Chapter two',
    name: 'Eight Bits and a Cassette',
    dek: 'The years you typed a program in from the back of a magazine, ran it, and it was yours.',
    dark: true,
    texture: 'dither',
    bg: 'oklch(21% 0.085 268)',
    ink: 'oklch(94% 0.04 268)',
    accent: 'oklch(90% 0.13 348)',
    body: `
      <p>The 64K machines take over: the Commodore 64 outsells everything, the
      Macintosh arrives with a mouse and a bitmap, and the Amiga does colors the
      others cannot spell. Games stop being sentences and start being pictures,
      but the pictures are made of a few hundred pixels and everyone can see
      exactly how.</p>

      <p>This is the decade that made programmers by accident. BASIC boots with
      the machine. A magazine prints four pages of <code>DATA</code> statements
      and you spend a Saturday typing them, and when line 340 has a typo you
      have to understand line 340. Nobody called it learning to code.</p>
    `,
  },
  {
    slug: 'beige-box',
    from: 1991,
    to: 1996,
    kicker: 'Chapter three',
    name: 'The Beige Box and the Modem',
    dek: 'A tower under the desk, a phone line going somewhere else, and a compiler that took the afternoon.',
    dark: false,
    texture: 'bevel',
    bg: 'oklch(95% 0.014 88)',
    ink: 'oklch(15% 0.012 88)',
    accent: 'oklch(40% 0.17 262)',
    body: `
      <p>Everything is the color of an office. The machine is a beige tower, the
      monitor is a beige box on top of it, and the sound it makes at midnight is
      a modem finding a bulletin board two area codes away.</p>

      <p>Then, quietly, in the middle of a decade about CD-ROMs and 3D cards, the
      web shows up. Mosaic in 1993, Netscape in 1994, and by 1996 there is a
      specification for styling a document and a plugin that ignores it. Both of
      those turn out to matter for the next thirty years.</p>
    `,
  },
  {
    slug: 'view-source',
    from: 1997,
    to: 2003,
    kicker: 'Chapter four',
    name: 'View Source',
    dek: 'The web arrives with its guts showing, and a generation learns the craft from a stranger’s markup.',
    dark: false,
    texture: 'grid',
    bg: 'oklch(97.5% 0.005 250)',
    ink: 'oklch(19% 0.02 262)',
    accent: 'oklch(44% 0.2 266)',
    body: `
      <p>There is no other medium where the finished work ships with its own
      source. You right-click, you read somebody's nested tables and their
      single-pixel spacer GIFs, and you take what you need. Every professional
      working on the web today was taught by a stranger who never knew it.</p>

      <p>The money arrives and leaves again. What survives the crash is the
      argument that a document should be marked up for what it means and styled
      separately, which sounds obvious now and was a fight then.</p>
    `,
  },
  {
    slug: 'standards',
    from: 2004,
    to: 2010,
    kicker: 'Chapter five',
    name: 'Standards, and a Phone',
    dek: 'Two arguments settled at once: the browsers start agreeing, and the computer goes in your pocket.',
    dark: false,
    texture: 'gloss',
    bg: 'oklch(97% 0.015 232)',
    ink: 'oklch(21% 0.02 252)',
    accent: 'oklch(43% 0.15 155)',
    body: `
      <p>Firefox breaks the monopoly, the CSS Zen Garden proves the point in
      pictures, and the Web Standards Project wins the argument it started in a
      basement. For a few years the job is legible: semantic markup, one
      stylesheet, progressive enhancement, and a library called jQuery that
      papers over the last of the disagreements.</p>

      <p>Then a phone ships with a real browser in it and the whole surface
      changes shape under everyone at once.</p>
    `,
  },
  {
    slug: 'responsive',
    from: 2011,
    to: 2018,
    kicker: 'Chapter six',
    name: 'Responsive Everything',
    dek: 'One layout for every screen, one component model for every team, and a build step for both.',
    dark: false,
    texture: 'flat',
    bg: 'oklch(97% 0.004 252)',
    ink: 'oklch(20% 0.006 252)',
    accent: 'oklch(46% 0.2 27)',
    body: `
      <p>Ethan Marcotte names it in 2010 and by 2012 it is simply how sites are
      built. Design gets a systems vocabulary: tokens, components, a library
      and a documentation site. Engineering gets a toolchain deep enough that
      new people spend their first week on it.</p>

      <p>Everything gained something and everything cost something. Flexbox and
      Grid make layout a solved problem. The bundle that delivers them makes the
      first paint a project.</p>
    `,
  },
  {
    slug: 'platform',
    from: 2019,
    to: 2026,
    kicker: 'Chapter seven',
    name: 'Back to the Platform',
    dek: 'The browser grew the features we had been shipping megabytes of JavaScript to fake.',
    dark: true,
    texture: 'mesh',
    bg: 'oklch(22% 0.045 242)',
    ink: 'oklch(96% 0.008 266)',
    accent: 'oklch(87% 0.11 196)',
    body: `
      <p>Container queries. Cascade layers. <code>:has()</code>. Scroll-driven
      animations with no timeline library. View transitions across a real page
      navigation. Every one of these replaced a dependency, and most of them
      arrived in every browser inside the same year.</p>

      <p>Which makes this a good decade to have started in 1980. The instinct
      the green screen taught, that the machine will do what you ask if you can
      say it precisely, is suddenly the fastest way to build for the web again.
      This site is the argument, and it is also the proof: the page you are
      reading ships no JavaScript.</p>
    `,
  },
];

/** @type {Record<string, Era>} */
export const eraBy = Object.fromEntries(eras.map((era) => [era.slug, era]));

/** The first year and the last, so the timeline knows how long it is. */
export const span = { from: eras[0].from, to: eras[eras.length - 1].to };

/**
 * The chapter a year falls in. Every year in `span` has one.
 *
 * @param {number} year
 * @returns {Era}
 */
export function eraOf(year) {
  return eras.find((era) => year >= era.from && year <= era.to) ?? eras[eras.length - 1];
}
