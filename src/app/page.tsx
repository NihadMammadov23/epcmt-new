import { Hero } from "@/components/Hero";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { ArrowLink } from "@/components/ArrowLink";
import { ServiceList } from "@/components/ServiceList";
import { ProjectFeature } from "@/components/ProjectFeature";
import { ImageBreak } from "@/components/ImageBreak";
import { Process } from "@/components/Process";
import { Standards } from "@/components/Standards";
import { ContactSection } from "@/components/ContactSection";
import { projects } from "@/data/projects";
import { company } from "@/data/company";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 01 — Editorial introduction */}
      <section className="shell pt-28 md:pt-36 lg:pt-48">
        <SectionLabel index="01" label={company.name} />

        <div className="grid12 mt-12 lg:mt-16">
          <h2 className="type-statement col-span-12 lg:col-span-7">
            <span className="block overflow-hidden">
              <Reveal as="span" variant="rise" className="block">
                20 ildən artıq sahə
              </Reveal>
            </span>
            <span className="block overflow-hidden">
              <Reveal as="span" variant="rise" delay={90} className="block">
                təcrübəsini müasir
              </Reveal>
            </span>
            <span className="block overflow-hidden">
              <Reveal as="span" variant="rise" delay={180} className="block">
                mühəndislik yanaşması
              </Reveal>
            </span>
            <span className="block overflow-hidden">
              <Reveal as="span" variant="rise" delay={270} className="block">
                ilə birləşdiririk<span className="text-accent">.</span>
              </Reveal>
            </span>
          </h2>

          <Reveal
            variant="rise"
            delay={280}
            className="col-span-12 mt-10 lg:col-span-4 lg:col-start-9 lg:mt-2"
          >
            <p className="type-body max-w-[46ch]">
              EPCMT 2023-cü ildə tikinti sektorunda 17 ildən artıq peşəkar
              təcrübəyə malik mütəxəssislər tərəfindən yaradılıb. Şirkət
              mühəndislik, tikinti və layihələrin idarə olunması üzrə kompleks
              həllər təqdim edir.
            </p>
            <div className="mt-9">
              <ArrowLink href="/haqqimizda" tone="muted">
                Şirkət haqqında
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience numeral */}
      <section className="shell pt-20 md:pt-28 lg:pt-36">
        <div className="grid12 items-end">
          <Reveal
            variant="clip"
            className="col-span-12 lg:col-span-8 lg:-ml-[2.5vw]"
          >
            <span className="type-numeral block">
              {company.experienceYears}
            </span>
          </Reveal>

          <Reveal
            variant="rise"
            delay={180}
            className="col-span-12 mt-6 lg:col-span-3 lg:col-start-10 lg:mt-0 lg:pb-5"
          >
            <span className="type-mono">İl sahə təcrübəsi</span>
            <p className="type-body mt-5 max-w-[30ch] text-[14px]">
              Komandanın nüvəsi {company.experienceSince}-ci ildən tikinti
              layihələrinin idarə olunması üzrə fəaliyyət göstərir.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="pt-20 md:pt-28 lg:pt-36">
        <ImageBreak
          src="/images/editorial/break-01.jpg"
          alt="Estakada üzərində çəkilmiş boru xətləri"
          caption="Abşeron EPS — estakada üzərində boru xətləri"
        />
      </div>

      {/* 02 — Services */}
      <section className="shell pt-24 md:pt-32 lg:pt-44">
        <div className="grid12 items-end">
          <div className="col-span-12 lg:col-span-6">
            <SectionLabel index="02" label="Xidmətlər" />
            <h2 className="type-statement mt-10">
              <span className="block overflow-hidden">
                <Reveal as="span" variant="rise" className="block">
                  Mühəndislikdən
                </Reveal>
              </span>
              <span className="block overflow-hidden">
                <Reveal as="span" variant="rise" delay={90} className="block">
                  icraya qədər<span className="text-accent">.</span>
                </Reveal>
              </span>
            </h2>
          </div>

          <Reveal
            variant="rise"
            delay={200}
            className="type-body col-span-12 mt-8 max-w-[44ch] lg:col-span-4 lg:col-start-9 lg:mt-0 lg:pb-3"
          >
            Altı əsas istiqamət üzrə xidmət göstəririk. Hər bir istiqamət
            layihənin texniki tələblərinə uyğun formalaşdırılır.
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-24">
          <ServiceList />
        </div>
      </section>

      {/* 03 — Projects */}
      <section className="shell pt-28 md:pt-36 lg:pt-48">
        <div className="grid12 items-end">
          <div className="col-span-12 lg:col-span-6">
            <SectionLabel index="03" label="Layihələr" />
            <h2 className="type-statement mt-10">
              <span className="block overflow-hidden">
                <Reveal as="span" variant="rise" className="block">
                  Seçilmiş işlər
                </Reveal>
              </span>
            </h2>
          </div>
          <Reveal
            variant="fade"
            delay={180}
            className="col-span-12 mt-8 lg:col-span-3 lg:col-start-10 lg:mt-0 lg:pb-3"
          >
            <ArrowLink href="/layiheler" tone="muted">
              Bütün layihələr
            </ArrowLink>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-24 md:gap-32 lg:mt-24 lg:gap-40">
          {projects.map((project, i) => (
            <ProjectFeature
              key={project.slug}
              project={project}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      <div className="pt-28 md:pt-36 lg:pt-48">
        <ImageBreak
          src="/images/editorial/break-02.jpg"
          alt="Sənaye infrastrukturu — metal konstruksiya detalları"
          grayscale
        />
      </div>

      {/* 04 — Process */}
      <section className="shell pt-24 md:pt-32 lg:pt-44">
        <div className="grid12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel index="04" label="Proses" />
            <h2 className="type-statement mt-10">
              <span className="block overflow-hidden">
                <Reveal as="span" variant="rise" className="block">
                  Layihə necə hərəkət edir<span className="text-accent">?</span>
                </Reveal>
              </span>
            </h2>
          </div>
          <Reveal
            variant="rise"
            delay={180}
            className="type-body col-span-12 mt-8 max-w-[42ch] lg:col-span-4 lg:col-start-9 lg:mt-0 lg:pb-3"
          >
            Tələblərin müəyyən edilməsindən təhvilə qədər altı mərhələ — hər
            biri sənədləşdirilmiş və nəzarət edilən proses.
          </Reveal>
        </div>

        <div className="mt-20 lg:mt-28">
          <Process />
        </div>
      </section>

      {/* 05 — Standards */}
      <section className="shell pt-28 md:pt-36 lg:pt-48">
        <div className="grid12 items-end">
          <div className="col-span-12 lg:col-span-6">
            <SectionLabel index="05" label="Texniki yanaşma" />
            <h2 className="type-statement mt-10">
              <span className="block overflow-hidden">
                <Reveal as="span" variant="rise" className="block">
                  Standartlar
                </Reveal>
              </span>
              <span className="block overflow-hidden">
                <Reveal as="span" variant="rise" delay={90} className="block">
                  işin çərçivəsidir<span className="text-accent">.</span>
                </Reveal>
              </span>
            </h2>
          </div>
          <Reveal
            variant="rise"
            delay={200}
            className="type-body col-span-12 mt-8 max-w-[44ch] lg:col-span-4 lg:col-start-9 lg:mt-0 lg:pb-3"
          >
            Beynəlxalq və yerli standartların tələblərini layihənin
            spesifikasına uyğun şəkildə nəzərə alırıq.
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-24">
          <Standards />
        </div>
      </section>

      <ContactSection index="06" />
    </>
  );
}
