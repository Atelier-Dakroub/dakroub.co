// 1991 – 1996

/** @typedef {import('../types.js').Entry} Entry */

/** @type {Entry[]} */
export const entries = [
  {
    id: "html-2",
    year: 1995,
    date: "1995-11-24",
    track: "tech",
    title: "HTML 2.0",
    dek: "RFC 1866. Four years after the first eighteen tags, the language everybody was already writing finally has a specification to be wrong about.",
    tags: ["html", "standards"],
    links: [{ href: "https://www.rfc-editor.org/rfc/rfc1866", label: "RFC 1866" }],
    body: `
      <p>Berners-Lee described eighteen elements in 1991 and the web spent four
      years growing on top of a document that was closer to release notes than
      to a standard. RFC 1866 is the first time HTML is written down as a thing
      with rules, published through the IETF rather than the W3C, which had only
      existed a year.</p>

      <p>It is a small document by later standards and it is already behind the
      browsers. Netscape had been shipping tags nobody had agreed on for two
      years by then, which is the pattern the next decade runs on: the vendors
      ship, the spec catches up, and whoever writes the pages pays the
      difference.</p>
    `,
  },
  {
    id: "visual-basic-1",
    year: 1991,
    date: "1991-05",
    track: "tech",
    title: "Visual Basic 1.0",
    dek: "Drag a button onto a form, double-click it, write the code that runs when it is pressed. Millions of programs start here.",
    tags: ["microsoft", "basic"],
  },
  {
    id: "linux-0-01",
    year: 1991,
    date: "1991-08-25",
    track: "tech",
    title: "“just a hobby, won’t be big and professional like gnu”",
    dek: "Linus Torvalds posts to comp.os.minix. It is currently running most of the internet.",
    tags: ["linux", "open source"],
    feature: true,
    body: `
      <p>Linus Torvalds posted it to comp.os.minix in August 1991. A free
      operating system, "just a hobby, won't be big and professional like gnu."
      Both halves of that sentence turned out to be wrong in the most useful
      possible direction.</p>

      <p>What mattered was the license it settled on a few months later. The
      kernel was not only free to read, it was free to change and to ship
      changed, and anyone who shipped changes had to pass the same freedom along.
      That one condition is why thirty-five years of work by people who never met
      is a single operating system rather than a thousand incompatible
      forks.</p>

      <p>Six years after the post I bought a copy of it
      <a href="/log/red-hat">in a box at Best Buy</a>, which is a sentence
      nobody reading comp.os.minix in 1991 could have written either.</p>
    `,
  },
  {
    id: "www-public",
    year: 1991,
    date: "1991-08-06",
    track: "tech",
    title: "The World Wide Web goes public",
    dek: "One Usenet post, one server, one browser, and a page explaining what a page is.",
    tags: ["web"],
    feature: true,
    links: [
      {
        href: "https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt",
        label: "The post, as archived by the W3C",
      },
      {
        href: "http://info.cern.ch/hypertext/WWW/TheProject.html",
        label: "The project page it pointed at",
      },
    ],
    body: `
      <p>It was not an announcement. It was a reply.</p>

      <p>On the sixth of August 1991, in a thread on alt.hypertext called
      <em>Qualifiers on Hypertext links</em>, somebody asked whether anyone was
      working on hypertext link research. Tim Berners-Lee answered, described a
      project for making links to any information anywhere, named the NeXT editor
      and the line-mode browser he had built, and mentioned a protocol he had
      written for it. Then he gave out the address.</p>

      <p>The whole thing was a document format, an addressing scheme and a
      protocol, and none of the three needed permission from anyone. There was no
      company, no client library and no build step. You wrote a file, you put it
      somewhere, and it had a URL.</p>

      <p>Everything that has happened to the web since has been an argument about
      whether that was enough. I have been on both sides of it and I have come
      back around.</p>
    `,
  },
  {
    id: "quickbasic",
    year: 1991,
    track: "make",
    title: "QuickBASIC, and SCREEN 13",
    dek: "Mouse-driven menus and panels, built years before I knew there was a word for them.",
    tags: ["basic", "dos"],
    feature: true,
    body: `
      <p>I had been writing QuickBASIC since
      <a href="/log/roger-wilco">I was eleven</a>. What made it the thing I
      lived in was one instruction. <code>SCREEN 13</code> gave you
      320 × 200 in 256 colors, the mode the
      <a href="/log/ps2-model-30">PS/2</a> had introduced me to, from a language
      that compiled to an <code>.EXE</code> you could hand to somebody. Line
      numbers were gone, <code>SUB</code> and <code>FUNCTION</code> had arrived,
      and a program stopped being something you had and became something you
      could give away.</p>

      <p>What I actually built with it was interfaces. Menus you drove with a
      mouse, buttons that looked pressed, panels that opened over other panels,
      all of it drawn a pixel at a time, because there was nothing to draw them
      for me and no convention to copy.</p>

      <p>I did not know the word for any of that. I would not hear "UI" for
      years, and I would not hear "design engineer" for about thirty. Same job. I have simply had better tools since.</p>
    `,
  },
  {
    id: "first-cd-rom",
    year: 1991,
    track: "play",
    title: "Mixed-Up Mother Goose, on CD-ROM",
    dek: "The school library had the drive. They let me bring the disc in for an hour, and no other student got a turn.",
    tags: ["sierra", "cd-rom", "adventure"],
    feature: true,
    spec: [
      { label: "Published", value: "Sierra On-Line · 1991" },
      { label: "Designed by", value: "Roberta Williams" },
      { label: "Notable", value: "The first multimedia PC game on CD-ROM" },
      { label: "Where", value: "The school library" },
      { label: "Time allowed", value: "One hour" },
    ],
    body: `
      <p>The first CD-ROM I ever used was in a school library, and the disc was
      Mixed-Up Mother Goose: <a href="/log/kings-quest">Roberta Williams</a>'s
      game for small children, which in its 1991 edition was the first
      multimedia PC game released on CD-ROM. Every nursery rhyme sung, every
      character given a voice, six hundred megabytes where a floppy held about a
      fifth of one percent of that.</p>

      <p>They let me bring it in and use the drive for an hour. No other student
      got to do that, which I took at the time to be a favor and understand now
      to be a librarian correctly identifying the one kid who would still be
      talking about it in his fifties.</p>

      <p>What the CD-ROM actually promised was not more game. It was that the
      medium had stopped being the constraint. Everything before it was designed
      around how little would fit: sixteen colors, 128 bytes, four pages of
      listing. This was the first time I saw a computer with room to spare.
      The industry then spent five years discovering that space on its own is not
      an idea. <a href="/log/myst">Myst</a> is what it looked like when somebody
      finally had one.</p>
    `,
  },
  {
    id: "nevermind",
    year: 1991,
    date: "1991-09-24",
    track: "world",
    title: "Nevermind",
    dek: "The decade changes key.",
    tags: ["music"],
  },
  {
    id: "wolfenstein-3d",
    year: 1992,
    date: "1992-05-05",
    track: "play",
    title: "Wolfenstein 3D",
    dek: "Ray casting on a 286. It is not really 3D and it does not matter.",
    tags: ["id software", "fps"],
  },
  {
    id: "ultima-vii",
    year: 1992,
    track: "play",
    title: "Ultima VII: The Black Gate",
    dek: "Every object in the world can be picked up, put in a bag, and baked into bread. A simulation wearing a story.",
    tags: ["rpg", "origin"],
  },
  {
    id: "mosaic",
    year: 1993,
    date: "1993-04-22",
    track: "tech",
    title: "NCSA Mosaic",
    dek: "Inline images and a back button. The web stops being a physics department tool in about six months.",
    tags: ["web", "browser"],
  },
  {
    id: "doom",
    year: 1993,
    date: "1993-12-10",
    track: "play",
    title: "Doom",
    dek: "Uploaded to an FTP server at the University of Wisconsin at midnight. The server falls over. Shareware wins.",
    tags: ["id software", "fps"],
    feature: true,
    body: `
      <p>Doom shipped its data separately from its engine, which meant the WAD
      file was a format anyone could write a tool for, and people immediately
      did. Level editors, sprite editors, and a modding culture that predates
      every platform built to encourage one.</p>
      <p>Doom is the first game I can point at and say: the reason it lasted is
      that the authors made the data legible. An architecture decision, not a marketing one.</p>
    `,
  },
  {
    id: "myst",
    year: 1993,
    date: "1993-09-24",
    track: "play",
    title: "Myst",
    dek: "HyperCard stacks, QuickTime, and 2,500 pre-rendered images on a CD-ROM. It sells the drive.",
    tags: ["adventure", "cd-rom"],
    feature: true,
    body: `
      <p>Two brothers, a Macintosh, and
      <a href="/log/hypercard">HyperCard</a>. Myst was built in the stack that
      shipped free with the computer, cards and buttons and links between them, with
      QuickTime for the movement and 2,500 pre-rendered images doing the rest.
      The best-selling game of the decade was made in the tool Apple gave
      away.</p>

      <p>It also answered the question the CD-ROM had been asking since
      <a href="/log/first-cd-rom">the library</a>. Space is not an idea. What
      Myst had instead was restraint: no inventory, no way to die, no dialogue,
      no score and almost no text. An island, and the assumption that you would
      pay attention.</p>

      <p>It sold the drives. For most of the decade it was the best-selling PC
      game there was, and for a lot of households it was the entire reason there
      was a CD-ROM in the machine.</p>
    `,
  },
  {
    id: "jurassic-park",
    year: 1993,
    date: "1993-06-11",
    track: "world",
    title: "Jurassic Park",
    dek: "Computer graphics stop being a visual effect and start being a photograph of something that is not there.",
    tags: ["film", "cgi"],
  },
  {
    id: "first-modem",
    year: 1994,
    track: "machine",
    title: "Two modems in one year",
    dek: "A handshake that sounded like an argument, and an upgrade inside twelve months because the thing on the other end kept getting bigger.",
    tags: ["modem", "internet"],
    feature: true,
    spec: [
      { label: "First", value: "2400 baud" },
      { label: "Then", value: "28.8k" },
      { label: "Both in", value: "1994" },
    ],
    body: `
      <p>Two modems in one year, twelve times faster at the end of it than at the
      start, which tells you more about 1994 than anything else I could write
      down. The first one was slow enough that you watched text arrive a line at
      a time. I replaced it before the year was out, because whatever was on the
      other end had stopped being text.</p>

      <p>The sound is the part nobody who missed it can be made to understand:
      thirty seconds of a machine negotiating with another machine, out loud, in
      the room, while you waited. It was the last time a computer told you what
      it was doing without being asked.</p>

      <p>Netscape Navigator shipped that October. The two facts are the same
      fact.</p>
    `,
  },
  {
    id: "clarkston-high",
    year: 1994,
    track: "learn",
    title: "Clarkston Senior High School",
    dek: "Michigan, and the alto saxophone. The horn was the serious thing and the computer was the hobby. Not how it looked later.",
    where: "Clarkston, Michigan",
    tags: ["education", "music"],
    feature: true,
    body: `
      <p>Two things were running at once and only one of them looked like a
      future. I studied alto saxophone, seriously, and kept playing it at the
      <a href="/log/bfa">University of Michigan – Flint</a>, where it eventually
      became a degree. That was the plan. The computer in the bedroom was the
      hobby.</p>

      <p>Netscape Navigator shipped in the October after I graduated, free for
      non-commercial use, and everybody had it by Christmas. Within two years the
      question of what to do for a living had quietly answered itself, and the
      hobby and the plan swapped places.</p>

      <p>Neither one went away. A quarter of a century later I am still
      <a href="/log/mcallister">designing for a saxophonist</a>. You only notice a line like that once you write it down.</p>
    `,
  },
  {
    id: "midi-rig",
    year: 1994,
    track: "machine",
    title: "A Korg X3, and music on a screen",
    dek: "My first MIDI setup. Encore to write the notes down, and Finale a year later, when I found out what engraving is.",
    where: "Michigan",
    tags: ["music", "midi", "typography"],
    feature: true,
    spec: [
      { label: "Synth", value: "Korg X3 · 61 keys · AI2 synthesis" },
      { label: "Sequencer", value: "Sixteen tracks, built in" },
      { label: "Notation", value: "Encore, then Finale in 1995" },
      { label: "Connected by", value: "MIDI" },
      {
        label: "Made possible",
        value: "Hearing it before anybody agreed to play it",
      },
    ],
    body: `
      <p>The <a href="/log/clarkston-high">saxophone</a> and the computer had
      been two separate lives, and in 1994 they became one thing. A Korg X3
      workstation, a MIDI cable, and Encore at the other end of it turning what I
      played into notes on a page.</p>

      <p>The X3 had a sixteen-track sequencer built into it, which meant you
      could write an arrangement, save it, and hear the whole thing before anyone
      had agreed to play a note of it. For somebody about to spend four years in
      a music program, that is not a toy. The difference between imagining a thing and checking it.</p>

      <p>Encore did the job, and in 1995 I moved to Finale, and found out what music engraving actually is. Not typing notes.
      <em>Typesetting.</em> Stem directions, beam angles, keeping a slur from
      colliding with a dynamic, optical spacing that is deliberately not
      mathematical spacing. Centuries of typographic convention, most of it never
      written down anywhere, all of it instantly visible the moment you get it
      wrong.</p>

      <p>I did not know I was learning typography. I thought I was doing
      homework. Everything I understand about type, spacing, and the difference
      between correct and right, I learned first from a page of music and only
      years later from a page of text.</p>
    `,
  },
  {
    id: "netscape",
    year: 1994,
    date: "1994-10-13",
    track: "tech",
    title: "Netscape Navigator",
    dek: "Free for non-commercial use, so everyone has it by Christmas. The browser war starts here.",
    tags: ["web", "browser"],
  },
  {
    id: "w3c",
    year: 1994,
    date: "1994-10",
    track: "tech",
    title: "The W3C is founded",
    dek: "A standards body for a medium eighteen months old, set up before there was anything to standardize.",
    tags: ["web", "standards"],
  },
  {
    id: "first-web-page",
    year: 1996,
    track: "make",
    title: "A practice page, learned from view source",
    dek: "I could not tell you now what was on it. I can tell you where every tag came from.",
    tags: ["html", "web"],
    feature: true,
    body: `
      <p>There was no framework, no local server and no preview. You wrote HTML
      in a text editor, dragged the file into an FTP client, and reloaded the URL
      to find out whether you had been right.</p>

      <p>And you did not learn it from a book. You loaded somebody else's page,
      chose View Source, and read it. Every technique I had in that first year
      was taken off a stranger who never knew they had taught me, which is
      something no other medium has ever offered, and which the web gave away by
      accident.</p>

      <p>I could not tell you now what that page was about. It was practice. What
      I kept was the habit of reading the source of anything that impressed me,
      and thirty years later it is still the first thing I do.</p>
    `,
  },
  {
    id: "javascript",
    year: 1995,
    date: "1995-05",
    track: "tech",
    title: "JavaScript, in ten days",
    dek: "Brendan Eich is told to make it look like Java. It ends up a Scheme with C syntax and it runs everything.",
    tags: ["javascript", "web"],
  },
  {
    id: "windows-95",
    year: 1995,
    date: "1995-08-24",
    track: "tech",
    title: "Windows 95",
    dek: "A Start button, long file names, and a Rolling Stones song. People stood in line at midnight for an operating system, and I was one of them.",
    tags: ["microsoft"],
    feature: true,
    spec: [
      { label: "Released", value: "August 24, 1995" },
      { label: "Media", value: "Thirteen floppy disks, or one CD-ROM" },
      { label: "First four days", value: "A million copies" },
      { label: "Soundtrack", value: "“Start Me Up”" },
    ],
    body: `
      <p>I stood in line at midnight and carried a copy home. So did enough other
      people that Microsoft sold a million of them inside four days, on the back
      of a marketing budget in the hundreds of millions, a Rolling Stones song,
      and Jay Leno hosting the launch.</p>

      <p>It is worth stopping on how strange that is. An operating system. Not a game,
      not a phone. An operating system, with a line outside the store at
      midnight. Nobody has queued for infrastructure since. It is also where I first understood that software could be an event.</p>

      <p>What was in the box mattered less than that, although it did matter. A
      Start button, a taskbar, file names longer than eight characters, and a
      networking stack that turned getting online into something you set up once
      rather than every time. The computer stopped being a thing you operated and
      started being a place you kept things.</p>
    `,
  },
  {
    id: "toy-story",
    year: 1995,
    date: "1995-11-22",
    track: "world",
    title: "Toy Story",
    dek: "Eighty minutes rendered on 117 Sun workstations. The first film with no photography in it at all.",
    tags: ["film", "cgi"],
  },
  {
    id: "ie-3",
    year: 1996,
    date: "1996-08-13",
    track: "tech",
    title: "Internet Explorer 3, the first browser with a stylesheet in it",
    dek: "Microsoft's third attempt is the first one it wrote itself, and the first browser anywhere to implement CSS. The company that later froze the web began by moving it.",
    tags: ["microsoft", "browser", "css", "standards"],
    feature: true,
    spec: [
      { label: "Released", value: "August 13, 1996" },
      { label: "Version 1", value: "August 1995, licensed from Spyglass" },
      { label: "First to ship", value: "CSS, four months before the recommendation" },
      { label: "Also in the box", value: "JScript, ActiveX, mail, news" },
      { label: "Price", value: "Free, which was the strategy" },
    ],
    body: `
      <p>Internet Explorer 1 was Spyglass Mosaic with a Microsoft label on it,
      sold in August 1995 inside an add-on pack you bought separately from
      <a href="/log/windows-95">Windows 95</a>. Version 2 followed in three
      months. Neither was any good and neither needed to be. The plan was to
      keep shipping until one of them was.</p>

      <p>Version 3 is the one that arrived. It was the first Microsoft wrote
      rather than licensed, and it was the first browser of any kind to
      implement <a href="/log/css1">CSS</a>, four months before there was a
      recommendation to implement. Chris Wilson wrote that support and then
      spent the next thirty years on the standard he had shipped early.</p>

      <p>This is the half of the story that gets left out. Netscape's answer to
      styling a document was a proprietary tag and a stylesheet language written
      in JavaScript. Microsoft's answer was to build the thing the W3C was still
      drafting. For about two years Internet Explorer was the browser you tested
      in if you cared about the specification, which within five years becomes
      an unimaginable sentence.</p>
    `,
  },
  {
    id: "css1",
    year: 1996,
    date: "1996-12-17",
    track: "tech",
    title: "CSS Level 1",
    dek: "A recommendation for separating what a document is from how it looks. It takes the industry roughly ten years to believe it.",
    tags: ["css", "standards"],
    feature: true,
    body: `
      <p>Håkon Wium Lie proposed it in 1994 and the recommendation landed at the
      end of 1996, into browsers that implemented about half of it and disagreed
      about the half. The idea underneath, that a stylesheet is a set of
      suggestions negotiated between the author, the reader and the device, is
      still the most radical thing about the web.</p>
      <p>Everything I have done since is downstream of taking that idea
      literally.</p>
    `,
  },
  {
    id: "flash",
    year: 1996,
    track: "tech",
    title: "FutureSplash becomes Macromedia Flash",
    dek: "Vector animation in a plugin, with a timeline and a scripting language. For a decade it is where the interesting work is.",
    tags: ["flash", "design"],
  },
  {
    id: "diablo",
    year: 1996,
    date: "1996-12-31",
    track: "play",
    title: "Diablo",
    dek: "Randomised dungeons, a click that never stops being satisfying, and Battle.net.",
    tags: ["blizzard", "rpg"],
  },
  {
    id: "quake",
    year: 1996,
    date: "1996-06-22",
    track: "play",
    title: "Quake",
    dek: "Real polygons, a real network protocol, and QuakeC. Deathmatch over a modem becomes a thing you schedule.",
    tags: ["id software", "fps"],
  },
  {
    id: "gulf-war",
    year: 1991,
    date: "1991-01-17",
    track: "world",
    title: "The Gulf War, live",
    dek: "A war reported while it happened, on a green night-vision feed, hour after hour. The television stopped being a thing you turned on at six.",
    tags: ["news"],
  },
];
