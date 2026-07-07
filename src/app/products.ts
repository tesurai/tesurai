// Shared product data for the landing page and the per product pages, so both
// stay in sync. Copy rules: fifth grade reading level, no dashes anywhere, no
// named LLMs and no named voice provider on the page, no made up outcome claims.

export type Product = {
  id: string;
  n: string;
  name: string;
  title: string; // short headline
  tagline: string; // bold anchor line
  body: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "quantum",
    n: "01",
    name: "Quantum",
    title: "A memory for every user",
    tagline: "Like an LLM, but for your brain.",
    body: [
      "Quantum is an AI brain that belongs to each user, built from their life inside your product. Every session, every entry, every action feeds it.",
      "Over time it compiles what it hears into skills, traits, patterns, and commitments: one living map of the user, recalled instantly whenever they talk.",
    ],
  },
  {
    id: "tessa",
    n: "02",
    name: "Tessa",
    title: "Analytics you can talk to",
    tagline: "The intelligence layer on top of Quantum.",
    body: [
      "Tessa reads the map Quantum builds, finds the patterns users cannot see themselves, and turns them into feedback.",
      "What to fix, what to keep doing, and the next step to take: clear feedback from a user's own data, aimed at the results they came for.",
    ],
  },
  {
    id: "voice",
    n: "03",
    name: "Voice",
    title: "A voice, not a screen",
    tagline: "The voice of your product.",
    body: [
      "Voice is what speaks to your users. It is the layer that lets them talk to Quantum and Tessa out loud and hear the answer back in a natural voice.",
      "Users ask in the moment and the software answers in the moment. No menus, no forms, no charts.",
    ],
  },
  {
    id: "senna",
    n: "04",
    name: "Senna",
    title: "Grow together",
    tagline: "Someone real is in it with you.",
    body: [
      "Senna is the social side of your product: a place for users to pair up, run programs together, and hold each other accountable.",
      "Two people run the same goal side by side and share every check in. Tessa sits in the middle, reads both sides, and gives them the feedback to grow stronger together.",
    ],
  },
];
