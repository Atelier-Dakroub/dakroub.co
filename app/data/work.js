// /work renders this file and nothing else, on screen and on paper.
//
// Everything here comes off the resume. Where a line says `needs`, the resume
// did not have the number and only you do, /backstage lists those.

/** @typedef {import('./types.js').Role} Role */

/**
 * Newest first. `/work` prints them in this order and does not sort.
 *
 * @type {Role[]}
 */
export const roles = [
  {
    id: "heyo",
    brand: "heyo",
    title: "Senior Full Stack Engineer",
    org: "Heyo",
    where: "",
    from: "2025",
    to: "present",
    summary:
      "Senior engineer driving day-to-day development across web and mobile, in one TypeScript codebase, with Claude Code as part of the daily workflow rather than an experiment beside it.",
    did: [
      "Drive day-to-day development in React, React Native and TypeScript, using Claude Code to accelerate feature delivery across web and mobile.",
      "Design and ship cross-platform mobile experiences with Expo and React Native alongside web features in Next.js, sharing a single TypeScript codebase across platforms.",
      "Build and maintain backend services with Nest.js and Prisma, designing the PostgreSQL schemas behind the product’s core APIs.",
      "Establish UI and UX patterns and a shared component library in ShadCN, TailwindCSS and Emotion, keeping the design language consistent across web and mobile.",
      "Shipped an internal platform for Flagship Financial and a multi-platform app for Tillster.",
    ],
    stack: [
      "React",
      "React Native",
      "TypeScript",
      "Next.js",
      "Nest.js",
      "Prisma",
      "Expo",
      "PostgreSQL",
      "TailwindCSS",
      "ShadCN",
      "Emotion",
      "Claude Code",
    ],
  },
  {
    id: "freelance",
    brand: "freelance",
    title: "Full Stack Engineer",
    org: "Freelance",
    where: "",
    from: "2022",
    to: "2025",
    summary:
      "Architecture, design, prototyping and full-stack implementation for client work, and the years I got to choose the stack.",
    did: [
      "Led architecture, design, prototyping and full-stack implementation of client projects, including the Statamic build of the Timothy McAllister site, the fourth of five versions across a twenty-five-year collaboration.",
      "Increased site performance by over 150% and cut bandwidth usage by 50% through targeted front-end optimization.",
      "Architected Hyperspaces, a serverless peer-to-peer social network on Trystero and WebRTC, a research project in Deno, Web Components and LitElement.",
    ],
    stack: [
      "TypeScript",
      "Deno",
      "Lit",
      "Web Components",
      "Trystero",
      "WebRTC",
      "Statamic CMS",
      "TailwindCSS",
      "PHP",
    ],
  },
  {
    id: "kajabi",
    brand: "kajabi",
    title: "UX Developer",
    org: "Kajabi",
    where: "",
    from: "2020",
    to: "2022",
    summary:
      "The Kajabi Design System: the component library, the documentation, and the work of getting every stakeholder team to actually use it.",
    did: [
      "Partnered with designers, engineers and product managers to evolve the Kajabi Design System to meet the needs of every stakeholder team.",
      "Authored comprehensive component documentation in Storybook that drove design-system adoption company-wide.",
      "Built accessible, reusable Web Components and React and TypeScript UI, with a consistent focus on WCAG compliance.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Web Components",
      "Storybook",
      "Sass",
      "WCAG",
      "ARIA",
    ],
  },
  {
    id: "dockyard",
    brand: "dockyard",
    title: "UX Developer",
    org: "DockYard",
    where: "",
    from: "2019",
    to: "2020",
    summary:
      "Consulting work on design systems for two companies whose interfaces a very large number of people use every day.",
    did: [
      "Built and maintained design systems for Netflix internal tooling and Apple Music, ensuring visual and functional consistency at scale.",
      "Championed accessibility and component reusability across Ember.js, React and Web Components implementations.",
    ],
    stack: ["Ember.js", "React", "Web Components", "ARIA", "WCAG"],
  },
  {
    id: "detroit-trading",
    brand: "detroit-trading",
    title: "UIX Architect",
    org: "Detroit Trading Company",
    where: "Detroit, Michigan",
    from: "2018",
    to: "2019",
    summary:
      "Designed and built accessible, research-driven interfaces for internal and external automotive products.",
    did: [
      "Designed and built accessible, research-driven UIs in React, Node.js and Razor.",
    ],
    stack: ["React", "Node.js", "Razor", "WCAG"],
  },
  {
    id: "hand-whittled",
    brand: "hand-whittled",
    title: "Business Owner",
    org: "Hand Whittled",
    where: "",
    from: "2015",
    to: "2018",
    summary:
      "My own design and development studio, delivering full-stack web, iOS and Apple TV work for entertainment, construction and shipping clients.",
    did: [
      "Founded and ran the studio: sales, scoping, design, implementation and support.",
      "Shipped full-stack web, iOS and Apple TV work for Brilliant Chemistry, The Great Lakes Stair & Millwork Co and Dubspot.",
      "Carried three clients in three unrelated industries, each of which needed the work explained a different way.",
    ],
    stack: ["Swift", "Objective-C", "JavaScript", "PHP"],
  },
  {
    id: "tradeweb",
    brand: "tradeweb",
    title: "Frontend Developer",
    org: "Tradeweb",
    where: "",
    from: "2010",
    to: "2015",
    summary:
      "Internal and external financial applications, and the first stretch where the job was as much about the team as the code.",
    did: [
      "Built a single-page application with a component-based architecture in ExtJS, composed screens, shared state, one data layer, years before React gave the industry a name for it.",
      "Designed and developed internal and external financial applications for a financial marketplace.",
      "Led front-end teams and established the development practices they worked to.",
    ],
    stack: ["ExtJS", "JavaScript", "CSS", "SQL Server"],
  },
  {
    id: "quicken-loans",
    brand: "quicken-loans",
    title: "Software Engineer",
    org: "Quicken Loans",
    where: "Detroit, Michigan",
    from: "2005",
    to: "2010",
    summary:
      "Led the front-end team, and wrote a PHP framework that is still running the company’s internal and external systems.",
    did: [
      "Led the front-end half of a team of twelve, split between front end and back end.",
      "Architected an internal PHP framework that carried at least six production sites, including quickenloans.com, rockfinancial.com and realestateinsiders.com.",
      "That framework is still running, more than fifteen years later, on internal and external systems.",
      "Designed and built the company’s first mobile site at m.quickenloans.com, in the era of the separate mobile host.",
    ],
    stack: ["PHP", "JavaScript", "CSS", "SQL Server"],
  },
];

