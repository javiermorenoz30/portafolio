# Javier Moreno — Creative Portfolio (Astro)

Portfolio creativo construido en **Astro**, responsive desde una sola arquitectura y preparado para GitHub + Cloudflare.

## Stack
- Astro
- HTML estático generado en build
- CSS responsive sin frameworks
- JavaScript mínimo para menú y filtros
- SEO por página
- Sitemap y robots generados por Astro

## Estructura
- `src/layouts/BaseLayout.astro` — SEO y estructura global
- `src/components/Header.astro` — navegación desktop/mobile
- `src/components/Footer.astro`
- `src/components/ProjectCard.astro`
- `src/components/ServicePage.astro` — plantilla compartida de servicios
- `src/components/home/*` — secciones del Home
- `src/data/projects.ts` — proyectos del portfolio
- `src/pages/index.astro`
- `src/pages/fotografia/index.astro`
- `src/pages/diseno-grafico/index.astro`
- `src/pages/diseno-web/index.astro`
- `src/pages/video/index.astro`
- `src/styles/global.css`
- `src/styles/home.css`
- `src/styles/service.css`
- `public/assets/media/` — imágenes y archivos multimedia

## Desarrollo local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

Astro genera el sitio en `dist/`.

## Cloudflare Pages
- Production branch: `main`
- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`

Cada commit a `main` puede generar un nuevo deployment automáticamente desde Cloudflare.

## Dominio / canonical / sitemap
`astro.config.mjs` usa `PUBLIC_SITE_URL` si existe y, como fallback, `https://portafolio.zencontroller.workers.dev`.

Si conectas un dominio propio, agrega en Cloudflare una variable de build:
```text
PUBLIC_SITE_URL=https://tudominio.com
```

El sitio genera:
- `/robots.txt`
- `/sitemap.xml`
- canonical por URL
- Open Graph
- Twitter metadata
- Schema.org

## Cambiar proyectos
Edita `src/data/projects.ts` y agrega los archivos visuales en `public/assets/media/`.

## Cambiar información personal
Los textos principales están en los componentes de `src/components/home/` y las páginas de servicios en `src/pages/`.

## CI
`.github/workflows/astro-build.yml` instala dependencias y ejecuta `npm run build` para detectar errores antes del deploy.
