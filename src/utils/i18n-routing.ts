export type SupportedLocale = 'hu' | 'en' | 'de';
export type RouteKey = 'home' | 'references' | 'services' | 'about' | 'contact';

const routeMap: Record<RouteKey, Record<SupportedLocale, string>> = {
  home: { hu: '/hu', en: '/en', de: '/de' },
  references: { hu: '/hu/referenciak', en: '/en/portfolio', de: '/de/referenzen' },
  services: { hu: '/hu/szolgaltatasok', en: '/en/services', de: '/de/leistungen' },
  about: { hu: '/hu/rolunk', en: '/en/about', de: '/de/ueber-uns' },
  contact: { hu: '/hu/kapcsolat', en: '/en/contact', de: '/de/kontakt' },
};

const legacyPathMap: Record<string, RouteKey> = {
  '/': 'home',
  '/referenciak': 'references',
  '/services': 'services',
  '/about': 'about',
  '/contact': 'contact',
};

const normalizePath = (pathname: string): string => {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname;
};

export const getLocaleFromPath = (pathname: string): SupportedLocale => {
  const normalizedPath = normalizePath(pathname);
  if (normalizedPath === '/en' || normalizedPath.startsWith('/en/')) return 'en';
  if (normalizedPath === '/de' || normalizedPath.startsWith('/de/')) return 'de';
  return 'hu';
};

export const getRouteKeyFromPath = (pathname: string): RouteKey | undefined => {
  const normalizedPath = normalizePath(pathname);

  const localizedEntry = Object.entries(routeMap).find(([, localizedPaths]) =>
    Object.values(localizedPaths).includes(normalizedPath)
  );
  if (localizedEntry) return localizedEntry[0] as RouteKey;

  return legacyPathMap[normalizedPath];
};

export const getLocalizedPath = (routeKey: RouteKey, locale: SupportedLocale): string => routeMap[routeKey][locale];

export const getLocalizedNavigationLinks = (locale: SupportedLocale) => ({
  references: getLocalizedPath('references', locale),
  services: getLocalizedPath('services', locale),
  about: getLocalizedPath('about', locale),
  contact: getLocalizedPath('contact', locale),
  home: getLocalizedPath('home', locale),
});

export const getLocaleAlternates = (pathname: string) => {
  const routeKey = getRouteKeyFromPath(pathname) || 'home';

  return {
    hu: getLocalizedPath(routeKey, 'hu'),
    en: getLocalizedPath(routeKey, 'en'),
    de: getLocalizedPath(routeKey, 'de'),
    xDefault: getLocalizedPath(routeKey, 'en'),
  };
};

export const getLanguageSwitcherLinks = (pathname: string) => {
  const routeKey = getRouteKeyFromPath(pathname) || 'home';

  return [
    {
      locale: 'hu' as const,
      label: 'HU',
      href: getLocalizedPath(routeKey, 'hu'),
      ariaLabel: 'Magyar oldal',
    },
    {
      locale: 'en' as const,
      label: 'EN',
      href: getLocalizedPath(routeKey, 'en'),
      ariaLabel: 'English page',
    },
    {
      locale: 'de' as const,
      label: 'DE',
      href: getLocalizedPath(routeKey, 'de'),
      ariaLabel: 'Deutsche Seite',
    },
  ];
};
