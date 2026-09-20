import { Media } from "./Media";
import { Reveal } from "./Reveal";
import { ArrowLink } from "./ArrowLink";
import { company } from "@/data/company";

const line = (text: string, delay: number, accentDot = false) => (
  <span className="block overflow-hidden">
    <Reveal as="span" variant="rise" delay={delay} className="block">
      {text}
      {accentDot ? <span className="text-accent">.</span> : null}
    </Reveal>
  </span>
);

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-16 lg:min-h-[100svh] lg:pb-0">
      {/* Bleeding architectural image — desktop */}
      <Reveal
        variant="clip"
        delay={260}
        className="absolute top-[22vh] right-0 bottom-0 hidden w-[44vw] lg:block xl:w-[46vw]"
      >
        <Media
          src="/images/editorial/hero.jpg"
          alt="EPCMT layihələrindən sənaye infrastrukturu görüntüsü"
          priority
          sizes="46vw"
          className="h-full w-full"
        />
      </Reveal>

      <div className="shell relative pt-[112px] md:pt-[140px] lg:pt-[164px]">
        {/* Technical meta strip */}
        <Reveal variant="fade" className="flex items-start justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="type-mono">{company.name}</span>
            <span className="type-mono text-muted">
              ENGINEERING / CONSTRUCTION / MANAGEMENT
            </span>
          </div>
          <div className="flex flex-col items-end gap-2 text-right">
            <span className="type-mono text-muted">{company.country}</span>
            <span className="type-mono text-muted">
              Est. {company.founded} <span className="text-accent">&rarr;</span>
            </span>
          </div>
        </Reveal>

        <Reveal variant="line" delay={120} className="rule mt-5" />

        {/* Headline block — constrained so it never collides with the image */}
        <div className="mt-14 md:mt-20 lg:mt-24 lg:w-[46%] xl:w-[44%] lg:pr-8">
          <h1 className="type-display">
            {line("Kompleks", 180)}
            {line("layihələr.", 260)}
            {line("Dəqiq icra", 340, true)}
          </h1>

          <Reveal
            variant="rise"
            delay={480}
            className="type-lead mt-9 max-w-[46ch] lg:mt-11"
          >
            EPCMT mühəndislik, tikinti və layihələrin idarə olunması üzrə texniki
            təcrübəni vahid yanaşma ilə birləşdirir.
          </Reveal>

          <Reveal
            variant="rise"
            delay={580}
            className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5 lg:mt-12"
          >
            <ArrowLink href="/layiheler">Layihələrə baxın</ArrowLink>
            <ArrowLink href="/elaqe" tone="muted">
              Bizimlə əlaqə
            </ArrowLink>
          </Reveal>
        </div>

        {/* Mobile / tablet image */}
        <Reveal
          variant="clip"
          delay={220}
          className="mt-14 -mr-5 aspect-[5/4] md:-mr-10 md:aspect-[16/10] lg:hidden"
        >
          <Media
            src="/images/editorial/hero.jpg"
            alt="EPCMT layihələrindən sənaye infrastrukturu görüntüsü"
            priority
            sizes="100vw"
            className="h-full w-full"
          />
        </Reveal>

        {/* Scroll marker */}
        <div className="mt-14 hidden items-end justify-between lg:flex lg:pb-14">
          <Reveal variant="fade" delay={700} className="flex items-center gap-4">
            <span className="type-mono text-muted">Scroll</span>
            <span aria-hidden className="relative block h-8 w-px bg-line">
              <span className="absolute inset-x-0 top-0 h-3 bg-ink" />
            </span>
            <span className="type-mono text-muted">01</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
