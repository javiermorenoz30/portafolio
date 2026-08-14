# Javier Moreno — Creative Portfolio

Portfolio estático **mobile-first + SEO** listo para **GitHub + Cloudflare Pages**.

## Qué incluye
- Home portfolio responsive
- Galería filtrable: fotografía / diseño / web / video
- Showreel y modales
- Mobile menu y ajustes específicos para 430px / 360px / landscape
- SEO técnico: title, meta description, robots, Open Graph, Twitter, Schema.org y canonical dinámico
- 4 landings SEO internas: `/fotografia/`, `/diseno-grafico/`, `/diseno-web/`, `/video/`
- Sitemap XML dinámico en `/sitemap.xml` mediante Cloudflare Pages Function
- Headers de seguridad y caché

## Publicar en GitHub
1. Crea un repositorio nuevo.
2. Sube **todo el contenido de esta carpeta** a la raíz del repo (incluyendo `functions/`).
3. Haz commit en `main`.

## Publicar en Cloudflare Pages
1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git.
2. Selecciona tu repositorio.
3. Production branch: `main`.
4. Framework preset: **None**.
5. Build command: `exit 0`.
6. Build output directory: `public`.
7. Save and Deploy.

`functions/sitemap.xml.js` genera un sitemap usando el dominio real desde el que se visita la web, así funciona tanto en `pages.dev` como en tu dominio personalizado.

## Después de conectar tu dominio
1. Abre `https://TU-DOMINIO.com/sitemap.xml` y comprueba que cargue.
2. Añade tu dominio en Google Search Console.
3. Envía `sitemap.xml` desde Search Console.
4. Usa Inspección de URL para solicitar indexación de la Home y las 4 páginas de servicios.

## Cambiar tus datos
Edita `public/assets/js/site.config.js`.

Cambia especialmente:
- email
- Instagram
- Behance
- LinkedIn

## Cambiar / agregar proyectos
Edita `public/assets/js/projects.js`. Copia tus imágenes a `public/assets/media/`.

Para cada proyecto puedes configurar: `title`, `category`, `categoryLabel`, `year`, `role`, `image`, `description`, `link`.

### Recomendación SEO para imágenes reales
Usa nombres descriptivos, por ejemplo:
- `fotografia-producto-caracas-cosmetica.webp`
- `diseno-branding-restaurante-caracas.webp`
- `diseno-web-portfolio-arquitectura.webp`

Exporta preferiblemente a WebP/AVIF y evita subir imágenes enormes si se mostrarán pequeñas.

## Agregar tu retrato
En `public/index.html`, busca `YOUR PORTRAIT HERE` y reemplaza ese bloque por tu fotografía manteniendo `.about-photo`.

## Agregar tu showreel
Coloca tu MP4 como `public/assets/media/showreel.mp4`.

## Importante para posicionar
El SEO técnico deja una base correcta, pero aparecer arriba en Google también dependerá de contenido real, autoridad/enlaces, competencia, velocidad, Search Console y del dominio final. Sustituye los proyectos demo por trabajos reales y agrega descripciones concretas de cada caso.
