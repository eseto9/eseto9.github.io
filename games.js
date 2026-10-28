// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update your site. No build step needed.
//  Save, then refresh the page to see changes.
// ─────────────────────────────────────────────────────────────

window.SITE = {
  name: "Eugene's Projects",
  mark: "projects",                          // icon beside your name (see icons.js)
  tagline: "Learning how to build with Claude",
  fine: "No downloads · No accounts · Just click and play",   // footer line

  // Pill buttons in the top right.
  // icon can be: github, mail, youtube, link
  links: [
    { label: "GitHub", icon: "github", url: "https://github.com/eseto9" },
    // { label: "Email", icon: "mail", url: "mailto:you@example.com" },
  ],
};

// One entry per project (games and apps). Cards show in this order. To add a game, copy a block (from { to },) and change it.
//   title    → game name
//   blurb    → one or two sentences under the name
//   url      → where the card sends people (leave "" to show "coming soon")
//   tags     → little labels (filter buttons appear once you have 10+ projects)
//   color    → accent color (icon tile, hover tint, Open button)
//   icon     → an animated icon from icons.js: puzzle, boat, firefly, marble, hoop, chart, controller, projects
//   image    → OR a picture instead of an icon, e.g. "img/mygame.png"
window.GAMES = [
  {
    title: "Date Nights in the DMV",
    blurb: "A month-by-month calendar of date ideas around DC, Maryland and Virginia, with dates, prices and a saved list.",
    url: "https://eseto9.github.io/DMVActivities/",
    tags: ["dates", "calendar"],
    color: "#d9497a",
    icon: "projects",
  },
  {
    title: "Tipoff",
    blurb: "NBA game predictions. A player-aware model that calls every game before tipoff, updated every morning.",
    url: "https://eseto9.github.io/NBA-Model/",
    tags: ["NBA", "predictions"],
    color: "#2fb39a",
    icon: "chart",
  },
  {
    title: "Hoops Hub",
    blurb: "All your ESPN, Yahoo and Sleeper fantasy basketball leagues in one place.",
    url: "https://hoops-hub-jwah.netlify.app/",
    tags: ["fantasy", "basketball"],
    color: "#f0913a",
    icon: "hoop",
  },
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
