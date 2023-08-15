export async function GET({ fetch, setHeaders }) {
  setHeaders({
    'Content-Type': 'application/xml'
  });

  const site = 'https://www.n3-rd.tech'

  const response = await fetch('https://dev.to/api/articles?username=n3rd');

  if (!response.ok) {
    throw error(500, 'Failed to fetch posts.');
  }

  const raw_posts = await response.json();


  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${raw_posts.map(post => `
<loc>${site}</loc>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
  <url>
    <loc>${site}/articles/${post.id}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${post.published_at.split('T')[0]}</lastmod>
  </url>
`).join('')}
`;

  return new Response(sitemap);
}