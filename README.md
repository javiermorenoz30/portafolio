# Javier Moreno — Creative Portfolio

Portfolio estático listo para **GitHub + Cloudflare Pages**.

## Publicar en GitHub
1. Crea un repositorio nuevo.
2. Sube **todo el contenido de esta carpeta** a la raíz del repo.
3. Haz commit en `main`.

## Publicar en Cloudflare Pages
1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git.
2. Selecciona tu repositorio de GitHub.
3. Production branch: `main`.
4. Framework preset: **None**.
5. Build command: `exit 0`.
6. Build output directory: `public`.
7. Save and Deploy.

Cloudflare quedará conectado al repositorio: cada vez que actualices GitHub, publicará la nueva versión.

## Cambiar tus datos
Edita `public/assets/js/site.config.js`.

## Cambiar / agregar proyectos
Edita `public/assets/js/projects.js`.

Cada proyecto tiene:
- `title`
- `category`: `photo`, `design`, `web`, `video`
- `image`
- `description`
- `link`

Copia tus imágenes a `public/assets/media/` y cambia la ruta en `projects.js`.

## Agregar tu retrato
En `public/index.html`, busca `YOUR PORTRAIT HERE`. Puedes reemplazar ese bloque por tu fotografía manteniendo el contenedor `.about-photo`.

## Agregar tu showreel
Coloca tu MP4 como:
`public/assets/media/showreel.mp4`

El botón SHOWREEL intentará cargarlo automáticamente.

## Importante antes de publicar
Los enlaces sociales y el email incluidos son de ejemplo. Cámbialos en `public/assets/js/site.config.js`.
