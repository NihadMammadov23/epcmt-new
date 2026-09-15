export const company = {
  name: "EPCMT",
  descriptor: "Engineering / Construction / Management",
  founded: 2023,
  experienceSince: 2008,
  experienceYears: "17+",
  country: "Azərbaycan",
  address: "Rüstəm Rüstəmov, Bakı 1181",
  phone: "+994 10 212 91 62",
  phoneHref: "+994102129162",
  email: "info@epcmt.az",
  siteUrl: "https://epcmt.az",
} as const;

export const navigation = [
  { label: "Ana Səhifə", href: "/" },
  { label: "Haqqımızda", href: "/haqqimizda" },
  { label: "Xidmətlər", href: "/xidmetler" },
  { label: "Layihələr", href: "/layiheler" },
  { label: "Qalereya", href: "/qalereya" },
] as const;

export const timeline = [
  {
    year: "2008",
    title: "Sahə təcrübəsinin başlanğıcı",
    body: "Komandanın nüvəsini təşkil edən mütəxəssislər tikinti sektorunda layihə meneceri kimi fəaliyyətə başlayır.",
  },
  {
    year: "2018",
    title: "Likani və Tsagveri layihələri",
    body: "Su təchizatı sistemlərinin bərpası: su anbarlarının tikintisi və transmissiya magistral xətlərinin bərpası.",
  },
  {
    year: "2019—2020",
    title: "Tsnori layihəsi",
    body: "Transmissiya əsas xəttinin tikintisi və xlorinasiya sisteminin quraşdırılması.",
  },
  {
    year: "2021—2023",
    title: "Abşeron EPS layihəsi",
    body: "Erkən hasılat proqramı çərçivəsində brownfield iş həcmləri — estakada üzərində boru xətləri və metal konstruksiya işləri.",
  },
  {
    year: "2023",
    title: "EPCMT-nin yaradılması",
    body: "Sahə təcrübəsi vahid struktur altında birləşdirilir və şirkət təsis olunur.",
  },
] as const;

export const values = [
  {
    index: "01",
    title: "Təhlükəsizlik",
    body: "İnsan həyatı və tikintidə təhlükəsizlik bütün fəaliyyətimizin əsas prioritetidir.",
  },
  {
    index: "02",
    title: "Keyfiyyət",
    body: "Layihələrin texniki tələblərə və müəyyən edilmiş standartlara uyğun icrasına fokuslanırıq.",
  },
  {
    index: "03",
    title: "Proaktiv yanaşma",
    body: "Riskləri əvvəlcədən müəyyən edir və layihə proseslərini qabaqlayıcı şəkildə idarə edirik.",
  },
  {
    index: "04",
    title: "Etimad",
    body: "Müştərilərimiz və tərəfdaşlarımızla uzunmüddətli və şəffaf əməkdaşlıq qururuq.",
  },
] as const;

export const standards = [
  "ANSI",
  "API",
  "BS",
  "DIN",
  "DNV",
  "QOST",
  "AzDTN",
] as const;

export const process = [
  { step: "01", title: "Tələblər", body: "Layihənin əhatə dairəsi, texniki tələblər və məhdudiyyətlər dəqiqləşdirilir." },
  { step: "02", title: "Qiymətləndirmə", body: "Konstruktivlik, xərc smetası və risklər ilkin mərhələdə analiz edilir." },
  { step: "03", title: "Planlaşdırma", body: "Layihə icra planı, cədvəl və resurs bölgüsü hazırlanır." },
  { step: "04", title: "Satınalma", body: "Podrat və material satınalmaları texniki spesifikasiyaya uyğun idarə olunur." },
  { step: "05", title: "İcra", body: "Sahə işləri SƏTƏMM və KT/KN tələbləri çərçivəsində həyata keçirilir." },
  { step: "06", title: "Təhvil", body: "İlkin istismara verilmə, istismara vermə və as-built sənədləşməsi tamamlanır." },
] as const;