/**
 * What I do, grouped. This is the part a hiring manager reads first, so it says
 * capabilities rather than logos.
 *
 * @type {Array<{ group: string, note: string, items: string[] }>}
 */
export const capabilities = [
  {
    group: "Interface engineering",
    note: "Twenty years of production UI, and the half of the job that is HTML and CSS done as though it were the hard part. Because it is.",
    items: [
      "React, React Native and TypeScript, day to day",
      "Web Components and Lit, where the platform is the better answer",
      "Cross-platform from one codebase: Expo and React Native beside Next.js",
      "Modern CSS: grid, container queries, cascade layers, scroll-driven animation, view transitions",
      "Designing in the browser rather than in a picture of one",
      "Progressive enhancement as an architecture, not a fallback",
    ],
  },
  {
    group: "Design systems and accessibility",
    note: "Design systems for Netflix internal tooling, Apple Music and Kajabi. The component library is the easy half.",
    items: [
      "Tokens, components, documentation, and the contract around them",
      "Storybook documentation that made adoption happen company-wide",
      "WCAG and ARIA as a default, not an audit at the end",
      "Getting several stakeholder teams to agree on one vocabulary",
      "Visual systems: typography, color, spacing, motion",
    ],
  },
  {
    group: "Full stack",
    note: "Enough of the back end to design the data, and enough history with it to know what a schema costs later.",
    items: [
      "Node.js, Nest.js and Prisma; PostgreSQL schema design",
      "Next.js, and server-rendered and hypermedia architectures",
      "REST and GraphQL API design",
      "PHP and Laravel; Ruby on Rails; Deno",
      "Compilers and code generation for authoring formats",
    ],
  },
  {
    group: "Practice, and working with people",
    note: "What the staff-shaped half of the job actually is.",
    items: [
      "AI-assisted development with Claude Code, as a real part of the workflow",
      "Written technical argument, design docs, documentation, the memo that settles it",
      "Leading front-end teams and setting the practices they work to",
      "Code review that teaches, and mentoring",
      "Owning a project end to end, including the parts nobody assigned",
    ],
  },
];

/**
 * Languages and tools, in the order they arrived. It doubles as a second
 * timeline, so keep it chronological.
 *
 * @type {Array<{ decade: string, items: string[] }>}
 */
export const toolchain = [
  { decade: "1980s", items: ["BASIC"] },
  { decade: "1990s", items: ["QuickBASIC", "HTML", "JavaScript", "Photoshop"] },
  { decade: "2000s", items: ["CSS", "PHP", "jQuery", "SQL Server"] },
  {
    decade: "2010s",
    items: [
      "Objective-C",
      "ExtJS",
      "Sass",
      "Ember.js",
      "React",
      "TypeScript",
      "Web Components",
      "Swift",
      "Storybook",
    ],
  },
  {
    decade: "2020s",
    items: [
      "React Native",
      "Next.js",
      "Nest.js",
      "Prisma",
      "Lit",
      "Deno",
      "TailwindCSS",
      "Claude Code",
      "transclude",
    ],
  },
];

/**
 * Anything that is not a job: open source, education, writing.
 *
 * @type {Array<{ label: string, items: Array<{ what: string, where: string, when: string, href?: string }> }>}
 */
export const also = [
  {
    label: "Open source",
    items: [
      {
        what: "transclude, an HTML-first server framework, running this site and timothymcallister.com",
        where: "@transclude/core · MIT · Node, Bun, Deno and workerd",
        when: "2026 –",
        href: "https://transclude.dev",
      },
    ],
  },
  {
    label: "Collaboration",
    items: [
      {
        what: "Timothy McAllister, concert saxophonist, design and development, twenty-five years",
        where:
          "Current site built with transclude, running on Cloudflare Workers",
        when: "2001 –",
        href: "https://timothymcallister.com",
      },
    ],
  },
  {
    label: "Music",
    items: [
      {
        what: "Soundtrack for The Trouble with Trash, an independent children’s film for PBS",
        where:
          "Co-authored by Cynthia Nill · written at the University of Michigan – Flint",
        when: "",
      },
    ],
  },
  {
    label: "Education",
    items: [
      {
        what: "Bachelor of Fine Arts, Music Performance, minor in Technical Writing",
        where: "University of Michigan – Flint",
        when: "",
      },
      {
        what: "Clarkston Senior High School",
        where: "Clarkston, Michigan",
        when: "1994",
      },
    ],
  },
];
