/* =========================================================
   ÍCONOS DE HERRAMIENTAS
   ---------------------------------------------------------
   Cada clave es el nombre exacto que se usa en "tools" dentro de
   projects.js. Para sumar una herramienta nueva, agregá una entrada:
     "Nombre": { bg: "#fondo", fg: "#letra", label: "Xx" }   ← ícono de letras
     "Nombre": { svg: '<svg …>…</svg>' }                     ← ícono dibujado
   Si una herramienta no está acá, se muestra un ícono genérico.
   ========================================================= */

const TOOL_ICONS = {
  /* Software: ícono cuadrado con las letras de la app */
  "Illustrator":   { bg: "#330000", fg: "#ff9a00", label: "Ai" },
  "Photoshop":     { bg: "#001e36", fg: "#31a8ff", label: "Ps" },
  "InDesign":      { bg: "#49021f", fg: "#ff3366", label: "Id" },
  "After Effects": { bg: "#00005b", fg: "#9999ff", label: "Ae" },
  "CorelDRAW":     { bg: "#0b6d3a", fg: "#ffffff", label: "Cd" },

  /* Software con ícono propio simplificado */
  "Figma": {
    svg: '<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="#1e1e1e"/><g transform="translate(13 7)"><path d="M3.5 0h3.5v7H3.5a3.5 3.5 0 0 1 0-7Z" fill="#f24e1e"/><path d="M7 0h3.5a3.5 3.5 0 0 1 0 7H7Z" fill="#ff7262"/><path d="M3.5 7H7v7H3.5a3.5 3.5 0 0 1 0-7Z" fill="#a259ff"/><circle cx="10.5" cy="10.5" r="3.5" fill="#1abcfe"/><path d="M3.5 14H7v3.5A3.5 3.5 0 1 1 3.5 14Z" fill="#0acf83"/></g></svg>'
  },
  "Canva": {
    svg: '<svg viewBox="0 0 40 40"><defs><linearGradient id="cv" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#00c4cc"/><stop offset="1" stop-color="#7d2ae8"/></linearGradient></defs><circle cx="20" cy="20" r="20" fill="url(#cv)"/><path d="M25 25.5c-1.4 1.6-3.2 2.5-5.1 2.5-4.4 0-7.4-3.5-7.4-8s3.3-8 7.3-8c2.6 0 4.4 1.5 4.4 3.2 0 1.1-.8 1.9-1.8 1.9-1.6 0-1.4-2.6-3-2.6-2 0-3.6 2.4-3.6 5.4s1.7 5.3 4.3 5.3c1.6 0 3-.8 4.1-2.2Z" fill="#fff"/></svg>'
  },
  "Procreate": {
    svg: '<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="#1b1a17"/><path d="M27 10c-4 2-9 8-11 12l2 2c4-2 10-7 12-11 .6-1.6-1.4-3.6-3-3Z" fill="#f8f3df"/><path d="M14.5 23.5c-2 0-3.5 1.6-3.5 3.6 0 1.2-.7 2-1.8 2.4 3.5 1.3 7.8-.3 7.8-3.5Z" fill="#ff0000"/></svg>'
  },

  /* Técnicas manuales: doodles en tinta al estilo De Carlota */
  "Marcador": {
    svg: '<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="#f8f3df" stroke="#1b1a17" stroke-width="1.5"/><path d="M12 28l3-1 13-13-2-2-13 13Z" fill="none" stroke="#1b1a17" stroke-width="2" stroke-linejoin="round"/><path d="M24 12l4 4" stroke="#ff0000" stroke-width="3" stroke-linecap="round"/></svg>'
  },
  "Tinta": {
    svg: '<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="#f8f3df" stroke="#1b1a17" stroke-width="1.5"/><path d="M20 9c-4 6-7 9.5-7 13a7 7 0 0 0 14 0c0-3.5-3-7-7-13Z" fill="#1b1a17"/><path d="M17 23a3 3 0 0 0 3 3" stroke="#f8f3df" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>'
  },
  "Acuarela": {
    svg: '<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="#f8f3df" stroke="#1b1a17" stroke-width="1.5"/><circle cx="15" cy="17" r="5" fill="#ff0000" opacity=".75"/><circle cx="24" cy="15" r="5" fill="#f3e43a" opacity=".85"/><circle cx="21" cy="24" r="5" fill="#2f7d5b" opacity=".7"/></svg>'
  },
  "Serigrafía": {
    svg: '<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="#f8f3df" stroke="#1b1a17" stroke-width="1.5"/><rect x="10" y="12" width="20" height="14" rx="2" fill="none" stroke="#1b1a17" stroke-width="2"/><path d="M8 29h24" stroke="#ff0000" stroke-width="3" stroke-linecap="round"/></svg>'
  }
};

/* Devuelve el HTML de una herramienta: ícono + nombre */
function toolBadge(name) {
  const t = TOOL_ICONS[name];
  let icon;
  if (!t) {
    icon = '<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="#ebe3cf" stroke="#1b1a17" stroke-width="1.5"/><path d="M20 11c1 5 3 7.5 9 9-6 1-8 3.5-9 9-1-5.5-3-8-9-9 6-1.5 8-4 9-9Z" fill="#1b1a17"/></svg>';
  } else if (t.svg) {
    icon = t.svg;
  } else {
    icon = `<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="${t.bg}"/><rect x="2.5" y="2.5" width="35" height="35" rx="7" fill="none" stroke="${t.fg}" stroke-width="1.6"/><text x="20" y="26" text-anchor="middle" font-family="Urbanist, Arial, sans-serif" font-weight="700" font-size="16" fill="${t.fg}">${t.label}</text></svg>`;
  }
  return `<li class="tool"><span class="tool-icon" aria-hidden="true">${icon}</span><span>${name}</span></li>`;
}
