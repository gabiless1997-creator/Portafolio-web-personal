# Portafolio · Gabriela Ledezma

Portafolio personal hecho con HTML, CSS y JavaScript. No usa dependencias ni pasos de compilación.

- **Código:** https://github.com/gabiless1997-creator/Portafolio-web-personal
- **Web publicada:** https://gabiledezma.vercel.app
- **Publicación:** Vercel. Cada cambio que llega a la rama `main` de GitHub se publica solo, en uno o dos minutos.

---

## 🔁 Cómo funciona la actualización automática

```
Cambio en los archivos  →  git push a GitHub (main)  →  Vercel lo detecta  →  la web se actualiza sola
```

No hace falta volver a entrar a Vercel. Alcanza con que el cambio llegue a GitHub.

## 💬 Cómo pedirle ajustes a Claude

Abrí Claude Code en esta carpeta (`portafolio-web`) y pedí el cambio en tus palabras. Por ejemplo:

- *"Agregá un proyecto nuevo en Branding llamado X, cliente Y. Las imágenes están en la carpeta Z."*
- *"Cambiá la descripción de Alula Hotel por este texto: …"*
- *"Sacá el proyecto Kitty Hawk."*
- *"Cambiá el rojo del sitio por #E0201B."*
- *"Agregá Procreate a las herramientas de Retratos en vivo."*

Para que se publique, terminá el pedido con **"y subilo a GitHub"**. Claude hace el cambio, lo revisa y hace `git commit` + `git push`. Vercel publica solo.

> La primera vez que se sube algo desde una compu nueva, GitHub pide iniciar sesión. Ese paso lo hacés vos (ver más abajo).

### Datos útiles para tus pedidos
- **Categorías:** `branding`, `kv` (Key Visuals), `editorial`, `espacios` (Identidad aplicada), `packaging`, `digital` e `ilustracion`.
- **Imágenes:** JPG de ~1600px de ancho. Si les pasás originales más grandes o PDFs, Claude los convierte.
- **Herramientas con ícono:** Illustrator, Photoshop, InDesign, After Effects, CorelDRAW, Figma, Canva, Procreate, Marcador, Tinta, Acuarela y Serigrafía. Para sumar otra, se agrega en `js/tools-icons.js`.

---

## 🗂️ Estructura

```
portafolio-web/
├── index.html            ← estructura: carga, portada, sobre mí, trabajos, De Carlota y contacto
├── css/styles.css        ← estilos (colores y tipografías en :root)
├── js/projects.js        ← DATOS: categorías, proyectos y galería De Carlota
├── js/tools-icons.js     ← íconos de herramientas
├── js/main.js            ← lógica: banners, filtros, ficha de proyecto, lightbox y pantalla de carga
├── assets/brand/         ← logo, ícono, favicon y pantalla "Cargando" de De Carlota
├── assets/fonts/         ← Neulis (títulos)
├── assets/img/<proyecto>/ ← imágenes de cada trabajo
└── vercel.json           ← configuración de caché para Vercel
```

Todas las rutas son relativas, por ejemplo `assets/img/...`. Por eso el sitio funciona igual en Vercel, en otro dominio o abriendo `index.html` en tu compu.

⚠️ **Vercel distingue mayúsculas y minúsculas:** `Foto.jpg` no es lo mismo que `foto.jpg`. Usá nombres en minúscula, sin espacios ni tildes, como `caja-mundial-2.jpg`.

## ➕ Agregar un trabajo a mano
1. Guardá las imágenes en `assets/img/mi-proyecto/`.
2. En `js/projects.js`, copiá un bloque de `PROJECTS` y cambiá `slug`, `title`, `client`, `category`, `services`, `tools`, `description`, `folder`, `cover` e `images`.
3. En `images`, agregá `|wide` para que una imagen ocupe todo el ancho, o `|third` para que ocupe un tercio.
4. Cada proyecto tiene su propio enlace: `tusitio.vercel.app/#/proyecto/<slug>`.

## 🎨 Colores y tipografías
- **Colores** (`:root` en `css/styles.css`): `--cream` #f8f3df, `--red` #ff0000, `--ink`, `--yellow`, `--kraft` y `--green`.
- **Títulos:** Neulis, desde `assets/fonts/Neulis-ExtraBold.ttf`.
- **Acentos:** La Belle Aurore (Google Fonts).
- **Texto:** Urbanist (Google Fonts).
- ⚠️ Confirmá que tu licencia de Neulis permita usarla en la web.

## 👀 Verlo en tu compu antes de publicar
Abrí `index.html` con doble clic, o en la terminal, dentro de esta carpeta:

```bash
ruby -run -e httpd . -p 8000
```

y entrá a http://localhost:8000

## 🔑 Subir cambios vos misma (sin Claude)
**Opción fácil: GitHub Desktop**
1. Instalá GitHub Desktop y elegí *File → Add local repository →* esta carpeta.
2. Escribí un resumen del cambio y tocá *Commit to main*.
3. Tocá *Push origin*.

**Opción terminal**
```bash
git add -A
git commit -m "Describí el cambio"
git push
```
