import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Referenciák',
      href: getPermalink('/referenciak'),
    },
    {
      text: 'Szolgáltatások',
      href: getPermalink('/services'),
    },
    {
      text: 'Rólunk',
      href: getPermalink('/about'),
    },
    {
      text: 'Kapcsolat',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: '',
      links: [
        { text: 'Referenciák', href: getPermalink('/referenciak') },
        { text: 'Szolgáltatások', href: getPermalink('/services') },
        { text: 'Rólunk', href: getPermalink('/about') },
        { text: 'Kapcsolat', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [],
  // socialLinks: [
  //   { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  // ],
  footNote: `
    2026 · Minden jog fenntartva.
  `,
};
