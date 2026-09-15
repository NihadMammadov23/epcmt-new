import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { ServiceList } from "@/components/ServiceList";
import { Process } from "@/components/Process";
import { ImageBreak } from "@/components/ImageBreak";
import { ArrowLink } from "@/components/ArrowLink";

export const metadata: Metadata = {
  title: "Xidmətlər",
  description:
    "Layihələrin idarə olunması, tikinti üzrə məsləhət, satınalma, mühəndislik və layihələndirmə, tikinti icrası üzrə xidmətlər.",
  alternates: { canonical: "/xidmetler" },
  openGraph: {
    title: "Xidmətlər — EPCMT",
    description:
      "Altı əsas istiqamət üzrə mühəndislik, tikinti və idarəetmə xidmətləri.",
    url: "/xidmetler",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        index="02"
        label="Xidmətlər"
        lines={["Mühəndislikdən", "icraya qədər"]}
        intro="Altı əsas istiqamət. Hər biri layihənin texniki tələblərinə uyğun formalaşdırılır."
      />

      <section className="shell pt-20 md:pt-28 lg:pt-36">
        <ServiceList />
      </section>

      <div className="pt-24 md:pt-32 lg:pt-44">
        <ImageBreak
          src="/images/editorial/services.jpg"
          alt="Mühəndislik və tikinti sahəsindən görüntü"
          grayscale
        />
      </div>

      <section className="shell pt-24 md:pt-32 lg:pt-44">
        <div className="grid12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel index="02.1" label="Proses" />
            <h2 className="type-statement mt-10">
              <span className="block overflow-hidden">
                <Reveal as="span" variant="rise" className="block">
                  Layihə necə hərəkət edir<span className="text-accent">?</span>
                </Reveal>
              </span>
            </h2>
          </div>
        </div>
        <div className="mt-20 lg:mt-28">
          <Process />
        </div>
      </section>

      <section className="shell pt-24 pb-24 md:pt-32 lg:pt-44 lg:pb-36">
        <h2 className="type-statement max-w-[18ch]">
          <span className="block overflow-hidden">
            <Reveal as="span" variant="rise" className="block">
              Tələblərinizi göndərin<span className="text-accent">.</span>
            </Reveal>
          </span>
        </h2>
        <Reveal variant="fade" delay={140} className="mt-10">
          <ArrowLink href="/elaqe">Bizimlə əlaqə</ArrowLink>
        </Reveal>
      </section>
    </>
  );
}
