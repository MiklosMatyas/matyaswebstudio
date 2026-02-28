import { SITE } from 'astrowind:config';
import { getHeaderData } from '~/navigation';
import { getLocalizedPath } from '~/utils/i18n-routing';

type HeaderLink = {
  href?: string;
  links?: HeaderLink[];
};

const escapeXml = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const flattenLinks = (links: HeaderLink[] = []): string[] =>
  links.flatMap((link) => [link.href, ...flattenLinks(link.links)].filter((href): href is string => Boolean(href)));

export const GET = async () => {
  const siteUrl = SITE.site.endsWith('/') ? SITE.site : `${SITE.site}/`;

  const huHeaderLinks = flattenLinks(getHeaderData('hu').links as HeaderLink[]);
  const enHeaderLinks = flattenLinks(getHeaderData('en').links as HeaderLink[]);

  const urls = [getLocalizedPath('home', 'hu'), getLocalizedPath('home', 'en'), ...huHeaderLinks, ...enHeaderLinks]
    .map((href) => {
      try {
        return new URL(href, siteUrl);
      } catch {
        return null;
      }
    })
    .filter((url): url is URL => Boolean(url))
    .filter((url) => url.origin === new URL(siteUrl).origin)
    .map((url) => url.toString());

  const uniqueUrls = [...new Set(urls)];
  const lastmod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls.map((url) => `  <url><loc>${escapeXml(url)}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
