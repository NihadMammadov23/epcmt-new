import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectFeature } from "@/components/ProjectFeature";
import { Reveal } from "@/components/Reveal";
import { ArrowLink } from "@/components/ArrowLink";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Layihələr",
  description:
    "EPCMT komandasının icra etdiyi neft-qaz və su infrastrukturu layihələri.",
  alternates: { canonical: "/layiheler" },
  openGraph: {
    title: "Layihələr — EPCMT",
    description: "Seçilmiş neft-qaz və su infrastrukturu layihələri.",
    url: "/layiheler",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        index="03"
        label="Layihələr"
        lines={["Seçilmiş işlər"]}
        intro="Neft-qaz və su infrastrukturu sahəsində icra olunmuş layihələr."
      />

      <section className="shell pt-20 md:pt-28 lg:pt-36">
        <div className="flex flex-col gap-24 md:gap-32 lg:gap-44">
          {projects.map((project, i) => (
            <ProjectFeature
              key={project.slug}
              project={project}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className="shell pt-24 pb-24 md:pt-32 lg:pt-44 lg:pb-36">
        <h2 className="type-statement max-w-[20ch]">
          <span className="block overflow-hidden">
            <Reveal as="span" variant="rise" className="block">
              Növbəti layihə sizin ola bilər<span className="text-accent">.</span>
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
