/* =========================================================
   DATOS DEL PORTAFOLIO
   ---------------------------------------------------------
   Para agregar un proyecto nuevo:
   1. Creá una carpeta en assets/img/<slug>/ con las imágenes (jpg ~1600px).
   2. Copiá un bloque de PROJECTS, cambiá slug, título, categoría y la lista "images".
      La primera imagen de "images" es la que se ve en la galería;
      "cover" (opcional) es la portada de la tarjeta.
   3. Para que una imagen ocupe todo el ancho en el detalle, agregale "|wide"
      al final del nombre (ej: "foto.jpg|wide"); "|third" la hace angosta.
   ========================================================= */

const CATEGORIES = [
  { id: "branding",    name: "Branding",          band: "band-red",    desc: "Logotipos, sistemas de identidad y propuestas de marca." },
  { id: "kv",          name: "Key Visuals",       band: "band-yellow", desc: "Campañas, conceptos visuales y comunicación interna." },
  { id: "editorial",   name: "Editorial",         band: "band-ink",    desc: "Maquetación de memorias, guías y piezas de lectura." },
  { id: "espacios",    name: "Identidad aplicada", band: "band-green", desc: "Marca llevada a espacios, uniformes, señalética y papelería." },
  { id: "packaging",   name: "Packaging & Merch", band: "band-kraft",  desc: "Cajas, troqueles y objetos de marca que se tocan." },
  { id: "digital",     name: "Digital & Social",  band: "band-paper",  desc: "Wireframes, apps, mailings y contenido para redes." },
  { id: "ilustracion", name: "Ilustración",       band: "band-red",    desc: "Mi lado más personal: trazo, color y retratos en vivo." }
];

