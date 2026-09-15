import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Əlaqə",
  description:
    "Layihənizin əhatə dairəsini və texniki tələblərini müzakirə etmək üçün EPCMT ilə əlaqə saxlayın.",
  alternates: { canonical: "/elaqe" },
  openGraph: {
    title: "Əlaqə — EPCMT",
    description: "Layihənizi müzakirə etmək üçün bizimlə əlaqə saxlayın.",
    url: "/elaqe",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-[72px] md:pt-[88px]">
      <ContactSection index="05" />
    </div>
  );
}
