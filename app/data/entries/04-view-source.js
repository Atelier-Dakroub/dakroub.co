// 1997 – 2003

/** @typedef {import('../types.js').Entry} Entry */

/** @type {Entry[]} */
export const entries = [
  {
    id: "html-4",
    year: 1999,
    date: "1999-12-24",
    track: "tech",
    title: "HTML 4.01",
    dek: "The version the web actually ran on for the next fifteen years. Presentation is formally somebody else's job now, which is the whole argument of the following decade.",
    tags: ["html", "standards", "css"],
    links: [{ href: "https://www.w3.org/TR/html401/", label: "The recommendation" }],
    body: `
      <p>HTML 3.2 in January 1997 was the first version the W3C wrote on its
      own, and it standardised the mess: <code>font</code>, <code>center</code>,
      the attributes everybody was already using. HTML 4.0 arrived eleven months
      later and started taking them back, deprecating presentation in favour of
      stylesheets. 4.01 is the tidy-up, on Christmas Eve 1999.</p>

      <p>Then nothing, for fifteen years. This is the document I built against
      for most of my career, and the reason
      <a href="/log/switch-to-standards">deleting the tables</a> in 2004 was
      possible at all: the separation everybody argued about in the mid-2000s
      had already been written down in 1997. It just took the browsers, and the
      people writing the pages, another seven years to mean it.</p>
    `,
  },
  {
    id: "jobs-returns",
    year: 1997,
    date: "1997-07",
    track: "tech",
    title: "Apple buys NeXT, and Jobs comes back",
    dek: "The operating system Apple could not write arrives as an acquisition, with a whole design philosophy attached.",
    tags: ["apple"],
  },
  {
    id: "deep-blue",
    year: 1997,
    date: "1997-05-11",
    track: "world",
    title: "Deep Blue beats Kasparov",
    dek: "A machine wins a match against a world champion, and the argument about what that proves starts immediately.",
    tags: ["ai"],
  },
  {
    id: "ultima-online",
    year: 1997,
    date: "1997-09-24",
    track: "play",
    title: "Ultima Online",
    dek: "A shared world with an economy, a housing shortage and a crime problem. Everything a persistent world would ever be, in the first year.",
    tags: ["mmo", "origin"],
  },
  {
    id: "bfa",
    year: 1999,
    track: "learn",
    title: "A Bachelor of Fine Arts in music performance",
    dek: "University of Michigan – Flint, with a minor in technical writing. Both halves turned out to be the job.",
    where: "Flint, Michigan",
    tags: ["music", "writing", "education"],
    feature: true,
    body: `
      <p>Not a computer science degree. A performance degree in alto saxophone,
      the instrument I had been studying since
      <a href="/log/clarkston-high">school</a>. Four years of being
      told in public that the thing you made is not finished yet, by somebody
      whose job is to be right about it. Nothing has prepared me better for design critique, and I did not know that at the time.</p>

      <p>The minor was technical writing, which is the other half of what I do
      for a living. Documentation, design docs, the memo that settles an
      argument. The two things I was formally trained in are performing in front
      of people and explaining something in writing, and twenty-odd years later
      they are most of the job.</p>
    `,
  },
  {
    id: "red-hat",
    year: 1997,
    track: "learn",
    title: "Red Hat 4, from a shelf at Best Buy",
    dek: "A boxed copy of Linux, installed on the clone PC, and no idea what to do with it. It held my attention for years anyway.",
    tags: ["linux", "open source"],
    feature: true,
    spec: [
      { label: "Bought", value: "Best Buy, in a box" },
      { label: "Version", value: "Red Hat Linux 4" },
      { label: "Installed on", value: "A clone PC" },
      { label: "Immediate use", value: "None whatsoever" },
    ],
    body: `
      <p>You could buy <a href="/log/linux-0-01">Linux</a> in a box at Best Buy,
      on a shelf near the games. That is a strange sentence now and it was a
      stranger one then. I bought Red Hat 4, carried it home, and put it on the
      clone PC.</p>

      <p>Then I sat there. I had no idea what to do with it. Nothing I owned
      needed a server, I had no network worth the name, and every answer I found
      assumed I already knew the question. I would boot it, look at it, and boot
      back into something that let me get on with the evening.</p>

      <p>It kept my attention for years regardless, and I understand why now in a
      way I did not then. The machine had gone transparent. Every part of it was
      a file I could open, every process had a name, and nothing was hidden
      because somebody had decided I should not see it.
      <a href="/log/osx">Mac OS X</a> is what finally made that usable for me
      four years later, but the appetite started with a cardboard box off a shop
      shelf.</p>
    `,
  },
  {
    id: "imac",
    year: 1998,
    date: "1998-08-15",
    track: "tech",
    title: "The iMac G3",
    dek: "Bondi blue, translucent, no floppy drive, and USB only. A consumer computer as an argument about the future.",
    tags: ["apple", "design", "hardware"],
  },
  {
    id: "google",
    year: 1998,
    date: "1998-09-04",
    track: "tech",
    title: "Google",
    dek: "A search box on a white page, in a decade committed to portals. The restraint is the product.",
    tags: ["search"],
  },
  {
    id: "wasp",
    year: 1998,
    date: "1998-08",
    track: "tech",
    title: "The Web Standards Project",
    dek: "A group of working designers decides to lobby browser vendors directly. It works.",
    tags: ["standards", "web"],
    feature: true,
    body: `
      <p>By 1998 building a site meant building two of them, sniffing the user
      agent and shipping whichever one would not fall over. WaSP made the case
      that this was a choice browser makers were making and that it could be
      unmade, and over about six years it was.</p>
      <p>I know of no clearer case of practitioners organizing and changing the platform they work on. Not a standards body, not a vendor. The people
      doing the work.</p>
    `,
  },
  {
    id: "half-life",
    year: 1998,
    date: "1998-11-19",
    track: "play",
    title: "Half-Life",
    dek: "No cutscenes, no camera taken away from you, and a tram ride that teaches you the whole game.",
    tags: ["valve", "fps"],
  },
  {
    id: "y2k",
    year: 1999,
    track: "work",
    title: "Y2K, one plant at a time",
    dek: "A year of driving to factories to upgrade every machine in them to Office 2000 and apply the patches. The disaster that did not happen did not happen because of work like this.",
    where: "Michigan",
    tags: ["y2k", "windows", "client work"],
    feature: true,
    spec: [
      { label: "For", value: "LDM Technologies" },
      { label: "When", value: "All of 1999" },
      { label: "Where", value: "Several plants, across Michigan" },
      { label: "The rollout", value: "Office 2000, machine by machine" },
    ],
    body: `
      <p>I spent 1999 in a car. LDM had plants across Michigan, every one of
      them had computers in the offices and on the floor, and every one of those
      machines had to be looked at before the year ended. Drive out, work
      through the room, write down what was on it and what version it was now,
      drive back. Then the next plant.</p>

      <p>The job itself was not hard. Upgrade to Office 2000, which Microsoft
      had put on shelves that June with improved compliance with the year 2000
      problem as a headline feature. Apply the patches. Check the clock. Next
      machine.</p>

      <p>I put patches in quotation marks when I talk about this, because a fair
      number of them were exactly that: a vendor's assurance inside an
      installer, applied to software nobody at the company could read, verified
      by rebooting and looking at a date. You took a lot of it on faith. Nobody
      had a way not to.</p>

      <p>Y2K gets remembered as the disaster that did not happen, which is a
      strange way to describe a year in which a very large number of people
      drove to a very large number of buildings and fixed things one machine at
      a time. Nothing happened because of that, not in spite of it. It is the
      only industry-wide software problem I have watched us get in front of, and
      the reward for getting in front of it was that everyone decided afterward
      it had never been real.</p>

      <p>The <a href="/log/ldm-intranet">intranet</a> came the year after, once
      there was a network worth putting something on.</p>
    `,
  },
  {
    id: "ldm-intranet",
    year: 2000,
    track: "work",
    title: "An intranet for LDM Technologies",
    dek: "FrontPage 2000, tables nested four deep, and the first thing I built that a company actually depended on.",
    where: "Michigan",
    tags: ["html", "intranet", "client work"],
    feature: true,
    body: `
      <p>The first significant thing I built for an employer: an intranet for LDM
      Technologies, an automotive supplier. FrontPage 2000, tables for layout,
      spacer GIFs holding the columns apart, and in places four levels of nesting
      to get one row of boxes to line up in both browsers.</p>

      <p>It is easy to be superior about that now. It was the only way. A layout
      was a spreadsheet you had sliced a Photoshop comp into, and the craft was
      entirely in knowing which cell would collapse and why. A whole generation
      learned the box model in its bones like this, by being punished by it
      weekly.</p>

      <p>What it actually taught me was not HTML. It was that software people
      rely on is a different thing from software people admire, and the
      difference is mostly that it keeps working on the machine they already
      have.</p>
    `,
  },
  {
    id: "trouble-with-trash",
    year: 1998,
    track: "make",
    title: "A soundtrack for The Trouble with Trash",
    dek: "I wrote the music for a PBS documentary while I was at Flint. It is the only thing on this page you can hear.",
    where: "Flint, Michigan",
    tags: ["music", "film", "pbs"],
    feature: true,
    spec: [
      { label: "Film", value: "The Trouble with Trash" },
      { label: "Co-authored by", value: "Cynthia Nill" },
      { label: "Broadcast", value: "PBS" },
      { label: "My part", value: "The soundtrack" },
      { label: "Written at", value: "University of Michigan – Flint" },
    ],
    body: `
      <p>While I was at <a href="/log/bfa">Flint</a> I wrote the soundtrack for
      The Trouble with Trash, an independent children's film for PBS
      co-authored by Cynthia Nill, an alumna of the same university.</p>

      <p>Scoring to picture is a constraint problem before it is a musical one.
      The cue is however long the scene is. The mood is whatever the scene is
      already doing. You are not writing the piece you would like to write, you
      are writing the one that fits, and the brief keeps changing because the
      edit keeps changing.</p>

      <p>Every job I have had since has been that job. A design serves the
      content and the content moves. A component serves a screen you have not
      seen yet. The skill is not having an idea, it is having one that survives
      contact with everybody else's.</p>

      <p>It is also, so far, the only thing I have made that you can hear.</p>
    `,
  },
  {
    id: "beos",
    year: 1999,
    date: "1999-06",
    track: "learn",
    title: "Two years on BeOS",
    dek: "The operating system Apple nearly bought instead of NeXT. I ran it as my daily machine, which in 1999 put me in a very small room.",
    tags: ["beos", "operating systems"],
    feature: true,
    links: [
      { href: "https://www.haiku-os.org", label: "Haiku, which continues it" },
    ],
    spec: [
      { label: "By", value: "Be Inc., founded by Jean-Louis Gassée" },
      { label: "On a PC from", value: "March 1998 \u00b7 R3" },
      { label: "Filesystem", value: "BFS, 64-bit, journaling" },
      { label: "Ran it", value: "About two years, until Mac OS X" },
    ],
    body: `
      <p>Jean-Louis Gassée ran product at Apple before he founded Be. In 1996
      Apple came close to buying the company back: Gil Amelio wanted it, Gassée
      wanted three hundred million dollars, Apple offered a hundred and
      twenty-five, and the board took NeXT instead. That decision is the reason <a href="/log/osx">Mac OS X</a>
      exists. It also left BeOS as the best operating system nobody was going to
      preinstall on anything.</p>

      <p>I ran it anyway, for about two years, on the same clone PC where
      <a href="/log/red-hat">Red Hat</a> had sat proving I did not know what to
      do with it. BeOS was the opposite of that. I knew what to do with it the
      first evening. It booted in seconds. Every window ran in its own thread,
      so the interface did not freeze because something behind it was busy,
      which was not the ordinary experience of a computer in 1999. It had a
      64-bit journaling filesystem while the machine next to it was still
      keeping its files on FAT32.</p>

      <p>Choosing it meant choosing to be alone with it. No Photoshop, no
      Office, no games, and nobody at work who had heard of it. Every file I
      needed to hand to somebody else had to leave through a format we both
      understood. That is a real cost and I paid it for two years, because the
      thing was so obviously better built than what I was supposed to be using
      that going back felt like an argument I was losing on purpose.</p>

      <p>It ended the way it had to. Be sold its assets to Palm in 2001, and by
      then <a href="/log/osx">Mac OS X</a> had arrived with Unix underneath and
      a real graphical system on top, which is the trade BeOS had been offering
      me without the loneliness. I have never entirely stopped comparing things
      to it.</p>
    `,
  },
  {
    id: "everquest",
    year: 1999,
    date: "1999-03-16",
    track: "play",
    title: "EverQuest",
    dek: "The first 3D world enough people lived in to have a folklore. Also the first to eat a year.",
    tags: ["mmo"],
  },
  {
    id: "the-matrix",
    year: 1999,
    date: "1999-03-31",
    track: "world",
    title: "The Matrix",
    dek: "Green characters falling down a black screen become the universal shorthand for a computer doing something.",
    tags: ["film"],
  },
  {
    id: "napster",
    year: 1999,
    date: "1999-06",
    track: "tech",
    title: "Napster",
    dek: "A college student writes a file-sharing client and an entire industry has to be rebuilt around it.",
    tags: ["internet"],
  },
  {
    id: "dot-com-crash",
    year: 2000,
    date: "2000-03-10",
    track: "world",
    title: "The dot-com peak, and then the floor",
    dek: "The NASDAQ tops out in March and loses most of it. A lot of people find out what they actually do for a living.",
    tags: ["business"],
    body: `
      <p>The NASDAQ topped out in March and gave most of it back, and a lot of
      people found out what they actually did for a living.</p>

      <p>I was at <a href="/log/ldm-intranet">LDM Technologies</a>, which was not
      a dot-com and so did not go under. It simply stopped spending: tight
      budgets and no expansion for a couple of years. At the time that felt like
      nothing happening. In hindsight it was the most useful stretch of the
      decade, because you learn more from being told no than from being handed a
      budget.</p>
    `,
  },
  {
    id: "the-sims",
    year: 2000,
    date: "2000-02-04",
    track: "play",
    title: "The Sims",
    dek: "A dollhouse with a needs simulation. It outsells everything and half the players never build a house.",
    tags: ["maxis", "simulation"],
  },
  {
    id: "diablo-ii",
    year: 2000,
    date: "2000-06-29",
    track: "play",
    title: "Diablo II",
    dek: "The loot loop, tuned. Twenty-five years later people still play the same act one.",
    tags: ["blizzard", "rpg"],
  },
  {
    id: "first-mac",
    year: 2001,
    date: "2001-03",
    track: "machine",
    title: "A Graphite iMac G3, Special Edition",
    dek: "The first Mac. Translucent gray, a handle on the top I never needed and always used, and a Unix machine underneath it by March.",
    tags: ["apple", "hardware", "mac"],
    feature: true,
    spec: [
      { label: "Model", value: "iMac G3, Special Edition" },
      { label: "CPU", value: "PowerPC G3 · 600 MHz" },
      { label: "RAM", value: "128 MB" },
      { label: "Storage", value: "40 GB, and a CD burner" },
      { label: "Display", value: "15-inch CRT · 1024 × 768" },
      { label: "Color", value: "Graphite" },
      { label: "Price", value: "$1,499" },
    ],
    body: `
      <p>I had wanted a Mac for about two years, and what I actually wanted was
      the Cube: eight inches of acrylic with a computer suspended inside it,
      still the most beautiful object this industry has produced and one that
      almost nobody bought.</p>

      <p>What finally made me switch was not the hardware. It was
      <a href="/log/osx">Mac OS X</a>, and I bought on the day it came out. BSD
      underneath, a compositor on top, and a terminal on the same machine as
      Photoshop. Before that you chose: a Unix workstation ran your tools and a
      Mac ran your type, and the two lived on different desks.</p>

      <p>So the Cube stayed in the shop window and I took home a Graphite iMac,
      the 600 MHz Special Edition, with a handle on top I did not need and used
      anyway.</p>

      <p>Every machine I have worked on since has assumed that arrangement. I
      have not had one where the shell and the typography were in different
      rooms, and I would not take a job that put them back.</p>
    `,
  },
  {
    id: "mcallister",
    year: 2001,
    until: "now",
    track: "work",
    title: "Twenty-five years with Timothy McAllister",
    dek: "Design and development for a concert saxophonist, through every era of the web on this page. The longest working relationship I have.",
    tags: ["music", "design", "collaboration"],
    feature: true,
    links: [
      { href: "https://timothymcallister.com", label: "timothymcallister.com" },
      { href: "/projects/timothy-mcallister", label: "The project" },
    ],
    body: `
      <p>A quarter of a century of design and development for one person: a
      concert saxophonist whose career has run alongside mine the entire
      time.</p>

      <p>Five versions of his site, and you can date the web off them. The first
      ran on ASP against an Access database, because in 2001 that is what a small
      site with content in it ran on. The most recent runs on a CMS I wrote, on
      <a href="/log/transclude">transclude</a>, on Cloudflare Workers. In
      between: the Expression Engine rebuild, the responsive one, and a Statamic build
      that took its performance up by half again.</p>

      <p>It is the only thread here that touches all of it. Same collaborator,
      same brief, what does a person looking up a musician actually need, and
      thirty browsers in between.</p>

      <p>It is also where the music degree and the engineering meet, and that is
      less of a coincidence than it looks. I played the saxophone myself,
      studied it from <a href="/log/clarkston-high">school</a> and
      <a href="/log/bfa">took a performance degree in it</a>, so I know what a
      recital program is for, and what a performer actually needs a page to do on
      the morning of a concert. You do not pick that up from a brief.</p>
    `,
  },
  {
    id: "hillman-curtis",
    year: 2001,
    track: "learn",
    title: "Learning Flash from Hillman Curtis",
    dek: "Flash Web Design: The V5 Remix. He was arguing for design thinking in a medium everybody else was using to show off.",
    tags: ["flash", "design", "motion", "books"],
    feature: true,
    spec: [
      { label: "Book", value: "Flash Web Design · The V5 Remix" },
      { label: "Author", value: "Hillman Curtis · 1961–2012" },
      { label: "First edition", value: "2000" },
      { label: "Taught", value: "Motion as a design material" },
    ],
    body: `
      <p>Flash in 2001 was where all the interesting work on the web was
      happening, and most of it was showing off. Preloaders with more craft in
      them than the site behind them. Intros you had to sit through. Skip buttons
      nobody really meant.</p>

      <p>Hillman Curtis's book was the one that was not about any of that. He
      wrote about motion the way a good designer writes about type: as a material
      with rules. Timing, easing, sequence, restraint. What a thing entering the
      screen tells you, and what it costs you to make somebody wait. He had built
      the first website to run on the Flash plugin back in 1996 and had spent
      five years working out what it was actually for.</p>

      <p>I learned Flash from that book, and what I actually learned was that
      animation is not decoration. It is a way of explaining a change. Every
      piece of motion on this page is that idea with different tools: an entry
      rising as it comes into view, a chapter heading morphing into the page it
      opens. No timeline library, no plugin, and the same question underneath it.
      What is this movement telling somebody?</p>

      <p>Flash is gone, and <a href="/log/thoughts-on-flash">the letter that
      ended it</a> was right on the technical merits while throwing away a decade
      of craft on its way past. Curtis died in 2012, at fifty-one. A good deal of
      what I know about motion came from a man who wrote four books about a
      plugin and then went and made films instead.</p>
    `,
  },
  {
    id: "ipod",
    year: 2001,
    date: "2001-10-23",
    track: "tech",
    title: "The iPod",
    dek: "A thousand songs, a scroll wheel and a hierarchy you can hold. The interface is the product.",
    tags: ["apple", "design", "hardware"],
    feature: true,
    spec: [
      { label: "Released", value: "October 23, 2001" },
      { label: "Capacity", value: "5 GB · a thousand songs" },
      { label: "Interface", value: "One wheel, one button, one hierarchy" },
      { label: "Mine", value: "The first one" },
    ],
    body: `
      <p>I had the first one, and for a while I was the only person I knew
      carrying a thousand songs around. That sounds like a small thing now. At
      the time the alternative was a CD wallet, and the question of what music
      you would be near for the next eight hours was a decision you made in the
      morning.</p>

      <p>The wheel is what the thing was actually for. A list of a thousand items
      is unusable with buttons, and Apple's answer was an input whose speed
      accelerates with your thumb, one gesture that scales from the next track
      to the far end of the library. The hardware existed to make the hierarchy
      navigable. Interface design decided what got manufactured, which happens less often than it should.</p>
    `,
  },
  {
    id: "wikipedia",
    year: 2001,
    date: "2001-01-15",
    track: "tech",
    title: "Wikipedia",
    dek: "An encyclopedia anyone can edit, which should not work.",
    tags: ["internet"],
  },
  {
    id: "to-hell-with-bad-browsers",
    year: 2001,
    date: "2001-02-16",
    track: "tech",
    title: "“To Hell With Bad Browsers”",
    dek: "A List Apart drops support for browsers that will not do CSS, and a lot of shops follow within a year.",
    tags: ["standards", "css"],
    links: [
      {
        href: "https://alistapart.com/article/tohell/",
        label: "The article, still online",
      },
    ],
  },
  {
    id: "osx",
    year: 2001,
    date: "2001-03-24",
    track: "tech",
    title: "Mac OS X 10.0",
    dek: "Unix underneath, Aqua on top, and a terminal on a machine that also runs Photoshop.",
    tags: ["apple"],
    body: `
      <p>Fifteen years of Apple failing to replace its own operating system, and
      then NeXT arrived in the acquisition and did it for them. What shipped in
      March 2001 was slow, half-finished, and the most consequential desktop
      release of my working life: BSD underneath, a compositor on top, and a
      terminal on the same machine as Photoshop.</p>

      <p>Before this you chose. A Unix workstation ran your tools and a Mac ran
      your type, and the two lived on different desks. Afterwards the argument
      about whether design and engineering are one job stopped having a hardware
      excuse.</p>

      <p>I stood in line for every release of it you had to pay for. 10.0
      through Snow Leopard, a box and a disc and a queue outside a shop, roughly
      every eighteen months for most of a decade. Then Lion arrived in the Mac
      App Store for twenty-nine dollars and there was nothing to queue for ever
      again. I do not think I have entirely forgiven that.</p>
    `,
  },
  {
    id: "phoenix-firefox",
    year: 2002,
    date: "2002-09-23",
    track: "tech",
    title: "Phoenix 0.1",
    dek: "A small, fast browser carved out of the Mozilla suite. It gets renamed twice and ends the browser war.",
    tags: ["browser", "mozilla"],
  },
  {
    id: "css-zen-garden",
    year: 2003,
    date: "2003-05-07",
    track: "tech",
    title: "The CSS Zen Garden",
    dek: "One HTML file, hundreds of designs, no markup changed. The argument for separation of concerns, made in pictures.",
    tags: ["css", "design", "standards"],
    feature: true,
    body: `
      <p>Dave Shea published a page and invited anyone to restyle it, with the
      single rule that the HTML was fixed. What came back proved a claim that
      until then had only been made in prose: that the same document could be a
      newspaper, a poster, a garden or a circuit board, and that the difference
      was entirely in the stylesheet.</p>
      <p>Every designer who was working then can name a Zen Garden entry. No piece of technical advocacy the web has produced has worked better.</p>
    `,
    links: [{ href: "https://csszengarden.com/", label: "csszengarden.com" }],
  },
  {
    id: "safari",
    year: 2003,
    date: "2003-01-07",
    track: "tech",
    title: "Safari 1.0",
    dek: "Apple forks KHTML into WebKit. That engine ends up in every phone on earth.",
    tags: ["apple", "browser"],
  },
  {
    id: "wordpress-steam",
    year: 2003,
    track: "tech",
    title: "WordPress and Steam, four months apart",
    dek: "Publishing without a publisher, and buying a game without a shop. Two distribution problems solved in one year.",
    tags: ["web", "games"],
  },
  {
    id: "september-11",
    year: 2001,
    date: "2001-09-11",
    track: "world",
    title: "September 11",
    dek: "The news sites went over and came back stripped to plain text, because plain text was what could still be served.",
    tags: ["news"],
    body: `
      <p>I do not have anything to add to what that day was. What I remember
      from the desk is small and it is the only part that belongs on this page:
      the web could not carry it.</p>

      <p>Every large news site went down under the traffic at once. What came
      back, over the following hours, was plain text. No layout, no images,
      headlines and paragraphs on a white page, because that was what the
      servers could still deliver to everybody asking. For one day the whole web
      looked like the thing it had been five years earlier.</p>

      <p>It is the clearest demonstration I have seen of what a page costs. The
      fastest, most available version of a website is the one with nothing on it
      but the words, and it takes an emergency for anyone to ship it.</p>
    `,
  },
  {
    id: "columbia",
    year: 2003,
    date: "2003-02-01",
    track: "world",
    title: "Columbia",
    dek: "The orbiter that flew the first shuttle mission in 1981 breaks up over Texas coming home, with seven aboard.",
    tags: ["space"],
  },
];
