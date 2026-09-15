export type Project = {
  slug: string;
  /** Title split across lines for editorial display */
  titleLines: string[];
  title: string;
  period: string;
  sector: string;
  subtitle?: string;
  /** Strictly derived from confirmed scope — no invented outcomes. */
  intro: string;
  scope: string[];
  cover: string;
  gallery: string[];
};

export const projects: Project[] = [
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
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const otherProjects = (slug: string) =>
  projects.filter((p) => p.slug !== slug);
