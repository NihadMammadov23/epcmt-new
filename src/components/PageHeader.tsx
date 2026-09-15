import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function PageHeader({
  index,
  label,
  lines,
  intro,
  meta,
}: {
  index: string;
  label: string;
  lines: string[];
  intro?: string;
  meta?: { label: string; value: string }[];
}) {
  return (
    <header className="shell pt-[128px] md:pt-[168px] lg:pt-[196px]">
      <SectionLabel index={index} label={label} />

      <div className="grid12 mt-10 lg:mt-14">
        <h1 className="type-display-sm col-span-12 lg:col-span-8">
          {lines.map((l, i) => (
            <span key={l} className="block overflow-hidden">
              <Reveal as="span" variant="rise" delay={i * 90} className="block">
                {l}
                {i === lines.length - 1 ? <span className="text-accent">.</span> : null}
              </Reveal>
            </span>
          ))}
        </h1>

        {intro && (
          <Reveal
            variant="rise"
            delay={260}
            className="type-lead col-span-12 mt-8 max-w-[52ch] lg:col-span-4 lg:col-start-9 lg:mt-3"
          >
            {intro}
          </Reveal>
        )}
      </div>

      {meta && (
        <div className="mt-14 flex flex-wrap gap-x-16 gap-y-6 border-t border-line pt-7 lg:mt-20">
          {meta.map((m, i) => (
            <Reveal key={m.label} variant="fade" delay={i * 90} className="flex flex-col gap-2">
              <span className="type-mono text-muted">{m.label}</span>
              <span className="text-[15px] tracking-tight">{m.value}</span>
            </Reveal>
          ))}
        </div>
      )}
    </header>
  );
}
