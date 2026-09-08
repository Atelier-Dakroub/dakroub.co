// Who this is, and the handful of strings that appear on every page.
// Start here when something needs changing.

export const site = {
  name: "Joe Dakroub",
  domain: "dakroub.co",
  origin: "https://dakroub.co",

  /** Under the name, everywhere. Keep it to one line. */
  role: "Senior Full Stack Engineer",

  /** The one-sentence version, used in <meta name="description"> and on /about. */
  tagline:
    "Twenty years of production interfaces and design systems, and fifty at a screen. React, React Native and TypeScript, with design and engineering treated as one job.",

  /** Two or three sentences. /about opens with this. */
  intro: `I have been putting things on screens since the machine only had one color.
    Twenty years of that has been professional, design systems for Netflix internal
    tooling and Apple Music, a design system at Kajabi, and now React Native and
    Next.js at Heyo. I design and I build, and I have never found the line between
    the two useful.`,

  email: "joe@dakroub.co",

  /** Shown on /work, which is the page that prints as a resume. Delete the line
      if you would rather a public page did not carry a phone number. */
  phone: "248-802-6433",

  location: "Phoenix, Arizona",

  /**
   * Shown in the footer and on /about. Delete the ones you do not use rather
   * than leaving an empty href.
   */
  elsewhere: [
    { label: "GitHub", href: "https://github.com/joe-dakroub" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/joe-dakroub/" },
    { label: "Personal", href: "https://dakroub.co" },
    { label: "transclude", href: "https://transclude.dev" },
  ],

  /**
   * True while the site still has placeholder entries in it. It puts an honest
   * note in the footer and turns on /backstage's nagging.
   *
   * Set it to false before you send anyone the link.
   */
  inProgress: true,
};

/** The main navigation, in order. `/` is the timeline and is always first. */
export const nav = [
  { href: "/", label: "Timeline", hint: "Fifty years, one scroll" },
  { href: "/work", label: "Work", hint: "The resume" },
  {
    href: "/projects",
    label: "Projects",
    hint: "Selected, with the reasoning",
  },
  { href: "/about", label: "About", hint: "The short version" },
  { href: "/colophon", label: "Colophon", hint: "How this site is made" },
];
