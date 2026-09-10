// 1984 – 1990

/** @typedef {import('../types.js').Entry} Entry */

/** @type {Entry[]} */
export const entries = [
  {
    id: "first-machine",
    year: 1985,
    track: "machine",
    title: "An IBM PCjr",
    dek: "I wanted it because my neighbor had one and could play King’s Quest on it. It lived in my bedroom, which decided everything after.",
    where: "Michigan",
    tags: ["ibm", "hardware", "basic"],
    feature: true,
    spec: [
      { label: "CPU", value: "Intel 8088 · 4.77 MHz" },
      { label: "RAM", value: "64 KB, or 128 KB with the expansion" },
      { label: "Video", value: "320 × 200 in 16 colors" },
      {
        label: "Sound",
        value: "TI SN76496 · three voices and a noise channel",
      },
      {
        label: "Storage",
        value: "Two cartridge slots, and a 360 KB floppy if you paid for one",
      },
      { label: "Keyboard", value: "Wireless infrared, with chiclet keys" },
      { label: "On sale", value: "March 1984 – March 1985" },
      { label: "Mine from", value: "1985, the year IBM gave up on it" },
    ],
    body: `
      <p>My neighbor had one, and he had King's Quest on it, and that was the
      whole argument. I wanted the machine because of the game. Which, given
      that IBM built the PCjr and Sierra built
      <a href="/log/kings-quest">King's Quest</a> to sell it, means the marketing
      worked exactly once and I was the one it worked on.</p>

      <p>Mine arrived on Christmas, 1984, a few months before IBM gave up. Announced November 1983,
      shipped March 1984, discontinued March 1985: eighteen months, at a company
      that expected to own the room. What that meant for me was that the price
      had collapsed.</p>

      <p>The famous complaints are all true. It cost more than a Commodore 64 and
      did less. The wireless keyboard was years early and had chiclet keys nobody
      could touch-type on. It was almost but not quite compatible with the PC it
      had been cut down from, the worst possible place to sit on that scale.</p>

      <p>None of that is the part that matters if it is the machine you actually
      have. It beat a PC at the two things a child cares about: sixteen colors
      at 320 × 200 where the PC gave four, and a real three-voice sound chip
      instead of a beeper. And it lived in my bedroom rather than the family room. That detail decided the rest of this page. Nobody was
      waiting for a turn, and nobody was watching what I did with it.</p>
    `,
  },
  {
    id: "hands-on-basic",
    year: 1985,
    track: "learn",
    title: "Hands-On BASIC for the IBM PCjr",
    dek: "The first programming book I owned, written for exactly the machine in my bedroom. A kind of luck you get once.",
    tags: ["basic", "ibm", "education"],
    feature: true,
    spec: [
      { label: "Author", value: "Arthur Luehrmann" },
      { label: "Written for", value: "The IBM PCjr, specifically" },
      { label: "Read", value: "Cover to cover, more than once" },
      { label: "Replaced", value: "Guessing" },
    ],
    body: `
      <p>The first programming book I owned, and a piece of luck the rest of this
      page rests on: somebody had written a book about BASIC for exactly the
      machine sitting in my bedroom. Not BASIC in general with an appendix for
      your model. <a href="/log/first-machine">The PCjr</a> itself: its keyboard,
      its sound chip, its sixteen colors.</p>

      <p>That specificity is the whole thing. Every example ran. Nothing needed
      translating, nothing failed because my machine was the wrong one, and a
      ten-year-old holding a book that works does not stop after chapter two.</p>

      <p>It is also the first technical writing I ever read closely, which did
      not occur to me until I took
      <a href="/log/bfa">a minor in it</a> fourteen years later. A good manual
      and a good program have the same virtue: they assume you are intelligent
      and they do not waste your time. I have been trying to write like that ever
      since, and it is about half of what I am actually paid for.</p>
    `,
  },
  {
    id: "first-program",
    year: 1985,
    track: "make",
    title: "Hello, world",
    dek: "The first thing I ever made a computer do. It said hello, and then it said it forever.",
    tags: ["basic"],
    body: `
      <p>Two lines of BASIC and a <code>GOTO</code>. Everybody's first program, whether they were taught it or stumbled into it. I was taught it,
      by <a href="/log/hands-on-basic">a book written for this exact
      machine</a>.</p>

      <pre><code>10 PRINT "HELLO WORLD"
20 GOTO 10</code></pre>

      <p>The machine booted straight to a prompt and did nothing at all until you
      typed, so the distance between having an idea and watching it happen was
      about four seconds. Nothing else on this page is more important than that
      number. Every tool I have liked since has been the one that kept it short,
      and every tool I have disliked has been the one that made it longer.</p>
    `,
  },
  {
    id: "school-pet",
    year: 1984,
    track: "machine",
    title: "A Commodore PET in the corner",
    dek: "The first computer I ever used, at school. I never got it to do anything, and it decided everything anyway.",
    where: "Michigan",
    tags: ["commodore", "education", "hardware"],
    feature: true,
    spec: [
      { label: "Machine", value: "Commodore PET" },
      { label: "Screen", value: "Black, with green text" },
      { label: "Where", value: "A corner of a classroom" },
      { label: "Used by", value: "Almost nobody" },
      { label: "I was", value: "About nine" },
    ],
    body: `
      <p>Before there was one at home there was one at school, and nobody was
      using it. A Commodore PET in the corner of a room, one of
      <a href="/log/the-1977-trinity">the three machines</a> that started all of
      this, by then seven years old and largely forsaken. No lessons were built
      around it. It was furniture.</p>

      <p>I never got it to do a single thing. I did not know what to type and
      there was nobody to ask, and the manual, if there was one, was not near the
      machine. Every session ended the way it started, with a cursor.</p>

      <p>It did not matter. The black screen with green text on it was the most
      interesting object in the building and I could not stop looking at it. A
      machine that plainly did something, sitting there doing nothing, waiting
      for somebody to work out what.</p>

      <p>A year later one <a href="/log/first-machine">turned up in my
      bedroom</a>, and this time there was a book with it.</p>
    `,
  },
  {
    id: "macintosh",
    year: 1984,
    date: "1984-01-24",
    track: "tech",
    title: "The Macintosh",
    dek: "A 9-inch bitmap, a mouse, and one font rendered the way it would print. 128K, and no way to add more.",
    tags: ["apple", "hardware", "ui"],
    feature: true,
    spec: [
      { label: "CPU", value: "Motorola 68000 · 7.83 MHz" },
      { label: "RAM", value: "128 KB" },
      { label: "Display", value: "512 × 342, 1-bit, 72 dpi" },
      { label: "Storage", value: "400 KB 3.5-inch floppy" },
      { label: "Price", value: "$2,495" },
    ],
    body: `
      <p>The screen was 72 dots per inch because a typographic point is 1/72 of
      an inch, so a 12-point font on screen was 12 points on paper. That one
      decision is why desktop publishing happened on a Mac and nowhere else, and
      it is the earliest example I know of a hardware spec chosen to make a
      design idea true.</p>
      <p>It shipped with MacPaint and MacWrite. Not a language. The split defines the next forty years: the machine you program and the machine
      you make things with, and the long argument about whether they are the
      same machine.</p>
    `,
  },
  {
    id: "kings-quest",
    year: 1984,
    track: "play",
    title: "King's Quest",
    dek: "Roberta Williams puts a walking character into an adventure game. You still type, but now you can see where you are.",
    tags: ["sierra", "adventure"],
    feature: true,
    body: `
      <p>Sierra built it to sell the <a href="/log/first-machine">IBM PCjr</a>,
      which failed, and the game outlived the machine by a decade. The Adventure Game Interpreter behind it
      was a portable engine with its own scripting language, the same idea
      Infocom had, aimed at pictures instead of prose.</p>
      <p>Typing <em>look at the well</em> and having the parser answer, while a
      little man in a hat stood there waiting, is the moment the two halves of
      the medium met.</p>
    `,
  },
  {
    id: "tetris",
    year: 1984,
    track: "play",
    title: "Tetris",
    dek: "Written on an Electronika 60 with no graphics, so the blocks were made of brackets. It has never needed a redesign.",
    tags: ["puzzle"],
  },
  {
    id: "ghostbusters",
    year: 1984,
    date: "1984-06-08",
    track: "world",
    title: "Ghostbusters",
    dek: "And an Activision tie-in on the C64 whose title screen played the theme with a bouncing-ball lyric prompt.",
    tags: ["film"],
  },
  {
    id: "amiga-1000",
    year: 1985,
    date: "1985-07",
    track: "tech",
    title: "The Amiga 1000",
    dek: "Preemptive multitasking, custom chips named Agnus, Denise and Paula, and 4,096 colors while everyone else had 16.",
    tags: ["commodore", "hardware"],
  },
  {
    id: "bards-tale",
    year: 1985,
    track: "play",
    title: "The Bard's Tale",
    dek: "Skara Brae, a party of six, and graph paper. The dungeon is not on screen. It is on your desk.",
    tags: ["rpg", "interplay"],
    feature: true,
    body: `
      <p>Interplay's first-person dungeon rendered one small window at a time and
      expected you to keep the map yourself. A whole generation learned
      coordinate systems, dead reckoning and the discipline of recording state
      because a wizard in a cellar would otherwise erase four hours.</p>
      <p>No game makes the point more clearly. The real interface was paper. The screen showed the view; the model lived in your notebook.</p>
      <p>Twenty-five years later I built
      <a href="/log/css-maze">a maze of my own</a> out of CSS transforms, and
      caught myself drawing the corridors exactly the same way.</p>
    `,
  },
  {
    id: "ultima-iv",
    year: 1985,
    track: "play",
    title: "Ultima IV: Quest of the Avatar",
    dek: "The first role-playing game with no villain. You win by becoming a person of virtue, and the game is watching.",
    tags: ["rpg", "origin"],
    body: `
      <p>Garriott's answer to being told his games were about killing things was
      a game with eight tracked virtues, where stealing from a shop or fleeing a
      fight moved a number you were never shown. There is no final boss. There is a book you have to become worthy of
      reading.</p>

      <p>It also shipped a hypertext system in 1985, though nobody called it
      that. You talk to people by typing a subject, and their answers contain
      subjects of their own. Ask a healer about a word she just used and she
      names a place. Walk to the place and somebody there knows the next word.
      The text is a graph and you move through it by following references, which
      is the whole idea two years before
      <a href="/log/hypercard">HyperCard</a> and six before
      <a href="/log/www-public">the web</a>.</p>
      <p>It is still, forty years on, one of the very few games whose systems are
      an argument.</p>
    `,
  },
  {
    id: "pagemaker",
    year: 1985,
    date: "1985-07",
    track: "tech",
    title: "Aldus PageMaker and the LaserWriter",
    dek: "A Mac, a page layout program and a PostScript printer. Desktop publishing exists as of this sentence, and the program costs six hundred dollars.",
    tags: ["design", "apple", "print"],
    feature: true,
    spec: [
      { label: "Released", value: "July 1985" },
      { label: "Price", value: "About $600" },
      { label: "Needs", value: "A Macintosh and a LaserWriter" },
      {
        label: "Created",
        value: "Desktop publishing, more or less on the spot",
      },
    ],
    body: `
      <p>A Macintosh, a page layout program and a PostScript printer, and between
      the three of them an industry that had needed a print shop the week before.
      The event is what people mean when they say the Mac mattered.</p>

      <p>What I remember is the price. Six hundred dollars, for a program. Games
      were thirty or forty. I could not work out what could possibly be inside a
      box that made it worth fifteen games, and I wanted to know badly enough
      that it changed what I paid attention to.</p>

      <p>The answer took me years to be able to say properly: PageMaker was not
      being sold to people like me. It was sold to somebody whose alternative was
      a typesetter and a week, and measured against that it was cheap. Software
      is priced against the thing it replaces, not against the other software on
      the shelf.</p>

      <p>No commercial idea has been more useful to me since, and I got it from staring at a box I could not afford. Everything I have
      <a href="/log/first-ios-app">ever charged for</a> since has been priced off
      the same question: what is this instead of?</p>
    `,
  },
  {
    id: "back-to-the-future",
    year: 1985,
    date: "1985-07-03",
    track: "world",
    title: "Back to the Future",
    dek: "Thirty years forward is 2015. Thirty years back from now is this.",
    tags: ["film"],
  },
  {
    id: "typing-in-listings",
    year: 1985,
    track: "make",
    title: "Typing programs in from magazines",
    dek: "Four pages of DATA statements, a checksum column, and a Saturday.",
    tags: ["basic"],
    body: `
      <p>Compute!, Byte, and Family Computing. The listing came with a per-line
      checksum, because there was no other way to find one mistyped digit in four
      thousand of them. You typed, you ran, it crashed, and you learned to read a
      program by looking for the line the machine complained about. Forty years on, that is still exactly how debugging works.</p>

      <p>Nobody called this learning to code. It was simply the only way to get
      the program. <a href="/log/christmas-tree">One of them</a> I can still name
      forty years later.</p>
    `,
  },
  {
    id: "christmas-tree",
    year: 1985,
    date: "1985-12",
    track: "make",
    title: "Christmas Tree Construction Set",
    dek: "Pages of listing in the December 1985 Family Computing, typed in over a weekend. You built a tree and it drew it.",
    tags: ["basic", "family computing", "graphics"],
    feature: true,
    links: [
      {
        href: "https://www.atarimania.com/games/atari-400-800-xl-xe-games-christmas-tree-construction-set-40963",
        label: "The Atari version, catalogued",
      },
    ],
    spec: [
      { label: "Published", value: "Family Computing · December 1985" },
      { label: "Written by", value: "John Jainschigg" },
      { label: "Delivered as", value: "A printed listing" },
      { label: "Ran on", value: "Whichever machine you typed it into" },
    ],
    body: `
      <p>This is the one I can still name. It ran in Family Computing in
      December 1985. John Jainschigg wrote it, and it was exactly what the title
      says: a construction set for Christmas trees. You assembled one, it
      drew it, and you could save the picture to disk, which at the time was most
      of the reason to own a disk drive.</p>

      <p>It arrived as a printed listing, several pages of it, and the only way
      to have it was to type it. The magazine ran a version for whichever machine
      you happened to own, so one article was a different program in every house
      on the street.</p>

      <p>What I got out of it was not a Christmas tree. It was the first time I
      read somebody else's program at length, not a ten-line trick but a real one
      with structure, because typing several pages of a thing means reading
      several pages of it whether you meant to or not. You cannot copy a program
      by hand without noticing how it is put together.</p>

      <p><a href="/log/first-web-page">View Source</a> did precisely this for me eleven years later, and between them they are the only way I have
      ever learned anything about software: reading a working example slowly,
      because I had a reason to want it.</p>
    `,
  },
  {
    id: "nes-us",
    year: 1985,
    date: "1985-10-18",
    track: "tech",
    title: "The NES reaches America",
    dek: "Sold as a toy with a robot, because two years after the crash no store would stock a video game console.",
    tags: ["nintendo", "games"],
  },
  {
    id: "colorpaint",
    year: 1986,
    track: "make",
    title: "ColorPaint, and a mouse",
    dek: "My parents bought a mouse a year after the machine. I used it to draw comic books.",
    tags: ["ibm", "graphics", "design", "comics"],
    feature: true,
    spec: [
      { label: "Program", value: "ColorPaint, for the PCjr" },
      { label: "Mouse", value: "Mouse Systems · optical, on a metal pad" },
      { label: "Bought", value: "A year after the machine" },
      { label: "Drew", value: "Comic books, and then longer ones" },
    ],
    body: `
      <p>The <a href="/log/first-machine">PCjr</a> arrived without a mouse,
      because in 1985 a mouse was an accessory and an expensive one. My parents
      bought one a year later, a Mouse Systems mouse with ColorPaint, and the
      machine stopped being a thing you typed at and became a thing you drew
      on.</p>

      <p>Mouse Systems had brought the first mouse to the IBM PC, and theirs was
      optical years before anybody else's: an LED, a sensor, and a metallic pad
      printed with a grid of gray and blue lines for it to read. No ball, no
      rollers to clean. Lose the pad and you lose the mouse.</p>

      <p>I drew comic books with it. Whole ones, and then longer things I would
      now call graphic novels, page after page in sixteen colors at 320 by 200.
      Nobody asked for them and nobody read them. The correct condition for learning anything.</p>

      <p>This is the first time the computer was somewhere to make something that
      was not a program, and that turned out to matter more than most of the
      programs. Three years later
      <a href="/log/deluxe-paint">Deluxe Paint</a> taught me the craft properly.
      This is where the idea arrived that a screen is a surface you put things
      on.</p>
    `,
  },
  {
    id: "challenger",
    year: 1986,
    date: "1986-01-28",
    track: "world",
    title: "Challenger",
    dek: "Watched live in classrooms across the country, because a teacher was on board.",
    tags: ["space"],
  },
  {
    id: "legend-of-zelda",
    year: 1986,
    track: "play",
    title: "The Legend of Zelda",
    dek: "A battery in the cartridge, so the world remembered you between sessions. That battery is the whole idea.",
    tags: ["nintendo"],
  },
  {
    id: "hypercard",
    year: 1987,
    date: "1987-08",
    track: "tech",
    title: "HyperCard",
    dek: "Free with every Mac. Cards, buttons, links between them, and a language that read like English. The web, five years early, without the network.",
    tags: ["apple", "hypermedia"],
    feature: true,
    body: `
      <p>Bill Atkinson gave away a hypermedia authoring tool to every Macintosh
      owner and the result was a decade of software written by people who did
      not consider themselves programmers. A stack was a document you could
      click through and also a program you could open and read.</p>
      <p>Everything this site is built on is downstream of the HyperCard idea:
      that a document and an application are the same artifact, and that the way
      to move between them is a link.</p>
    `,
  },
  {
    id: "maniac-mansion",
    year: 1987,
    track: "play",
    title: "Maniac Mansion",
    dek: "Point at the thing, pick a verb. SCUMM removes the parser and adventure games never go back.",
    tags: ["lucasfilm", "adventure"],
  },
  {
    id: "ascii-adventure",
    year: 1987,
    track: "make",
    title: "An adventure game, in ASCII",
    dek: "Rooms, exits, a parser and an inventory. The first program I wrote that was a system rather than a trick.",
    tags: ["basic", "interactive fiction", "games"],
    feature: true,
    body: `
      <p>After enough evenings inside <a href="/log/zork-i">Zork</a> and
      <a href="/log/kings-quest">King's Quest</a>, the obvious next move was to
      write one. So I did: rooms, exits, a two-word parser, an inventory, and a
      world drawn entirely in characters, because characters were what the
      machine would draw for free.</p>

      <p>Everything before it had been a trick. This was a system. A
      <code>GOTO</code> loop that prints your name down the screen is a joke you
      tell the computer. An adventure game is a data structure you have to keep
      honest: every room has to know its exits, every exit has to lead somewhere
      that exists, and the moment there are thirty of them you cannot hold it in
      your head any more and have to write it down.</p>

      <p>It never had a title and it had twelve rooms. It also had exactly one
      player besides me: the same neighbor whose
      <a href="/log/first-machine">PCjr</a> had started all of this two years
      earlier. He finished it. Still the best release I have ever had.</p>
    `,
  },
  {
    id: "roger-wilco",
    year: 1987,
    track: "make",
    title: "The man at Microsoft who called me back",
    dek: "I was eleven, my Roger Wilco had a head and no body, and the program kept crashing. Microsoft tech support took the problem exactly as seriously as anybody else's.",
    tags: ["basic", "graphics", "sierra"],
    feature: true,
    spec: [
      { label: "I was", value: "Eleven" },
      { label: "Trying to draw", value: "Roger Wilco, from Space Quest" },
      { label: "Got as far as", value: "A head" },
      { label: "The bug", value: "Arrays dimensioned too small" },
      { label: "The fix", value: "Bigger numbers in the DIM calls" },
      { label: "Delivered by", value: "Voicemail, after Little League" },
    ],
    body: `
      <p>Space Quest had come out the autumn before and Roger Wilco walked
      around the screen when you pressed the cursor keys, and I wanted that more
      than I wanted anything else the computer could do. So I set out to build
      it in QuickBASIC. No sprites and no art program. Every part of him was
      drawn by the program itself, arc by arc and line by line, because drawing
      him was the only way I knew to get him on the screen.</p>

      <p>I got a head. I never got a body. The thing kept crashing and I had no
      way at all of finding out why. There was nothing to search. No forum, no
      newsgroup I knew about, nobody at school to ask. The manual told you what
      each keyword did, which is a different question from what I had done
      wrong.</p>

      <p>So I found a phone number for Microsoft technical support and called
      it. We traded voicemails for a few days, which was itself a fairly new way
      to talk to a stranger, and then we got each other live. He stayed on the
      line while an eleven-year-old typed out what he suggested, saved it, ran
      it, and reported back what happened. That is a very slow loop. He waited
      through all of it.</p>

      <p>I had a Little League game that day and had to cut him off mid-call. He
      called back later and left the fix on the machine. My arrays were too
      small, and if I dimensioned them larger the graphics would keep drawing.
      They did.</p>

      <p>He had no way of knowing whether I was a customer worth an afternoon,
      and as far as I could tell it did not occur to him to work it out. He took
      the problem seriously because it was a problem. I have thought about that
      man a great deal more than he could ever have expected, and every time I
      answer a question from somebody who is obviously new, he is the standard I
      am measuring myself against.</p>

      <p>The head was the only part of Roger Wilco I ever finished. Four years
      later I came back to the same language for
      <a href="/log/quickbasic">the interfaces</a>, and I was still drawing
      everything a pixel at a time.</p>
    `,
  },
  {
    id: "ps2-model-30",
    year: 1988,
    track: "machine",
    title: "An IBM PS/2 Model 30",
    dek: "I wanted it for the 256 colors. It came with a 20 MB hard disk, which I had not asked for and did not understand.",
    where: "Michigan",
    tags: ["ibm", "hardware"],
    feature: true,
    spec: [
      { label: "CPU", value: "Intel 8086 · 8 MHz" },
      { label: "RAM", value: "640 KB" },
      { label: "Video", value: "MCGA · 320 × 200 in 256 colors" },
      { label: "Storage", value: "20 MB hard disk" },
      { label: "I was", value: "Thirteen" },
    ],
    body: `
      <p>I was thirteen and I wanted it for one reason: MCGA, which drew 320 × 200
      in 256 colors. The <a href="/log/first-machine">PCjr</a> had given me
      sixteen and I had used all of them.</p>

      <p>It also came with a 20 MB hard disk, which I had not asked for and did
      not understand. Every machine I had touched until then forgot everything
      when you switched it off. You fed it a floppy to remind it who it was. A
      hard disk meant the computer kept your work without being asked, and it
      took me a while to stop being suspicious of that.</p>

      <p>Three years later <a href="/log/quickbasic">QuickBASIC</a> gave me
      <code>SCREEN 13</code>: the same 320 × 200, the same 256 colors,
      addressable from a language I already knew. I learned it for that alone.</p>
    `,
  },
  {
    id: "morris-worm",
    year: 1988,
    date: "1988-11-02",
    track: "tech",
    title: "The Morris worm",
    dek: "A graduate student takes down ten percent of the internet by accident, and computer security becomes a job.",
    tags: ["security", "internet"],
  },
  {
    id: "deluxe-paint",
    year: 1989,
    track: "learn",
    title: "A mouse, and Deluxe Paint II",
    dek: "The program I learned the craft on. Everything I know about color starts here.",
    tags: ["graphics", "design", "pixel art"],
    feature: true,
    spec: [
      { label: "Program", value: "Deluxe Paint II · Electronic Arts" },
      { label: "Author", value: "Dan Silva" },
      { label: "Follows", value: "Three years of ColorPaint" },
      { label: "The idea", value: "Anything you lasso becomes a brush" },
    ],
    body: `
      <p>Three years after <a href="/log/colorpaint">ColorPaint</a> taught me
      that a screen was a surface, Deluxe Paint II taught me how to work on one
      properly.</p>

      <p>Dan Silva's program had one idea that reorganized everything else: any
      part of the canvas you lassoed became a brush. Not a stamp. A brush. You
      could paint with it, scale it, flip it, tint it, smear it along a path.
      Every other tool in the program is a consequence of that one decision.
      Nobody had to explain it, and once you had seen it you could not unsee
      it.</p>

      <p>It is also where I learned what a palette is. You had a fixed number of
      colors, you picked them yourself, and every one you spent on a highlight
      was one you did not have left for anything else. Color cycling, which animates
      a scene by rotating the palette rather than by drawing frames, is the
      cleverest trick I met before I was fifteen, and it is still a good one.</p>

      <p>Everything I do now with a stylesheet is downstream of that constraint.
      Choosing a palette before you draw and then living inside it is exactly
      what a design system asks of you, and it is why
      <a href="/colophon">the seven palettes on this page</a> are seven small
      sets of decisions rather than a color picker.</p>
    `,
  },
  {
    id: "sound-blaster",
    year: 1989,
    track: "work",
    title: "A Sound Blaster, and a byline",
    dek: "The card was free because I wrote for a zine about hardware and software. First time writing about computers got me anything.",
    tags: ["hardware", "audio", "writing", "ibm"],
    feature: true,

    spec: [
      { label: "Card", value: "Creative Sound Blaster 1.0" },
      { label: "Synthesis", value: "Yamaha YM3812 · OPL2 · nine voices" },
      { label: "Digital audio", value: "8-bit mono, up to 23 kHz" },
      { label: "Went into", value: "The PS/2 Model 30" },
      { label: "Zine", value: "Cyberbeat" },
      { label: "Cost", value: "Nothing. I wrote about it." },
    ],
    body: `
      <p>The <a href="/log/ps2-model-30">Model 30</a> was one of the few PS/2s
      that took ordinary ISA cards rather than IBM's Micro Channel, and the card
      I put in it was a first-generation Sound Blaster. Yamaha FM synthesis, an
      AdLib-compatible chip so it ran everything, and the part that actually
      mattered: eight-bit digital audio. A PC could play a recording of a real sound
      instead of an approximation of one.</p>

      <p>I did not pay for it. I got it free because I wrote for a zine called
      Cyberbeat that covered computer hardware and software, which means that at
      fourteen somebody was sending me products on the understanding that I would
      write about them.</p>

      <p>I managed a couple of reviews before the zine folded. It lasted long
      enough to put a stream of hardware and software in front of me that I could
      not have afforded, which at that age is the entire point.</p>

      <p>Writing about computers had never got me anything before, and it
      sits a long way upstream of everything else here. The
      <a href="/log/bfa">technical writing minor</a> ten years later, the design
      docs, the <a href="/log/kajabi">documentation that made a component library
      get adopted</a>, this page. All of it is the same activity. It started
      because a zine needed somebody to write about a sound card.</p>
    `,
  },
  {
    id: "simcity",
    year: 1989,
    track: "play",
    title: "SimCity",
    dek: "No score, no ending, no way to lose except slowly. Publishers turned it down for exactly that reason.",
    tags: ["maxis", "simulation"],
    body: `
      <p>Will Wright built the city editor for a shoot-em-up and found the editor
      was the game. What shipped was a systems model with a paintbrush on it:
      zoning, traffic, tax rates, and a feedback loop slow enough to feel like
      weather.</p>
      <p>No mainstream software before it taught people to think about second-order effects, and it did it without a single sentence of
      explanation.</p>
    `,
  },
  {
    id: "berlin-wall",
    year: 1989,
    date: "1989-11-09",
    track: "world",
    title: "The Berlin Wall comes down",
    dek: "Live, all evening, on a television in the same room as the computer.",
    tags: ["news"],
  },
  {
    id: "www-proposal",
    year: 1989,
    date: "1989-03",
    track: "tech",
    title: "Information Management: A Proposal",
    dek: "Tim Berners-Lee's manager writes “vague, but exciting” on the cover and lets him build it anyway.",
    tags: ["web", "hypermedia"],
    links: [
      {
        href: "https://www.w3.org/History/1989/proposal.html",
        label: "The original proposal",
      },
    ],
  },
  {
    id: "photoshop-1",
    year: 1990,
    date: "1990-02-19",
    track: "tech",
    title: "Photoshop 1.0",
    dek: "Mac only, one layer, and it fits on an 800K floppy with room left over.",
    tags: ["design", "adobe"],
  },
  {
    id: "windows-3",
    year: 1990,
    date: "1990-05-22",
    track: "tech",
    title: "Windows 3.0",
    dek: "The first version anyone bought on purpose. Program Manager, 16 colors, and Solitaire to teach the mouse.",
    tags: ["microsoft"],
  },
  {
    id: "monkey-island",
    year: 1990,
    track: "play",
    title: "The Secret of Monkey Island",
    dek: "You cannot die and you cannot get stuck. Ron Gilbert writes down why, and adventure design changes.",
    tags: ["lucasfilm", "adventure"],
  },
];
