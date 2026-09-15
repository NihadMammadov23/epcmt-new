import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/Media";
import { ArrowLink } from "@/components/ArrowLink";
import { services, getService } from "@/data/services";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Xidmət tapılmadı" };

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/xidmetler/${service.slug}` },
    openGraph: {
      title: `${service.title} — EPCMT`,
      description: service.summary,
      url: `/xidmetler/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <header className="shell pt-[128px] md:pt-[168px] lg:pt-[196px]">
        <SectionLabel index={service.index} label="Xidmət" />

        <div className="grid12 mt-10 lg:mt-14">
          <h1 className="type-display-sm col-span-12 lg:col-span-8">
            <span className="block overflow-hidden">
              <Reveal as="span" variant="rise" className="block">
                {service.title}
              </Reveal>
            </span>
          </h1>
          <Reveal
            variant="rise"
            delay={200}
            className="type-lead col-span-12 mt-8 max-w-[48ch] lg:col-span-4 lg:col-start-9 lg:mt-3"
          >
            {service.summary}
          </Reveal>
        </div>
      </header>

      <section className="shell pt-16 md:pt-20 lg:pt-24">
        <Reveal variant="clip" className="aspect-[16/9] w-full lg:aspect-[21/9]">
          <Media
            src={service.image}
            alt={service.title}
            sizes="100vw"
            className="h-full w-full"
          />
        </Reveal>
      </section>

      {/* Scope */}
      <section className="shell pt-20 md:pt-28 lg:pt-36">
        <div className="grid12">
          <Reveal variant="rise" className="col-span-12 lg:col-span-3">
            <span className="type-mono text-muted">Əhatə dairəsi</span>
          </Reveal>

          <ul className="col-span-12 mt-8 lg:col-span-8 lg:col-start-5 lg:mt-0">
            {service.items.map((item, i) => (
              <Reveal
                key={item}
                variant="fade"
                delay={i * 60}
                className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-t border-line py-5"
              >
                <span className="type-mono text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[clamp(1rem,1.5vw,1.25rem)] leading-snug tracking-[-0.02em]">
                  {item}
                </span>
              </Reveal>
            ))}
            <Reveal variant="line" className="rule" />
          </ul>
        </div>
      </section>

      {/* Other services */}
      <section className="shell pt-24 pb-24 md:pt-32 lg:pt-44 lg:pb-36">
        <span className="type-mono text-muted">Digər xidmətlər</span>
        <div className="mt-10">
          {others.map((other, i) => (
            <Reveal key={other.slug} variant="fade" delay={i * 60}>
              <Link
                href={`/xidmetler/${other.slug}`}
                className="group flex items-baseline justify-between gap-6 border-t border-line py-6"
              >
                <span className="flex items-baseline gap-5">
                  <span className="type-mono text-muted">{other.index}</span>
                  <span className="text-[clamp(1.05rem,1.9vw,1.6rem)] leading-tight font-medium tracking-[-0.025em] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3">
                    {other.title}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="shrink-0 text-muted transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:text-accent"
                >
                  &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
          <Reveal variant="line" className="rule" />
        </div>

        <Reveal variant="fade" delay={200} className="mt-16">
          <ArrowLink href="/elaqe">Bu xidmət üzrə əlaqə</ArrowLink>
        </Reveal>
      </section>
    </>
  );
}
