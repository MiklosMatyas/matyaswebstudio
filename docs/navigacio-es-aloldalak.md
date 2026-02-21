# Navigáció és Aloldalak Dokumentáció

Ez a dokumentum a projekt jelenlegi fejléc navigációját és az elérhető aloldalakat foglalja össze.

## Forrásfájlok

- Fejléc és lábléc navigáció: `src/navigation.ts`
- Oldal route-ok: `src/pages/`

## Fejléc Navigáció (Header)

### `Homes`

- `/homes/saas`
- `/homes/startup`
- `/homes/mobile-app`
- `/homes/personal`

### `Pages`

- `/#features` (anchor link)
- `/services`
- `/portfolio`
- `/pricing`
- `/about`
- `/contact`
- `/terms`
- `/privacy`

### `Landing`

- `/landing/lead-generation`
- `/landing/sales`
- `/landing/click-through`
- `/landing/product`
- `/landing/pre-launch`
- `/landing/subscription`

### `Blog`

- Blog lista: `getBlogPermalink()` (tipikusan `/blog`)
- Cikk minta route-ok: permalink alapján generált post URL-ek
- Kategória és tag oldalak: permalink alapján generált URL-ek

### Egyéb fejléc elemek

- `Widgets` jelenleg: `href: "#"`
- Jobb oldali action gomb: `Download` (külső GitHub link)

## Lábléc Navigáció (Footer)

### Oszlopok

- `Product` (placeholder `#` linkek)
- `Platform` (placeholder `#` linkek)
- `Support` (placeholder `#` linkek)
- `Company` (placeholder `#` linkek)

### Másodlagos linkek

- `/terms`
- `/privacy`

### Social linkek

- X (`#`)
- Instagram (`#`)
- Facebook (`#`)
- RSS (`/rss.xml`)
- GitHub (külső link)

## Jelenlegi Oldalroute-ok (`src/pages`)

### Statikus oldalak

- `/` (`src/pages/index.astro`)
- `/about` (`src/pages/about.astro`)
- `/contact` (`src/pages/contact.astro`)
- `/services` (`src/pages/services.astro`)
- `/pricing` (`src/pages/pricing.astro`)
- `/portfolio` (`src/pages/portfolio.astro`)
- `/terms` (`src/pages/terms.md`)
- `/privacy` (`src/pages/privacy.md`)
- `/404` (`src/pages/404.astro`)

### Homes aloldalak

- `/homes/saas`
- `/homes/startup`
- `/homes/mobile-app`
- `/homes/personal`

### Landing aloldalak

- `/landing/lead-generation`
- `/landing/sales`
- `/landing/click-through`
- `/landing/product`
- `/landing/pre-launch`
- `/landing/subscription`

### Blog route-ok

- `/blog` jellegű index (`src/pages/[...blog]/index.astro`)
- lapozás (`src/pages/[...blog]/[...page].astro`)
- kategória oldalak (`src/pages/[...blog]/[category]/[...page].astro`)
- tag oldalak (`src/pages/[...blog]/[tag]/[...page].astro`)

### Feed route

- `/rss.xml` (`src/pages/rss.xml.ts`)

## Rövid Megjegyzések

- A `Pages` menüben szereplő `/#features` anchor jelenleg az oldal tartalmától függően lehet aktív vagy inaktív.
- A `Widgets` fejlécpont jelenleg nincs konkrét oldalhoz kötve.
- A footer oszlopok többsége placeholder (`#`) linket használ.