const PROJECTS = [
  /* ---------------- BRANDING ---------------- */
  {
    slug: "alfonzo-casco",
    title: "Alfonzo Casco",
    client: "Guía de logo",
    category: "branding",
    year: "2025",
    services: ["Diseño de logo", "Guía de marca", "Papelería"],
    tools: ["Illustrator", "Photoshop"],
    description: "Identidad para Alfonzo Casco: un monograma circular que une las iniciales, una paleta roja, dorada y negra, y su tipografía principal. La guía muestra el sistema aplicado a papelería, agenda 2025, objetos y fachada.",
    folder: "alfonzo-casco",
    cover: "logos_-06.jpg",
    images: ["logos_-01.jpg|wide", "logos_-02.jpg", "logos_-03.jpg", "logos_-04.jpg", "logos_-05.jpg", "logos_-06.jpg|wide", "logos_-07.jpg|wide"]
  },
  {
    slug: "lumi",
    title: "Lumi",
    client: "Grupo Vázquez · Personas & Cultura",
    category: "branding",
    services: ["Rediseño de logo", "Personaje", "Campaña de lanzamiento"],
    tools: ["Illustrator", "Photoshop", "Figma"],
    description: "Rediseño del logo de Lumi, el bot de Personas & Cultura, con tres rutas exploradas para app, Slack y web. Después vino la campaña interna de lanzamiento: piezas verticales con el personaje explicando cómo encontrar a Lumi y qué preguntarle.",
    folder: "lumi",
    cover: "logos_-04.jpg",
    images: ["logos_-04.jpg|wide", "logos_-05.jpg", "logos_-06.jpg", "logos_-09.jpg", "logos_-10.jpg", "logos_-14.jpg", "logos_-15.jpg",
      "../lumi-campana/kvs_lo-01.jpg|third", "../lumi-campana/kvs_lo-02.jpg|third", "../lumi-campana/kvs_lo-03.jpg|third",
      "../lumi-campana/kvs_lo-06.jpg|third", "../lumi-campana/kvs_lo-07.jpg|third", "../lumi-campana/kvs_lo-08.jpg|third"]
  },
  {
    slug: "voluntario-gv",
    title: "Voluntario",
    client: "Grupo Vázquez · Voluntariado",
    category: "branding",
    services: ["Diseño de logo", "Aplicaciones"],
    tools: ["Illustrator", "Photoshop"],
    description: "Logo para el programa de voluntariado de Grupo Vázquez. Manos que se unen y forman una V con los colores del grupo. Incluye opciones de color y aplicaciones en remeras.",
    folder: "voluntario-gv",
    cover: "logos_-05.jpg",
    images: ["logos_-05.jpg|wide", "logos_-01.jpg", "logos_-03.jpg", "logos_-04.jpg", "logos_-06.jpg", "logos_-07.jpg|wide"]
  },
  {
    slug: "kitty-hawk",
    title: "Kitty Hawk Research",
    client: "Propuesta de logo",
    category: "branding",
    services: ["Diseño de logo", "Paleta"],
    tools: ["Illustrator"],
    description: "Propuesta de logotipo para una firma de investigación: wordmark técnico, ícono abreviado “KH” y una escala de azules eléctricos sobre fondos degradé.",
    folder: "kitty-hawk",
    cover: "logos_-01.jpg",
    images: ["logos_-01.jpg|wide", "logos_-02.jpg", "logos_-04.jpg"]
  },
  {
    slug: "hablemos",
    title: "Hablemos+",
    client: "Grupo Vázquez · Workvivo",
    category: "branding",
    services: ["Diseño de logo", "Comunicación interna"],
    tools: ["Illustrator"],
    description: "Identidad para “Hablemos+”, un espacio de conversación en vivo dentro de Workvivo. Dos rutas tipográficas y su aplicación en piezas de expectativa.",
    folder: "hablemos",
    cover: "logos_-02.jpg",
    images: ["logos_-01.jpg", "logos_-02.jpg", "logos_-03.jpg|wide"]
  },
  {
    slug: "conociendo-cafes",
    title: "Conociendo Cafés",
    client: "Identidad",
    category: "branding",
    services: ["Logo", "Aplicaciones"],
    tools: ["Illustrator"],
    description: "Logotipo y aplicaciones para Conociendo Cafés, en tonos tostados y con un trazo cálido.",
    folder: "conociendo-cafes",
    cover: "logos_-01.jpg",
    images: ["logos_-01.jpg|wide"]
  },
  {
    slug: "mangofit",
    title: "Mangofit",
    client: "Logo",
    category: "branding",
    services: ["Logo"],
    tools: ["Illustrator"],
    description: "Logotipo para Mangofit: una pesa que también es un mango, en verde lima y oliva.",
    folder: "mangofit",
    cover: "portaf-18.jpg",
    images: ["portaf-18.jpg|wide"]
  },

  /* ---------------- KEY VISUALS ---------------- */
  {
    slug: "intertours",
    title: "Work & Fun 2026",
    client: "Intertours · uelá",
    category: "kv",
    year: "2026",
    services: ["Key visual", "Línea gráfica", "Activación"],
    tools: ["Illustrator", "Photoshop"],
    description: "Propuesta de línea visual para “Work & Fun”, una nueva forma de conectar en los 40 años de Intertours. Naranjas, magentas y violetas en capas, aplicados a redes, merchandising y stand.",
    folder: "intertours",
    cover: "kvs_pr-04.jpg",
    images: ["kvs_pr-04.jpg|wide", "kvs_pr-02.jpg", "kvs_pr-03.jpg", "kvs_pr-05.jpg|wide", "kvs_pr-07.jpg", "kvs_pr-08.jpg", "kvs_pr-06.jpg|wide"]
  },
  {
    slug: "influencer-cultura",
    title: "Influencer de la Cultura",
    client: "Grupo Vázquez",
    category: "kv",
    services: ["Key visual", "Campaña interna"],
    tools: ["Photoshop", "Illustrator"],
    description: "Campaña interna para reconocer a las personas que inspiran y transforman la cultura del grupo. Fotografía recortada, stickers y gestos de redes sociales en azul eléctrico y naranja.",
    folder: "influencer-cultura",
    cover: "kvs_kv-03.jpg",
    images: ["kvs_kv-03.jpg|wide", "kvs_kv-01.jpg", "kvs_kv-02.jpg", "kvs_kv-04.jpg|wide"]
  },
  {
    slug: "workvivo",
    title: "Workvivo · KV 2",
    client: "Grupo Vázquez",
    category: "kv",
    services: ["Identidad visual", "Personajes", "Piezas digitales"],
    tools: ["Illustrator", "Figma"],
    description: "Identidad visual para la cultura interna de Grupo Vázquez en Workvivo. Personajes de formas simples, paleta vibrante y piezas para invitar a toda la comunidad a sumarse.",
    folder: "workvivo",
    cover: "kvs_wv-06.jpg",
    images: ["kvs_wv-06.jpg|wide", "kvs_wv-07.jpg", "zz-kv-vivo.jpg", "kvs_wv-04.jpg", "kvs_wv-05.jpg"]
  },
  {
    slug: "hugo",
    title: "Mascota de beneficios",
    client: "Grupo Vázquez",
    category: "kv",
    services: ["Personaje", "Web interna"],
    tools: ["Illustrator"],
    description: "Mascota para la web de beneficios internos: un robot amable con un set de expresiones para acompañar cada sección.",
    folder: "hugo",
    cover: "kvs_hu-03.jpg",
    images: ["kvs_hu-03.jpg|wide", "kvs_hu-01.jpg|wide"]
  },
  {
    slug: "beauty",
    title: "Beauty",
    client: "Key visual de producto",
    category: "kv",
    services: ["Key visual", "Fotomontaje"],
    tools: ["Photoshop"],
    description: "Escenas para una línea de cuidado personal: productos sobre pasto, muros blancos, cielo y mariposas.",
    folder: "beauty",
    cover: "portaf-14.jpg",
    images: ["portaf-13.jpg|wide", "portaf-14.jpg|wide"]
  },
  {
    slug: "comunia",
    title: "comunIA",
    client: "Grupo Vázquez",
    category: "kv",
    services: ["Flyer", "Comunicación interna"],
    tools: ["Illustrator", "Photoshop"],
    description: "Piezas editables para comunIA, la comunidad que promueve un uso responsable de la inteligencia artificial.",
    folder: "comunia",
    cover: "comuni-02.jpg",
    images: ["comuni-01.jpg", "comuni-02.jpg"]
  },
  {
    slug: "nos-vamos",
    title: "Nos Vamos",
    client: "Campaña digital",
    category: "kv",
    services: ["Key visual"],
    tools: ["Photoshop"],
    description: "Key visual para nosvamos.com: postales de viaje en movimiento sobre amarillo y magenta.",
    folder: "nos-vamos",
    cover: "portaf-07.jpg",
    images: ["portaf-07.jpg|wide"]
  },
  {
    slug: "expo-2024",
    title: "Expo 2024",
    client: "ueno bank · sponsor oficial",
    category: "kv",
    year: "2024",
    services: ["Flyers", "Pósters de invitación"],
    tools: ["Photoshop", "Illustrator"],
    description: "Flyers y pósters de invitación para la presencia de ueno bank como sponsor oficial de la Expo 2024: panel y charla financiera, con fecha y stand destacados.",
    folder: "expo-2024",
    cover: "portaf-08.jpg",
    images: ["portaf-08.jpg|wide"]
  },
  {
    slug: "financiera-pj",
    title: "Financiera Paraguayo Japonesa",
    client: "Tótems de vía pública",
    category: "kv",
    services: ["Tótems", "Vía pública"],
    tools: ["Photoshop", "Illustrator"],
    description: "Piezas para tótems de vía pública: una invita a crear la cuenta desde la app y la otra es una campaña de marca.",
    folder: "financiera-pj",
    cover: "portaf-09.jpg",
    images: ["portaf-09.jpg|wide"]
  },

  /* ---------------- EDITORIAL ---------------- */
  {
    slug: "memoria-gv",
    title: "Memoria Anual 2023",
    client: "Grupo Vázquez",
    category: "editorial",
    year: "2023",
    services: ["Diseño editorial", "Infografía", "Maquetación"],
    tools: ["InDesign", "Illustrator", "Photoshop"],
    description: "Maquetación completa de la memoria anual: 58 páginas organizadas en cinco capítulos (quiénes somos, divisiones y empresas, sostenibilidad, principales números e informes financieros). Tiene un sistema de aperturas en verde y azul, infografías y fichas para cada empresa del grupo.",
    folder: "memoria-gv",
    cover: "maquet-01.jpg",
    images: ["maquet-01.jpg|wide", "maquet-05.jpg", "maquet-06.jpg", "maquet-04.jpg", "maquet-09.jpg", "maquet-15.jpg", "maquet-16.jpg",
      "maquet-17.jpg", "maquet-22.jpg", "maquet-24.jpg", "maquet-25.jpg", "maquet-28.jpg", "maquet-33.jpg", "maquet-40.jpg", "maquet-43.jpg", "maquet-51.jpg", "maquet-58.jpg"]
  },
  {
    slug: "guia-inversiones",
    title: "Guía de Inversiones",
    client: "Cámara de Comercio Paraguay–Brasil",
    category: "editorial",
    services: ["Diseño editorial", "Portada"],
    tools: ["InDesign"],
    description: "Guía de inversiones Paraguay 2018–2019: una portada de cubos fotográficos y un interior ordenado con índices y aperturas de color.",
    folder: "guia-inversiones",
    cover: "portaf-11.jpg",
    images: ["portaf-11.jpg|wide"]
  },

  /* ---------------- IDENTIDAD APLICADA ---------------- */
  {
    slug: "alula",
    title: "Alula Hotel",
    client: "Hotel con alma",
    category: "espacios",
    services: ["Señalética", "Papelería", "Uniformes", "Objetos de marca"],
    tools: ["Illustrator", "Photoshop"],
    description: "Aplicación de la identidad de Alula Hotel en todo el recorrido del huésped. Tótems indicativos con materiales nobles, papelería de cuero eco, identificadores, guía de uniformes por área y piezas como gorras y sellos de madera. Todo en verde profundo, dorado y crema.",
    folder: "alula",
    cover: "alula_-10.jpg",
    images: ["totem-01.jpg|wide", "totem-03.jpg", "totem-04.jpg", "alula_-06.jpg|wide", "alula_-07.jpg", "alula_-09.jpg",
      "alula_-10.jpg", "alula_-11.jpg", "alula_-12.jpg", "alula_-16.jpg", "alula_-17.jpg|wide", "alula_-19.jpg", "alula_-21.jpg",
      "alula_-23.jpg", "alula_-25.jpg", "otros-01.jpg|wide", "otros-02.jpg", "otros-03.jpg", "otros-04.jpg|wide"]
  },
  {
    slug: "werking",
    title: "Werking",
    client: "Evolución de identidad",
    category: "espacios",
    services: ["Nueva línea gráfica", "Sistema de color", "Redes"],
    tools: ["Illustrator", "Photoshop"],
    description: "“No es un edificio. Es donde las ideas crecen.” Propuesta de una nueva línea gráfica para Werking: tiene más madurez, un sistema de color con base oscura y acentos vivos, y una grilla para historias y contenido.",
    folder: "werking",
    cover: "werkin-04.jpg",
    images: ["werkin-01.jpg|wide", "werkin-02.jpg", "werkin-03.jpg", "werkin-04.jpg|wide", "werkin-05.jpg", "werkin-06.jpg", "werkin-07.jpg|wide"]
  },

  /* ---------------- PACKAGING & MERCH ---------------- */
  {
    slug: "merch-uela",
    title: "Merch uelá & uelá black",
    client: "uelá",
    category: "packaging",
    year: "2026",
    services: ["Merchandising", "Packaging", "Textiles"],
    tools: ["Illustrator", "Photoshop"],
    description: "Línea de merchandising para las dos versiones de la marca: necessaires, almohadas, vasos, sobres viajeros, cintas, tags, cajas de cartón rígido, batas, básculas portátiles y gorras. En azul y negro, con patrón propio.",
    folder: "merch-uela",
    cover: "merch_-08.jpg",
    images: ["merch_-01.jpg|wide", "merch_-02.jpg", "merch_-04.jpg", "merch_-05.jpg", "merch_-06.jpg", "merch_-07.jpg", "merch_-08.jpg",
      "merch_-09.jpg", "merch_-12.jpg", "merch_-14.jpg", "merch_-15.jpg", "merch_-16.jpg|wide"]
  },
  {
    slug: "monchis",
    title: "Caja Monchis",
    client: "Packaging promocional",
    category: "packaging",
    services: ["Packaging", "Troquel", "Ilustración"],
    tools: ["Illustrator"],
    description: "Caja para picar en modo cancha de fútbol, con bandas promocionales, tapa y opciones de armado. Incluye planos técnicos de cada pieza y mockups finales.",
    folder: "monchis",
    cover: "packag-05.jpg",
    images: ["packag-05.jpg|wide", "packag-10.jpg", "packag-01.jpg", "packag-02.jpg", "packag-04.jpg", "packag-06.jpg"]
  },
  {
    slug: "caja-mujer",
    title: "Caja Día de la Mujer",
    client: "Grupo Vázquez",
    category: "packaging",
    services: ["Packaging", "Ilustración", "Troquel"],
    tools: ["Illustrator", "Photoshop"],
    description: "Caja de regalo para el Día de la Mujer Paraguaya: patrón floral ilustrado, mensaje de saludo y su troquel listo para imprimir.",
    folder: "caja-mujer",
    cover: "caja-mujer.jpg",
    images: ["caja-mujer.jpg|wide", "troquel.jpg|wide"]
  },
  {
    slug: "caja-mundial-uela",
    title: "Caja Mundial",
    client: "uelá",
    category: "packaging",
    services: ["Packaging", "Ilustración"],
    tools: ["Illustrator", "Photoshop"],
    description: "Caja especial de uelá para el Mundial: el interior se abre como una cancha y el exterior lleva rayas rojas y blancas.",
    folder: "caja-mundial-uela",
    cover: "caja-uela-2ok.jpg",
    images: ["caja-uela-2ok.jpg", "caja-uela1ok.jpg"]
  },
  {
    slug: "gv-viajes",
    title: "Kit viajero",
    client: "Grupo Vázquez",
    category: "packaging",
    services: ["Merchandising", "Patrones"],
    tools: ["Illustrator"],
    description: "Forros de maleta y almohada de viaje con patrones de marca: del arte original al montaje.",
    folder: "gv-viajes",
    cover: "gv_via-02.jpg",
    images: ["gv_via-01.jpg|wide", "gv_via-02.jpg|wide", "gv_via-03.jpg|wide"]
  },

  /* ---------------- DIGITAL ---------------- */
  {
    slug: "ueno-seguros",
    title: "ueno Seguros",
    client: "Mailing promocional",
    category: "digital",
    services: ["Mailing", "Diseño web"],
    tools: ["Photoshop", "Figma"],
    description: "Mailing para avisar a los clientes que llegó el comprobante de su póliza y promover el uso sin papel, con la línea gráfica verde de ueno Seguros.",
    folder: "ueno-seguros",
    cover: "portaf-04.jpg",
    images: ["portaf-04.jpg|wide"]
  },
  {
    slug: "ueno-casa-de-bolsa",
    title: "ueno Casa de Bolsa",
    client: "Redes sociales",
    category: "digital",
    services: ["Social media"],
    tools: ["Photoshop", "Illustrator"],
    description: "Contenido para las redes de ueno Casa de Bolsa: posteos para recordar, invertir sin excusas y descubrir ahorros e inversiones.",
    folder: "ueno-casa-de-bolsa",
    cover: "portaf-06.jpg",
    images: ["portaf-06.jpg|wide"]
  },
  {
    slug: "wireframes",
    title: "Wireframes",
    client: "DG",
    category: "digital",
    services: ["Wireframes", "Iconografía", "UI"],
    tools: ["Figma", "Illustrator"],
    description: "Wireframes e íconos de una app de e-commerce para embajadores de DG: login, tipos de punto de venta, reporte con foto y comentario, y un panel de ranking y recompensas. Incluye también la propuesta web para Kaitel.",
    folder: "wireframes",
    cover: "portaf-05.jpg",
    images: ["portaf-05.jpg|wide", "kaitel.jpg|wide"]
  },
  {
    slug: "social",
    title: "Social media & web",
    client: "Varios clientes",
    category: "digital",
    services: ["Social media"],
    tools: ["Photoshop", "Figma"],
    description: "Grillas para redes de la Lic. Fiorella Dalla Fontana y de Financiera Paraguayo Japonesa: composición, ritmo y una tipografía clara para cada marca.",
    folder: "social",
    cover: "redes-sociales.jpg",
    images: ["redes-sociales.jpg|wide"]
  },

  /* ---------------- ILUSTRACIÓN ---------------- */
  {
    slug: "retratos",
    title: "Retratos en vivo",
    client: "De Carlota · Fashion live illustration",
    category: "ilustracion",
    services: ["Ilustración en vivo", "Eventos de marca"],
    tools: ["Marcador", "Tinta", "Acuarela"],
    description: "Retratos dibujados en el momento en pasarelas, pop-ups y activaciones de marca. Trazo rápido, gesto y un toque de color para que cada invitada se lleve un recuerdo único.",
    folder: "retratos",
    cover: "retraros-carlota-38.jpg",
    images: ["retraros-carlota-38.jpg", "retraros-carlota-39.jpg", "retraros-carlota-40.jpg", "de-carlotahm-48.jpg", "de-carlotahm-49.jpg",
      "de-carlotahm-50.jpg", "img0585ok.jpg", "img0587pk.jpg", "img0588ok.jpg", "img9860.jpg", "milan.jpg"]
  },
  {
    slug: "bodas",
    title: "Papelería para bodas",
    client: "De Carlota",
    category: "ilustracion",
    services: ["Ilustración", "Lettering", "Papelería"],
    tools: ["Acuarela", "Illustrator"],
    description: "Menús, números de mesa y tarjetas ilustradas a mano con flores en acuarela y lettering propio, pensados con la línea gráfica de cada evento.",
    folder: "bodas",
    cover: "de-carlota-papeleria-41.jpg",
    images: ["de-carlota-papeleria-40.jpg", "de-carlota-papeleria-41.jpg", "de-carlota-papeleria-42.jpg", "boda-romimuestra-03.jpg", "boda-romimuestra-04.jpg",
      "img0388ok.jpg", "img0389ok.jpg", "img0390pk.jpg", "img0097ok.jpg", "ilusta-01.jpg", "ilusta-02.jpg"]
  },
  {
    slug: "tote",
    title: "Peace & Good Luck",
    client: "De Carlota · Tote bag",
    category: "ilustracion",
    services: ["Ilustración", "Producto"],
    tools: ["Procreate", "Serigrafía"],
    description: "Una ilustración propia convertida en tote bag: un personaje-nube que reparte paz y buena suerte.",
    folder: "tote",
    cover: "posteo-tote-36.jpg",
    images: ["posteo-tote-36.jpg", "posteo-tote-37.jpg", "totee-carlota.jpg", "83okd2260c-2920-451a-a65d-304186e8465c.jpg"]
  },
  {
    slug: "posteos-carlota",
    title: "Universo De Carlota",
    client: "Contenido para redes",
    category: "ilustracion",
    services: ["Dirección de arte", "Ilustración", "Copy"],
    tools: ["Procreate", "Canva", "Photoshop"],
    description: "La voz de mi marca en redes: doodles en tinta, papel crema, recortes y la flor roja como firma. Posteos para contar qué hacemos, cómo trabajamos y para invitar a crear juntas.",
    folder: "posteos-carlota",
    cover: "canva-site-de-carlota-20.jpg",
    images: ["canva-site-de-carlota-17.jpg", "canva-site-de-carlota-18.jpg", "canva-site-de-carlota-19.jpg", "canva-site-de-carlota-20.jpg",
      "de-carlota-posteo-bible-23.jpg", "de-carlota-posteo-bible-24.jpg", "de-carlota-posteo-bible-25.jpg", "de-carlota-posteo-bible-26.jpg",
      "de-carlota-posteo-20.jpg", "de-carlota-posteo-21.jpg"]
  },
  {
    slug: "stickers",
    title: "Stickers",
    client: "Grupo Vázquez · Educación financiera",
    category: "ilustracion",
    services: ["Ilustración", "Stickers"],
    tools: ["Illustrator"],
    description: "Sets de stickers ilustrados para comunicación interna y para un programa de educación financiera.",
    folder: "stickers",
    cover: "stickers-financiera.jpg",
    images: ["stickers-financiera.jpg", "stickers-gv.jpg"]
  }
];

/* Galería de la sección De Carlota (home) */
const CARLOTA_GALLERY = [
  "retratos/retraros-carlota-38.jpg", "bodas/de-carlota-papeleria-41.jpg", "retratos/de-carlotahm-49.jpg",
  "tote/posteo-tote-36.jpg", "posteos-carlota/de-carlota-posteo-bible-24.jpg", "retratos/img0587pk.jpg",
  "bodas/boda-romimuestra-03.jpg", "retratos/retraros-carlota-40.jpg", "posteos-carlota/de-carlota-posteo-20.jpg",
  "bodas/img0389ok.jpg", "retratos/de-carlotahm-48.jpg", "posteos-carlota/de-carlota-posteo-bible-26.jpg"
];
