// Selected work, with room to explain it. `/projects` lists these and
// `/projects/<slug>` is one of them.
//
// A project with `draft: true` is not built and its URL 404s in production.

/** @typedef {import('./types.js').Project} Project */

/** @type {Project[]} */
export const projects = [
  {
    slug: "transclude",
    name: "transclude",
    dek: "A web framework where HTML is the product, not the output format.",
    year: 2026,
    role: "Design, architecture, implementation, documentation",
    stack: ["JavaScript", "parse5", "jsep", "Hono", "Vite"],
    facts: [
      { label: "Package", value: "@transclude/core" },
      { label: "License", value: "MIT" },
      { label: "Runtimes", value: "Node · Bun · Deno · workerd" },
      { label: "Client JavaScript", value: "Zero, by default" },
      { label: "Examples deployed", value: "Eleven" },
      { label: "In production", value: "timothymcallister.com, on Cloudflare" },
    ],
    links: [
      { href: "https://transclude.dev", label: "transclude.dev" },
      { href: "https://github.com/transclude-dev/transclude", label: "Source" },
      {
        href: "https://todomvc.transclude.dev",
        label: "TodoMVC, with no JavaScript",
      },
    ],
    body: `
      <h2>The idea</h2>
      <p>Every framework of the last decade treats HTML as a compilation target.
      You write something else, JSX, a template DSL, a component function, and
      HTML comes out the far end. Transclude inverts that. The file you author
      <em>is</em> the page. It is valid HTML with a <code>&lt;script
      server&gt;</code> block at the top and a handful of attributes that mean
      something.</p>

      <h2>The part I am proudest of</h2>
      <p>Fragments. Mark any element with an <code>id</code> and a
      <code>fragment</code> attribute and it gains a URL of its own:
      <code>/notes?fragment=list</code> answers with exactly that element. The
      document and the fragment are compiled from the same markup, so a partial
      update can never drift from the page it is updating a part of. Most of the industry treats that class of bug as unavoidable.</p>

      <h2>It runs somebody else's site</h2>
      <p><a href="/projects/timothy-mcallister">timothymcallister.com</a> is built
      with it and deployed on Cloudflare Workers. A framework whose only user is
      its author's portfolio has not been tested by anything; this one has a
      client, a domain and an audience that turns up from concert programs.</p>

      <h2>What it refuses to do</h2>
      <p>There is no client-side router and nothing that swaps a fragment in.
      htmx, Turbo or six lines of <code>fetch</code> do that, and the framework
      stays out of it. Deciding what a tool will not do is most of the design
      work.</p>

      <h2>The compiler</h2>
      <p>parse5 for the parse, jsep for a deliberately small expression grammar, no assignment, no arrow functions, no object literals, and code generation
      that emits one render function per page plus one per fragment. The small
      grammar is what makes the next part possible: because every free name in a
      template is either a loop variable or a field of the loader's return
      value, TypeScript can check the template against the loader without the
      author writing a single type annotation.</p>
    `,
  },
  {
    slug: "this-site",
    name: "dakroub.co",
    dek: "Fifty years of computing as one scroll. The site you are on.",
    year: 2026,
    role: "Everything",
    stack: ["Transclude", "HTML", "CSS"],
    facts: [
      { label: "Client JavaScript", value: "0 bytes" },
      {
        label: "Pages",
        value: "Multi-page, with cross-document view transitions",
      },
      { label: "Motion", value: "CSS scroll-driven animations only" },
      { label: "Timeline entries", value: "Fifty years of them" },
    ],
    links: [{ href: "/colophon", label: "The colophon" }],
    body: `
      <h2>The brief I gave myself</h2>
      <p>A portfolio that is a document rather than a deck. It had to be the
      resume and the experience at once, it had to hold a fifty-year story
      without becoming a list, and it had to prove the framework underneath it by
      being the kind of site people assume needs a framework on the client.</p>

      <h2>What it demonstrates</h2>
      <ul>
        <li>Cross-document view transitions between real page loads, with no router.</li>
        <li>Scroll-driven animation: chapter reveals, a year counter and a progress spine, all in CSS.</li>
        <li>Filtering and search as hypermedia, every filtered view is a URL you can send to somebody.</li>
        <li>A seven-chapter theming system driven entirely by data and custom properties.</li>
        <li>Print styles good enough that <kbd>⌘P</kbd> on <a href="/work">/work</a> produces a resume.</li>
      </ul>
      <p><a href="/colophon">The colophon</a> has the honest version, including
      what does not work everywhere.</p>
    `,
  },
  {
    slug: "webgl-filters",
    name: "WebGL Filters",
    dek: "Six shader filters running on a live camera stream, written to learn WebGL. Two of them are the screens from the first two chapters of this site.",
    year: 2025,
    role: "Everything",
    stack: ["WebGL", "GLSL", "JavaScript", "Vite"],
    facts: [
      { label: "Why", value: "To learn WebGL properly" },
      { label: "Input", value: "Your camera, live" },
      { label: "Filters", value: "Six" },
      { label: "Framework", value: "None. Vite and vanilla JavaScript." },
    ],
    links: [
      {
        href: "https://joe-dakroub.github.io/app-filters/",
        label: "Try it, it uses your camera",
      },
      { href: "https://github.com/joe-dakroub/app-filters", label: "Source" },
    ],
    body: `
      <h2>Why</h2>
      <p>I had spent years next to WebGL without ever having to write any, which
      is a comfortable place to stay and a bad one to stay in. The reliable way
      out is to build something that will not work until you understand the
      thing. A shader either compiles and draws or it does not, and it does not
      care how many years you have been doing this.</p>

      <h2>What it does</h2>
      <p>It takes your camera feed and puts it through a fragment shader in real
      time. Six of them: ASCII art, dithering, duotone, enhancement, linocut and
      sketch. Press H to hide the interface, F for fullscreen, E to fade.</p>
      <p>A live video source is the honest test, because it removes every place
      to hide. There is no cached frame, no time to think between frames, and no
      still image chosen because it flattered the effect. It is thirty frames a
      second of whatever is actually in front of the lens.</p>

      <h2>The two that are not arbitrary</h2>
      <p>ASCII and dither are on that list on purpose. They are
      <a href="/era/green-phosphor">the first screen I ever used</a> and
      <a href="/era/eight-bits">the second one</a>: characters standing in for a
      picture because there were no pixels to spare, and two colors pretending
      to be more because there was no palette. Both were constraints nobody
      chose. Reimplementing them as shaders, on a machine with more graphics
      capability in its browser than every computer in the first three chapters
      of this site combined, is the closest thing to a joke I can tell with a
      GPU.</p>

      <h2>What I took from it</h2>
      <p>Shaders make you think about the problem the way the hardware does.
      Every pixel is computed independently, with no knowledge of its
      neighbours except what you go and fetch, and no loops over the image
      because there is no image, only this one point. It is a genuinely
      different shape of thinking from anything on the rest of this page, and
      going and getting it is most of why the project exists.</p>
    `,
  },
  {
    slug: "domxy",
    name: "domxy",
    dek: "A 111-line library for building HTML and SVG in JavaScript. Every element is a function, there is no build step, and it is one Proxy object.",
    year: 2025,
    role: "Everything",
    stack: ["JavaScript", "ES Modules"],
    facts: [
      { label: "Source", value: "111 lines" },
      { label: "Minified", value: "1.5 KB" },
      { label: "Build step", value: "None" },
      { label: "Dependencies", value: "None" },
      { label: "License", value: "The Unlicense" },
    ],
    links: [
      { href: "https://domxy.js.org", label: "domxy.js.org" },
      { href: "https://github.com/joe-dakroub/domxy", label: "Source" },
    ],
    body: `
      <h2>The whole idea</h2>
      <p>Building DOM in JavaScript has been unpleasant for so long that most of
      the industry decided the answer was to invent a syntax and compile it.
      domxy is the argument that you do not need to. Every element is a
      function, and the functions do not exist until you ask for one:</p>
      <pre><code>const { div, form, input, label } = domxy

form({ dataController: "hello" },
  div({ class: "form-group" },
    label({ for: "name" }, "Name"),
    input({ id: "name", type: "text", placeholder: "enter a name" }),
  ),
)</code></pre>
      <p>That is not a template, a transform, or a virtual anything. It returns
      real DOM nodes, which you append.</p>

      <h2>How it is 111 lines</h2>
      <p>It is a single <code>Proxy</code>. Reading any property off the object
      returns an element factory for that name, so the library never enumerates
      the HTML element list and never needs updating when the platform grows a
      new tag. The rest is the details that make it feel native: SVG elements go
      through <code>createElementNS</code> automatically, a PascalCase name
      becomes a kebab-case custom element, so <code>SlButton</code> gives you
      <code>&lt;sl-button&gt;</code>, and attribute names are separated from
      properties by asking the DOM which is which rather than by keeping a
      list.</p>

      <h2>The decision I would defend</h2>
      <p>You must destructure the elements you intend to use, and it throws if
      you reach for one you did not. That looks like friction and it is the
      point. The line at the top of the file is a manifest of every tag the
      module builds, in the same position and doing the same job as an import.
      A file that can conjure any element out of the air reads like magic on
      the day you write it and like a search problem eighteen months later.</p>

      <h2>Where it sits</h2>
      <p>domxy is for the case where the page is already server-rendered and one
      part of it has to be built at runtime. It is a hundred lines you can read
      in full before adopting, which is the entire pitch.
      <a href="/projects/transclude">Transclude</a> is the other half of the
      same position: HTML for the document, and something this small for the
      few places JavaScript genuinely has to make a node.</p>
    `,
  },
  {
    slug: "hyperspaces",
    name: "Hyperspaces",
    dek: "One name over two projects: a page design tool that I ended six months before ChatGPT proved me right, and a social network with no server that I ended for reasons of its own.",
    year: 2020,
    until: 2025,
    role: "Design, architecture, implementation",
    stack: [
      "Deno",
      "TypeScript",
      "Trystero",
      "WebRTC",
      "LitElement",
      "Web Components",
    ],
    facts: [
      { label: "First", value: "A page design tool, in the browser" },
      { label: "Then", value: "A social network with no server" },
      {
        label: "The tool",
        value: "About two years, with a colleague from DockYard",
      },
      { label: "Ended", value: "Six months before ChatGPT went public" },
      { label: "Server", value: "None, in either of them" },
      { label: "Launched", value: "Neither" },
    ],
    links: [
      {
        href: "https://github.com/joe-dakroub/prototype_hyperspaces",
        label: "The design tool, on GitHub",
      },
      {
        href: "https://github.com/dmotz/trystero",
        label: "Trystero, which the second one ran on",
      },
    ],
    body: `
      <p>Hyperspaces is one name over two projects. I kept the name when the
      first idea ended, because I liked it and because the second one was still
      the same instinct pointed somewhere else.</p>

      <h2>First: a design tool</h2>
      <p>It started as a tool for designing web pages, running in the browser.
      You laid a page out, and the thing you were manipulating was the real
      thing rather than a picture of it. I worked on it for about two years with
      a colleague from <a href="/log/dockyard">DockYard</a>.</p>

      <h2>Why I ended it</h2>
      <p>Not because it did not work. It worked. I ended it because I stopped
      believing the premise.</p>
      <p>The longer I used our own tool, the less I liked interfacing with it,
      and the harder it got to argue that this was how anybody would want to
      make an interface. Every tool in the category asks the same thing of you:
      learn our canvas, our panels, our idea of where a property lives, then
      move things by hand until the result matches what you could already
      picture. I could feel AI coming, and I could not construct the argument
      for why, in a few years, a person would still choose to drag rectangles to
      describe something they could simply say.</p>
      <p>So we stopped. Two years in, with the thing running.</p>
      <p>ChatGPT opened to the public on November 30, 2022, about six months
      later. A million people used it in five days and a hundred million inside
      two months. I do not claim to have predicted the specifics. I claim
      something smaller and more useful: I was close enough to the problem to
      feel the floor move, and I acted while the project was still healthy
      rather than after the market told me. Killing two years of your own work
      on a read of where things are going is the hard version of that judgment.
      The easy version is to ship it anyway and let it fail in public.</p>

      <h2>Then: a social network</h2>
      <p>A year or so later I picked the name back up for something else. Every
      social network is a company sitting between two people who want to talk to
      each other. What happens if you take the company out?</p>
      <p>This Hyperspaces was a social network with no server. It ran on
      <a href="https://github.com/dmotz/trystero">Trystero</a>, Dan
      Motzenbecker's library for exactly this problem: peers find each other
      through a public medium nobody owns, a BitTorrent tracker, a Nostr relay,
      and once they have, their data travels directly between them over WebRTC,
      encrypted end to end. The thing that introduces them never sees a single
      message. The rest was Deno for the tooling, LitElement and Web Components
      for the interface, and no framework anywhere in it.</p>

      <h2>What happened to that one</h2>
      <p>It never launched. I got it working, I used it, and I stopped.</p>
      <p>The problems a peer-to-peer social network has are not the ones you
      expect walking in. Presence is hard when there is nobody to ask who is
      online. Identity is hard when there is no account. Moderation is not hard
      so much as impossible in the shape everyone has been trained to expect.
      And the thing a centralized network is actually selling, that your things
      are still there when you come back, turns out to be most of the
      product.</p>

      <h2>Why both are here</h2>
      <p>Because between them they changed what I build. Hyperspaces is where I
      stopped arguing that the platform had caught up and started shipping as
      though it had: no framework, web APIs wherever web APIs exist, and a
      runtime whose job is to implement the standard rather than replace it. If
      interfaces are going to be described rather than dragged, the artifact
      matters more than the editor, and the artifact had better be something a
      person can read, diff and own.
      <a href="/projects/transclude">Transclude</a> is that conclusion aimed at
      a smaller and far more tractable problem.</p>
      <p>Two projects that told you what to build next are not failures. They
      are only ones you do not get to link to.</p>
    `,
  },
  {
    slug: "coda-plugins",
    name: "Coda plugins",
    dek: "Six or seven plugins for Panic\u2019s editor, one of which a CDN company saw and paid me to build for them.",
    year: 2013,
    role: "Design and implementation",
    stack: ["macOS", "Coda Plug-in API"],
    facts: [
      { label: "Host", value: "Coda, by Panic" },
      { label: "Shipped", value: "Six to eight" },
      { label: "Commissioned", value: "One, by MaxCDN" },
      { label: "Host status", value: "Discontinued in 2020, replaced by Nova" },
    ],
    links: [
      {
        href: "https://github.com/joe-dakroub/plugin_maxcdn",
        label: "The MaxCDN plugin, on GitHub",
      },
      {
        href: "https://github.com/joe-dakroub/plugin_regex",
        label: "The regex plugin, on GitHub",
      },
      { href: "/log/coda-plugins", label: "The timeline entry" },
    ],
    body: `
      <h2>Scratching an itch, in public</h2>
      <p>Coda was Panic's web editor for the Mac, and from version 1.6 it took
      plugins. Panic's API accepted scripts in several languages; I wrote all of
      mine in Objective-C against the Cocoa SDK, which is the slower way in and
      the only one that gets you real interface. I started because I was tired
      of typing relative paths: a file path picker that inserted the right one
      for wherever the cursor happened to be. Then a regex helper, an inline color picker, one for driving an
      Apache server, and three or four after that. Six or seven in all.</p>

      <h2>The one somebody paid for</h2>
      <p>The path picker found an audience of people tired of the same thing,
      and MaxCDN saw it and commissioned one of their own: their controls,
      inside the editor, so that making a change and purging the cache behind it
      were one gesture rather than two applications.</p>

      <p>That is the second time something I built for myself turned into work
      somebody paid for. <a href="/log/first-ios-app">The App Store</a> was the
      first, three years earlier. It has happened often enough since that I now
      think it is the normal way round, and that building the thing you
      personally need is a more reliable route to work than deciding in advance
      what a market wants.</p>

      <h2>Why plugins are a good school</h2>
      <p>The constraints are absolute and none of them are yours. You get
      somebody else's chrome, somebody else's keyboard map, somebody else's
      idea of where a panel belongs, and roughly four seconds of a user's
      attention before they go back to what they were doing. There is no room
      to explain yourself and no space to be clever in. Every design decision
      is about fitting in rather than standing out, which is the opposite of
      what a portfolio usually rewards and much closer to what most product
      work actually is.</p>

      <h2>It is gone now</h2>
      <p>Panic discontinued Coda in 2020 and replaced it with Nova, so none of
      this runs any more. I have kept it here because the work was real and
      because a body of work that only lists things still running is a body of
      work with the first fifteen years cut off. Tools are outlived. That is
      the normal case, not the sad one.</p>
    `,
  },
  {
    slug: "rentalbug",
    name: "rentalbug.com",
    dek: "A property rental site for Michigan, built in PHP in 2010. It outlived my involvement, changed owners, and is still running.",
    year: 2010,
    role: "Design and implementation",
    stack: ["PHP", "MySQL"],
    facts: [
      { label: "Built", value: "2010" },
      { label: "Still running", value: "Yes" },
      { label: "Maintained by me", value: "Not for years" },
      { label: "Owners since", value: "At least one other" },
    ],
    links: [
      { href: "https://rentalbug.com", label: "rentalbug.com" },
      { href: "/log/rentalbug", label: "The timeline entry" },
    ],
    body: `
      <h2>What it is</h2>
      <p>A rental listings site for properties in Michigan. Somebody hired me to
      build it, I built it in PHP, and that was 2010.</p>

      <h2>Why it is in a portfolio at all</h2>
      <p>Because of what happened next, which is nothing. I stopped maintaining
      it years ago. It passed from the owner who commissioned it to somebody
      else. Neither of those events required a rewrite, a migration, or a call
      to me.</p>

      <p>Sixteen years and a change of ownership is the only review of a
      codebase that means anything. Everything else is an opinion held by people
      who were in the room. This is the verdict of a system that had to keep
      earning somebody money after the person who wrote it stopped answering the
      phone.</p>

      <h2>Nothing about it was fashionable</h2>
      <p>That is the same fact stated twice. In 2010 there was plenty on offer
      that would have made this more interesting to build and would have needed
      replacing twice by now. It is server-rendered HTML, forms that submit, and
      a database. Every one of those decisions was boring on the day and none of
      them has come due since.</p>

      <p>The two facts are related, and between them they are most of what I
      believe about building for the web. It is the same argument I was still
      making sixteen years later with
      <a href="/projects/transclude">transclude</a>, which is either consistency
      or stubbornness depending on how the interview is going.</p>
    `,
  },
  {
    slug: "timothy-mcallister",
    name: "Timothy McAllister",
    dek: "Five versions of one site over twenty-five years, from ASP against an Access database to a CMS of my own on Cloudflare.",
    year: 2001,
    until: 2026,
    role: "Design, development, and the long view",
    stack: ["transclude", "Cloudflare Workers", "HTML", "CSS"],
    needs:
      "Pictures of the earlier versions, if any of them survived. Screenshots or a Wayback link would carry this page.",
    facts: [
      { label: "Collaboration", value: "Twenty-five years" },
      { label: "Versions", value: "Five" },
      { label: "First build", value: "ASP · Access" },
      { label: "Current build", value: "A CMS of my own, on transclude" },
      { label: "Runs on", value: "Cloudflare Workers" },
      { label: "Client JavaScript", value: "Only where it earns it" },
    ],
    links: [
      { href: "https://timothymcallister.com", label: "timothymcallister.com" },
      { href: "/log/mcallister", label: "The whole twenty-five years" },
      { href: "/projects/transclude", label: "The framework it runs on" },
    ],
    body: `
      <h2>Five versions, and you can date the web off them</h2>
      <p>I have been designing and building for Timothy McAllister since 2001. He
      is a concert saxophonist; I am the person who makes the thing people find
      when they look him up. That has meant a new site roughly every time the web
      changed underneath us, which over twenty-five years comes to five of
      them.</p>
      <ol>
        <li><strong>ASP against an Access database</strong>, because in 2001 that
        is what a small site with content in it ran on.</li>
        <li><strong>The standards rebuild</strong>, the markup stops describing
        the picture and starts describing the content.</li>
        <li><strong>The responsive one</strong>, when the audience arrived on
        phones and every layout ever made turned out to be the wrong size.</li>
        <li><strong>Statamic and TailwindCSS</strong>, flat files and no database
        to keep alive. Targeted front-end work took performance up by over 150%
        and cut bandwidth in half.</li>
        <li><strong>A CMS I wrote</strong>, on
        <a href="/projects/transclude">transclude</a>, running on Cloudflare
        Workers.</li>
      </ol>
      <p>Almost nobody gets to redesign the same brief across all of that. It is
      the best argument I have that the medium changes and the job does not: the
      question is always what a person looking up a musician actually needs, and
      the answer has never once been a carousel.</p>

      <h2>The current one</h2>
      <p>Server-rendered HTML at the edge, a build that is files, and a content
      layer I built for the way he actually works rather than the way a general
      CMS assumes anybody does. The framework ships no JavaScript of its own, so
      what the site sends is only what a page needed, a small amount, every line
      of it decided rather than inherited.</p>
      <p>That makes it the first production site running on the framework, which
      matters more than it sounds. A framework whose only user is its author's
      portfolio has not been tested by anything. This one has a client, a domain,
      and an audience arriving on phones from links in concert programs, and it
      has to keep working whether or not I am paying attention that week.</p>

      <h2>Why it is on this page</h2>
      <p>Because a portfolio full of eighteen-month engagements says nothing
      about whether you can be trusted with something for a long time. This one
      has outlasted eight jobs and four framework eras, and the current framework
      is one I wrote.</p>
    `,
  },
];

/** The ones that get built. A draft is not a page. */
export const live = projects.filter((project) => !project.draft);

/**
 * @param {string} slug
 * @returns {Project|null}
 */
export const findProject = (slug) =>
  live.find((project) => project.slug === slug) ?? null;
