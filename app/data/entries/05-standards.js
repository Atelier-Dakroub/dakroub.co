// 2004 – 2010

/** @typedef {import('../types.js').Entry} Entry */

/** @type {Entry[]} */
export const entries = [
  {
    id: 'gmail',
    year: 2004,
    date: '2004-04-01',
    track: 'tech',
    title: 'Gmail',
    dek: 'A gigabyte of mail and an interface that never reloads the page. Announced on April 1st and nobody believed it.',
    tags: ['google', 'web'],
  },
  {
    id: 'whatwg',
    year: 2004,
    date: '2004-06-04',
    track: 'tech',
    title: 'The WHATWG forms',
    dek: 'Browser vendors decide the W3C is heading for XHTML 2 and go and write HTML5 instead.',
    tags: ['standards', 'html'],
  },
  {
    id: 'firefox-1',
    year: 2004,
    date: '2004-11-09',
    track: 'tech',
    title: 'Firefox 1.0',
    dek: 'A two-page ad in the New York Times, paid for by users. Tabs, and a browser that follows the spec on purpose.',
    tags: ['browser', 'mozilla', 'standards'],
    feature: true,
    body: `
      <p>Between 2001 and 2004 the web had one browser and it had stopped
      shipping. Firefox is the reason there is a web platform to have opinions
      about: it took enough share, fast enough, that building to a standard
      became cheaper than building to a vendor.</p>
      <p>It is also the last time a piece of infrastructure was fixed by
      volunteers and a newspaper advertisement.</p>
    `,
  },
  {
    id: 'rails',
    year: 2004,
    date: '2004-07',
    track: 'tech',
    title: 'Ruby on Rails',
    dek: 'Convention over configuration, and a fifteen-minute screencast that changed what people expected of a web framework.',
    tags: ['ruby', 'web'],
  },
  {
    id: 'world-of-warcraft',
    year: 2004,
    date: '2004-11-23',
    track: 'play',
    title: 'World of Warcraft',
    dek: 'The genre stops being a hobby and becomes a place several million people go every evening.',
    tags: ['blizzard', 'mmo'],
    feature: true,
    body: `
      <p>What Blizzard actually did was remove friction: no corpse runs that cost
      an evening, no downtime you could not fill, quests that told you where to
      go. Every one of those is a usability decision, made by people who had
      clearly watched somebody play.</p>
      <p>It is also the best argument I know that systems design and interface
      design are the same discipline seen from two sides.</p>
    `,
  },
  {
    id: 'quicken-loans',
    year: 2005,
    until: 2010,
    track: 'work',
    title: 'Quicken Loans',
    dek: 'Leading the front-end team, and writing a PHP framework the company is still running on.',
    where: 'Detroit, Michigan',
    tags: ['php', 'front-end', 'leadership'],
    feature: true,
    spec: [
      { label: 'Team', value: 'Twelve, split between front end and back end' },
      { label: 'Sites on the framework', value: 'At least six' },
      { label: 'Including', value: 'quickenloans.com · rockfinancial.com · realestateinsiders.com' },
      { label: 'Still running', value: 'Yes' },
    ],
    body: `
      <p>Five years, and the first stretch where the work was not only mine to do
      but mine to decide. I led the front-end half of a team of twelve, and
      architected an internal PHP framework that ended up carrying at least six
      production sites: quickenloans.com, rockfinancial.com,
      realestateinsiders.com and others.</p>

      <p>It is still running. That is the part I am proudest of, and it is the
      only review of a codebase that means anything: more than fifteen years, on
      a company's most valuable properties, and nobody has needed to start
      again.</p>

      <p>I also designed the company's first mobile site, at
      m.quickenloans.com, back when a separate <code>m.</code> host was what
      everybody did: a second site, a second template layer, a second thing to
      keep in step with the first. <a href="/log/responsive-web-design">Responsive
      design</a> arrived a couple of years later and made the whole approach look
      like a detour, which it was. It was also the only way to do it at the time,
      and doing it is how I knew why the other way was better.</p>

      <p>Writing a framework a company keeps using after you have gone teaches something no side project can. The interface you design for other engineers <em>is</em> the product. Every shortcut you take becomes
      somebody else's Tuesday, for years.</p>
    `,
  },
  {
    id: 'switch-to-standards',
    year: 2004,
    track: 'make',
    title: 'Deleting the tables',
    dek: 'Zeldman’s Designing With Web Standards, and then the Walled Lake West Bands site, built in CSS with not one table in it.',
    tags: ['css', 'standards', 'html'],
    feature: true,
    body: `
      <p>Jeffrey Zeldman published <em>Designing With Web Standards</em> in 2003
      and it did the thing a specification cannot: it made the argument in a
      voice a working person could act on tomorrow. I read it, and then I did it: the Walled Lake West Bands site, laid out in
      CSS, with no tables anywhere in it.</p>

      <p>It was for a school band program, so the raw material was photographs of
      children playing instruments, and I did not want a gallery. The pictures
      went under random line patterns generated over the top of them, different
      on every page. Personal and heavily designed at once, which is not what a
      standards-based site looked like in 2004. Most of them looked like a
      document somebody had tidied.</p>

      <p>It was not a technique change. Going from table layout to CSS layout
      changes what a document <em>is</em>. Once the markup stops describing the
      picture, you have to be able to name the parts of the thing you are making,
      and naming the parts turns out to be the actual skill. Everything since,
      design systems and component APIs and a template compiler, is that same
      problem
      at a larger size.</p>

      <p>Floats did not clear. They never cleared. It was worth it.</p>
    `,
  },
  {
    id: 'ajax-named',
    year: 2005,
    date: '2005-02-18',
    track: 'tech',
    title: 'Somebody names it Ajax',
    dek: 'Jesse James Garrett writes an essay giving a name to a thing browsers had been able to do for five years. Naming it made it real.',
    tags: ['javascript', 'web'],
  },
  {
    id: 'youtube',
    year: 2005,
    date: '2005-02-14',
    track: 'tech',
    title: 'YouTube',
    dek: 'Video on the web without asking the viewer which player to install. It runs on Flash, which is the whole reason it works.',
    tags: ['web', 'flash'],
  },
  {
    id: 'jquery',
    year: 2006,
    date: '2006-01-14',
    track: 'tech',
    title: 'jQuery',
    dek: 'John Resig releases it at BarCamp NYC. Select things with CSS, do something to all of them. It ends up on most of the web.',
    tags: ['javascript'],
    body: `
      <p>jQuery's real contribution was not the animation helpers, it was
      <code>$()</code>: it made the DOM addressable with the selector language
      designers already knew, and it made every browser answer the same way.</p>
      <p>Twenty years later <code>querySelectorAll</code> is in every browser and
      the library has mostly finished its job. The best outcome a library can have.</p>
    `,
  },
  {
    id: 'skeletor',
    year: 2006,
    track: 'make',
    title: 'Skeletor, and a CMS called Eternia',
    dek: 'A PHP 5 framework to replace the in-house PHP 4 one, and the content system on top of it that let marketing ship without an engineer.',
    where: 'Quicken Loans',
    tags: ['php', 'frameworks', 'cms'],
    feature: true,
    spec: [
      { label: 'Framework', value: 'Skeletor, PHP 5' },
      { label: 'Replaced', value: 'The in-house PHP 4 framework' },
      { label: 'Did not write', value: 'Templating or forms. PEAR had both.' },
      { label: 'CMS', value: 'Eternia, so Web Marketing shipped daily' },
    ],
    body: `
      <p>The company ran on an in-house PHP 4 framework that had reached the end
      of what you could reasonably ask of it. PHP 5 had arrived with an object
      model worth using, so we designed and built the replacement rather than
      wait for one to show up.</p>

      <p>We called the framework Skeletor. The content system I designed to run
      on top of it was Eternia. It was 2006 and we were not being solemn about
      it.</p>

      <p>Writing your own framework is the thing people now tell you never to
      do, and in 2006, in PHP, it was simply the choice in front of you. Rails
      had shown everybody what the shape could be and we took the shape:
      convention over configuration, a router, controllers, a model layer, one
      place where a request turns into a response. Zend Framework appeared that
      same year and was not yet something you would put six production sites
      on.</p>

      <p>What we did not do was write all of it. Templating was
      <code>HTML_Template_Sigma</code> and forms were
      <code>HTML_QuickForm</code>, both out of PEAR, both carrying real traffic
      for years before we got to them. Skeletor's job was to be the argument
      about how a request moves through an application. Its job was not to prove
      we could write a template parser.</p>

      <p>Eternia is the part that changed how the company worked. Before it, a
      copy change on a production site went through an engineer and waited for a
      release. After it, the Web Marketing team pushed updates daily, on their
      own, without asking anyone. That is the entire return on a content system
      and it is easy to undersell. The number of things a business will try goes
      up when the cost of trying one falls to nearly nothing.</p>

      <p>Both of them are still running underneath
      <a href="/log/quicken-loans">the sites they were built for</a>.</p>
    `,
  },
  {
    id: 'aws',
    year: 2006,
    date: '2006-03-14',
    track: 'tech',
    title: 'S3, then EC2',
    dek: 'A server becomes a thing you rent by the hour with a credit card. Two people in a room can now run infrastructure.',
    tags: ['cloud'],
  },
  {
    id: 'wii',
    year: 2006,
    date: '2006-11-19',
    track: 'machine',
    title: 'A Wii, from a line outside Toys R Us',
    dek: 'Twenty-nine years after the Atari, the second and last console I have owned. I stood in line on launch day.',
    tags: ['nintendo', 'hardware', 'games'],
    feature: true,
    spec: [
      { label: 'Launched', value: 'November 19, 2006 · $249.99' },
      { label: 'In the box', value: 'Wii Sports' },
      { label: 'Input', value: 'A remote you point and swing' },
      { label: 'Consoles owned before it', value: 'One, in 1977' },
    ],
    body: `
      <p>The second console I have ever owned, twenty-nine years after
      <a href="/log/atari-vcs">the first one</a>. I stood in line outside a Toys
      R Us on launch day to get it, which by then made me a grown man queuing for
      a toy, and I would do it again.</p>

      <p>Not <a href="/log/windows-95">the first time</a> this page catches me
      standing in a line for a launch, and not the last. It is apparently
      something I do.</p>

      <p>It was worth it because the Wii was an interface argument rather than a
      hardware one. It lost the specification fight to both of the other consoles
      of its generation on every number that gets printed on a box, and outsold
      them anyway, because it asked a different question: not how much can we
      render, but what if the controller were a thing you point. People who had
      never touched a console played it.</p>

      <p>That is the lesson I have carried furthest into the actual work. The
      interface is not the layer on top of the product. Very often it is the
      product, and the specification is the part nobody outside the building
      cares about.</p>
    `,
  },
  {
    id: 'iphone',
    year: 2007,
    date: '2007-01-09',
    track: 'tech',
    title: 'The iPhone',
    dek: 'A real browser, a capacitive screen, and no stylus. Every layout ever made is suddenly the wrong size.',
    tags: ['apple', 'mobile', 'design'],
    feature: true,
    body: `
      <p>The original pitch was that third-party apps would be web apps. That
      lasted a year, but the browser was the point either way: it rendered real
      pages, not a mobile subset, and it did it on a screen 320 pixels wide.</p>
      <p>Everything about how I work changed here. Fixed-width layout stopped
      being defensible, touch targets became a real constraint, and the question
      "what does this look like on a phone" entered every review for good.</p>

      <p>I stood in line on launch day for an 8 GB one. It was locked to AT&amp;T,
      so getting it meant paying several hundred dollars to leave T-Mobile first,
      and doing that twice, because my wife wanted one too. Two phones and two
      contracts we were still paying off came to more than fifteen hundred
      dollars.</p>

      <p>That is an absurd amount of money for a telephone, and I would make the
      same decision again. It was obvious in the shop that the thing in my hand
      was the next twenty years of my job.</p>
    `,
  },
  {
    id: 'portal',
    year: 2007,
    date: '2007-10-10',
    track: 'play',
    title: 'Portal',
    dek: 'Three hours long, ships in a bundle, and teaches you an entirely new spatial idea without a tutorial screen.',
    tags: ['valve'],
  },
  {
    id: 'sass',
    year: 2007,
    track: 'tech',
    title: 'Sass',
    dek: 'Variables and nesting for CSS, eight years before the browser has either. The first build step most designers ever ran.',
    tags: ['css'],
  },
  {
    id: 'app-store',
    year: 2008,
    date: '2008-07-10',
    track: 'tech',
    title: 'The App Store',
    dek: 'Software distribution with a shelf again, and a gatekeeper. The web spends the next decade competing with it.',
    tags: ['apple', 'mobile'],
  },
  {
    id: 'chrome-v8',
    year: 2008,
    date: '2008-09-02',
    track: 'tech',
    title: 'Chrome, and V8',
    dek: 'A JIT that makes JavaScript fast enough to build an application in. Everything that follows follows from this.',
    tags: ['browser', 'javascript', 'google'],
  },
  {
    id: 'github',
    year: 2008,
    date: '2008-04-10',
    track: 'tech',
    title: 'GitHub',
    dek: 'Git with a face on it. Open source stops being mailing lists and starts being a pull request.',
    tags: ['tools'],
  },
  {
    id: 'nodejs',
    year: 2009,
    date: '2009-11-08',
    track: 'tech',
    title: 'Node.js',
    dek: 'Ryan Dahl demos it at JSConf EU. One language on both ends, and a package registry that eats the world.',
    tags: ['javascript'],
    body: `
      <p>Ryan Dahl demonstrated it at JSConf EU in November 2009, and the
      standing ovation is on tape. The pitch was non-blocking I/O: a server that
      does not allocate a thread per connection and does not sit still waiting on
      a disk, written in a language every web developer already had in their
      fingers.</p>

      <p>It worked. npm arrived the year after, and between them they made
      JavaScript the default language for writing more or less anything, which is
      either the best or the worst thing that happened to this industry in that
      decade. I have argued both sides, at different times, with conviction.</p>

      <p>Nine years later the same person stood on the same conference's stage
      and <a href="/log/deno">listed what he regretted about it</a>. A rarer and more useful talk than the original.</p>
    `,
  },
  {
    id: 'minecraft',
    year: 2009,
    date: '2009-05-17',
    track: 'play',
    title: 'Minecraft',
    dek: 'One developer, a Java applet, and a world made of a rule about cubes.',
    tags: ['sandbox'],
  },
  {
    id: 'tradeweb',
    year: 2010,
    until: 2015,
    track: 'work',
    title: 'Tradeweb',
    dek: 'Financial applications in ExtJS, and five years of leading front-end teams.',
    tags: ['extjs', 'javascript', 'leadership'],
    body: `
      <p>I joined BondDesk, a bond trading venue for financial advisers and
      middle market investors. Tradeweb bought it in November 2013 and the
      combined business became Tradeweb Direct, so the name on the resume is the
      one that survived rather than the one that hired me.</p>

      <p>Internal and external applications for a financial marketplace, built in
      ExtJS at a time when a component framework meant a vendor's component
      framework and you lived inside its opinions. I led front-end teams and set
      the practices they worked to.</p>

      <p>What we were building was a single-page application with a
      component-based architecture, years before
      <a href="/log/react">React</a> arrived and gave the industry a vocabulary
      for it. ExtJS had components, a layout system, and a data layer, and you
      composed screens out of them and kept state in one place. When React turned
      up in 2013 and everyone described it as a new way of thinking, it did not
      feel new. It felt like somebody had finally written down what the last
      three years had been.</p>

      <p>Trading interfaces are a good school for density. Everything is on
      screen at once, everything is a number, and a moment of hesitation in the
      interface is a complaint from somebody whose day you have just cost.</p>
    `,
  },
  {
    id: 'css-maze',
    year: 2010,
    track: 'make',
    title: 'A dungeon maze made of CSS transforms',
    dek: 'Data-driven, customizable, and built for no reason except to find out how the transform matrix actually behaves.',
    tags: ['css', 'transforms', 'games'],
    feature: true,
    body: `
      <p>CSS transforms arrived, and the specification did not explain them so
      much as define them. So I built a dungeon: a maze described as data,
      rendered with rotations and translations, and customizable enough that
      changing the data changed the level.</p>

      <p>The level was a nested JavaScript array of ones and zeroes, one for a
      wall and zero for a space. Which is precisely the notation I had used on graph
      paper for <a href="/log/bards-tale">The Bard's Tale</a> twenty-five years
      earlier, and I did not notice that until I wrote this page.</p>

      <p>It is not online any more. Nothing shipped and nobody asked for it, and
      it is still the fastest way I know to learn a browser feature: build the
      thing the feature is obviously for, and find out where it stops.</p>
    `,
  },
  {
    id: 'rentalbug',
    year: 2010,
    track: 'work',
    title: 'rentalbug.com',
    dek: 'A property rental site for Michigan, built in PHP in 2010. It has changed hands since and it is still running.',
    where: 'Michigan',
    tags: ['client work', 'php', 'longevity'],
    links: [{ href: 'https://rentalbug.com', label: 'rentalbug.com' }],
    body: `
      <p>I was hired to build it: a rental listings site for properties in
      Michigan, in PHP, in 2010. I have not maintained it for years. It passed
      from the owner who commissioned it to somebody else, and it kept going
      without me.</p>

      <p>Which is the point of putting it here. Sixteen years and a change of
      ownership is the only review of a codebase that means anything. Nothing
      about it was fashionable at the time and nothing about it has needed
      replacing since, and those two facts are related. Between them they are
      most of what I believe about building for the web.</p>
    `,
  },
  {
    id: 'first-ios-app',
    year: 2010,
    track: 'make',
    title: 'Points+, and the letter that ended it',
    dek: 'An iPhone app I wrote in Objective-C. It was in the App Store for one month before Weight Watchers found it.',
    tags: ['ios', 'objective-c', 'mobile', 'app store'],
    feature: true,
    spec: [
      { label: 'Name', value: 'Points+' },
      { label: 'Language', value: 'Objective-C' },
      { label: 'Device', value: 'iPhone 3GS' },
      { label: 'Time in the store', value: 'One month' },
      { label: 'Removed by', value: 'A letter from Weight Watchers' },
    ],
    body: `
      <p>Weight Watchers replaced its points formula with PointsPlus at the end
      of 2010, which meant every printed card and every calculator anybody owned
      was suddenly wrong. That is a gap, and a gap is the only reliable reason to
      build anything.</p>

      <p>So I taught myself Objective-C, all of <code>retain</code> and
      <code>release</code> and header files and a framework that assumed you
      already knew what a delegate was, and shipped Points+ to an
      <a href="/log/iphone">App Store</a> that was two years old.</p>

      <p>It sold. People I have never met paid money for something I made alone
      in the evenings, which had not happened to me before.</p>

      <p>It lasted a month. Weight Watchers' lawyers wrote to me, I read the
      letter, and I took it down. They were right. The formula was theirs, the
      name was theirs, and I had built the thing on both without spending a
      single minute thinking about it.</p>

      <p>The cheapest legal education available, and I recommend it.
      What I actually learned was not about trademark. It was that "there is
      obviously demand for this" and "I am allowed to sell this" are unrelated
      questions, and I had only asked the first one. I have asked both ever since. Most of what separates a side project from a business is that second question.</p>

      <p>Objective-C taught me the other half. A missed release is a leak, an
      extra one is a crash, and there is no reload button between you and the
      person who bought it. Five years later I was
      <a href="/log/hand-whittled">running a studio</a> shipping iOS and Apple TV
      work, and the line from one to the other is straight.</p>
    `,
  },
  {
    id: 'ipad',
    year: 2010,
    date: '2010-04-03',
    track: 'tech',
    title: 'The iPad',
    dek: 'A third screen size, arriving exactly when the industry had finished arguing about the second one.',
    tags: ['apple', 'mobile'],
  },
  {
    id: 'responsive-web-design',
    year: 2010,
    date: '2010-05-25',
    track: 'tech',
    title: '“Responsive Web Design”',
    dek: 'Ethan Marcotte publishes three techniques and one idea in A List Apart, and the whole industry re-tools inside two years.',
    tags: ['css', 'design', 'standards'],
    feature: true,
    body: `
      <p>Fluid grids, flexible images, media queries. The techniques were already
      possible; what the article did was give people permission to stop making a
      separate mobile site, and a name to put on the invoice.</p>
      <p>Nothing in my career shows more cleanly that a well-written argument can do more than a specification. The spec had shipped. Nobody moved until
      somebody explained why.</p>
    `,
    links: [
      { href: 'https://alistapart.com/article/responsive-web-design/', label: 'The article' },
    ],
  },
  {
    id: 'thoughts-on-flash',
    year: 2010,
    date: '2010-04-29',
    track: 'tech',
    title: '“Thoughts on Flash”',
    dek: 'An open letter ends a platform, and takes a decade of interactive craft with it.',
    tags: ['flash', 'apple'],
    feature: true,
    body: `
      <p>An open letter from a chief executive, posted on a company's own
      website, that ended a platform. The technical arguments were largely right:
      Flash was a battery fire on a phone, it was a standing security surface,
      and it put a single vendor's runtime between the web and everybody using
      it. The <a href="/log/iphone">iPhone</a> was by then big enough that
      declining to support something was indistinguishable from banning it.</p>

      <p>What the letter is silent about is what went with it. Flash was where a
      decade of interactive craft lived: motion, timing, sound, games, the whole
      working vocabulary of things happening on a page. Most of that work is
      now simply unplayable. The people who made it largely had to become
      something else.</p>

      <p>The web did eventually grow its own version of nearly all of it, which
      is the argument the last chapter of this page makes. It took about fifteen
      years, and I learned the craft
      <a href="/log/hillman-curtis">from a book about the plugin</a>.</p>
    `,
  },
  {
    id: 'inception',
    year: 2010,
    date: '2010-07-16',
    track: 'world',
    title: 'Inception',
    dek: 'A film about nested state and an exit condition. Everybody argues about the last frame.',
    tags: ['film'],
  },
  {
    id: "katrina",
    year: 2005,
    date: "2005-08-29",
    track: "world",
    title: "Hurricane Katrina",
    dek: "The levees fail and a city goes under. Watched from a desk a thousand miles away, reloading.",
    tags: ["news"],
  },
  {
    id: "lehman",
    year: 2008,
    date: "2008-09-15",
    track: "world",
    title: "Lehman Brothers files",
    dek: "The largest bankruptcy in United States history, more than six hundred billion dollars in assets, and the Dow down five hundred points the same day.",
    tags: ["news"],
  },
  {
    id: "braid",
    year: 2008,
    track: "play",
    title: "Braid",
    dek: "One developer, a rewind button, and a puzzle game whose mechanic is time itself. The independent wave starts about here.",
    tags: ["indie"],
  },
  {
    id: "super-meat-boy",
    year: 2010,
    track: "play",
    title: "Super Meat Boy",
    dek: "Two people, a thousand deaths an evening, and controls tight enough that every one of them is your own fault.",
    tags: ["indie"],
  },
];
