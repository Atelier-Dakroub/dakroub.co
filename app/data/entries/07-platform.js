// 2019 – present
//
// The last file. Add this year's entries at the bottom and the timeline picks
// them up: nothing else needs editing.

/** @typedef {import('../types.js').Entry} Entry */

/** @type {Entry[]} */
export const entries = [
  {
    id: "dockyard",
    year: 2019,
    until: 2020,
    track: "work",
    title: "DockYard",
    dek: "Design systems for Netflix internal tooling and Apple Music.",
    tags: ["design systems", "ember", "react", "accessibility"],
    feature: true,
    body: `
      <p>Consulting on design systems for two companies whose interfaces a very
      large number of people touch every day. One of them is a set of internal
      tools nobody outside Netflix will ever see, and which therefore has to be
      good for the people who cannot go and choose something else.</p>

      <p>The work ran across Ember.js, React and Web Components, and the
      through-line was accessibility and reuse. A component that is only correct
      in one framework is not a design system, it is a folder.</p>
    `,
  },
  {
    id: "edge-chromium",
    year: 2019,
    date: "2019-12",
    track: "tech",
    title: "Edge moves to Chromium",
    dek: "The last independent engine outside Gecko and WebKit stops. Fewer bugs to write around, and one fewer opinion in the room.",
    tags: ["browser"],
  },
  {
    id: "kajabi",
    year: 2020,
    until: 2022,
    track: "work",
    title: "Kajabi",
    dek: "The Kajabi Design System, its Storybook documentation, and the adoption problem underneath both.",
    tags: ["design systems", "storybook", "wcag", "react"],
    feature: true,
    body: `
      <p>Two years on the Kajabi Design System with designers, engineers and
      product managers, evolving it to serve every stakeholder team rather than
      only the one that funded it.</p>

      <p>What moved adoption was not the components. It was the documentation:
      Storybook entries thorough enough that a team could answer its own question
      at eleven at night without opening a thread. Write the documentation and
      the library gets used. Ship the library alone and it gets forked.</p>

      <p>All of it built to WCAG, in Web Components and in React and TypeScript,
      because a design system is the cheapest place in a company to make
      accessibility the default instead of the exception.</p>
    `,
  },
  {
    id: "remote",
    year: 2020,
    date: "2020-03",
    track: "world",
    title: "Everyone goes home",
    dek: "The whole industry becomes distributed in about a week, and a lot of assumptions about how design work happens turn out to be habits.",
    tags: ["work"],
  },
  {
    id: "apple-silicon",
    year: 2020,
    date: "2020-11-10",
    track: "tech",
    title: "Apple Silicon",
    dek: "The M1. A laptop that compiles faster than the tower and runs all day on a battery.",
    tags: ["apple", "hardware"],
  },
  {
    id: "gpt-3",
    year: 2020,
    date: "2020-06",
    track: "tech",
    title: "GPT-3",
    dek: "The first model that could hold a paragraph together. Two years before anyone outside the field noticed.",
    tags: ["ai"],
  },
  {
    id: "container-queries",
    year: 2021,
    track: "tech",
    title: "Container queries get specified",
    dek: "A component asks about the space it is in, not the space the window is in. The last big lie in responsive design gets fixed.",
    tags: ["css", "standards"],
  },
  {
    id: "freelance",
    year: 2022,
    until: 2025,
    track: "work",
    title: "Freelance, and choosing the stack",
    dek: "Three years of client work, and a social platform built out of Deno, SQLite and LitElement because it could be.",
    tags: ["deno", "lit", "web components", "peer-to-peer", "performance"],
    feature: true,
    body: `
      <p>Architecture, design, prototyping and implementation, end to end, for
      clients who needed one person rather than a team. The Timothy McAllister
      marketing site was Statamic CMS, TailwindCSS and vanilla JavaScript, and
      targeted front-end work took its performance up by over 150% while cutting
      its bandwidth in half.</p>

      <p>The other half of those years was Hyperspaces: a social network with no
      server in it at all. Peers found each other through BitTorrent trackers and
      then talked directly to one another over WebRTC, with
      <a href="/projects/hyperspaces">Trystero</a> making the introductions. Deno,
      LitElement, Web Components, no framework. It never launched.</p>

      <p>That project is the direct ancestor of
      <a href="/log/transclude">Transclude</a>. It is where I stopped arguing
      that the platform had caught up and started shipping as though it had.</p>
    `,
  },
  {
    id: "has-and-layers",
    year: 2022,
    track: "tech",
    title: ":has(), @layer, and container queries all ship",
    dek: "A parent selector, a way to order the cascade on purpose, and per-component breakpoints. One year.",
    tags: ["css", "standards"],
    feature: true,
    body: `
      <p>Three things CSS had been told it could never have arrived inside twelve
      months. <code>:has()</code> in particular had been refused for a decade on
      performance grounds, and then the engines worked out how to do it.</p>
      <p>This is the year I stopped reaching for a framework first. Not out of
      nostalgia. Because the platform had quietly become the shorter path.</p>
    `,
  },
  {
    id: "chatgpt",
    year: 2022,
    date: "2022-11-30",
    track: "tech",
    title: "ChatGPT",
    dek: "A research preview with a text box. It is the fastest a piece of software has ever reached everybody.",
    tags: ["ai"],
  },
  {
    id: "view-transitions",
    year: 2023,
    date: "2023-03",
    track: "tech",
    title: "The View Transitions API",
    dek: "The browser animates between two states of a document by itself. The trick a decade of single-page apps existed to provide.",
    tags: ["css", "standards"],
    feature: true,
    body: `
      <p>Take a screenshot of the old state, take one of the new state, and
      animate the named parts between them. Chrome shipped it for same-document
      transitions in 2023 and for real page navigations in 2024.</p>
      <p>Everything about the way this site moves depends on it. Every link you click here
      is an ordinary document request that throws away the page and parses a new
      one, and it still morphs, because the browser does the morphing. There is
      no router.</p>
    `,
  },
  {
    id: "scroll-driven-animations",
    year: 2023,
    date: "2023-07",
    track: "tech",
    title: "Scroll-driven animations",
    dek: "animation-timeline: view(). The effect library everybody shipped becomes two lines of CSS running off the main thread.",
    tags: ["css", "standards"],
    body: `
      <p>Every reveal, every parallax and every progress indicator on this page is
      a CSS animation attached to a scroll or a view timeline. No scroll
      listener, no IntersectionObserver, no requestAnimationFrame, and no
      layout thrash, because none of it runs in JavaScript at all.</p>
    `,
  },
  {
    id: "anchor-positioning",
    year: 2024,
    date: "2024-05",
    track: "tech",
    title: "Anchor positioning, and the popover attribute",
    dek: "Tooltips, menus and dialogs stop needing a positioning library and a focus trap. Both are in the markup now.",
    tags: ["css", "html", "standards"],
  },
  {
    id: "cross-document-view-transitions",
    year: 2024,
    date: "2024-06",
    track: "tech",
    title: "Cross-document view transitions",
    dek: "Two separate HTML documents, one continuous animation, zero JavaScript. Multi-page apps get their last missing feature.",
    tags: ["css", "standards"],
  },
  {
    id: "domxy",
    year: 2025,
    date: "2025-01",
    track: "make",
    title: "domxy",
    dek: "A hundred and eleven lines that make every HTML element a function. One Proxy object, no build step, and nothing to update when the platform grows a new tag.",
    tags: ["javascript", "dom", "standards"],
    feature: true,
    links: [
      { href: "https://domxy.js.org", label: "domxy.js.org" },
      { href: "https://github.com/joe-dakroub/domxy", label: "Source" },
    ],
    spec: [
      { label: "Source", value: "111 lines" },
      { label: "Minified", value: "1.5 KB" },
      { label: "Dependencies", value: "None" },
      { label: "Build step", value: "None" },
    ],
    body: `
      <p>Building DOM in JavaScript has been unpleasant for long enough that
      most of the industry concluded the fix was to invent a syntax and compile
      it. domxy is the smallest argument I could write that you do not have to.
      Every element is a function, it returns real nodes, and the whole library
      is one <code>Proxy</code>.</p>

      <p>Reading any property off that Proxy returns a factory for a tag of that
      name, which is why it is a hundred and eleven lines and why it will never
      need updating when the platform grows a new element. SVG goes through
      <code>createElementNS</code> on its own, a PascalCase name becomes a
      custom element, and it decides between an attribute and a property by
      asking the DOM instead of keeping a list.</p>

      <p>The part I would defend in a review is that you have to destructure the
      elements you intend to use, and it throws if you reach for one you did
      not. That looks like friction. It means the top of the file is a manifest
      of every tag the module builds, doing the same job an import does. A file
      that can conjure any element out of nowhere reads like magic the day you
      write it and like a search problem a year later.</p>

      <p>It exists because <a href="/log/transclude">Transclude</a> takes the
      document and this takes what is left: the few places where JavaScript
      genuinely has to make a node. A hundred lines you can read in full before
      you adopt them is the entire pitch.</p>
    `,
  },
  {
    id: "heyo",
    year: 2025,
    track: "work",
    title: "Heyo",
    dek: "Senior full stack: React Native and Next.js out of one TypeScript codebase, with Claude Code in the loop every day.",
    tags: ["react native", "nextjs", "typescript", "claude code"],
    feature: true,
    body: `
      <p>Web and mobile from a single TypeScript codebase. Expo and React Native
      on one side, Next.js on the other, with the backend in Nest.js and Prisma
      over PostgreSQL, and a shared component library in ShadCN, TailwindCSS and
      Emotion holding the design language together across both.</p>

      <p>Two of them so far: an internal platform for
      <a href="https://flagshipfinancial.com">Flagship Financial</a>, and a
      multi-platform app for Tillster. A mortgage lender, twenty years after
      <a href="/log/quicken-loans">Quicken Loans</a>. Not planned, and the sort
      of thing that happens if you stay in one industry long enough for it to
      come back round.</p>

      <p>It is also the first job where an AI agent is part of the daily workflow
      rather than an experiment beside it. Claude Code writes with me, and the
      skills that turn out to matter are the old ones: describing a system
      precisely enough that something else can act on it, and reading a diff
      properly.</p>
    `,
  },
  {
    id: "transclude",
    year: 2026,
    track: "make",
    title: "transclude",
    dek: "An HTML-first server framework. A page is an .html file, the directory tree is the route table, and any fragment of a page is a URL of its own.",
    tags: ["open source", "html", "hypermedia", "framework"],
    feature: true,
    spec: [
      { label: "Package", value: "@transclude/core" },
      { label: "License", value: "MIT" },
      { label: "Runtimes", value: "Node, Bun, Deno, workerd" },
      { label: "Client JavaScript", value: "None, by default" },
    ],
    links: [
      { href: "https://transclude.dev", label: "transclude.dev" },
      {
        href: "https://github.com/transclude-dev/transclude",
        label: "Source on GitHub",
      },
      {
        href: "https://www.npmjs.com/package/@transclude/core",
        label: "@transclude/core on npm",
      },
    ],
    body: `
      <p>Four and a half decades after a machine booted to a prompt and waited
      for me to type something it would do exactly, I wrote a web framework with
      the same manners. HTML is the product. A page is an <code>.html</code> file. The
      directory tree is the route table. Any element marked
      <code>fragment</code> has a URL of its own, so the part and the whole can
      never drift apart, because they are compiled from the same markup.</p>

      <p>It ships no client JavaScript by default and it runs unchanged on Node,
      Bun, Deno and workerd. It is not a reaction against anything. It is what
      the platform's own features add up to once <code>:has()</code>, container
      queries, view transitions and scroll-driven animations are all just there.</p>

      <p>This site is built with it, and so is
      <a href="/log/mcallister">timothymcallister.com</a>, which runs on
      Cloudflare Workers and is the first thing on it that somebody else depends
      on. <a href="/colophon">The colophon</a> is the accounting of
      how.</p>
    `,
  },
  {
    id: "this-site",
    year: 2026,
    track: "make",
    title: "This page",
    dek: "Fifty years of computing as one scroll, built on the framework in the entry above it, shipping zero bytes of JavaScript.",
    tags: ["html", "css", "transclude"],
    feature: true,
    links: [{ href: "/colophon", label: "How it is built" }],
    body: `
      <p>A portfolio is usually a grid of screenshots and a list of logos. This
      one is an argument instead, and the argument is that the work is
      continuous: the person who mapped a dungeon on graph paper in 1985 and the
      person who wrote a compiler for HTML templates in 2026 are solving the same
      problem, which is how to make a system legible.</p>

      <p>Every effect here is a web standard. The chapters recolor the page as
      you pass through them, the year counts up as you scroll, entries rise into
      view, and the page morphs when you click through to a detail. None of that
      is JavaScript. All of it degrades to a readable document if any of it
      fails.</p>
    `,
  },
  {
    id: "looking",
    year: 2026,
    date: "2026-09",
    track: "work",
    title: "Open to what is next",
    dek: "Staff engineer, design engineer, or senior full stack. Phoenix, Arizona, and happy to be remote.",
    feature: true,
    links: [
      { href: "mailto:joe@dakroub.co", label: "joe@dakroub.co" },
      { href: "/work", label: "The resume" },
    ],
    body: `
      <p>Twenty years of production interfaces. Design systems for Netflix
      internal tooling and Apple Music, a design system at Kajabi, a PHP
      framework at Quicken Loans that is still running, three years of my own
      studio, and a web framework of my own.</p>

      <p>The through-line is that I have never worked anywhere that let me be
      only a designer or only an engineer, and I have stopped applying for jobs
      that ask me to pick. What I want next is the staff-shaped version of that:
      owning the interface layer of a product, the system underneath it, and the
      argument about what it should be.</p>
    `,
  },
  {
    id: "ukraine",
    year: 2022,
    date: "2022-02-24",
    track: "world",
    title: "Russia invades Ukraine",
    dek: "A land war in Europe, followed on phones, in vertical video, shot by the people inside it.",
    tags: ["news"],
  },
];
