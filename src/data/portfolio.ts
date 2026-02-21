import heroImage from '~/assets/images/weboldal-keszites-hero.webp';
import firstImpressionImage from '~/assets/images/weboldal-elso-benyomas.webp';
import webDesignImage from '~/assets/images/weboldal-tervezes.webp';
import defaultImage from '~/assets/images/default.png';

export const portfolioHero = {
  title: 'Portfólió',
  subtitle:
    'Válogatott munkáinkon keresztül mutatjuk meg, hogyan építünk gyors, átlátható és üzletileg hasznos webes megoldásokat.',
  image: {
    src: heroImage,
    alt: 'Portfólió bemutató',
  },
};

export const portfolioItems = [
  {
    title: 'Céges weboldal modern újratervezéssel',
    subtitle: 'Fókuszban a hitelesség és az ajánlatkérések számának növelése',
    description:
      'A projekt célja egy elavult weboldal teljes újragondolása volt. A tartalmi struktúrát egyszerűsítettük, a felhasználói utakat rövidítettük, és kiemelt figyelmet kapott a mobilos használhatóság.',
    items: [
      { title: 'Átlátható menü és oldalszerkezet' },
      { title: 'Gyorsabb betöltési idő és jobb teljesítmény' },
      { title: 'Konverzióra optimalizált kapcsolatfelvételi pontok' },
      { title: 'Technikai SEO alapok rendezése' },
    ],
    image: {
      src: firstImpressionImage,
      alt: 'Céges weboldal újratervezése',
    },
  },
  {
    title: 'Szolgáltatói landing oldal kampánytámogatással',
    subtitle: 'Rövid üzenet, tiszta értékajánlat, mérhető érdeklődések',
    description:
      'Egy szezonális kampányhoz olyan landing oldalt készítettünk, amely gyorsan átadja a lényeget, és világosan tereli a látogatót a következő lépésre. A mérési pontok már az induláskor beépítésre kerültek.',
    items: [
      { title: 'Kampányra hangolt tartalmi felépítés' },
      { title: 'Egyszerű és gyors ajánlatkérő űrlap' },
      { title: 'Analitika és eseménykövetés beállítása' },
      { title: 'Hirdetési forgalom fogadására optimalizált oldal' },
    ],
    image: {
      src: webDesignImage,
      alt: 'Landing oldal tervezés',
    },
  },
  {
    title: 'Webes rendszer bővítés és folyamatos fejlesztés',
    subtitle: 'Stabil alap, fokozatos funkcióbővítés',
    description:
      'A meglévő weboldalt több ütemben bővítettük új modulokkal és integrációkkal. A fejlesztés célja az volt, hogy a napi működés gyorsabb legyen, és az ügyfélkezelés rendezettebbé váljon.',
    items: [
      { title: 'Új funkciók és egyedi űrlapfolyamatok' },
      { title: 'Külső szolgáltatások API-integrációja' },
      { title: 'Karbantartási és frissítési folyamat kialakítása' },
      { title: 'Skálázható technikai struktúra' },
    ],
    image: {
      src: defaultImage,
      alt: 'Webes rendszer bővítés',
    },
  },
];
