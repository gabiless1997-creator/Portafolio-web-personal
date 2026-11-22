/* =========================================================
   Lógica del portafolio: render de proyectos, filtros,
   vista de detalle (#/proyecto/slug), lightbox y animaciones.
   ========================================================= */
(() => {
  const IMG = "assets/img/";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  const ICON_ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  const FLOWER = document.getElementById("flower-tpl").innerHTML;

  // "archivo.jpg|wide" -> { src, size }
  const parseImg = (folder, entry) => {
    const [file, size = ""] = entry.split("|");
    return { src: IMG + folder + "/" + file, size };
  };

  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Índice por categorías ---------- */
  function renderIndex() {
    const filters = $("#filters");
    const holder = $("#categories");

    filters.innerHTML =
      `<button class="filter-btn" data-filter="all" aria-pressed="true">Todo</button>` +
      CATEGORIES.map((c) => `<button class="filter-btn" data-filter="${c.id}" aria-pressed="false">${c.name}</button>`).join("");

    holder.innerHTML = CATEGORIES.map((cat, i) => {
      const items = PROJECTS.filter((p) => p.category === cat.id);
      if (!items.length) return "";
      return `
      <section class="category" data-cat="${cat.id}" id="cat-${cat.id}">
        <div class="cat-band ${cat.band} reveal">
          <span class="num">0${i + 1}</span>
          <h2>${cat.name}</h2>
          <p>${cat.desc}</p>
          <span class="doodle spin" aria-hidden="true">${FLOWER}</span>
        </div>
        <div class="banners ${cat.band}">
          ${items.map(bannerHtml).join("")}
        </div>
      </section>`;
    }).join("");

    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      const f = btn.dataset.filter;
      $$(".filter-btn", filters).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      $$(".category", holder).forEach((sec) => (sec.hidden = f !== "all" && sec.dataset.cat !== f));
      $$(".reveal", holder).forEach((el) => el.classList.add("in"));
    });

    holder.addEventListener("click", (e) => {
      const banner = e.target.closest(".banner");
      if (banner) location.hash = "#/proyecto/" + banner.dataset.slug;
    });
  }

  // Banner de proyecto: solo título, cliente, año y flecha (sin vista previa)
  function bannerHtml(p, i) {
    return `
      <button class="banner reveal" data-slug="${p.slug}" aria-label="Ver proyecto ${escapeHtml(p.title)}">
        <span class="banner-num">${String(i + 1).padStart(2, "0")}</span>
        <span class="banner-title">
          <span class="name" role="heading" aria-level="3">${escapeHtml(p.title)}</span>
          ${p.client ? `<span class="client">${escapeHtml(p.client)}</span>` : ""}
        </span>
        <span class="banner-year">${p.year || ""}</span>
        <span class="banner-arrow">${ICON_ARROW}</span>
      </button>`;
  }

  /* ---------- Galería De Carlota ---------- */
  function renderCarlota() {
    const el = $("#carlota-gallery");
    const imgs = CARLOTA_GALLERY.map((src) => ({ src: IMG + src }));
    el.innerHTML = imgs
      .map((im, i) => `<button class="m-item reveal" data-i="${i}" aria-label="Ampliar imagen ${i + 1}"><img src="${im.src}" alt="Ilustración De Carlota ${i + 1}" loading="lazy" decoding="async"></button>`)
      .join("");
    el.addEventListener("click", (e) => {
      const b = e.target.closest(".m-item");
      if (b) Lightbox.open(imgs, +b.dataset.i);
    });
  }

  /* ---------- Vista de proyecto ---------- */
  const view = $("#project-view");
  let lastFocus = null;

  function openProject(slug) {
    const idx = PROJECTS.findIndex((p) => p.slug === slug);
    if (idx < 0) return closeProject(true);
    const p = PROJECTS[idx];
    const cat = CATEGORIES.find((c) => c.id === p.category);
    const imgs = p.images.map((e) => parseImg(p.folder, e));
    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    const list = (arr) => `<ul>${(arr || []).map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`;

    view.innerHTML = `
      <div class="pv-bar">
        <span class="crumb">${cat ? cat.name : ""} · ${escapeHtml(p.title)}</span>
        <button class="pv-close" data-close>Cerrar <span aria-hidden="true">✕</span></button>
      </div>
      <header class="pv-intro">
        <div class="wrap">
          <h1 id="pv-title">${escapeHtml(p.title)}</h1>
          <p class="pv-client">${escapeHtml(p.client || "")}</p>
          <p class="pv-desc">${escapeHtml(p.description || "")}</p>
          <div class="pv-meta">
            <div><h4>Servicios</h4>${list(p.services)}</div>
            <div><h4>Herramientas</h4><ul class="tools">${(p.tools || []).map(toolBadge).join("")}</ul></div>
            ${p.year ? `<div><h4>Año</h4><ul><li>${p.year}</li></ul></div>` : ""}
          </div>
        </div>
      </header>
      <div class="pv-gallery">
        <div class="wrap">
          <div class="bento">
            ${imgs.map((im, i) => `<button class="m-item ${im.size}" data-i="${i}" aria-label="Ampliar imagen ${i + 1}"><img src="${im.src}" alt="${escapeHtml(p.title)} – imagen ${i + 1}" loading="lazy" decoding="async"></button>`).join("")}
          </div>
          <nav class="pv-nav" aria-label="Otros proyectos">
            <button data-go="${prev.slug}"><small>← Anterior</small><strong>${escapeHtml(prev.title)}</strong></button>
            <button data-go="${next.slug}"><small>Siguiente →</small><strong>${escapeHtml(next.title)}</strong></button>
          </nav>
        </div>
      </div>`;

    view.setAttribute("aria-labelledby", "pv-title");
    view.onclick = (e) => {
      if (e.target.closest("[data-close]")) return closeProject();
      const go = e.target.closest("[data-go]");
      if (go) return (location.hash = "#/proyecto/" + go.dataset.go);
      const it = e.target.closest("[data-i]");
      if (it) Lightbox.open(imgs, +it.dataset.i);
    };

    if (!view.classList.contains("open")) lastFocus = document.activeElement;
    view.classList.add("open");
    view.scrollTop = 0;
    document.body.classList.add("locked");
    document.title = `${p.title} · Gabriela Ledezma`;
    setTimeout(() => $(".pv-close", view).focus({ preventScroll: true }), 300);
  }

  function closeProject(silent) {
    view.classList.remove("open");
    document.body.classList.remove("locked");
    document.title = "Gabriela Ledezma · Diseñadora gráfica & ilustradora";
    if (!silent && location.hash.startsWith("#/proyecto/")) history.pushState("", "", location.pathname + "#trabajos");
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }

  function route() {
    const m = location.hash.match(/^#\/proyecto\/([\w-]+)/);
    if (m) openProject(m[1]);
    else if (view.classList.contains("open")) closeProject(true);
  }

  /* ---------- Lightbox ---------- */
  const Lightbox = (() => {
    const lb = $("#lightbox");
    const img = $("img", lb);
    const count = $(".lb-count", lb);
    let list = [], i = 0;
    const show = () => {
      img.src = list[i].src;
      count.textContent = `${i + 1} / ${list.length}`;
      $$(".lb-prev, .lb-next", lb).forEach((b) => (b.hidden = list.length < 2));
    };
    const open = (l, idx) => { list = l; i = idx || 0; show(); lb.classList.add("open"); $(".lb-close", lb).focus(); };
    const close = () => { lb.classList.remove("open"); img.removeAttribute("src"); };
    const step = (d) => { i = (i + d + list.length) % list.length; show(); };
    lb.addEventListener("click", (e) => {
      if (e.target.closest(".lb-close") || e.target === lb) close();
      else if (e.target.closest(".lb-prev")) step(-1);
      else if (e.target.closest(".lb-next")) step(1);
    });
    let sx = null;
    lb.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
    lb.addEventListener("touchend", (e) => {
      if (sx === null) return;
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
      sx = null;
    });
    return { open, close, step, isOpen: () => lb.classList.contains("open") };
  })();

  document.addEventListener("keydown", (e) => {
    if (Lightbox.isOpen()) {
      if (e.key === "Escape") Lightbox.close();
      if (e.key === "ArrowRight") Lightbox.step(1);
      if (e.key === "ArrowLeft") Lightbox.step(-1);
      return;
    }
    if (e.key === "Escape" && view.classList.contains("open")) closeProject();
  });

  /* ---------- Header, menú y reveal ---------- */
  function initChrome() {
    const header = $(".site-header");
    const onScroll = () => header.classList.toggle("scrolled", scrollY > 10);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const btn = $(".menu-btn");
    const nav = $(".nav");
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
    });
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) { btn.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); }
    });

    // resalta el link de la sección visible
    const links = $$(".nav a");
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main > section[id]").forEach((s) => spy.observe(s));

    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    $$(".reveal").forEach((el) => io.observe(el));

    $("#year").textContent = new Date().getFullYear();
  }

  /* ---------- Pantalla de carga ---------- */
  function initLoader() {
    const loader = document.getElementById("loader");
    if (!loader) return;
    const start = performance.now();
    const hide = () => {
      const wait = Math.max(0, 900 - (performance.now() - start)); // se ve al menos ~1s
      setTimeout(() => loader.classList.add("done"), wait);
    };
    if (document.readyState === "complete") hide();
    else addEventListener("load", hide, { once: true });
    setTimeout(() => loader.classList.add("done"), 4000); // por si alguna imagen tarda
  }

  initLoader();
  renderIndex();
  renderCarlota();
  initChrome();
  addEventListener("hashchange", route);
  route();
})();
