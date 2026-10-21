(function () {
  const site = window.SITE || {};
  const games = window.GAMES || [];
  const ICONS = window.ICONS || {};
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  const external = (a, url) => {
    a.href = url;
    if (!url.startsWith("mailto:") && !url.startsWith("#")) { a.target = "_blank"; a.rel = "noopener"; }
  };
  const setIcon = (node, name, fallback) => {
    if (ICONS[name]) node.innerHTML = ICONS[name];
    else node.replaceChildren(el("span", "glyph", name || fallback || ""));
  };

  // ── Header ──
  document.title = site.name || "Projects";
  setIcon($("brandMark"), site.mark, "★");
  $("name").textContent = site.name || "";
  $("navTitle").textContent = site.name || "";
  $("tagline").textContent = site.tagline || "";
  $("fine").textContent = site.fine || "";
  $("footName").textContent = site.name || "";
  $("year").textContent = new Date().getFullYear();

  for (const l of site.links || []) {
    const a = el("a", "social");
    external(a, l.url);
    if (l.icon) setIcon(a.appendChild(el("span", "ico")), l.icon);
    a.appendChild(el("span", null, l.label));
    $("social").appendChild(a);
  }

  // ── Rows (one per project) ──
  function row(g) {
    const li = el("li");
    const live = !!g.url;
    const c = el(live ? "a" : "div", "card" + (live ? "" : " soon"));
    if (live) external(c, g.url);
    c.style.setProperty("--accent", g.color || "var(--blue)");

    const thumb = el("div", "thumb");
    if (g.image) {
      const img = el("img");
      img.src = g.image; img.alt = ""; img.loading = "lazy";
      thumb.appendChild(img);
    } else {
      setIcon(thumb, g.icon || g.glyph, g.title.charAt(0));
    }

    const body = el("div", "body");
    body.appendChild(el("h3", null, g.title));
    if (g.blurb) body.appendChild(el("p", null, g.blurb));
    if (g.tags && g.tags.length) {
      body.appendChild(el("span", "meta", g.tags.map((t) => t[0].toUpperCase() + t.slice(1)).join(" · ")));
    }

    const btn = el("span", "open-btn", live ? "Open" : "Soon");
    btn.setAttribute("aria-hidden", "true");

    c.append(thumb, body, btn);
    li.appendChild(c);
    return li;
  }

  // ── Segmented filter (only once there are enough projects to need it) ──
  const tags = games.length > 5 ? ["all", ...new Set(games.flatMap((g) => g.tags || []))] : [];
  let active = "all";
  for (const t of tags) {
    const b = el("button", null, t);
    b.type = "button";
    b.dataset.tag = t;
    b.addEventListener("click", () => { active = t; render(); });
    $("filters").appendChild(b);
  }

  function render() {
    const shown = games.filter((g) => active === "all" || (g.tags || []).includes(active));
    $("grid").replaceChildren(...shown.map(row));
    for (const b of $("filters").children) b.setAttribute("aria-pressed", b.dataset.tag === active);
  }
  render();

  // ── Soft glow that follows the cursor inside the hovered row ──
  document.addEventListener("pointermove", (e) => {
    const c = e.target.closest && e.target.closest(".card");
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", e.clientX - r.left + "px");
    c.style.setProperty("--my", e.clientY - r.top + "px");
  });

  // ── Nav bar: frosts as soon as you scroll; small title appears once the big one is gone ──
  const hero = document.querySelector(".hero h1");
  const onScroll = () => {
    $("navBar").classList.toggle("scrolled", window.scrollY > 4);
    $("navBar").classList.toggle("titled", hero.getBoundingClientRect().bottom < 56);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
