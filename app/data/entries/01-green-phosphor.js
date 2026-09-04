// 1976 – 1983
//
// How to add to this file: copy an entry, change the `id`, keep the list in
// year order. `id` is the URL, so it has to be unique across every file here.
//
// `needs` is a note to yourself. An entry that has one is listed at /backstage,
// which only exists while `npm run dev` is running. Delete the line when the
// entry is written and it disappears from that list.

/** @typedef {import('../types.js').Entry} Entry */

/** @type {Entry[]} */
export const entries = [
  {
    id: 'apple-computer-founded',
    year: 1976,
    date: '1976-04-01',
    track: 'tech',
    title: 'Apple Computer is founded in a garage',
    dek: 'The Apple I ships as a bare board for $666.66. You supply the case, the keyboard and the television.',
    tags: ['apple', 'hardware'],
  },
  {
    id: 'first-screens',
    year: 1976,
    track: 'play',
    title: 'Screens, before any of them were computers',
    dek: 'A television, a cinema, an arcade cabinet, and then, last in the line, a machine that would do something back.',
    feature: true,
    body: `
      <p>Before any of it was a computer it was a screen. A television in the
      corner of a room, a film in a dark theater, then
      <a href="/log/donkey-kong">a cabinet in an arcade</a> with its own light
      coming out of it. I was fascinated by all of them in the
      same way and in that order, and computers were simply the last one in the
      line, and the first that would do something back.</p>

      <p>Which is why this first chapter is mostly films and songs and machines
      in other people's houses. The screen came first. The keyboard took another
      nine years to arrive.</p>
    `,
  },
  {
    id: 'viking-1',
    year: 1976,
    date: '1976-07-20',
    track: 'world',
    title: 'Viking 1 lands on Mars',
    dek: 'The first photographs from the surface of another planet arrive as a slow raster, line by line.',
    tags: ['space'],
  },
  {
    id: 'the-1977-trinity',
    year: 1977,
    track: 'tech',
    title: 'The 1977 trinity',
    dek: 'Apple II, Commodore PET and TRS-80 Model I all ship in one year. The personal computer stops being a kit.',
    tags: ['apple', 'commodore', 'tandy'],
    feature: true,
    body: `
      <p>Three companies with nothing in common ship a finished computer in the
      same twelve months. You take it out of the box, plug it into a television
      and it boots to a prompt. No soldering, no front panel of switches.</p>
      <p>All three ship BASIC in ROM. Of everything in the box, that is the decision that matters. The
      first thing the machine says to you is a question, and the only way to
      answer it is to write a program.</p>
    `,
  },
  {
    id: 'star-wars',
    year: 1977,
    date: '1977-05-25',
    track: 'world',
    title: 'Star Wars',
    dek: 'A film about a farm boy and a computer that talks. Everybody under twelve rearranges their life around it.',
    tags: ['film'],
  },
  {
    id: 'atari-vcs',
    year: 1977,
    date: '1977-09',
    track: 'machine',
    title: 'An Atari VCS',
    dek: 'The first console in the house, and the only one I would own for twenty-nine years.',
    tags: ['atari', 'games', 'hardware'],
    feature: true,
    spec: [
      { label: 'CPU', value: 'MOS 6507 · 1.19 MHz' },
      { label: 'RAM', value: '128 bytes' },
      { label: 'Display', value: 'No frame buffer. The program draws each scanline as the beam passes' },
      { label: 'Launched', value: 'September 1977, $199' },
      { label: 'Consoles owned after it', value: 'One, and not until 2006' },
    ],
    body: `
      <p>It came into the house the year it came out, and games stopped being
      something that lived in an arcade and started being something you owned.
      The cartridge is the part that mattered: a machine you bought once and kept buying software for. That is how everything works now. It was not obvious then.</p>

      <p>It had 128 bytes of RAM. Not kilobytes. And it had no frame buffer, so a
      game had to draw each scanline in the few microseconds before the electron
      beam arrived at it, a technique its developers called racing the beam,
      because that is precisely what it was. Every cartridge for this machine is
      a program synchronized to the physical scan of a television set.</p>

      <p>I did not see it in color for about two years. My parents would not
      let it near the television in the living room, on the grounds that a games
      console would ruin the picture, which was a real fear at the time and not
      an unreasonable one. So the Atari went on a small broken set whose color
      had failed, and every game I played on it was green.</p>

      <p>Every so often the picture would pop into color for a few seconds and I
      would get a glimpse of what everybody else was seeing, and then it would go
      back. I have thought about that a great deal since, mostly because the
      chapter you are reading is called Green Phosphor and I did not choose the
      name for that reason.</p>

      <p>I did not buy another console for twenty-nine years. The
      <a href="/log/wii">Wii</a> in 2006 was the second and the last. Everything
      in between I played on a computer. Preference or personality, I have given up working out which.</p>
    `,
  },
  {
    id: 'colossal-cave',
    year: 1977,
    track: 'play',
    title: 'Colossal Cave Adventure spreads on the ARPANET',
    dek: 'You are standing at the end of a road before a small brick building. Two words at a time, a world.',
    tags: ['interactive fiction'],
    body: `
      <p>Crowther wrote it to map a real cave for his daughters. Woods added the
      treasure and the magic and put it on a network of a few hundred machines,
      and it went everywhere a tape could go.</p>
      <p>For most people it was the first program they met that was not a calculation. It
      had a parser, a state machine and a sense of humor, and it fit in a memory
      you could count in kilobytes.</p>
    `,
  },
  {
    id: 'space-invaders',
    year: 1978,
    track: 'play',
    title: 'Space Invaders',
    dek: 'The row of aliens speeds up as you kill them, because the hardware could draw fewer sprites faster. The bug became the design.',
    tags: ['arcade'],
  },
  {
    id: 'visicalc',
    year: 1979,
    track: 'tech',
    title: 'VisiCalc',
    dek: 'The first killer app. Accountants buy an Apple II to run one program, and the industry learns what software is for.',
    tags: ['apple', 'software'],
  },
  {
    id: 'walkman',
    year: 1979,
    date: '1979-07',
    track: 'world',
    title: 'The Sony Walkman',
    dek: 'Personal media before personal computing. A soundtrack you carry, and nobody else can hear.',
    tags: ['music'],
  },
  {
    id: 'zork-i',
    year: 1980,
    track: 'play',
    title: 'Zork I',
    dek: 'It is pitch black. You are likely to be eaten by a grue.',
    tags: ['infocom', 'interactive fiction'],
    feature: true,
    body: `
      <p>Infocom's parser understood full sentences at a time when everything
      else took two words, and it ran everywhere because they did not ship a
      program: they shipped a virtual machine and a story file for it. The
      Z-machine is the reason Zork still runs today on hardware nobody in 1980
      could have described.</p>
      <p>It also read like something written by a person with a sense of humor, which nothing else did. The white house, the mailbox, the trap
      door, the thief. It taught a generation that a computer could hold a place
      in it.</p>
    `,
    links: [{ href: 'https://en.wikipedia.org/wiki/Zork', label: 'Zork on Wikipedia' }],
  },
  {
    id: 'vic-20',
    year: 1980,
    track: 'tech',
    title: 'The Commodore VIC-20',
    dek: 'The first computer to sell a million units. 5K of RAM, 22 columns of text, and a price a family could argue about.',
    tags: ['commodore', 'hardware'],
    spec: [
      { label: 'CPU', value: 'MOS 6502 · 1.02 MHz' },
      { label: 'RAM', value: '5 KB' },
      { label: 'Display', value: '22 × 23 characters, 16 colors' },
      { label: 'Storage', value: 'Cassette tape' },
      { label: 'Price', value: '$299' },
    ],
  },
  {
    id: 'pac-man',
    year: 1980,
    track: 'play',
    title: 'Pac-Man',
    dek: 'Four ghosts, four different pursuit algorithms. The first game whose enemies had personalities you could reverse-engineer.',
    tags: ['arcade'],
  },
  {
    id: 'donkey-kong',
    year: 1981,
    date: '1981-07',
    track: 'play',
    title: 'Donkey Kong',
    dek: 'My favorite game, and the reason I wanted to know how any of this was made.',
    tags: ['nintendo', 'arcade'],
    feature: true,
    spec: [
      { label: 'Released', value: 'July 1981' },
      { label: 'Designer', value: 'Shigeru Miyamoto, his first' },
      { label: 'Hardware', value: 'Zilog Z80' },
      { label: 'Stages', value: 'Four, and then they start again harder' },
      { label: 'Introduced', value: 'Jumpman, later renamed Mario' },
    ],
    body: `
      <p>Nintendo of America had a warehouse full of unsold Radar Scope cabinets
      and asked a young industrial designer with no games to his name whether he
      could put something else in them. What he made was a carpenter, a barrel,
      a ladder and an ape, and it is still, forty-five years later, a nearly
      perfect piece of design.</p>

      <p>I understood it as a made thing rather than a fact of the world, and nothing had done that to me before. Everything in it is a rule. The barrels roll
      downhill and take the ladders sometimes and not others; the hammer runs out;
      the fourth stage is the same as the first with the rules turned up. Standing
      in front of that cabinet is where I started wondering who decided all of
      that, and whether it could be me.</p>

      <p>It also carries the first cutscene in a video game, the first jump
      button, and a character called Jumpman who got renamed
      Mario and never went away. The people who made it
      were inventing the vocabulary in public and did not know it yet.</p>

      <p>I did not have a machine of my own for another four years. When one
      finally <a href="/log/first-machine">turned up in my bedroom</a>, I already
      knew what I wanted to do with it.</p>
    `,
  },
  {
    id: 'ibm-pc',
    year: 1981,
    date: '1981-08-12',
    track: 'tech',
    title: 'The IBM PC 5150',
    dek: 'IBM builds it from parts anyone can buy and licenses the OS non-exclusively. The clone industry starts the same afternoon.',
    tags: ['ibm', 'dos', 'hardware'],
  },
  {
    id: 'mtv',
    year: 1981,
    date: '1981-08-01',
    track: 'world',
    title: 'MTV signs on',
    dek: 'Video Killed the Radio Star, and then twenty-four hours of a new visual language nobody had a name for.',
    tags: ['music', 'television'],
  },
  {
    id: 'ultima-i',
    year: 1981,
    track: 'play',
    title: 'Ultima I',
    dek: 'A tile world, a dungeon in wireframe, and a nineteen-year-old author whose name is on the box.',
    tags: ['rpg', 'origin'],
  },
  {
    id: 'commodore-64',
    year: 1982,
    date: '1982-08',
    track: 'tech',
    title: 'The Commodore 64',
    dek: 'Sixty-four kilobytes, sprites in hardware, and the SID chip. It goes on to be the best-selling computer model ever made.',
    tags: ['commodore', 'hardware'],
    feature: true,
    spec: [
      { label: 'CPU', value: 'MOS 6510 · 1.02 MHz' },
      { label: 'RAM', value: '64 KB' },
      { label: 'Video', value: 'VIC-II · 320 × 200, 16 colors, 8 sprites' },
      { label: 'Sound', value: 'SID 6581 · 3 voices, filter' },
      { label: 'Price', value: '$595, then $199' },
    ],
    body: `
      <p>The C64 is the machine that made the most programmers, and it did it by
      being cheap enough to be a Christmas present and open enough to be a
      career. It boots in under a second to a <code>READY.</code> prompt with a
      blinking cursor, and there is nothing else to do with it until you type.</p>
      <p>It had hardware sprites and a real synthesizer on the same board as the
      BASIC interpreter. You could <code>POKE</code> a value at 53280 and watch the border change color. The shortest distance ever built between a number and a visible consequence.</p>
    `,
  },
  {
    id: 'blade-runner-tron',
    year: 1982,
    track: 'world',
    title: 'Blade Runner and TRON',
    dek: 'Two films in one summer decide what a computer looks like from the inside for the next forty years.',
    tags: ['film'],
  },
  {
    id: 'time-machine-of-the-year',
    year: 1983,
    date: '1983-01-03',
    track: 'tech',
    title: 'Time names the computer Machine of the Year',
    dek: 'No person is chosen for 1982. The magazine puts a beige box on the cover instead.',
    tags: ['culture'],
  },
  {
    id: 'apple-lisa',
    year: 1983,
    date: '1983-01-19',
    track: 'tech',
    title: 'The Apple Lisa',
    dek: 'Windows, icons, menus, a mouse, and $9,995. The right idea at four times the survivable price.',
    tags: ['apple', 'hardware', 'ui'],
  },
  {
    id: 'return-of-the-jedi',
    year: 1983,
    date: '1983-05-25',
    track: 'world',
    title: 'Return of the Jedi',
    dek: 'The trilogy closes, and the tie-in games arrive on every eight-bit machine within a year.',
    tags: ['film'],
  },
  {
    id: "sts-1",
    year: 1981,
    date: "1981-04-12",
    track: "world",
    title: "Columbia flies",
    dek: "The first Space Shuttle launch. John Young and Robert Crippen go up on rockets and land on a runway two days later, which nothing had done before.",
    tags: ["space"],
  },
];
