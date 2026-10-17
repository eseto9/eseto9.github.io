(function () {
  const site = window.SITE || {};
  const games = window.GAMES || [];
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

  // ── Profile ──
  document.title = site.name || "Games";
  const ICONS = window.ICONS || {};
  const setIcon = (node, name, fallback) => {
    if (ICONS[name]) node.innerHTML = ICONS[name];
    else node.replaceChildren(el("span", "glyph", name || fallback || ""));
  };
  setIcon($("brandMark"), site.mark, "★");
  $("name").textContent = site.name || "";
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

  // ── Cards ──
  function card(g, opts = {}) {
    const li = el("li");
    const live = !!g.url;
    const c = el(live ? "a" : "div", "card");
    if (opts.slim) c.classList.add("slim");
    if (g.featured) c.classList.add("featured");
    if (!live) c.classList.add("soon");
    if (live) external(c, g.url);
    c.style.setProperty("--accent", g.color || "var(--green)");

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
      const chips = el("div", "chips");
      for (const t of g.tags) {
        const ch = el("span", "chip");
        ch.appendChild(el("i", "dot"));
        ch.appendChild(document.createTextNode(t));
        chips.appendChild(ch);
      }
      if (!live) chips.appendChild(el("span", "chip soon-chip", "coming soon"));
      body.appendChild(chips);
    }

    const arrow = el("span", "arrow");
    if (live) setIcon(arrow, "arrow"); else arrow.textContent = "…";
    arrow.setAttribute("aria-hidden", "true");

    c.append(thumb, body, arrow);
    li.appendChild(c);
    return li;
  }

  // ── Filters ──
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
    $("grid").replaceChildren(...shown.map((g) => card(g)));
    for (const b of $("filters").children) b.setAttribute("aria-pressed", b.dataset.tag === active);
    observe($("grid"));
  }


  // ── Scroll reveal (fade + rise as things enter the screen) ──
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
          if (!e.isIntersecting) return;
          e.target.style.transitionDelay = Math.min(i * 60, 300) + "ms";
          e.target.classList.add("in");
          io.unobserve(e.target);
        });
      }, { threshold: 0.12 })
    : null;
  function observe(root) {
    root.querySelectorAll(".reveal:not(.in)").forEach((n) => (io ? io.observe(n) : n.classList.add("in")));
  }

  render();
  observe(document);

  // ── Cursor-follow glow on cards ──
  document.addEventListener("pointermove", (e) => {
    const c = e.target.closest && e.target.closest(".card");
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", e.clientX - r.left + "px");
    c.style.setProperty("--my", e.clientY - r.top + "px");
  });

  // ── Floating bubbles in the background ──
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) {
    const box = $("bubbles");
    for (let i = 0; i < 18; i++) {
      const b = el("span", "bubble");
      const size = 10 + Math.random() * 46;
      b.style.width = b.style.height = size + "px";
      b.style.left = Math.random() * 100 + "%";
      b.style.animationDuration = 14 + Math.random() * 18 + "s";
      b.style.animationDelay = -Math.random() * 30 + "s";
      b.style.setProperty("--sway", (Math.random() * 60 - 30).toFixed(0) + "px");
      box.appendChild(b);
    }
  }

})();
