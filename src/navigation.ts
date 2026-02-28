import { getLocalizedNavigationLinks, type SupportedLocale } from './utils/i18n-routing';

export const getHeaderData = (locale: SupportedLocale) => {
  const links = getLocalizedNavigationLinks(locale);

  if (locale === 'en') {
    return {
      links: [
        { text: 'Portfolio', href: links.references },
        { text: 'Services', href: links.services },
        { text: 'About', href: links.about },
        { text: 'Contact', href: links.contact },
      ],
      actions: [],
    };
  }

  if (locale === 'de') {
    return {
      links: [
        { text: 'Referenzen', href: links.references },
        { text: 'Leistungen', href: links.services },
        { text: 'Über Uns', href: links.about },
        { text: 'Kontakt', href: links.contact },
      ],
      actions: [],
    };
  }

  return {
    links: [
      { text: 'Referenciák', href: links.references },
      { text: 'Szolgáltatások', href: links.services },
      { text: 'Rólunk', href: links.about },
      { text: 'Kapcsolat', href: links.contact },
    ],
    actions: [],
  };
};

export const getFooterData = (locale: SupportedLocale) => {
  const links = getLocalizedNavigationLinks(locale);

  if (locale === 'en') {
    return {
      links: [
        {
          title: '',
          links: [
            { text: 'Portfolio', href: links.references },
            { text: 'Services', href: links.services },
            { text: 'About', href: links.about },
            { text: 'Contact', href: links.contact },
          ],
        },
      ],
      secondaryLinks: [],
      socialLinks: [],
      footNote: '2026 · All rights reserved.',
    };
  }

  if (locale === 'de') {
    return {
      links: [
        {
          title: '',
          links: [
            { text: 'Referenzen', href: links.references },
            { text: 'Leistungen', href: links.services },
            { text: 'Über Uns', href: links.about },
            { text: 'Kontakt', href: links.contact },
          ],
        },
      ],
      secondaryLinks: [],
      socialLinks: [],
      footNote: '2026 · Alle Rechte vorbehalten.',
    };
  }

  return {
    links: [
      {
        title: '',
        links: [
          { text: 'Referenciák', href: links.references },
          { text: 'Szolgáltatások', href: links.services },
          { text: 'Rólunk', href: links.about },
          { text: 'Kapcsolat', href: links.contact },
        ],
      },
    ],
    secondaryLinks: [],
    socialLinks: [],
    footNote: '2026 · Minden jog fenntartva.',
  };
};

export const headerData = getHeaderData('hu');
export const footerData = getFooterData('hu');
