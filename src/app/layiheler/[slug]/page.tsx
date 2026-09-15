import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/Media";
import { ProjectFeature } from "@/components/ProjectFeature";
import { ArrowLink } from "@/components/ArrowLink";
import { projects, getProject, otherProjects } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Layihə tapılmadı" };

  return {
    title: project.title,
    description: project.intro,
    alternates: { canonical: `/layiheler/${project.slug}` },
    openGraph: {
      title: `${project.title} — EPCMT`,
      description: project.intro,
      url: `/layiheler/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = otherProjects(project.slug);

  return (
    <>
      <header className="shell pt-[128px] md:pt-[168px] lg:pt-[196px]">
        <SectionLabel index="03" label="Layihə" />

        <h1 className="type-display mt-10 lg:mt-14">
          {project.titleLines.map((l, i) => (
            <span key={l} className="block overflow-hidden">
              <Reveal as="span" variant="rise" delay={i * 90} className="block">
                {l}
              </Reveal>
            </span>
          ))}
        </h1>

        <div className="mt-14 flex flex-wrap gap-x-16 gap-y-6 border-t border-line pt-7 lg:mt-20">
          <Reveal variant="fade" className="flex flex-col gap-2">
            <span className="type-mono text-muted">Dövr</span>
            <span className="text-[15px] tracking-tight">{project.period}</span>
          </Reveal>
          <Reveal variant="fade" delay={80} className="flex flex-col gap-2">
            <span className="type-mono text-muted">Sahə</span>
            <span className="text-[15px] tracking-tight">{project.sector}</span>
          </Reveal>
          {project.subtitle && (
            <Reveal variant="fade" delay={160} className="flex flex-col gap-2">
              <span className="type-mono text-muted">İş həcmi</span>
              <span className="text-[15px] tracking-tight">{project.subtitle}</span>
            </Reveal>
          )}
        </div>
      </header>

      {/* Full-bleed cover */}
      <section className="mt-14 lg:mt-20">
        <Reveal variant="clip" className="h-[48vh] w-full md:h-[66vh] lg:h-[84vh]">
          <Media
            src={project.cover}
            alt={project.title}
            sizes="100vw"
            priority
            className="h-full w-full"
          />
        </Reveal>
      </section>

      {/* About */}
      <section className="shell pt-20 md:pt-28 lg:pt-36">
        <div className="grid12">
          <Reveal variant="rise" className="col-span-12 lg:col-span-3">
            <span className="type-mono text-muted">Layihə haqqında</span>
          </Reveal>
          <Reveal
            variant="rise"
            delay={120}
            className="col-span-12 mt-6 lg:col-span-7 lg:col-start-5 lg:mt-0"
          >
            <p className="type-statement max-w-[24ch] text-[clamp(1.35rem,2.4vw,2.1rem)]">
              {project.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Scope of works */}
      <section className="shell pt-20 md:pt-28 lg:pt-36">
        <div className="grid12">
          <Reveal variant="rise" className="col-span-12 lg:col-span-3">
            <span className="type-mono text-muted">İcra olunan işlər</span>
          </Reveal>

          <ul className="col-span-12 mt-8 lg:col-span-8 lg:col-start-5 lg:mt-0">
            {project.scope.map((item, i) => (
              <Reveal
                key={item}
                variant="fade"
                delay={i * 90}
                className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-t border-line py-7"
              >
                <span className="type-mono text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[clamp(1.05rem,1.8vw,1.45rem)] leading-snug tracking-[-0.022em]">
                  {item}
                </span>
              </Reveal>
            ))}
            <Reveal variant="line" className="rule" />
          </ul>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="shell pt-20 md:pt-28 lg:pt-36">
          <div className="grid12 gap-y-8">
            {project.gallery.map((src, i) => (
              <Reveal
                key={src}
                variant="clip"
                delay={i * 90}
                className={
                  i === 0
                    ? "col-span-12 lg:col-span-8"
                    : "col-span-12 md:col-span-6 lg:col-span-4"
                }
              >
                <div
                  className={`w-full overflow-hidden ${
                    i === 0 ? "aspect-[3/2]" : "aspect-[4/5]"
                  }`}
                >
                  <Media
                    src={src}
                    alt={`${project.title} — kadr ${i + 1}`}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="h-full w-full"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Related */}
      <section className="shell pt-24 pb-24 md:pt-32 lg:pt-44 lg:pb-36">
        <span className="type-mono text-muted">Digər layihələr</span>
        <div className="mt-14 flex flex-col gap-24 lg:mt-20 lg:gap-32">
          {related.map((p, i) => (
            <ProjectFeature key={p.slug} project={p} reversed={i % 2 === 1} />
          ))}
        </div>

        <Reveal variant="fade" delay={160} className="mt-20">
          <ArrowLink href="/layiheler" tone="muted">
            Bütün layihələr
          </ArrowLink>
        </Reveal>
      </section>
    </>
  );
}
