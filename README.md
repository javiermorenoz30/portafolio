# Javier Moreno — Creative Portfolio (Astro)

Portfolio creativo construido en **Astro**, responsive desde una sola arquitectura y preparado para GitHub + Cloudflare.

## Stack
- Astro estático (SSG)
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
- `public/assets/media/` — imágenes y multimedia

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

## Cloudflare Workers — recomendado para el workers.dev actual
El repo incluye `wrangler.jsonc` configurado para servir `./dist` como Static Assets.

```bash
npm run deploy
```

Esto ejecuta el build y luego `wrangler deploy` sobre el Worker `portafolio`.

## Cloudflare Pages — alternativa
- Production branch: `main`
- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`

## Dominio / canonical / sitemap
`astro.config.mjs` usa `PUBLIC_SITE_URL` si existe y, como fallback, `https://portafolio.zencontroller.workers.dev`.

Para un dominio propio configura:
```text
PUBLIC_SITE_URL=https://tudominio.com
```

El sitio genera automáticamente:
- `/robots.txt`
- `/sitemap.xml`
- canonical por URL
- Open Graph
- Twitter metadata
- Schema.org

## Cambiar proyectos
Edita `src/data/projects.ts` y agrega archivos visuales en `public/assets/media/`.

## Cambiar información personal
Los textos principales están en `src/components/home/` y las páginas de servicios en `src/pages/`.

## CI
`.github/workflows/astro-build.yml` instala dependencias y ejecuta `npm run build` en cada push a `main`.
