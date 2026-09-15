# Şəkil manifesti / Image manifest

Bütün şəkillər `public/images/` altına yerləşdirilir. Fayl adları dəqiq olmalıdır —
komponentlər birbaşa bu yollara istinad edir.

Şəkil mövcud olmadıqda sayt sınmır: `Media` komponenti fayl adını daşıyan səliqəli
texniki placeholder göstərir. Real foto əlavə edildikdə avtomatik əvəz olunur.

> `bash scripts/fetch-legacy-images.sh` — mövcud saytdakı üç layihə şəklini çəkir.

## Editorial (tam eni, ən vacib kadrlar)

| Fayl | İstifadə | Tövsiyə olunan kadr | Nisbət |
|---|---|---|---|
| `editorial/hero.jpg` | Ana səhifə hero | Sənaye/infrastruktur, təmiz kompozisiya, sağ tərəfdə hava boşluğu | ~3:4 (şaquli kadr, sağ 46vw) |
| `editorial/break-01.jpg` | Ana səhifə, xidmətlərdən əvvəl | Estakada üzərində boru xətləri | 16:9 və ya daha geniş |
| `editorial/break-02.jpg` | Ana səhifə, prosesdən əvvəl | Metal konstruksiya detalı (ağ-qara göstərilir) | 16:9 |
| `editorial/about.jpg` | Haqqımızda | Sahə işləri, geniş plan | 16:9 |
| `editorial/services.jpg` | Xidmətlər | Mühəndislik detalı (ağ-qara göstərilir) | 16:9 |

## Layihələr

| Fayl | Nisbət |
|---|---|
| `projects/abseron-eps-cover.jpg` | 3:2 |
| `projects/abseron-eps-01.jpg` | 3:2 |
| `projects/abseron-eps-02.jpg` · `-03.jpg` | 4:5 (şaquli) |
| `projects/tsnori-cover.jpg` | 3:2 |
| `projects/tsnori-01.jpg` | 3:2 · `tsnori-02.jpg` 4:5 |
| `projects/likani-cover.jpg` | 3:2 |
| `projects/likani-01.jpg` | 3:2 · `likani-02.jpg` 4:5 |

## Xidmətlər (kursor önizləməsi + detal səhifəsi)

`services/project-management.jpg`, `construction-consulting.jpg`,
`procurement.jpg`, `engineering-design.jpg`, `site-engineering.jpg`,
`construction.jpg` — hər biri **3:4 şaquli**, 600×800 px kifayətdir.

## Qalereya

`gallery/01.jpg` … `gallery/10.jpg`.
Nisbətlər `src/data/gallery.ts` faylında təyin olunub (portrait / landscape /
square / wide) — asimmetrik şəbəkə buna əsaslanır. Şəkli dəyişdikdə oradakı
`ratio`, `span` və `offset` dəyərlərini uyğunlaşdırın.

## Üslub

Struktur detalları, boru xətləri, metalkonstruksiya, infrastruktur, sənaye
mühiti, texnika, memarlıq formaları. Təbii işıq, təmiz kompozisiya.

Qaçınılmalıdır: əl sıxan iş adamları, kameraya gülümsəyən kaskalı işçilər,
generic çertyojlar, barmaqla binanı göstərən fəhlələr.

Şəkillərin üzərinə ağır tünd overlay **qoyulmur** — sayt açıq temalıdır.
