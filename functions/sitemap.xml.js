export function onRequest(context) {
  const origin = new URL(context.request.url).origin;
  const paths = ["/", "/fotografia/", "/diseno-grafico/", "/diseno-web/", "/video/"];
  const urls = paths.map((path) => `  <url><loc>${origin}${path}</loc><changefreq>monthly</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new Response(xml, { headers: { "content-type": "application/xml; charset=UTF-8", "cache-control": "public, max-age=3600" } });
}
