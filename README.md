# eseto9.github.io

My game portfolio — live at **https://eseto9.github.io/**

Plain HTML/CSS/JS, no build step. GitHub Pages serves it straight from `main`.

## Editing

Almost everything lives in **`games.js`**:

- **Your name, tagline, social links** → the `SITE` block at the top.
- **Add a game** → copy one `{ ... },` block in `GAMES`, paste it, change the fields.
- **Remove / reorder games** → delete or move blocks. They show in the same order.
- **Featured (dark green) card** → put `featured: true` on one game.
- **Icon** → `icon: "firefly" | "puzzle" | "boat" | "controller"`, or `image: "img/file.png"`.

On github.com: open `games.js` → pencil icon → edit → **Commit changes**. The site updates in about a minute.

Other files: `icons.js` (animated SVG icons), `styles.css` (look and animations), `app.js` (builds the page).
