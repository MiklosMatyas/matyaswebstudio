import { defineMiddleware } from 'astro/middleware';

const allowedPages = new Set(['/', '/referenciak', '/services', '/about', '/contact', '/404']);
const allowedPrefixes = ['/hu', '/en', '/de'];

const hasStaticFileExtension = (pathname: string) =>
  /\.[a-zA-Z0-9]+$/.test(pathname) ||
  pathname.startsWith('/_image') ||
  pathname.startsWith('/_astro/') ||
  pathname.startsWith('/assets/');

const normalizePath = (pathname: string) => {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname;
};

export const onRequest = defineMiddleware((context, next) => {
  const pathname = normalizePath(context.url.pathname);

  if (
    allowedPages.has(pathname) ||
    allowedPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)) ||
    hasStaticFileExtension(pathname)
  ) {
    return next();
  }

  return context.rewrite('/404');
});
