export type Service = {
  index: string;
  slug: string;
  title: string;
  summary: string;
  image: string;
  items: string[];
  /** Marked "Perspektiv xidmət" in the company's own materials — a stated
   *  forward-looking capability rather than an actively delivered one. */
  perspective?: boolean;
};

export const services: Service[] = [
  {
    index: "01",
    slug: "layihelerin-idare-olunmasi",
    title: "Layihələrin idarə olunması",
    summary:
      "Həcm, xərc, vaxt və resursların vahid idarəetmə çərçivəsində əlaqələndirilməsi.",
    image: "/images/services/project-management.jpg",
    items: [
      "Həcmlərin idarə olunması",
      "Xərclərin idarə olunması",
      "Vaxtın idarə olunması",
      "Resursların idarə olunması",
      "Dəyişikliklərin idarə olunması (MOC)",
      "Risk və imkanların idarə olunması",
      "Satınalmaların idarə olunması",
      "Maraqlı tərəflərin idarə olunması",
      "Kommunikasiyanın idarə olunması",
    ],
  },
  {
    index: "02",
    slug: "tikinti-senayesi-uzre-meslehet",
    title: "Tikinti sənayesi üzrə məsləhət",
    summary:
      "İcra planından SƏTƏMM və KT/KN idarəetməsinə qədər sahə proseslərinin texniki müşayiəti.",
    image: "/images/services/construction-consulting.jpg",
    items: [
      "Layihə icra planının hazırlanması",
      "Xüsusi tikinti metodologiyalarının hazırlanması",
      "Konstruktivlik analizi",
      "Xüsusi yükqaldırma prosedurları və planları",
      "Müqavilələrin idarə olunması",
      "İddiaların idarə olunması",
      "Tikinti üzrə dəyişiklik sifarişlərinin analizi",
      "SƏTƏMM idarəetməsi",
      "KT/KN idarəetməsi",
      "İlkin istismara verilmə və istismara vermənin idarə olunması",
      "Tikinti sənədlərinə nəzarət",
    ],
  },
  {
    index: "03",
    slug: "podrat-satinalma-meslehet",
    title: "Podrat işlərinin satınalması üzrə məsləhət",
    summary:
      "Smeta, kommersiya və texniki təkliflərin tender tələblərinə uyğun hazırlanması.",
    image: "/images/services/procurement.jpg",
    items: [
      "Tikinti xərcləri smetasının hazırlanması",
      "Kommersiya təkliflərinin hazırlanması",
      "Texniki təkliflərin hazırlanması",
    ],
  },
  {
    index: "04",
    slug: "muhendislik-ve-layihelendirme",
    title: "Mühəndislik və layihələndirmə",
    summary:
      "Dizayn, cizgi planlar və mühəndislik sənədləşdirməsinin tam dövrü.",
    image: "/images/services/engineering-design.jpg",
    items: [
      "Layihələrin dizayn olunması",
      "Cizgi planların hazırlanması",
      "İşçi və tətbiqi sxemlərin hazırlanması",
      "Tələb və normaların təmin edilməsi",
      "Mühəndislik sənədləşdirməsinin idarə olunması",
      "İstehsalatda layihə tələblərinə nəzarət və yoxlama",
      "Planlaşdırma və hesabatlılıq",
    ],
    perspective: true,
  },
  {
    index: "05",
    slug: "tikinti-senayesinde-muhendislik",
    title: "Tikinti sənayesində mühəndislik",
    summary:
      "Konsept dizayndan as-built cizgilərə qədər mühəndis həllərinin hazırlanması.",
    image: "/images/services/site-engineering.jpg",
    items: [
      "Konsept dizayn",
      "Topoqrafik və sahə tədqiqatları",
      "Müfəssəl dizayn",
      "3D modelləşdirmə",
      "Shop / fabrication drawing hazırlanması",
      "As-built drawing hazırlanması",
    ],
    perspective: true,
  },
  {
    index: "06",
    slug: "tikinti",
    title: "Tikinti",
    summary:
      "Torpaq işlərindən metalkonstruksiya və boru xətlərinin quraşdırılmasına qədər sahə icrası.",
    image: "/images/services/construction.jpg",
    items: [
      "Torpaq işləri",
      "Qazma",
      "Əksdoldurma",
      "Düzləndirmə",
      "Kipləşdirmə",
      "Yolların, küçələrin, parkların və meydançaların tikintisi",
      "Beton və asfalt işləri",
      "Abadlaşdırma",
      "Metalkonstruksiyaların hazırlanması və quraşdırılması",
      "Dəmir-beton məmulatlarının hazırlanması və quraşdırılması",
      "Quruda müxtəlif diametrli boruların çəkilməsi",
      "Elektrik-quraşdırma işləri",
      "Korroziyadan mühafizə",
      "Rezervuar, çən və neft-qaz-su saxlama anbarlarının tikintisi",
    ],
    perspective: true,
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
