export type GalleryItem = {
  src: string;
  caption: string;
  /** Aspect ratio drives the asymmetric editorial grid. */
  ratio: "portrait" | "landscape" | "square" | "wide";
  /** Column span on the 12-col desktop grid. */
  span: 4 | 5 | 6 | 7 | 8;
  /** Optional vertical offset (in rem) to break the baseline. */
  offset?: number;
};

export const galleryItems: GalleryItem[] = [
  { src: "/images/gallery/01.jpg", caption: "Estakada üzərində boru xətləri", ratio: "landscape", span: 7 },
  { src: "/images/gallery/02.jpg", caption: "Metal konstruksiya quraşdırılması", ratio: "portrait", span: 4, offset: 6 },
  { src: "/images/gallery/03.jpg", caption: "Sahə işləri", ratio: "portrait", span: 5 },
  { src: "/images/gallery/04.jpg", caption: "Transmissiya xətti", ratio: "landscape", span: 6, offset: 4 },
  { src: "/images/gallery/05.jpg", caption: "Su anbarı tikintisi", ratio: "square", span: 5 },
  { src: "/images/gallery/06.jpg", caption: "Boru birləşmələri", ratio: "landscape", span: 7, offset: 3 },
  { src: "/images/gallery/07.jpg", caption: "Korroziyadan mühafizə işləri", ratio: "portrait", span: 4 },
  { src: "/images/gallery/08.jpg", caption: "Rezervuar montajı", ratio: "wide", span: 8, offset: 5 },
  { src: "/images/gallery/09.jpg", caption: "Beton işləri", ratio: "square", span: 4 },
  { src: "/images/gallery/10.jpg", caption: "Sahə infrastrukturu", ratio: "landscape", span: 6 },
];

export const ratioClass: Record<GalleryItem["ratio"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};
