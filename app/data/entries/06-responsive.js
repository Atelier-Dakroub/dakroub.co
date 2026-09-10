// 2011 – 2018

/** @typedef {import('../types.js').Entry} Entry */

/** @type {Entry[]} */
export const entries = [
  {
    id: "html-5",
    year: 2014,
    date: "2014-10-28",
    track: "tech",
    title: "HTML5, and the last version number",
    dek: "Fifteen years after 4.01, a recommendation that mostly ratifies what browsers already shipped. Five years later the W3C hands the spec to the WHATWG and HTML stops having versions at all.",
    tags: ["html", "standards"],
    links: [
      {
        href: "https://www.w3.org/TR/2014/REC-html5-20141028/",
        label: "The 2014 recommendation",
      },
      { href: "https://html.spec.whatwg.org", label: "The living standard" },
    ],
    body: `
      <p>The gap between HTML 4.01 and this is fifteen years, and almost none of
      it was spent waiting. The WHATWG had been
      writing the real specification since 2004 and the browsers had been
      shipping it, so the 2014 recommendation is largely a ratification of work
      already in production.</p>

      <p>The part that matters came later. On 28 May 2019 the W3C named the
      WHATWG the sole publisher of HTML, and the version numbers stopped. There
      is no HTML6 and there will not be one: there is a living standard that
      changes when a feature ships, and periodic snapshots for anybody who needs
      to cite a date.</p>

      <p>That is a better arrangement than it sounds and it is why the rest of
      this chapter happens. A platform that only grows on version boundaries
      cannot give you <code>:has()</code> in a year. This one can.</p>
    `,
  },
  {
    id: "ie6-countdown",
    year: 2011,
    date: "2011-03-04",
    track: "tech",
    title: "Microsoft asks the world to stop using Microsoft's browser",
    dek: "ie6countdown.com: a live map of how much of each country is still on a ten-year-old browser, published by the company that wrote it.",
    tags: ["microsoft", "browser"],
  },
  {
    id: "bootstrap",
    year: 2011,
    date: "2011-08-19",
    track: "tech",
    title: "Bootstrap",
    dek: "Twitter open-sources its internal style guide. Half the web looks the same for about four years, and ships faster.",
    tags: ["css", "design systems"],
  },
  {
    id: "jobs-dies",
    year: 2011,
    date: "2011-10-05",
    track: "world",
    title: "Steve Jobs dies",
    dek: "The end of the arc that started with the Apple I in the first chapter of this page.",
    tags: ["apple"],
  },
  {
    id: "retina",
    year: 2012,
    date: "2012-06-11",
    track: "tech",
    title: "The Retina MacBook Pro",
    dek: "Everything raster in every asset pipeline is now half the resolution it needs to be. SVG stops being optional.",
    tags: ["apple", "design"],
  },
  {
    id: "coda-plugins",
    year: 2013,
    track: "make",
    title: "Six or seven plugins for Coda",
    dek: "A file path picker, a regex helper, an inline color picker, one for driving Apache, and one that MaxCDN paid for.",
    tags: ["coda", "panic", "tools", "plugins"],
    feature: true,
    body: `
      <p>Coda was Panic's editor and it had a plugin API, so I wrote for it: a
      file path picker because I was tired of typing relative paths, a regex
      helper, an inline color picker, one for driving an Apache server, and
      three or four more. Six or seven in all.</p>

      <p>The picker found an audience of people tired of the same thing, and
      MaxCDN saw it and commissioned one of their own: their controls, inside the
      editor, so that making a change and purging the cache behind it were one
      gesture rather than two applications.</p>

      <p>That is the second time something I made for myself turned into work
      somebody paid for, <a href="/log/first-ios-app">the App Store</a> was the
      first, three years earlier, and it has happened often enough since that I
      now think it is the normal way round.</p>

      <p>Editor plugins are a good school for interface design, because the
      constraints are absolute. You get somebody else's chrome, somebody else's
      keyboard map, and about four seconds of attention.</p>
    `,
  },
  {
    id: "wedding",
    year: 2013,
    track: "make",
    title: "Wedding invitations, in HTML and CSS",
    dek: "And the seating chart. Print styles, a data structure, and the one deadline nobody moves.",
    tags: ["css", "print", "typography"],
    feature: true,
    image: {
      src: "/media/wedding-invitation.jpg",
      alt: "A square turquoise envelope tied with a white ribbon, with a card tied to it showing two engraved birds, one in a crown and one in a top hat.",
      width: 601,
      height: 600,
      caption: "Printed at FedEx. Every one cut by hand.",
    },
    body: `
      <p>We needed invitations and a seating chart. I had a browser, a printer
      and strong opinions about typesetting, so the invitations became an HTML
      document with a print stylesheet, and the seating chart became a small
      program: tables and guests as data, the layout generated from them, and
      every revision a reload rather than an afternoon in a page layout
      tool.</p>

      <p>Then we printed them at FedEx and cut every one by hand. Cut and tied
      the ribbons as well, and the tags: two engraved birds, one wearing a crown
      and one in a top hat, on a card tied to a square envelope the color of a
      Tiffany box. A labor of love in the literal sense that it was labor and we
      did it anyway, sitting on the floor, for weeks.</p>

      <p>Everything on this site that cares about print,
      <a href="/work">the resume</a> included, comes from that stretch. Nothing
      teaches you the difference between a screen and a sheet of paper like
      having to hand the sheet of paper to a hundred people.</p>

      <p>By the only measure that counted at the time it is the most useful thing
      I have ever built with CSS. The deadline did not move and the paper came
      out right.</p>
    `,
  },
  {
    id: "indie-game-the-movie",
    year: 2012,
    date: "2012-06",
    track: "world",
    title: "Indie Game: The Movie",
    dek: "What one or two people can actually build, and what it costs them. It landed harder than any conference talk I have ever sat through.",
    tags: ["film", "games", "indie"],
    feature: true,
    spec: [
      { label: "Directed by", value: "James Swirsky and Lisanne Pajot" },
      { label: "Premiered", value: "Sundance, January 2012" },
      { label: "Follows", value: "Super Meat Boy, Fez, Braid" },
      { label: "Funded by", value: "Two Kickstarters" },
      { label: "Sold", value: "Mostly online, direct" },
    ],
    body: `
      <p>A documentary about four people making three games: Edmund McMillen and
      Tommy Refenes on Super Meat Boy, Phil Fish on Fez, Jonathan Blow on what
      Braid had already cost him, and it is not really about games. It is about
      what happens to a person who decides to make something alone and finish
      it.</p>

      <p>Two things landed. The first is how small the teams are. The work that
      moved that generation forward came out of apartments, from people with no
      studio behind them and nothing to fall back on, which is either terrifying
      or the most encouraging fact available depending on the week you watch
      it.</p>

      <p>The second is how the industry treated them. Ruthlessly, mostly, and
      with a total absence of interest in what any of it was doing to the people
      making it. Fish in particular is filmed at the point of collapse and the
      camera does not look away, and neither does anybody else in the frame.</p>

      <p>The film was itself the argument: funded by two Kickstarters, sold
      directly, more than half its money from online distribution with no
      studio anywhere near it. Three years later I was
      <a href="/log/hand-whittled">running my own studio</a>, and a decade after
      that I had written <a href="/log/transclude">a framework</a> on my own
      time. It is not the only reason for either. I think about it when either one gets hard.</p>
    `,
  },
  {
    id: "react",
    year: 2013,
    date: "2013-05-29",
    track: "tech",
    title: "React",
    dek: "Announced at JSConf US to a room that mostly hated it. Re-render everything and diff the result.",
    tags: ["javascript"],
    feature: true,
    body: `
      <p>React's actual idea was correct, and it won: describe what the UI should
      be for this state, and let something else work out the DOM operations.
      What came with it was a decade of shipping the framework to the browser before the page could render. A different decision, and it did not have to follow.</p>
      <p>I have built with it, hired for it and taught it. I also built this site
      without it, on purpose, and the reasoning is in
      <a href="/colophon">the colophon</a>.</p>
    `,
  },
  {
    id: "ios-7",
    year: 2013,
    date: "2013-06-10",
    track: "tech",
    title: "iOS 7 flattens everything",
    dek: "Skeuomorphism ends in one keynote. Every app and every design system in the industry is redrawn inside a year.",
    tags: ["apple", "design"],
  },
  {
    id: "sketch-3",
    year: 2014,
    date: "2014-04",
    track: "tech",
    title: "Sketch 3",
    dek: "Symbols, artboards, and a vector tool built for screens instead of print. Photoshop stops being the design tool.",
    tags: ["design", "tools"],
    body: `
      <p>Symbols, artboards, and a vector tool that assumed a screen instead of a
      sheet of paper. Photoshop had been the design tool by default for fifteen
      years, and it stopped being that in about eighteen months.</p>

      <p>I still open it for certain things: a mark, an icon set, anything
      where I need to push vectors around without a browser in the way. But I do
      most of my design in the browser now, and have for years. A comp cannot
      tell you what a layout does at 380 pixels, or how a transition feels, or
      what happens when the text is real and twice as long. The browser can be
      asked. A picture of a website can only be admired.</p>
    `,
  },
  {
    id: "halt-and-catch-fire",
    year: 2014,
    date: "2014-06-01",
    track: "world",
    title: "Halt and Catch Fire",
    dek: "Four seasons about people who are right too early and lose anyway. My favorite show, and the era it is set in is the least of the reason.",
    tags: ["television", "culture", "web"],
    feature: true,
    spec: [
      { label: "Ran", value: "AMC · June 2014 to October 2017" },
      { label: "Seasons", value: "Four · forty episodes" },
      { label: "Created by", value: "Christopher Cantwell and Christopher C. Rogers" },
      { label: "Set across", value: "1983 to 1994" },
      { label: "Named after", value: "An instruction that stops the processor and does not give it back" },
      { label: "Watched", value: "All of it, several times" },
    ],
    body: `
      <p>Four seasons on AMC following the same handful of people from a PC
      clone company in Texas in 1983 to a search engine that does not exist yet
      in 1994. The title is programmer folklore: halt and catch fire is an
      instruction that does nothing useful, it stops the processor and does not
      give it back, and the joke was passed around for twenty years before
      anybody put it on a screen.</p>

      <p>I have watched all four seasons several times. It is my favorite
      television and the period detail is the least of the reason, which is
      worth saying because the period detail is very good. The subject is
      failure, and what different people do with it.</p>

      <p>Nobody on this show wins. They are early every time. They build a
      portable computer and Apple announces the Macintosh the same week. They
      build an online community two years before anyone wants one. They build a
      hand-made directory of the web and put it up against a crawler that is
      obviously going to beat it. The last episode is set in 1994 and hands one
      of them an idea you already know somebody else is about to get rich on.
      That is the shape of all four seasons and it never resolves.</p>

      <p>What it is about is how each of them handles that. Joe MacMillan burns
      the thing down and turns up somewhere else with a new suit and a new
      pitch, and the show is clear that this is not growth, it is the same
      avoidance running on a longer loop. Gordon builds the best machine of his
      life once, watches it fail, and carries it for ten years. Cameron is the
      most talented person in every room and cannot finish anything, so she
      leaves. Donna is the only one who learns to actually run something, and
      the show charges her for it in a way it never charges the men.</p>

      <p>Season three is mine. It moves everyone to California and then jumps
      from 1986 to 1990 in its last episode, and the ground goes out from under
      them. The eighties end. The personal computer stops being the story. The
      web turns up. Watching people who spent a decade mastering one era find
      out the era is over is the best thing this show does, and season three is
      where it does it.</p>

      <p>AMC nearly cancelled it after the first season and renewed it three
      more times on an audience that never grew. A show about being right and
      unwatched, which was right and unwatched.</p>

      <p>It lands for me like nothing else has, and the reason is on this page.
      Fifty years of entries and a real number of them did not work.
      <a href="/log/first-ios-app">An app that got a letter instead of a
      launch</a>. A social network with no server in it that never shipped. Work
      that outlived the company it was done for, and plenty that did not outlive
      the year. Nothing else I have watched treats that as the subject rather
      than the obstacle before the win.</p>

      <p>It ran from 2014 to 2017, and that is when I watched it, which is
      also exactly the <a href="/log/time-away">four years I spent out of an
      office</a>. Four seasons about people starting over, during the one
      stretch of my working life where I had deliberately stopped. Anything
      that lands this hard is partly about when it reached you. I do not think
      I would have heard it the same way from inside somebody's release
      schedule.</p>
    `,
  },
  {
    id: "swift",
    year: 2014,
    date: "2014-06-02",
    track: "tech",
    title: "Swift",
    dek: "Apple replaces a thirty-year-old language at a keynote, with a playground that shows the result as you type.",
    tags: ["apple", "mobile"],
    body: `
      <p>Apple replaced a thirty-year-old language at a keynote and gave it a
      playground that showed you the result as you typed, which is the same
      four-second feedback loop that made a <a href="/log/first-machine">BASIC
      prompt</a> worth having.</p>

      <p>I learned it across versions 2 through 4, which were the years it kept
      changing underneath everybody, and used it for Mac, iOS and Apple TV work
      at <a href="/log/hand-whittled">the studio</a>. Three platforms, one
      language, and three genuinely different sets of assumptions about what a
      person is doing when they pick up the device.</p>

      <p>Apple TV was the one that taught me the most. Ten feet away, a remote
      with no pointer, and nobody sitting down to concentrate. Every interface
      instinct built for a mouse is wrong there, which is a useful thing to be
      shown.</p>
    `,
  },
  {
    id: "dubspot",
    year: 2016,
    track: "work",
    title: "An LMS for a music school",
    dek: "Eighteen months on a new learning platform for an electronic music school in New York and Los Angeles, with my wife. It never launched and we were never paid.",
    where: "New York and Los Angeles",
    tags: ["client work", "lms", "education"],
    feature: true,
    spec: [
      { label: "Client", value: "Dubspot" },
      { label: "Taught", value: "Electronic music production and DJing" },
      { label: "Campuses", value: "New York and Los Angeles" },
      { label: "Duration", value: "About eighteen months" },
      { label: "With", value: "My wife" },
      { label: "Built in", value: "PHP" },
      { label: "Launched", value: "No" },
      { label: "Paid", value: "No" },
    ],
    links: [
      {
        href: "https://github.com/joe-dakroub/website_dubspot",
        label: "The prototype, on GitHub",
      },
    ],
    body: `
      <p>Dubspot taught electronic music production and DJing, out of New York
      and Los Angeles. They came to us for a new learning platform and a new
      website, and my wife and I worked on it together for about eighteen
      months, through <a href="/log/hand-whittled">the studio</a>.</p>

      <p>The brief was not really a brief. What they had was old, and it had
      reached the stage where it was no longer neutral: it was getting between
      the school and the students it existed to serve. Enrolling, finding your
      material, submitting work, hearing back from an instructor. Every one of
      those was harder than it needed to be, and the staff had built a layer of
      manual work on top to keep the thing usable. That is the most common
      reason to rebuild software and the least glamorous one. Nobody asks for a
      platform because they want a platform. They ask because the one they have
      is quietly costing them the thing they are actually good at.</p>

      <p>A school is a harder shape than it looks. A marketing site is one
      audience; a learning platform is four, and they want opposite things on
      the same day. Prospective students need to be persuaded, enrolled students
      need to get to their material in one click and never see the persuading
      again, instructors need to give feedback in a form that survives being
      given, and the people running it need to know what is happening without
      asking anyone.</p>

      <p>Working with my wife on it is the part people ask about. It works for
      the same reason any good pairing works, which is that we disagree early
      and out loud and neither of us takes it home. Eighteen months on one
      client is long enough for that to matter more than any technical decision
      we made.</p>

      <h2>It never launched</h2>
      <p>We left before the end. The school collapsed not long after, for
      reasons that were not ours and that we had no hand in, and the platform
      went with it. Nothing we designed or prototyped was ever put in front of a
      student.</p>

      <p>We were never paid for any of it. We did the work in good faith,
      believing the place could be turned around, and for a long while so did
      the people running it. I have thought about whether to leave this off the
      site and the answer is no, because eighteen months is eighteen months and
      because a body of work made only of the things that shipped and cleared is
      not an honest one.</p>

      <p>The lesson is not about reading people better, which I do not think is
      a skill anybody reliably has. It is structural. Money should arrive
      against delivered milestones, in writing, from the first week, and the
      size of the unpaid balance you are carrying should never be a number you
      have to go and work out. We knew that. We did it anyway, because the work
      was good and the mission was worth it, and those are exactly the two
      feelings that talk you out of it.</p>
    `,
  },
  {
    id: "hand-whittled",
    year: 2015,
    until: 2018,
    track: "work",
    title: "Hand Whittled",
    dek: "My own studio. Full-stack web, iOS and Apple TV, for entertainment, construction and shipping clients.",
    tags: ["studio", "ios", "apple tv", "swift"],
    feature: true,
    body: `
      <p>Three years of running the whole thing: the sales call, the scope, the
      design, the build, the support email on a Sunday. Full-stack web, iOS and
      Apple TV, for Brilliant Chemistry, The Great Lakes Stair &amp; Millwork Co,
      and Dubspot. A chemistry company, a millwork company and a music production school. A client list that explains itself.</p>

      <p>That range is the argument for working alone for a while. A stair and
      millwork company and a music school do not want the same site and do not
      want it explained the same way, and you find that out yourself when there
      is nobody standing between you and the person paying.</p>

      <p>An Apple TV app in those years was a genuinely new surface. Ten feet
      away, a remote with no pointer, and a design language a few months old. Nothing since the eight-bit years has come closer to a machine nobody had habits about yet.</p>
    `,
  },
  {
    id: "es2015",
    year: 2015,
    date: "2015-06",
    track: "tech",
    title: "ES2015",
    dek: "Modules, classes, arrow functions, promises. JavaScript gets the language it needed and a yearly release cycle.",
    tags: ["javascript", "standards"],
  },
  {
    id: "figma",
    year: 2016,
    date: "2016-09-27",
    track: "tech",
    title: "Figma opens to everyone",
    dek: "Design in a browser, multiplayer, with a URL. The file stops being a thing you email.",
    tags: ["design", "tools"],
    body: `
      <p>The insight was not the vector engine, it was that a design is a place
      rather than a document. Once the artifact has a URL, review, handoff and
      versioning stop being process and start being links.</p>
      <p>Which is the same argument this whole site is making about the web.</p>
    `,
  },
  {
    id: "css-grid",
    year: 2017,
    date: "2017-03",
    track: "tech",
    title: "CSS Grid ships everywhere in one month",
    dek: "Chrome, Firefox, Safari and Opera in a matter of weeks. Two-dimensional layout, natively, after twenty years of floats.",
    tags: ["css", "standards"],
    feature: true,
    body: `
      <p>Rachel Andrew and Jen Simmons spent years explaining Grid to a profession
      that had been faking layout since 1996, and the browsers shipped it
      together deliberately so that nobody had to wait for the slowest one.</p>
      <p>It is the single largest capability jump CSS has ever made, and the
      layouts on this page are built out of it. Named lines, a subgrid for the
      entry cards, and no wrapper divs that exist only to hold a float.</p>
    `,
  },
  {
    id: "detroit-trading",
    year: 2018,
    until: 2019,
    track: "work",
    title: "Detroit Trading Company",
    dek: "The way back into the industry after four years out, and the last job I ever took in an office.",
    where: "Detroit, Michigan",
    tags: ["react", "accessibility", "research"],
    spec: [
      { label: "Role", value: "UIX architect" },
      { label: "Stack", value: "React, Node.js, Razor" },
      { label: "Notable", value: "First office job since 2014" },
      { label: "Also", value: "The last one. Remote ever since." },
    ],
    body: `
      <p>This is where I came back. Four years of
      <a href="/log/time-away">not working in an office</a> ended here, and it
      turned out to be a short stay.</p>

      <p>Internal and external products for the automotive trade, in React,
      Node.js and Razor. Research-driven, which in practice meant the interfaces
      were argued from what people actually did rather than from what the last
      screen happened to look like.</p>

      <p>Accessible from the first commit rather than from the audit at the end,
      which is the only way it is ever cheap.</p>

      <p>It is also the last job I have taken in an office. Everything since has
      been remote, which was an unusual arrangement to hold out for in 2019 and
      stopped being unusual about a year later for reasons that had nothing to
      do with me. I had already decided by then, having spent four years finding
      out that where I sit is not what makes the work good.</p>
    `,
  },
  {
    id: "variable-fonts",
    year: 2018,
    track: "tech",
    title: "Variable fonts and custom properties, in production",
    dek: "One file, an axis of weight, and a stylesheet that can do arithmetic. Typography on the web gets interesting again.",
    tags: ["css", "typography"],
  },
  {
    id: "deno",
    year: 2018,
    date: "2018-06",
    track: "tech",
    title: "10 Things I Regret About Node.js",
    dek: "Ryan Dahl gets on stage at JSConf EU, lists what he got wrong nine years earlier, and announces the thing he built to fix it.",
    tags: ["deno", "javascript", "node", "standards"],
    feature: true,
    links: [
      {
        href: "https://www.youtube.com/watch?v=M3BM9TB-8yA",
        label: "The talk",
      },
      { href: "https://deno.com", label: "deno.com" },
    ],
    spec: [
      { label: "Announced", value: "June 2018 · JSConf EU, Berlin" },
      { label: "By", value: "Ryan Dahl, who wrote Node in 2009" },
      { label: "Written in", value: "Rust" },
      { label: "Version 1.0", value: "May 2020" },
    ],
    body: `
      <p>Nine years after building <a href="/log/nodejs">Node</a>, Ryan Dahl
      stood up at JSConf EU and spent half an hour on what he had got wrong. Not
      a retrospective. A list.</p>

      <p>Security, because a Node program can read your filesystem and open a
      socket without ever being asked. The build system. <code>package.json</code>
      and everything downstream of it, including a <code>node_modules</code>
      directory heavy enough to be a running joke. A module resolution algorithm
      that guesses at file extensions and index files. And underneath all of it,
      that Node had drifted away from the browser instead of toward it.</p>

      <p>Then he showed what he had been building instead. Deno is secure by
      default: a script gets no filesystem, no network and no environment unless
      you pass a flag saying so. It runs TypeScript with nothing in front of it.
      It imports by URL, the way a browser does. It is one executable. And it
      implements web APIs wherever web APIs exist, so <code>fetch</code> is
      <code>fetch</code> rather than a package you install.</p>

      <p>I have been a loud advocate ever since, and I
      <a href="/log/freelance">built a real product on it</a> so the advocacy was
      paid for rather than free. What convinced me was not the security model or
      the TypeScript. Both are conveniences. It was the direction: the platform
      is the standard, and a runtime's job is to implement it rather than to
      invent a parallel one.</p>

      <p>That is the same argument this whole page is making, and
      <a href="/log/transclude">the framework it runs on</a> is the argument
      again in a different place. Deno is the reason I stopped believing the
      ecosystem had to keep accumulating.</p>
    `,
  },
  {
    id: "brutalism",
    year: 2018,
    track: "make",
    title: "My personal site, named in a brutalism roundup",
    dek: "Somebody put one of my sites in a list of twenty-five brutalist designs. I have never been more accurately filed.",
    tags: ["design", "html", "css"],
    feature: true,
    links: [
      {
        href: "https://medium.com/@noahdnicholus/25-websites-that-rock-a-brutalist-design-bb70e75fde82",
        label: "25 Websites That Rock a Brutalist Design",
      },
    ],
    body: `
      <p>Brutalist web design took its name from the architecture, and like the
      architecture it was half insult and half compliment. The idea was a site
      that shows its construction: system fonts, links that look like links,
      visible structure, no gradients, and no attempt to look like anything other
      than a document somebody made.</p>

      <p>One of my personal sites ended up in a roundup of twenty-five of them,
      which I did not expect and have never quite stopped being pleased
      about.</p>

      <p>The reason it fitted is that none of it was a style decision. Every
      brutalist choice is the same choice: keep what the browser already does.
      Do not replace the link, do not replace the form control, do not ship three
      hundred kilobytes to reproduce an underline. That is an engineering
      position that happens to have a look, and the look is the part that got
      noticed.</p>

      <p>It is the same argument as <a href="/log/transclude">the framework</a>
      and the same argument as <a href="/colophon">this page</a>, made years
      earlier with worse tools and no vocabulary for it.</p>
    `,
  },
  {
    id: "custom-elements",
    year: 2018,
    date: "2018-10-23",
    track: "tech",
    title: "Custom elements, in every browser",
    dek: "Firefox 63 turns them on by default. Seven years after the idea was first shown, the browser has a component model of its own.",
    tags: ["html", "standards", "web components"],
    feature: true,
    links: [
      {
        href: "https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/63",
        label: "Firefox 63 release notes",
      },
      {
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements",
        label: "Using custom elements",
      },
    ],
    spec: [
      { label: "First shown", value: "2011 \u00b7 Alex Russell, Fronteers" },
      { label: "Everywhere", value: "October 2018 \u00b7 Firefox 63" },
      { label: "Cost to adopt", value: "Nothing" },
    ],
    body: `
      <p>Alex Russell showed Web Components at Fronteers in 2011. The pitch was
      that a page should be able to name a new element and say what it does, the
      way the browser already does for <code>&lt;video&gt;</code> and
      <code>&lt;details&gt;</code>. Then seven years passed. Browsers shipped it
      one at a time, and on October 23, 2018, Firefox 63 turned custom elements
      and the shadow DOM on by default. From that day the platform had a
      component model every browser agreed on.</p>

      <p>I care about this far more than the release note suggests. Every
      component system I had used until then was rented. You wrote your
      interface in somebody else's dialect, you took their build step with it,
      and when the project moved on you wrote the whole thing again in the next
      dialect. <code>customElements.define</code> is the first version of that
      idea with no landlord.</p>

      <p>That is the argument for standards in one sentence: what the browser
      does itself is what still works in ten years. A custom element written in
      2018 runs today with no install, no upgrade path and no migration guide.
      Very little I wrote in a framework that year can say the same.</p>

      <p>It is the position <a href="/log/transclude">the framework</a> is built
      on, and the reason <a href="/colophon">this page</a> ships no JavaScript
      at all.</p>
    `,
  },
  {
    id: "tailwind",
    year: 2018,
    date: "2018-11-01",
    track: "tech",
    title: "Tailwind CSS",
    dek: "Utility classes in the markup. The industry has the separation-of-concerns argument again, from the other side.",
    tags: ["css"],
  },
  {
    id: "snowden",
    year: 2013,
    date: "2013-06",
    track: "world",
    title: "The Snowden disclosures",
    dek: "Everything anybody sends goes down somebody else's cable. The web starts encrypting itself in earnest the year after.",
    tags: ["news", "security"],
  },
  {
    id: "time-away",
    year: 2014,
    until: 2018,
    track: "learn",
    title: "I said it would be one year",
    dek: "Four years out of an office, after seventeen without a break. It is where nearly every opinion the rest of this site argues for actually came from.",
    tags: ["standards", "swift", "ios"],
    feature: true,
    spec: [
      { label: "Said", value: "One year" },
      { label: "Took", value: "Four" },
      { label: "Previous break", value: "None since 1997" },
      {
        label: "Filled it with",
        value: "Hand Whittled, a game on iOS, and reading",
      },
    ],
    body: `
      <p>Tradeweb bought BondDesk in November 2013. About a year after that I
      stopped working in an office, and I told everyone it was for a year.</p>

      <p>I had not taken real time off since 1997. Seventeen years of one job
      after another with no gap worth the name, and the problem with never
      stopping is that you cannot tell a conviction from a habit while you are
      still moving. Everything I believed about building for the web had been
      formed inside somebody's release schedule, which is not the same as
      having thought about it.</p>

      <p>So I read the platform instead of the layer on top of it. With no
      deadline and no employer's stack to defend, I went and learned what the
      browser could actually do, which turned out to be a great deal more than
      the framework I had spent five years inside would have led me to believe.
      A surprising amount of what the industry treats as necessary is habit that
      nobody has re-examined because re-examining it is not billable.</p>

      <p>That is where the web standards position I now argue from came from,
      and I want to be honest that it is a position rather than a discovery.
      I did not find a secret. I found that if you learn the thing underneath,
      you need less of the thing on top, and that the cost of the thing on top
      is paid by whoever maintains it after you.</p>

      <p>I did not spend four years thinking. I learned Swift and built a game
      on iOS, which is a good way to find out how much of your competence is
      transferable and how much of it was familiarity. I also learned about Custom Elements and how to build them from scratch and knew that they were the future. I ran
      <a href="/log/hand-whittled">Hand Whittled</a> and did full-stack web, iOS
      and Apple TV work for clients who had no interest in my opinions about
      anything. Running your own studio is not a sabbatical.</p>

      <p>Four years is longer than I planned and I would not shorten it.
      <a href="/log/transclude">transclude</a> is downstream of this, and so is
      the fact that the page you are reading ships no JavaScript.</p>
    `,
  },
  {
    id: "etrade",
    year: 2012,
    track: "make",
    title: "Components inside somebody else's page",
    dek: "Design and build for E*Trade at BondDesk: components and whole pages that they dropped into their own dashboard through an iframe.",
    where: "BondDesk",
    tags: ["extjs", "javascript", "client work"],
    feature: true,
    spec: [
      { label: "For", value: "E*Trade" },
      { label: "At", value: "BondDesk, before Tradeweb bought it" },
      { label: "Delivered as", value: "Components and pages, in an iframe" },
      { label: "The constraint", value: "A page we did not control" },
    ],
    body: `
      <p>E*Trade ran the dashboard. We built the fixed income parts of it, as
      components and in some cases as whole pages, and they dropped what we
      shipped into their page inside an iframe.</p>

      <p>It is worth being clear about why an iframe and not a script tag. In
      2012 there was no Shadow DOM you could rely on and no scoping mechanism in
      CSS worth the name. A stylesheet dropped into a host page fights with
      whatever is already there, in both directions, and the losing side is
      whichever team is not in the room. An iframe gave both sides a hard border
      for free. Their styles could not reach our components, ours could not
      reach their dashboard, and neither team had to trust the other's
      discipline.</p>

      <p>Everything hard about it came from that same border. An iframe does not
      know how tall its contents are and the page around it knows even less, so
      you measure your own document, tell the parent what size to make you, and
      do it again every time anything reflows. You cannot lay out across the
      seam. You cannot open a menu that escapes your own box. You inherit a
      viewport width somebody else chose and you find out what it is at
      runtime.</p>

      <p>The design half was harder than the engineering half. The work had to
      look like it belonged to E*Trade, on a brand we did not own, using a type
      scale and a palette that were not ours, sitting flush against chrome we
      could not see while we were building. Nobody using it should have been
      able to tell where their company stopped and ours started. When it worked,
      nobody noticed it at all, which is the correct outcome and a hard thing to
      put in a portfolio.</p>

      <p>The industry got around to naming this pattern about five years later
      and called it micro-frontends. The trade was the same then as now. You give
      up shared layout and a shared runtime, and you get back the ability to ship
      on your own schedule into a page you do not own.</p>
    `,
  },
  {
    id: "tiny-wings",
    year: 2011,
    date: "2011-02-18",
    track: "play",
    title: "Tiny Wings",
    dek: "One developer in Germany, a bird too heavy to fly, and hills that draw themselves differently every day you open it.",
    tags: ["mobile", "indie"],
    feature: true,
    spec: [
      { label: "By", value: "Andreas Illiger, on his own" },
      { label: "Released", value: "February 18, 2011 \u00b7 iOS" },
      { label: "Hills", value: "Generated, and new every day" },
      { label: "Chart", value: "Top grossing for two weeks" },
    ],
    body: `
      <p>This is the one that got me. I had stopped playing games by then and I
      played this for months, in the way you play a phone game: three minutes at
      a time, several times a day, for no reason I could have defended.</p>

      <p>The mechanic is one finger. You hold to dive, you let go to climb, and
      the whole game is learning to time a dive into the far side of a hill so
      the next one throws you further. There is nothing else in it. Andreas
      Illiger built it by himself in Germany and it was the top grossing thing
      in the App Store for two weeks.</p>

      <p>What I actually loved was that the hills are not drawn. They are
      generated, and generated again, so the island looks different every day
      you open it. Nobody sat down and placed those slopes. A rule did, and the
      rule is small enough to hold in your head while a machine turns it into a
      landscape you have never seen before.</p>

      <p>That is the same pleasure as typing a listing out of a magazine in 1985
      and watching arithmetic become a picture, which is
      <a href="/log/hands-on-basic">where I started</a>. Thirty-five years of
      hardware in between, and the part that got me was still a rule making a
      world.</p>
    `,
  },
  {
    id: "fez",
    year: 2012,
    track: "play",
    title: "Fez",
    dek: "A flat world you rotate into a third dimension. Five years of one person's work for a trick that takes a second to understand and a whole game to exhaust.",
    tags: ["indie"],
  },
  {
    id: "gta",
    year: 2013,
    date: "2013-09-17",
    track: "play",
    title: "Grand Theft Auto IV and V",
    dek: "I stopped playing games somewhere in here. My wife did not, and it turns out watching somebody else play is its own thing entirely.",
    tags: ["rockstar", "music"],
    feature: true,
    spec: [
      { label: "IV", value: "April 2008 \u00b7 Liberty City" },
      { label: "V", value: "September 2013 \u00b7 Los Santos" },
      {
        label: "Score",
        value: "Tangerine Dream, Woody Jackson, The Alchemist, Oh No",
      },
      { label: "Radio", value: "Fifteen stations, over 240 tracks" },
    ],
    body: `
      <p>I do not play games any more. I am not sure there was a decision; the
      hours went somewhere else and I did not go back. Almost everything after
      this point on the page is something I read about rather than something I
      sat down with.</p>

      <p>My wife plays. So I watch, which I did not expect to enjoy and do. She
      drives, I sit there, and we spend most of it making fun of the game.
      Pedestrians who walk into traffic. A character who cannot climb a fence a
      toddler could get over. The mission that fails because a car clipped a
      lamppost. A world this detailed is funniest exactly where it gives up, and
      you only ever find those places by living in it for a hundred hours.</p>

      <p>The music in V is the part I would defend on its own. Fifteen radio
      stations and something past two hundred and forty songs, plus an original
      score by Tangerine Dream, Woody Jackson, The Alchemist and Oh No, and the
      whole thing is scored to whatever you happen to be doing. We have both
      sat in a parked car in that game to let a song finish. That is a strange
      sentence to write about a video game and I stand by it.</p>

      <p>It is the same pleasure as the arcade cabinet in
      <a href="/log/first-screens">the first chapter of this page</a>, moved one
      seat over. Somebody else is holding the controller and the screen is still
      the best thing in the room.</p>
    `,
  },
  {
    id: "flappy-bird",
    year: 2014,
    date: "2014-02",
    track: "play",
    title: "Flappy Bird",
    dek: "Dong Nguyen built it in a weekend, it ate January, and he took it down because it worked too well.",
    tags: ["mobile", "indie"],
    body: `
      <p>The second of the two phone games that got me, three years after
      <a href="/log/tiny-wings">Tiny Wings</a>. I had it for about a month in
      the winter of 2014, along with what felt like everybody else.</p>

      <p>What I liked was the same thing, arriving in an uglier package. The
      course does not exist. There is no level. A rule places the next pair of
      pipes, forever, and the game is only that rule plus your thumb.</p>

      <p>Dong Nguyen pulled it from the App Store on February 10, 2014, and said
      plainly that he did it because the thing was too addictive and he felt
      responsible for that. I have thought about that decision more than I have
      thought about most software.</p>
    `,
  },
];
