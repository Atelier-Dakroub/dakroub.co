// The shapes every data file in this directory is written against.
//
// Nothing here runs. It exists so `npm run check` knows an entry has an
// optional `body` and a required `year`, which is what makes a misspelled field
// in a template an error instead of an empty string on the page.

/**
 * Which layer of the story an entry belongs to. The filter row on the timeline
 * is exactly this list, so adding one here adds a filter.
 *
 * @typedef {'machine'|'play'|'learn'|'make'|'work'|'tech'|'world'} Track
 */

/**
 * One moment. A machine that arrived, a game that took a winter, a thing that
 * was built, a job, or the world going past outside the window.
 *
 * `body` is the difference between a line on the timeline and a page of its
 * own: an entry with one gets `/log/<id>`, an entry without stays a line.
 *
 * @typedef {object} Entry
 * @property {string} id unique, lowercase, dashes. It is the URL.
 * @property {number} year
 * @property {string} [date] `YYYY-MM` or `YYYY-MM-DD`, to order within a year
 * @property {number|string} [until] the last year, or `'now'` for something still going
 * @property {Track} track
 * @property {string} title
 * @property {string} [dek] one line, under the title, on the timeline
 * @property {string} [where] a place, a company, a room
 * @property {string[]} [tags] free vocabulary, filterable
 * @property {string} [body] HTML. Yours, not a visitor's: it is not escaped.
 * @property {Array<{ label: string, value: string }>} [spec] the machine's card
 * @property {Array<{ href: string, label: string }>} [links]
 * @property {Media} [image]
 * @property {boolean} [feature] break the grid for this one
 * @property {boolean} [draft] true keeps it out of the site entirely
 * @property {string} [needs] a note to yourself. Listed at /backstage until it goes
 */

/**
 * A picture, with the two numbers that stop the page moving when it loads.
 *
 * Files go in `app/public/media/`, which is copied to the site root as-is, so
 * `app/public/media/c64.jpg` is `src: '/media/c64.jpg'`.
 *
 * @typedef {object} Media
 * @property {string} src
 * @property {string} alt what it shows, for somebody who cannot see it
 * @property {number} width the file's real pixel width
 * @property {number} height the file's real pixel height
 * @property {string} [caption] shown under it, in small type
 */

/**
 * A chapter. Seven of them cover fifty years, and each one owns a palette, a
 * texture and a page.
 *
 * @typedef {object} Era
 * @property {string} slug the URL under `/era/`
 * @property {number} from
 * @property {number} to
 * @property {string} name
 * @property {string} kicker the two or three words above the name
 * @property {string} dek one sentence
 * @property {string} [body] HTML, the era page's opening essay
 * @property {boolean} dark true when the chapter is light-on-dark
 * @property {string} texture a key `styles/eras.css` styles on
 * @property {string} bg an oklch color
 * @property {string} ink an oklch color
 * @property {string} accent an oklch color
 */

/**
 * A job. `/work` is this list and nothing else, so it is the resume.
 *
 * @typedef {object} Role
 * @property {string} id
 * @property {string} title
 * @property {string} org
 * @property {string} [url]
 * @property {string} where
 * @property {string} from `YYYY` or `YYYY-MM`
 * @property {string} to `YYYY`, `YYYY-MM`, or `present`
 * @property {string} [summary] one paragraph, plain text
 * @property {string[]} [did] what you did, one line each
 * @property {string[]} [stack]
 * @property {string} [brand] a row in `app/data/brands.js`. Without one the role
 *   shows a monogram of the organization's initials instead.
 * @property {boolean} [draft]
 * @property {string} [needs] a note to yourself, listed at /backstage
 */

/**
 * Something built, with enough room to explain it.
 *
 * @typedef {object} Project
 * @property {string} slug
 * @property {string} name
 * @property {string} dek
 * @property {number} year
 * @property {number} [until]
 * @property {string} [role]
 * @property {string[]} [stack]
 * @property {Array<{ href: string, label: string }>} [links]
 * @property {string} [body] HTML
 * @property {Array<{ label: string, value: string }>} [facts]
 * @property {Media} [image]
 * @property {boolean} [draft]
 * @property {string} [needs] a note to yourself, listed at /backstage
 */

export {};
