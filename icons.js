// Hand-drawn animated SVG icons. Use them in games.js with  icon: "name".
// Colors come from the card's accent color (--accent) and the text color
// (currentColor), so they adapt to each card and to dark mode.
// Animations live in styles.css under "Icon animations".

window.ICONS = {
  // Two jigsaw pieces: the right one floats loose, and snaps in on hover.
  puzzle: `
<svg viewBox="0 0 64 64" class="ic ic-puzzle" aria-hidden="true">
  <g class="pz-a">
    <rect x="9" y="18" width="23" height="28" rx="4" fill="var(--accent)"/>
    <circle cx="34" cy="32" r="5" fill="var(--accent)"/>
  </g>
  <g class="pz-b-float"><g class="pz-b">
    <path d="M36 18 H51 a4 4 0 0 1 4 4 V42 a4 4 0 0 1 -4 4 H36 V37.5 A5.5 5.5 0 0 0 36 26.5 Z"
          fill="currentColor" opacity=".82"/>
  </g></g>
  <circle class="pz-spark" cx="35" cy="14" r="2" fill="var(--accent)"/>
</svg>`,

  // A folded paper boat bobbing on scrolling waves.
  boat: `
<svg viewBox="0 0 64 64" class="ic ic-boat" aria-hidden="true">
  <defs><clipPath id="boatClip"><rect x="0" y="0" width="64" height="64" rx="14"/></clipPath></defs>
  <g clip-path="url(#boatClip)">
    <g class="bt-boat">
      <path d="M32 12 L32 37 L19 37 Z" fill="var(--accent)"/>
      <path d="M32 12 L32 37 L45 37 Z" fill="var(--accent)" opacity=".62"/>
      <path d="M13 37 H51 L44 46 H20 Z" fill="currentColor"/>
      <path d="M13 37 L32 41 L51 37" fill="none" stroke="var(--accent)" stroke-width="1.4" opacity=".7"/>
    </g>
    <path class="bt-wave bt-w1" d="M-32 47 q8 -5 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 V70 H-32 Z" fill="var(--accent)" opacity=".38"/>
    <path class="bt-wave bt-w2" d="M-32 52 q8 -5 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 V70 H-32 Z" fill="var(--accent)" opacity=".7"/>
  </g>
</svg>`,

  // A firefly with a pulsing glow and little lights orbiting it.
  firefly: `
<svg viewBox="0 0 64 64" class="ic ic-firefly" aria-hidden="true">
  <defs>
    <radialGradient id="ffGlow"><stop offset="0" stop-color="var(--accent)" stop-opacity=".95"/><stop offset=".45" stop-color="var(--accent)" stop-opacity=".35"/><stop offset="1" stop-color="var(--accent)" stop-opacity="0"/></radialGradient>
  </defs>
  <circle class="ff-glow" cx="32" cy="36" r="22" fill="url(#ffGlow)"/>
  <g class="ff-orbit">
    <circle cx="32" cy="10" r="1.8" fill="var(--accent)"/>
    <circle cx="54" cy="40" r="1.4" fill="var(--accent)"/>
    <circle cx="12" cy="46" r="1.2" fill="var(--accent)"/>
  </g>
  <g class="ff-body">
    <ellipse class="ff-wing ff-wl" cx="25" cy="24" rx="7" ry="10" fill="currentColor" opacity=".28" transform="rotate(-28 25 24)"/>
    <ellipse class="ff-wing ff-wr" cx="39" cy="24" rx="7" ry="10" fill="currentColor" opacity=".28" transform="rotate(28 39 24)"/>
    <ellipse cx="32" cy="27" rx="5" ry="7" fill="currentColor"/>
    <ellipse class="ff-tail" cx="32" cy="38" rx="6" ry="7.5" fill="var(--accent)"/>
    <path d="M30 20 Q27 13 23 12 M34 20 Q37 13 41 12" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  </g>
</svg>`,

  // Game controller for the logo / avatar — buttons blink.
  controller: `
<svg viewBox="0 0 64 64" class="ic ic-controller" aria-hidden="true">
  <path d="M18 20 H46 C54 20 58 28 59 38 C60 47 55 51 50 47 L43 40 H21 L14 47 C9 51 4 47 5 38 C6 28 10 20 18 20 Z" fill="currentColor"/>
  <rect x="15" y="28" width="12" height="4" rx="1.5" fill="var(--accent)"/>
  <rect x="19" y="24" width="4" height="12" rx="1.5" fill="var(--accent)"/>
  <circle class="ct-btn ct-b1" cx="44" cy="27" r="3" fill="var(--accent)"/>
  <circle class="ct-btn ct-b2" cx="50" cy="32" r="3" fill="var(--accent)"/>
  <circle class="ct-btn ct-b3" cx="38" cy="32" r="3" fill="var(--accent)"/>
  <circle class="ct-btn ct-b4" cx="44" cy="37" r="3" fill="var(--accent)"/>
</svg>`,

  // Small icons for pills and "More" cards
  github: `<svg viewBox="0 0 16 16" class="ic-sm" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" class="ic-sm" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" class="ic-sm" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor"/><path d="M10 9l5 3-5 3z" fill="var(--paper)"/></svg>`,
  link: `<svg viewBox="0 0 24 24" class="ic-sm" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" class="ic-arrow" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
};
