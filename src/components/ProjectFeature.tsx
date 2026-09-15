import Link from "next/link";
import type { Project } from "@/data/projects";
import { Media } from "./Media";
import { Reveal } from "./Reveal";

export function ProjectFeature({
  project,
  reversed = false,
}: {
  project: Project;
  reversed?: boolean;
}) {
  return (
    <article className="grid12 items-start">
      {/* Image */}
      <Reveal
        variant="clip"
        className={`col-span-12 ${
          reversed
            ? "lg:col-span-7 lg:col-start-6"
            : "lg:col-span-7 lg:col-start-1"
        }`}
      >
        <Link href={`/layiheler/${project.slug}`} className="group block">
          <div className="aspect-[4/3] w-full overflow-hidden md:aspect-[3/2]">
            <Media
              src={project.cover}
              alt={project.title}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="h-full w-full"
              imgClassName="transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          </div>
        </Link>
      </Reveal>

      {/* Metadata */}
      <div
        className={`col-span-12 mt-7 lg:mt-0 ${
          reversed
            ? "lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:pt-6"
            : "lg:col-span-4 lg:col-start-9 lg:pt-6"
        }`}
      >
        <Link href={`/layiheler/${project.slug}`} className="group block">
          <Reveal variant="fade" className="flex items-center gap-4">
            <span className="type-mono text-muted">{project.period}</span>
            <span aria-hidden className="h-px w-5 bg-line" />
            <span className="type-mono text-accent">{project.sector}</span>
          </Reveal>

          <Reveal variant="rise" delay={90} className="type-title mt-5">
            {project.titleLines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </Reveal>

          {project.subtitle && (
            <Reveal variant="rise" delay={140} className="type-body mt-4">
              {project.subtitle}
            </Reveal>
          )}

          <Reveal
            variant="fade"
            delay={200}
            className="arrow-link mt-8 border-b border-line pb-1.5 transition-colors duration-300 group-hover:border-ink"
          >
            <span>Layihəyə bax</span>
            <span className="arrow" aria-hidden>
              &rarr;
            </span>
          </Reveal>
        </Link>
      </div>
    </article>
  );
}
