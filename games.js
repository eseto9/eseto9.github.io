// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update your site. No build step needed.
//  Save, then refresh the page to see changes.
// ─────────────────────────────────────────────────────────────

window.SITE = {
  name: "eseto9",
  mark: "controller",                        // icon in the header + big avatar tile (see icons.js)
  badge: "Indie game dev · Browser games",   // pill above your name
  tagline: "I make small, strange, polished games you can play right in your browser. Pick one below and jump in.",
  fine: "No downloads · No accounts · Just click and play",

  // Pill buttons under your name.
  // icon can be: github, mail, youtube, link
  links: [
    { label: "GitHub", icon: "github", url: "https://github.com/eseto9" },
    // { label: "Email", icon: "mail", url: "mailto:you@example.com" },
  ],

  // Slim cards in the "More" section at the bottom.
  extras: [
    { title: "All my code on GitHub", blurb: "Every game here is open source.", url: "https://github.com/eseto9", icon: "github" },
  ],
};

// One entry per game. To add a game, copy a block (from { to },) and change it.
//   title    → game name
//   blurb    → one or two sentences under the name
//   url      → where the card sends people (leave "" to show "coming soon")
//   tags     → little labels; also make the filter buttons at the top
//   color    → card accent color (stripe, icon, hover glow)
//   icon     → an animated icon from icons.js: puzzle, boat, firefly, controller
//   image    → OR a picture instead of an icon, e.g. "img/mygame.png"
//   featured → true makes it the big dark-green card (use on one game)
window.GAMES = [
  {
    title: "LUMEN",
    blurb: "Fireflies vs. the Long Night. Your light is your life — survive 40 rounds until dawn. Solo, local party, or online.",
    url: "https://eseto9.github.io/lumen/",
    tags: ["arcade", "multiplayer"],
    color: "#f2cf5b",
    icon: "firefly",
    featured: true,
  },
  {
    title: "Puzzle Playground",
    blurb: "Eight daily logic puzzles — new ones every midnight. Race a friend, climb the leaderboard, chase your best time.",
    url: "https://eseto9.github.io/puzzle-playground/",
    tags: ["puzzle", "daily", "multiplayer"],
    color: "#6f9fd0",
    icon: "puzzle",
  },
  {
    title: "Tide & Fold",
    blurb: "A paper-sea card game for 2–4 players. Collect sets, pair up duos, and stop the round while you're ahead.",
    url: "https://eseto9.github.io/Sea-Salt-Paper/",
    tags: ["cards", "multiplayer"],
    color: "#d9a843",
    icon: "boat",
  },
];
