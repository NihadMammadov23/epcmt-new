export type Stat = { label: string; value: string };

export type Project = {
  slug: string;
  /** Title split across lines for editorial display */
  titleLines: string[];
  title: string;
  /** Optional — omit rather than invent a date for projects still in design. */
  period?: string;
  sector: string;
  subtitle?: string;
  /** Strictly derived from confirmed scope — no invented outcomes. */
  intro: string;
  /** Confirmed line items only. Leave empty rather than invent scope. */
  scope: string[];
  /** Confirmed technical figures only (e.g. from source documents). */
  stats?: Stat[];
  cover: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "baki-gemiqayirma-zavodu",
    titleLines: ["Bakı Gəmiqayırma Zavodunun", "Tikinti Layihəsi"],
    title: "Bakı Gəmiqayırma Zavodunun Tikinti Layihəsi (EPCM)",
    period: "2010 — 2013",
    sector: "Sənaye tikintisi",
    subtitle: "EPCM — Layihələndirmə, Təchizat, Tikinti, İdarəetmə",
    intro:
      "Bakı Gəmiqayırma Zavodunun tikintisi EPCM modeli əsasında icra olunub: podratçının prekvalifikasiyasından və tender sənədləşməsindən başlayaraq, layihələndirmə, təchizat, tikinti və işə buraxma/istismara verilmə mərhələlərinə qədər layihənin bütün dövrü idarə edilib.",
    scope: [
      "Dəmir-beton pirsin tikintisi — 300 metr",
      "Dəmir-beton qazma-tökmə svaylar — 4 100 metr",
      "Torpaq işləri — 1 120 000 m³",
      "Digər dəmir-beton işləri — 255 000 m³",
      "Armatur karkasların hazırlanması — 40 000 ton",
      "Metalkonstruksiyanın hazırlanması və quraşdırılması — 11 000 ton",
      "Kran yolları — 22 000 metr",
      "Divar və dam panellərinin quraşdırılması — 142 000 m²",
      "Əsas və 7 ədəd köməkçi yarımstansiya",
      "Çirkab suların təmizlənməsi qurğusu",
      "Elektrik təchizatı sistemi",
      "CCTV sistemi",
      "Texnoloji boru xətləri",
    ],
    stats: [
      { label: "Ümumi ərazi", value: "60 ha" },
      { label: "Qapalı istehsal sahəsi", value: "75 000 m²" },
      { label: "Yanalma körpüsü", value: "1 630 m" },
      { label: "İllik metalkonstruksiya istehsalı", value: "25 000 ton" },
    ],
    cover: "/images/projects/baki-shipyard-cover.jpg",
    gallery: [
      "/images/projects/baki-shipyard-01.jpg",
      "/images/projects/baki-shipyard-02.jpg",
      "/images/projects/baki-shipyard-03.jpg",
      "/images/projects/baki-shipyard-04.jpg",
      "/images/projects/baki-shipyard-05.jpg",
    ],
  },
  {
    slug: "abseron-eps",
    titleLines: ["Abşeron Yatağının Erkən", "Hasılat Proqramı"],
    title: "Abşeron Yatağının Erkən Hasılat Proqramı (EPS) Layihəsi",
    period: "2021 — 2023",
    sector: "Neft & Qaz",
    subtitle: "Brownfield iş həcmləri",
    intro:
      "Abşeron yatağının erkən hasılat proqramı çərçivəsində brownfield iş həcmləri üzrə icra edilən layihə. İşlər mövcud istismarda olan infrastruktur şəraitində, boru xətləri və metal konstruksiya həcmləri üzrə aparılıb.",
    scope: [
      "Müxtəlif diametrli və təyinatlı boru xətlərinin estakada üzərində çəkilməsi",
      "Metal konstruksiya işləri — 500 ton",
    ],
    cover: "/images/projects/abseron-eps-cover.jpg",
    gallery: [
      "/images/projects/abseron-eps-01.jpg",
      "/images/projects/abseron-eps-02.jpg",
      "/images/projects/abseron-eps-03.jpg",
    ],
  },
  {
    slug: "tsnori-su-techizati",
    titleLines: ["Tsnori Su Təchizatı", "Sisteminin Bərpası"],
    title: "Tsnori Su Təchizatı Sisteminin Bərpası Layihəsi",
    period: "2019 — 2020",
    sector: "Su infrastrukturu",
    intro:
      "Su təchizatı sisteminin bərpası üzrə layihə. İş həcmi transmissiya əsas xəttinin tikintisini və xlorinasiya sisteminin quraşdırılmasını əhatə edib.",
    scope: [
      "Transmissiya əsas xəttinin tikintisi",
      "Xlorinasiya sisteminin quraşdırılması",
    ],
    cover: "/images/projects/tsnori-cover.jpg",
    gallery: [
      "/images/projects/tsnori-01.jpg",
      "/images/projects/tsnori-02.jpg",
    ],
  },
  {
    slug: "likani-tsagveri",
    titleLines: ["Likani və Tsagveri Su", "Təchizatı Sistemləri"],
    title: "Likani və Tsagveri Su Təchizatı Sistemlərinin Bərpası",
    period: "2018",
    sector: "Su infrastrukturu",
    intro:
      "İki su təchizatı sisteminin bərpası üzrə layihə. İş həcminə su anbarlarının tikintisi və transmissiya magistral xətlərinin bərpası daxil olub.",
    scope: [
      "500 m³ və 100 m³ su anbarlarının tikintisi",
      "Transmissiya magistral xətlərinin bərpası",
    ],
    cover: "/images/projects/likani-cover.jpg",
    gallery: [
      "/images/projects/likani-01.jpg",
      "/images/projects/likani-02.jpg",
    ],
  },
  {
    slug: "naftalan-sanatoriya",
    titleLines: ["Naftalan", "Sanatoriyası"],
    title: "Naftalan Sanatoriyası — Yardımçı Bina",
    period: "2026",
    sector: "Sağlamlıq turizmi",
    subtitle: "\"Karvan Hotel-Sanatorium Naftalan\" MMC-yə məxsus yardımçı bina",
    intro:
      "Naftalan şəhərində, \"Karvan Hotel-Sanatorium Naftalan\" MMC-yə məxsus yardımçı bina üzrə memarlıq və dizayn həlləri, konstruktiv hesablamalar və konstruktiv layihə hazırlanıb. Təqdimat restoran, mətbəx, soyunub-geyinmə bloku və hovuz zonasını əhatə edir.",
    scope: [
      "Memarlıq modeli (SketchUp) — həcm və məkan həlləri, funksional zonaların 3D təqdimatı",
      "Vizuallaşdırma (Lumion) — fasad, interyer və ərazinin render görüntüləri",
      "Konstruktiv hesablamalar (SAP2000) — hesablama modeli, daxili qüvvələr, deformasiyalar və seysmik analiz",
      "Birləşmələrin hesablanması (IDEA StatiCa) — baza lövhəsi, ankerlər və polad konstruksiya düyünləri",
      "Konstruktiv layihə (Tekla Structures, AutoCAD) — 3D model, detallandırma, işçi cizgilər və spesifikasiyalar",
    ],
    cover: "/images/projects/naftalan-cover.jpg",
    gallery: [
      "/images/projects/naftalan-01.jpg",
      "/images/projects/naftalan-02.jpg",
      "/images/projects/naftalan-03.jpg",
      "/images/projects/naftalan-04.jpg",
    ],
  },
  {
    slug: "hyatt-regency-kafe-terrasi",
    titleLines: ["Hyatt Regency", "Kafe Terrası"],
    title: "Hyatt Regency — Kafe Terrası Konstruktiv Layihələndirməsi",
    sector: "Qonaqpərvərlik infrastrukturu",
    subtitle: "Sifarişçi: VIEN GROUP",
    intro:
      "\"Hyatt Regency\" hotelinin ərazisində kafe terrası üçün polad karkas və dəmir-beton lentvari bünövrənin konstruktiv layihəsi hazırlanıb. İşlər daşıyıcı sistemin üçölçülü modelləşdirilməsini, yüklərin təyinini, konstruktiv analizləri və birləşmə düyünlərinin hesablanmasını əhatə edib.",
    scope: [
      "Hesablama və analiz (LIRA-SAPR) — yüklər, yük birləşmələri, seysmik təsirlər və deformasiyalar",
      "Birləşmə hesablamaları (IDEA StatiCa) — sütun-tir, baza lövhəsi və mövcud konstruksiyaya birləşmə düyünləri",
      "Üçölçülü model — polad elementlərin və bünövrənin məkan üzrə yerləşməsi",
      "İşçi layihə — planlar, kəsiklər, armaturlaşdırma, düyünlər və material siyahıları",
    ],
    stats: [
      { label: "Hesablanmış şaquli əyinti", value: "3,43 mm" },
      { label: "Qəbul edilmiş hədd (L/200)", value: "24 mm" },
    ],
    cover: "/images/projects/hyatt-regency-cover.jpg",
    gallery: [
      "/images/projects/hyatt-regency-01.jpg",
      "/images/projects/hyatt-regency-02.jpg",
      "/images/projects/hyatt-regency-03.jpg",
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const otherProjects = (slug: string) =>
  projects.filter((p) => p.slug !== slug);
