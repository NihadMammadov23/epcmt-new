# EPCMT — veb sayt

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Geist

Bütün görünən məzmun Azərbaycan dilindədir.

## Başlanğıc

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produksiya buildi
```

## Struktur

```
src/
  app/
    layout.tsx              root layout, SEO, Organization schema
    page.tsx                ana səhifə
    haqqimizda/             şirkət, xronologiya, dəyərlər
    xidmetler/              xidmətlər + [slug] detal
    layiheler/              layihələr + [slug] case study
    qalereya/               asimmetrik qrid + lightbox
    elaqe/                  əlaqə
    sitemap.ts · robots.ts · not-found.tsx · icon.svg
  components/
    Navbar · Hero · SectionLabel · PageHeader
    ServiceList · ProjectFeature · Timeline · Values
    Standards · Process · ImageBreak · GalleryGrid
    ContactSection · ContactForm · Footer
    Media · Reveal · ArrowLink · RouteProgress · PageTransition
  data/
    company.ts · services.ts · projects.ts · gallery.ts
```

Bütün mətn və siyahılar `src/data/` altındadır — səhifə faylları toxunulmadan
məzmun redaktə edilə bilər.

## Dizayn sistemi

Tokenlər `src/app/globals.css` → `@theme`:

| Token | Dəyər |
|---|---|
| `paper` | `#F5F4F0` |
| `surface` | `#FFFFFF` |
| `ink` | `#111111` |
| `muted` | `#686866` |
| `line` | `#DCDCD6` |
| `accent` | `#C45A3A` |

Tipoqrafik siniflər: `.type-display`, `.type-display-sm`, `.type-statement`,
`.type-title`, `.type-lead`, `.type-body`, `.type-mono`, `.type-numeral`.
Şəbəkə: `.shell` (maks. 1400px) + `.grid12`.

Künclər kəskindir, kart yoxdur, kölgə yoxdur, ikon kitabxanası yoxdur.

## Animasiya

`Reveal` komponenti IntersectionObserver üzərində işləyir — `rise`, `fade`,
`clip`, `line` variantları. `prefers-reduced-motion` tam dəstəklənir, JS
olmadıqda məzmun `<noscript>` stili ilə görünən qalır.

## Şəkillər

Hazırda repozitoriyada real foto yoxdur. `Media` komponenti fayl olmadıqda
fayl adını göstərən texniki placeholder render edir — layout sınmır.

```bash
bash scripts/fetch-legacy-images.sh
```

Tam siyahı və kadr tövsiyələri: **`IMAGES.md`**.

## Əlaqə forması

Backend hələ qoşulmayıb. Standart davranış: form məlumatları istifadəçinin
poçt proqramında `info@epcmt.az` ünvanına hazır mesaj kimi açılır.

Real endpoint qoşduqda:

```bash
# .env.local
NEXT_PUBLIC_FORM_ENDPOINT=https://...
```

Endpoint təyin ediləndə form JSON `POST` göndərir.

## Məzmun haqqında qeyd

Saytda yalnız təsdiqlənmiş məlumat var. Müştəri adları, büdcələr, layihə
sayı, işçi sayı, sertifikatlar, rəylər və faiz göstəriciləri **uydurulmayıb**.
Köhnə saytdakı lorem ipsum mətnləri və generic qalereya kateqoriyaları
(Remodeling / Construction / Repairs / Design) çıxarılıb.

Əlavə etmək üçün hazır sahələr:
- yeni layihə → `src/data/projects.ts` (səhifə avtomatik yaranır)
- xronologiyaya yeni il → `src/data/company.ts`
- qalereyaya yeni kadr → `src/data/gallery.ts`
