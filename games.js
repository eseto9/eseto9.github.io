// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update your site. No build step needed.
//  Save, then refresh the page to see changes.
// ─────────────────────────────────────────────────────────────

window.SITE = {
  name: "Eugene's Games",
  mark: "controller",                        // icon next to your name (see icons.js)
  tagline: "Learning how to create games with Claude",
  fine: "No downloads · No accounts · Just click and play",   // footer line

  // Pill buttons in the top right.
  // icon can be: github, mail, youtube, link
  links: [
    { label: "GitHub", icon: "github", url: "https://github.com/eseto9" },
    // { label: "Email", icon: "mail", url: "mailto:you@example.com" },
  ],
};

// One entry per game. To add a game, copy a block (from { to },) and change it.
//   title    → game name
//   blurb    → one or two sentences under the name
//   url      → where the card sends people (leave "" to show "coming soon")
//   tags     → little labels (filter buttons appear once you have 6+ games)
//   color    → card accent color (stripe, icon, hover glow)
//   icon     → an animated icon from icons.js: puzzle, boat, firefly, marble, controller
//   image    → OR a picture instead of an icon, e.g. "img/mygame.png"
//   featured → true makes it a dark charcoal card (optional; currently unused)
window.GAMES = [
  {
    title: "LUMEN",
    blurb: "Fireflies vs. the Long Night. Your light is your life — survive 40 rounds until dawn. Solo, local party, or online.",
    url: "https://eseto9.github.io/lumen/",
    tags: ["arcade", "multiplayer"],
    color: "#f2cf5b",
    icon: "firefly",
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
  {
    title: "ClickClack",
    blurb: "A one-thumb marble chaos roguelite. Pull back, let go, and make everything collide — every hit scores.",
    url: "https://eseto9.github.io/ClickClack/",
    tags: ["arcade", "roguelite"],
    color: "#e8735f",
    icon: "marble",
  },
];
