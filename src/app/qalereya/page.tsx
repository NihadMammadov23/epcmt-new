import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Qalereya",
  description: "EPCMT layihələrindən sahə kadrları və mühəndislik detalları.",
  alternates: { canonical: "/qalereya" },
  openGraph: {
    title: "Qalereya — EPCMT",
    description: "Layihələrdən sahə kadrları.",
    url: "/qalereya",
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        index="04"
        label="Qalereya"
        lines={["Layihələrdən", "kadrlar"]}
        intro="Sahə işləri, konstruksiya detalları və infrastruktur görüntüləri."
      />

      <section className="shell pt-20 pb-24 md:pt-28 lg:pt-36 lg:pb-36">
        <GalleryGrid />
      </section>
    </>
  );
}
