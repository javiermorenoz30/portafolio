export const prerender = true;

export function GET() {
  const base = (import.meta.env.SITE || 'https://portafolio.zencontroller.workers.dev').replace(/\/$/, '');
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
