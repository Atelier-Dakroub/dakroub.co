// Twelve book covers from 1962 to 1978, rebuilt in the spring of 2017 out of
// nothing but Tachyons classes, and shown here next to the books.
//
// Each cover is a file in `covers/`: the bibliographic details, the scan of the
// original where one could be found, and the markup. The markup is the 2017
// markup, converted from Liquid to plain HTML and otherwise left alone,
// including the parts I would do differently now.
//
// This is assembled as a string rather than as an element, because an entry's
// `body` is injected as raw markup and never goes through the compiler, so a
// custom element in one would arrive as an empty unknown tag. Same reason
// `.prose figure` exists in `base.css`.

import { tachyons } from './covers/tachyons.js';

import africanArchitecture from './covers/african-architecture.js';
import crimeOfGalileo from './covers/crime-of-galileo.js';
import foundingOfNewSocieties from './covers/founding-of-new-societies.js';
import heideggerBeingAndTruth from './covers/heidegger-being-and-truth.js';
import jazzImprovisation from './covers/jazz-improvisation.js';
import selfAndOthers from './covers/self-and-others.js';
import situationEthics from './covers/situation-ethics.js';
import studyOfReligion from './covers/study-of-religion.js';
import theUncommitted from './covers/the-uncommitted.js';
import theoryOfColours from './covers/theory-of-colours.js';
import theoryOfJustice from './covers/theory-of-justice.js';
import theoryOfMorality from './covers/theory-of-morality.js';

/**
 * In the order they are shown, which is neither the order they were made nor
 * the order the books were published: it is the order that keeps two covers
 * doing the same trick apart.
 */
export const covers = [
  crimeOfGalileo,
  selfAndOthers,
  foundingOfNewSocieties,
  studyOfReligion,
  jazzImprovisation,
  theoryOfMorality,
  situationEthics,
  theUncommitted,
  africanArchitecture,
  theoryOfColours,
  theoryOfJustice,
  heideggerBeingAndTruth,
];

const escape = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * One cover: the book on the left, the page on the right, and a caption that
 * names the book rather than the design, because none of these editions credits
 * the person who drew it.
 */
const pair = (cover) => `
  <figure class="covers__pair">
    <div class="covers__scan">
      <img
        src="${cover.scan.src}"
        alt="${escape(cover.scan.alt)}"
        width="${cover.scan.width}"
        height="${cover.scan.height}"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="covers__art">${cover.art.trim()}</div>
    <figcaption>
      <b>${escape(cover.title)}</b>, ${escape(cover.author)}. ${escape(cover.imprint)}, ${cover.year}.
    </figcaption>
  </figure>`;

/** The layout. Everything else on the page is the site's own CSS. */
const layout = `
  .covers {
    display: grid;
    gap: var(--space-xl);
    margin-block: var(--space-l);
  }

  /* The pair is the argument, so it gets more width than the measure, the way
     the five screenshots on the colophon do. */
  @media (width >= 64rem) {
    .covers {
      margin-inline: calc(var(--rail) * -1) -4rem;
    }
  }

  .covers__pair {
    display: grid;
    gap: var(--space-s);
    margin: 0;
    align-items: start;
  }

  @media (width >= 34rem) {
    .covers__pair {
      grid-template-columns: 1fr 1fr;
    }
  }

  .covers__scan img {
    inline-size: 100%;
    block-size: auto;
    border: 1px solid var(--rule);
    border-radius: var(--radius);
    background: var(--wash, var(--paper));
  }

  /* The recreation sits on white whatever the chapter's palette is doing, the
     way it did in the browser in 2017.

     The font is the other half of that. Seven of these twelve name no font at
     all: the old site set sans-serif and black on its body element and every
     cover inherited them, so a cover dropped into a page whose running text is
     a serif sets its titles in the wrong face. This is that body rule, and it
     is the Tachyons stack rather than this site's, because the covers were
     drawn against it. */
  .covers__art {
    container-type: inline-size;
    background: #fff;
    border: 1px solid var(--rule);
    border-radius: var(--radius);
    overflow: hidden;
    color: #000;
    font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue',
      helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;
    /* 16px of a 768px cover, so text with no size class on it scales with the
       column like everything else, instead of sitting at the page's own size. */
    font-size: 2.0833cqi;
    line-height: normal;
    font-synthesis: none;
  }

  /* A cover is bare elements with classes on them, and this site styles bare
     elements: headings get the display serif, its weight, its tracking and
     balanced wrapping, and a blockquote gets a rule down its left. None of that
     existed in the browser these were drawn in. Put those elements back to
     what a browser does on its own and let Tachyons say the rest, which it
     does from the block below this one, so anything a cover actually asked for
     still wins. */
  .covers__art :where(h1, h2, h3, h4, h5, h6) {
    font-family: inherit;
    font-weight: bold;
    line-height: normal;
    letter-spacing: normal;
    text-wrap: wrap;
  }

  .covers__art :where(h1) {
    font-size: 2em;
  }
  .covers__art :where(h2) {
    font-size: 1.5em;
  }
  .covers__art :where(h3) {
    font-size: 1.17em;
  }
  .covers__art :where(h4) {
    font-size: 1em;
  }
  .covers__art :where(h5) {
    font-size: 0.83em;
  }
  .covers__art :where(h6) {
    font-size: 0.67em;
  }

  .covers__art :where(p) {
    text-wrap: wrap;
  }

  .covers__art :where(blockquote) {
    margin: 1em 40px;
    padding: 0;
    border: 0;
    font-style: normal;
  }

  .covers figcaption {
    grid-column: 1 / -1;
    margin-block-start: var(--space-3xs);
    font-family: var(--font-mono);
    font-size: var(--step--2);
    color: var(--era-faint, var(--faint));
    max-inline-size: none;
  }
`;

/**
 * The stylesheet the gallery needs, as one block. The Tachyons half is scoped
 * to `.covers__art`, so those 377 class names exist inside a cover and nowhere
 * else on the site.
 */
export const coversCss = `${layout}
  @scope (.covers__art) {
${tachyons}
  }
`;

/** The gallery, as the markup an entry body can hold. */
export const coversGallery = `<style>${coversCss}</style>
<div class="covers">${covers.map(pair).join('')}
</div>`;
