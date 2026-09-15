import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { Timeline } from "@/components/Timeline";
import { Values } from "@/components/Values";
import { ImageBreak } from "@/components/ImageBreak";
import { ArrowLink } from "@/components/ArrowLink";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Haqqımızda",
  description:
    "EPCMT 2023-cü ildə tikinti sektorunda 17 ildən artıq təcrübəyə malik mütəxəssislər tərəfindən yaradılıb. Şirkətin tarixçəsi, dəyərləri və yanaşması.",
  alternates: { canonical: "/haqqimizda" },
  openGraph: {
    title: "Haqqımızda — EPCMT",
    description:
      "Şirkətin tarixçəsi, sahə təcrübəsi və mühəndislik yanaşması.",
    url: "/haqqimizda",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="01"
        label="Haqqımızda"
        lines={["Bir şirkət.", "Kompleks layihələr"]}
        intro="17 ildən artıq sahə təcrübəsi 2008-ci ildən formalaşıb, 2023-cü ildə isə vahid struktur altında birləşdirilib."
        meta={[
          { label: "Təsis", value: String(company.founded) },
          { label: "Sahə təcrübəsi", value: `${company.experienceYears} il` },
          { label: "Ölkə", value: company.country },
        ]}
      />

      {/* Story */}
      <section className="shell pt-24 md:pt-32 lg:pt-40">
        <div className="grid12">
          <div className="col-span-12 lg:col-span-5">
            <Reveal variant="rise" className="type-title">
              Hekayəmiz
            </Reveal>
          </div>

          <div className="col-span-12 mt-8 flex flex-col gap-6 lg:col-span-6 lg:col-start-7 lg:mt-1">
            <Reveal variant="rise" className="type-lead max-w-[54ch]">
              Tikinti sektorunda layihə meneceri kimi 17 ildən artıq fəaliyyət
              göstərmişik. Bu müddət ərzində bir çox əhəmiyyətli tikinti
              layihəsini icra etmişik.
            </Reveal>
            <Reveal variant="rise" delay={120} className="type-body max-w-[58ch]">
              Ayrı-ayrı layihələrdə çalışdıq, uzun illər ərzində aparıcı
              şirkətlərdə təcrübə qazanmış və yüksək elmi-texniki potensiala
              malik mütəxəssisləri cəlb etdik. 2023-cü ildə EPCMT-ni təsis
              etməklə bu təcrübəni bir araya gətirdik.
            </Reveal>
            <Reveal variant="rise" delay={200} className="type-body max-w-[58ch]">
              Bu gün şirkət mühəndislik, tikinti və layihələrin idarə olunması
              üzrə kompleks həllər təqdim edir — layihənin ilkin tələblərinin
              müəyyən edilməsindən istismara verilməsinə qədər.
            </Reveal>
          </div>
        </div>
      </section>

      <div className="pt-24 md:pt-32 lg:pt-40">
        <ImageBreak
          src="/images/editorial/about.jpg"
          alt="Sənaye sahəsində tikinti işləri"
        />
      </div>

      {/* Timeline */}
      <section className="shell pt-24 md:pt-32 lg:pt-44">
        <div className="grid12 items-end">
          <div className="col-span-12 lg:col-span-6">
            <SectionLabel index="02" label="Xronologiya" />
            <h2 className="type-statement mt-10">
              <span className="block overflow-hidden">
                <Reveal as="span" variant="rise" className="block">
                  Təcrübənin xətti<span className="text-accent">.</span>
                </Reveal>
              </span>
            </h2>
          </div>
          <Reveal
            variant="rise"
            delay={180}
            className="type-body col-span-12 mt-8 max-w-[42ch] lg:col-span-4 lg:col-start-9 lg:mt-0 lg:pb-3"
          >
            Sahə təcrübəsinin başlanğıcından şirkətin təsisinə qədər olan əsas
            mərhələlər.
          </Reveal>
        </div>

        <div className="mt-14 lg:mt-20">
          <Timeline />
        </div>
      </section>

      {/* Values */}
      <section className="shell pt-24 md:pt-32 lg:pt-44">
        <div className="grid12 items-end">
          <div className="col-span-12 lg:col-span-6">
            <SectionLabel index="03" label="Prinsiplər" />
            <h2 className="type-statement mt-10">
              <span className="block overflow-hidden">
                <Reveal as="span" variant="rise" className="block">
                  Nə üzərində
                </Reveal>
              </span>
              <span className="block overflow-hidden">
                <Reveal as="span" variant="rise" delay={90} className="block">
                  dayanırıq<span className="text-accent">.</span>
                </Reveal>
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <Values />
        </div>
      </section>

      {/* Closing */}
      <section className="shell pt-24 pb-24 md:pt-32 lg:pt-44 lg:pb-36">
        <div className="grid12">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="type-statement">
              <span className="block overflow-hidden">
                <Reveal as="span" variant="rise" className="block">
                  Layihənizi müzakirə edək<span className="text-accent">.</span>
                </Reveal>
              </span>
            </h2>
            <Reveal variant="fade" delay={160} className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
              <ArrowLink href="/layiheler">Layihələrə baxın</ArrowLink>
              <ArrowLink href="/elaqe" tone="muted">
                Bizimlə əlaqə
              </ArrowLink>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
