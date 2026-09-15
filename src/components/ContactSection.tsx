import { company } from "@/data/company";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function ContactSection({ index = "06" }: { index?: string }) {
  return (
    <section id="elaqe" className="shell pt-24 pb-24 md:pt-36 lg:pt-44 lg:pb-32">
      <SectionLabel index={index} label="Əlaqə" />

      <div className="grid12 mt-12 lg:mt-16">
        <div className="col-span-12 lg:col-span-6">
          <h2 className="type-statement">
            <span className="block overflow-hidden">
              <Reveal as="span" variant="rise" className="block">
                Yeni layihəniz
              </Reveal>
            </span>
            <span className="block overflow-hidden">
              <Reveal as="span" variant="rise" delay={90} className="block">
                buradan başlayır<span className="text-accent">.</span>
              </Reveal>
            </span>
          </h2>

          <Reveal variant="rise" delay={180} className="type-body mt-8 max-w-[46ch]">
            Layihənizin əhatə dairəsini, texniki tələblərini və icra imkanlarını
            müzakirə etmək üçün bizimlə əlaqə saxlayın.
          </Reveal>

          <div className="mt-14 flex flex-col gap-8 lg:mt-20">
            <Reveal variant="fade" delay={220}>
              <span className="type-mono text-muted">Telefon</span>
              <a
                href={`tel:${company.phoneHref}`}
                className="mt-3 block text-[clamp(1.35rem,2.6vw,2.1rem)] leading-none font-medium tracking-[-0.03em] transition-colors duration-300 hover:text-accent"
              >
                {company.phone}
              </a>
            </Reveal>

            <Reveal variant="fade" delay={280}>
              <span className="type-mono text-muted">Email</span>
              <a
                href={`mailto:${company.email}`}
                className="mt-3 block text-[clamp(1.35rem,2.6vw,2.1rem)] leading-none font-medium tracking-[-0.03em] transition-colors duration-300 hover:text-accent"
              >
                {company.email}
              </a>
            </Reveal>

            <Reveal variant="fade" delay={340}>
              <span className="type-mono text-muted">Ünvan</span>
              <p className="mt-3 text-[clamp(1.05rem,1.6vw,1.3rem)] leading-snug tracking-[-0.02em]">
                {company.address}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal
          variant="fade"
          delay={260}
          className="col-span-12 mt-16 lg:col-span-5 lg:col-start-8 lg:mt-3"
        >
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
