import heroImage from '~/assets/images/weboldal-keszites-hero.webp';
import defaultImage from '~/assets/images/websites/website-bentley.webp';

export const referenciakHero = {
  title: 'Referenciák',
  subtitle:
    'Válogatott munkáinkon keresztül mutatjuk meg, hogyan építünk gyors, átlátható és üzletileg hasznos webes megoldásokat.',
  image: {
    src: heroImage,
    alt: 'Referenciák bemutató',
  },
};

export const referenciakItems = [
  {
    title: 'Touch-type Read and Spell (TTRS)',
    subtitle: 'Komplex értékesítési és tanulástámogató weboldal fejlesztése egy angliai székhelyű vállalatnak.',
    description:
      'A projekt célja egy elavult weboldal teljes újragondolása volt. A tartalmi struktúrát egyszerűsítettük, a felhasználói utakat rövidítettük és kiemelt figyelmet kapott a mobilos használhatóság.',
    items: [
      { title: 'Komplett CMS rendszer Drupalban' },
      { title: 'Gyorsabb betöltési idő és jobb teljesítmény' },
      { title: 'Konverzióra optimalizált előfizetői űrlapok' },
      { title: 'SEO optimalizált landing oldalak' },
      { title: 'API kapcsolat külső szolgáltatókkal' },
    ],
    image: {
      src: '~/assets/images/websites/website-ttrs.webp',
      alt: 'Céges weboldal újratervezése',
    },
    url: 'https://www.readandspell.com',
  },
  {
    title: 'Benley Labor Kft.',
    subtitle: 'Komplett online megjelenés és közösségi média kezelése nemzetközi labortechikai forgalmazó cégnek.',
    description:
      'Több Wordpress alapú weboldal kialakítása volt a cél termékkatalógusokkal a fókuszban. A projekt során a tartalmi struktúrát úgy alakítottuk ki, hogy az egyszerűen bővíthető legyen, és a termékek könnyen megtalálhatók legyenek.',
    items: [
      { title: 'Weboldalak frissítése és optimalizálása' },
      { title: 'Tartalomfejlesztés Facebook, LinkedIn és Youtube platformokra' },
      { title: 'Hírlevélküldés és kampányok nyomon követése' },
      { title: 'Nyomtatott kiadványok nyelvi fordítása és nyomdai előkészítése' },
      { title: 'Bemutató videók nyelvi fordítása és feltöltése' },
    ],
    image: {
      src: '~/assets/images/websites/website-bentley.webp',
      alt: 'Landing oldal tervezés',
    },
    url: 'https://bentleylab.hu',
  },
  {
    title: 'Abasár Industrial Zone',
    subtitle: 'Ipari területet bemutató weboldal fejlesztése angol nyelven.',
    description:
      'Megadott tartalmi elemek alapján egy egyszerű, de hatékony mobilbarát weboldalt hoztunk létre, amely bemutatja a terület előnyeit és szolgáltatásait. A cél egy könnyen navigálható és gyorsan betöltődő oldal volt, amely a potenciális bérlők számára vonzó információkat nyújt.',
    items: [
      { title: 'Modern és gyors mobilbarát design' },
      { title: 'Könnyen navigálható felépítés' },
      { title: 'Látványos és informatív tartalom' },
      { title: 'Animált és interaktív elemek' },
      { title: 'Kapcsolatfelvételi űrlap' },
    ],
    image: {
      src: defaultImage,
      alt: 'Ipari területet bemutató weboldal fejlesztése',
    },
    url: 'http://abasar-industrial.com',
  },
  {
    title: 'Medical History Museum',
    subtitle: 'A Melbourne-i Orvostörténeti Múzeum weboldalának fejlesztése és adatbázis-integrációja.',
    description:
      'Ez egy egyetemi múzeum weboldala. Adatokat kellett lekérnünk egy távoli adatbázisból. Írtunk egy egyedi modult, amely elküldi a kérést, visszakapja az adatokat, és a kívánt formátumban megjeleníti azokat. A modul valós időben működik, így ha a másik oldalon frissítenek valamit, az azonnal megjelenik a mi oldalunkon is.',
    items: [
      { title: 'Egyedi modul fejlesztése Drupal rendszerhez' },
      { title: 'Külső szolgáltatások API-integrációja' },
      { title: 'Design kialakítása és optimalizálása' },
      { title: 'Valós időben működő adatbázis integráció' },
    ],
    image: {
      src: defaultImage,
      alt: 'Külső szolgáltatások API-integrációja',
    },
    url: 'https://medicalhistorymuseum.mdhs.unimelb.edu.au/collections',
  },
  {
    title: 'Dementia Australia Research Foundation',
    subtitle: 'Kutatási alapítvány weboldalának fejlesztése Drupal rendszerben.',
    description:
      'Egy ausztrál kutatási alapítvány weboldalának fejlesztése volt a feladat. A projekt során egy új, modern design kialakítása mellett a tartalmi struktúrát is átalakítottuk, hogy az könnyebben kezelhető és bővíthető legyen. A weboldal célja, hogy bemutassa az alapítvány munkáját, és megkönnyítse a támogatók számára a kapcsolatfelvételt és adományozást.',
    items: [
      { title: 'Modern és könnyen kezelhető design' },
      { title: 'Tartalmi struktúra átalakítása' },
      { title: 'Kapcsolatfelvételi űrlap kialakítása' },
      { title: 'Adományozási lehetőségek megjelenítése' },
    ],
    image: {
      src: defaultImage,
      alt: '',
    },
    url: 'https://www.dementia.org.au/dementia-australia-research-foundation',
  },
  {
    title: 'Cumberland Pediatric Foundation',
    subtitle: 'Egy amerikai klinikai kutatási alapítvány weboldalának fejlesztése.',
    description:
      'A feladat egy klinikai kutatásokkal foglalkozó alapítvány teljes körű webes újratervezése volt. A modern vizuális arculat mellett kritikus hangsúlyt fektettünk a skálázható tartalomstruktúra kialakítására, amely hosszú távon is támogatja a szervezet bővülését. A fejlesztés elsődleges célja a felhasználói élmény (UX) optimalizálása volt, ezzel közvetlenül segítve az adománygyűjtési folyamatokat és a támogatói elköteleződést.',
    items: [
      { title: 'Modern és könnyen kezelhető design' },
      { title: 'Tartalmi struktúra átalakítása' },
      { title: 'Kapcsolatfelvételi űrlap kialakítása' },
      { title: 'Adományozási lehetőségek megjelenítése' },
    ],
    image: {
      src: defaultImage,
      alt: '',
    },
    url: 'https://cumberlandpediatric.org',
  },
  {
    title: 'MAB-Tarnóca bányászati és építőipari Kft.',
    subtitle: 'Magyar bányászati és építőipari vállalkozás weboldalának fejlesztése.',
    description:
      'Egy magyar bányászati és építőipari vállalkozás weboldalának fejlesztése volt a feladat. A projekt során egy új, modern design kialakítása mellett a tartalmi struktúrát is átalakítottuk, hogy az könnyebben kezelhető és bővíthető legyen. A weboldal célja, hogy bemutassa a vállalkozás munkáját, és megkönnyítse a kliensek számára a kapcsolatfelvételt.',
    items: [
      { title: 'Modern és könnyen kezelhető design' },
      { title: 'Tartalmi struktúra átalakítása' },
      { title: 'Pályázati projekt oldal kialakítása' },
      { title: 'Árlisták rendszeres frissítése' },
    ],
    image: {
      src: defaultImage,
      alt: 'bányászati és építőipari céges weboldal készítése',
    },
    url: 'https://mab-tarnoca.hu',
  },
  {
    title: 'MAB Pharma Zrt.',
    subtitle: 'Magyar gyógyszeripari vállalat weboldalának fejlesztése.',
    description:
      'Egy magyar gyógyszeripari vállalat weboldalának fejlesztése volt a feladat. A projekt során a tartalmi struktúrát is átalakítottuk, hogy az könnyebben kezelhető és bővíthető legyen. A weboldal célja, hogy bemutassa a vállalat munkáját, és megkönnyítse az ügyfelek számára a kapcsolatfelvételt.',
    items: [
      { title: 'Céges információs oldal kialakítása' },
      { title: 'Pályázati projektek bemutatása' },
      { title: 'Többnyelvű weboldal kialakítása' },
    ],
    image: {
      src: defaultImage,
      alt: 'Vállalati céges weboldal',
    },
    url: 'https://www.mab-pharma.hu/',
  },
  {
    title: 'Csibetanya Prémium',
    subtitle: 'Családi gazdaság bemutató weboldalának fejlesztése megrendelési funkciókkal.',
    description:
      'Egy magyar családi gazdaság bemutató weboldalának fejlesztése volt a feladat. A weboldal célja, hogy bemutassa a családi gazdaság munkáját, és megkönnyítse az ügyfelek számára a megrendelési folyamatokat.',
    items: [
      { title: 'Megrendelési funkciók beépítése' },
      { title: 'Kapcsolatfelvételi űrlap kialakítása' },
      { title: 'Tartalmi struktúra átalakítása' },
      { title: 'Könnyen kezelhető adminisztrációs felület kialakítása' },
    ],
    image: {
      src: defaultImage,
      alt: 'Családi gazdaság bemutató weboldal',
    },
    url: 'https://csibetanya.hu',
  },
  {
    title: 'Happy Flex Kft.',
    subtitle: 'Magyar kozmetikai gyártó cég webáruházának és közösségi média oldalainak fejlesztése.',
    description:
      'Egy magyar kozmetikai gyártó cég webáruházának és közösségi média oldalainak fejlesztése volt a feladat. A weboldal célja, hogy bemutassa a vállalat munkáját, és megkönnyítse az ügyfelek számára a kapcsolatfelvételt és a vásárlást. Folyamatosan készítünk új tartalmakat a közösségi média platformokra, hogy növeljük a vállalat online jelenlétét és elköteleződését.',
    items: [
      { title: 'Webáruház frissítése' },
      { title: 'Közösségi média oldalak tartalomfejlesztése' },
      { title: 'TikTok videók készítése' },
      { title: 'Facebook oldal kialakítása, posztok írása rendszeresen' },
    ],
    image: {
      src: defaultImage,
      alt: 'Kozmetikai gyártó cég webáruházának fejlesztése',
    },
    url: 'https://happyflex.hu',
  },
];
