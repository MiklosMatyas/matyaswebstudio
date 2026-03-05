import heroImage from '~/assets/images/weboldal-keszites-hero.webp';

export const referencesHero = {
  title: 'Referenzen',
  subtitle:
    'Ausgewählte Projekte, die zeigen, wie wir schnelle, klare und wirtschaftlich nutzbare Weblösungen umsetzen.',
  image: {
    src: heroImage,
    alt: 'Referenzen Übersicht',
  },
};

export const referencesItems = [
  {
    title: 'Touch-type Read and Spell (TTRS)',
    subtitle: 'Komplexe Vertriebs- und Lernplattform für ein in Großbritannien ansässiges Unternehmen.',
    description:
      'Ziel war der komplette Neuaufbau einer veralteten Website. Wir haben die Inhaltsstruktur vereinfacht, Nutzerwege verkürzt und die mobile Nutzbarkeit klar priorisiert.',
    items: [
      { title: 'Vollständige CMS-Umsetzung mit Drupal' },
      { title: 'Schnellere Ladezeiten und bessere Performance' },
      { title: 'Konversionsoptimierte Abo-Formulare' },
      { title: 'SEO-optimierte Landingpages' },
      { title: 'API-Anbindungen an externe Dienste' },
    ],
    image: {
      src: '~/assets/images/websites/website-ttrs.webp',
      alt: 'Relaunch einer Unternehmenswebsite',
    },
    url: 'https://www.readandspell.com',
  },
  {
    title: 'Bentley Labor Kft.',
    subtitle: 'Kompletter Online-Auftritt und Social-Media-Betreuung für einen internationalen Labortechnik-Anbieter.',
    description:
      'Der Fokus lag auf mehreren WordPress-Websites mit Produktkatalogen. Die Informationsarchitektur wurde so aufgebaut, dass sie leicht erweiterbar ist und Produkte schnell gefunden werden können.',
    items: [
      { title: 'Website-Updates und technische Optimierung' },
      { title: 'Content-Entwicklung für Facebook, LinkedIn und YouTube' },
      { title: 'Newsletter-Prozesse und Kampagnen-Tracking' },
      { title: 'Übersetzung und Druckvorbereitung von Materialien' },
      { title: 'Sprachliche Aufbereitung und Upload von Videos' },
    ],
    image: {
      src: '~/assets/images/websites/website-bentley.webp',
      alt: 'Content-Produktion für Social Media',
    },
    url: 'https://bentleylab.hu',
  },
  {
    title: 'Tiffer 21 Alba Kft.',
    subtitle: 'Kompletter Website-Relaunch für einen offiziellen Kärcher Fachhändler und autorisierten Servicepartner.',
    description:
      'Im Projekt haben wir den Webauftritt in eine moderne, leistungsorientierte Plattform überführt, die Produktangebot, Serviceleistungen und Unternehmensinformationen klar strukturiert darstellt. Die inhaltliche und technische Architektur wurde gezielt auf bessere Nutzerführung, qualifiziertere Anfragen und stärkere Sichtbarkeit in Suchmaschinen ausgerichtet.',
    items: [
      { title: 'Vollständiger Website-Relaunch mit mobilem Fokus' },
      { title: 'Produktkatalog mit klarer Kategorienlogik' },
      { title: 'Strukturierte Darstellung von Service- und Wartungsleistungen' },
      { title: 'Angebotsformular für präzisere und schnellere Anfragen' },
      { title: 'On-page-SEO-Optimierung auf technischer und inhaltlicher Ebene' },
      { title: 'Bereitstellung unseres eigenen Server-Hosting-Dienstes für schnelles Laden von Websites' },
    ],
    image: {
      src: '~/assets/images/websites/website-tiffer21.webp',
      alt: 'Website-Relaunch für Tiffer 21 Alba',
    },
    url: 'https://tiffer21.hu/',
  },
  {
    title: 'Abasar Industrial Zone',
    subtitle: 'Englischsprachige Website für ein Industriegebietsprojekt.',
    description:
      'Auf Basis vorgegebener Inhalte haben wir eine einfache, aber wirkungsvolle mobile Website erstellt, die Standortvorteile und Leistungen für potenzielle Mieter klar präsentiert.',
    items: [
      { title: 'Modernes, schnelles und mobilfreundliches Design' },
      { title: 'Leicht navigierbare Seitenstruktur' },
      { title: 'Klar aufbereitete, informative Inhalte' },
      { title: 'Animierte und interaktive Elemente' },
      { title: 'Integriertes Kontaktformular' },
    ],
    image: {
      src: '~/assets/images/websites/website-abasar.webp',
      alt: 'Website für ein Industriegebiet',
    },
    url: 'http://abasar-industrial.com',
  },
  {
    title: 'Medical History Museum',
    subtitle: 'Webentwicklung und Datenbankintegration für das Medical History Museum in Melbourne.',
    description:
      'Für dieses Universitätsmuseum müssten Daten in Echtzeit aus einer entfernten Datenbank eingebunden werden. Dazu haben wir ein eigenes Modul für Abruf, Verarbeitung und Darstellung entwickelt.',
    items: [
      { title: 'Entwicklung eines individuellen Drupal-Moduls' },
      { title: 'API-Integration externer Services' },
      { title: 'Design-Umsetzung und Optimierung' },
      { title: 'Echtzeit-Datensynchronisation' },
    ],
    image: {
      src: '~/assets/images/websites/website-medicalhistory.webp',
      alt: 'API- und Datenbankintegration',
    },
    url: 'https://medicalhistorymuseum.mdhs.unimelb.edu.au/collections',
  },
  {
    title: 'Dementia Australia Research Foundation',
    subtitle: 'Entwicklung einer Drupal-Website für eine nationale Forschungsstiftung.',
    description:
      'Wir haben einen modernen visuellen Relaunch umgesetzt und die Inhaltsstruktur neu organisiert, um Pflege, Redaktion und langfristige Erweiterung deutlich zu vereinfachen.',
    items: [
      { title: 'Modernes, einfach pflegbares Design' },
      { title: 'Neustrukturierung der Inhalte' },
      { title: 'Umsetzung klarer Kontaktprozesse' },
      { title: 'Unterstützung für Spendenstrecken' },
    ],
    image: {
      src: '~/assets/images/websites/website-DARF.webp',
      alt: 'Webentwicklung für eine Stiftung',
    },
    url: 'https://www.dementia.org.au/dementia-australia-research-foundation',
  },
  {
    title: 'Cumberland Pediatric Foundation',
    subtitle: 'Web-Relaunch für eine US-amerikanische klinische Forschungsstiftung.',
    description:
      'Die Aufgabe umfasste ein komplettes Redesign mit skalierbarer Inhaltsarchitektur. Schwerpunkt war die Verbesserung der User Experience zur Unterstützung von Fundraising und Engagement.',
    items: [
      { title: 'Modernes, einfach pflegbares Design' },
      { title: 'Neustrukturierung der Inhalte' },
      { title: 'Umsetzung klarer Kontaktprozesse' },
      { title: 'Unterstützung für Spendenstrecken' },
    ],
    image: {
      src: '~/assets/images/websites/website-cumberland.webp',
      alt: 'Website für klinische Forschungsstiftung',
    },
    url: 'https://cumberlandpediatric.org',
  },
  {
    title: 'MAB-Tarnoca Baufirma und Bergbau GmbH',
    subtitle: 'Unternehmenswebsite für ein ungarisches Bergbau- und Bauunternehmen.',
    description:
      'Wir haben ein modernes Erscheinungsbild umgesetzt und die Content-Struktur für die laufende Pflege optimiert. Die Website unterstützt klare Leistungsdarstellung und Kontaktanbahnung.',
    items: [
      { title: 'Modernes und leicht pflegbares Design' },
      { title: 'Optimierung der Inhaltsstruktur' },
      { title: 'Umsetzung einer Unterseite für Ausschreibungsprojekte' },
      { title: 'Regelmäßige Aktualisierung von Preislisten' },
    ],
    image: {
      src: '~/assets/images/websites/website-mabtarnoca.webp',
      alt: 'Website für Bergbau- und Bauunternehmen',
    },
    url: 'https://mab-tarnoca.hu',
  },
  {
    title: 'MAB Pharma Zrt.',
    subtitle: 'Unternehmenswebsite für ein ungarisches Pharmaunternehmen.',
    description:
      'Im Projekt lag der Fokus auf einer klareren Inhaltslogik und besserer Wartbarkeit, damit das Unternehmen professionell präsentiert wird und Kontaktanfragen einfacher ablaufen.',
    items: [
      { title: 'Umsetzung einer Unternehmens-Informationswebsite' },
      { title: 'Präsentation von Ausschreibungsprojekten' },
      { title: 'Mehrsprachige Website-Struktur' },
    ],
    image: {
      src: '~/assets/images/websites/website-mabpharma.webp',
      alt: 'Corporate Website in der Pharmabranche',
    },
    url: 'https://www.mab-pharma.hu/',
  },
  {
    title: 'Csibetanya Premium',
    subtitle: 'Präsentationswebsite für einen Familienbetrieb mit Bestellfunktion.',
    description:
      'Wir haben eine Website aufgebaut, die den Betrieb professionell darstellt und den Bestellprozess für Kundinnen und Kunden erleichtert.',
    items: [
      { title: 'Integration von Bestellfunktionen' },
      { title: 'Umsetzung eines Kontaktformulars' },
      { title: 'Optimierung der Inhaltsstruktur' },
      { title: 'Benutzerfreundlicher Admin-Bereich' },
    ],
    image: {
      src: '~/assets/images/websites/website-csibetanya.webp',
      alt: 'Website für einen Familienbetrieb',
    },
    url: 'https://csibetanya.hu',
  },
  {
    title: 'Happy Flex Kft.',
    subtitle: 'Weiterentwicklung von Onlineshop und Social-Kanälen für einen ungarischen Kosmetikhersteller.',
    description:
      'Zum Umfang gehörten Shop-Optimierungen und laufende Content-Produktion für Social Media, um Sichtbarkeit und Kundenbindung nachhaltig zu steigern.',
    items: [
      { title: 'Aktualisierung des Onlineshops' },
      { title: 'Content-Entwicklung für Social-Media-Kanäle' },
      { title: 'Produktion von TikTok-Videos' },
      { title: 'Facebook-Setup und regelmäßige Beiträge' },
    ],
    image: {
      src: '~/assets/images/websites/website-happyflex.webp',
      alt: 'Weiterentwicklung eines Kosmetik-Onlineshops',
    },
    url: 'https://happyflex.hu',
  },
];
