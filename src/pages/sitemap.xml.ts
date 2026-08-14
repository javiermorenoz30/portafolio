export const prerender = true;

export function GET() {
  const base = (import.meta.env.SITE || 'https://portafolio.zencontroller.workers.dev').replace(/\/$/, '');
  const paths = ['/', '/fotografia/', '/diseno-grafico/', '/diseno-web/', '/video/'];
  const urls = paths.map((path) => `  <url><loc>${base}${path}</loc><changefreq>monthly</changefreq><priority>${path === '/' ? '1.0' : '0.8'}</priority></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
