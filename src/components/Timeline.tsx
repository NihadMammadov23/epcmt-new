import { timeline } from "@/data/company";
import { Reveal } from "./Reveal";

export function Timeline() {
  return (
    <div>
      {timeline.map((entry, i) => (
        <Reveal
          key={entry.year}
          variant="fade"
          delay={i * 80}
          className="grid12 items-baseline border-t border-line py-9 md:py-12 lg:py-14"
        >
          <span className="col-span-12 text-[clamp(2.25rem,6vw,4.75rem)] leading-[0.9] font-medium tracking-[-0.045em] lg:col-span-5">
            {entry.year}
          </span>
          <div className="col-span-12 mt-4 lg:col-span-6 lg:col-start-7 lg:mt-0">
            <h3 className="text-[clamp(1.05rem,1.5vw,1.35rem)] leading-snug font-medium tracking-[-0.02em]">
              {entry.title}
            </h3>
            <p className="type-body mt-3 max-w-[52ch]">{entry.body}</p>
          </div>
        </Reveal>
      ))}
      <Reveal variant="line" className="rule" />
    </div>
  );
}
