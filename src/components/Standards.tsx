import { standards } from "@/data/company";
import { Reveal } from "./Reveal";

export function Standards() {
  return (
    <div>
      <Reveal variant="line" className="rule" />
      <div className="flex flex-wrap items-baseline gap-x-12 gap-y-5 py-8 md:gap-x-16 lg:gap-x-20 lg:py-10">
        {standards.map((standard, i) => (
          <Reveal
            key={standard}
            variant="rise"
            delay={i * 80}
            className="text-[clamp(1.5rem,3.4vw,2.75rem)] leading-none font-medium tracking-[-0.03em] transition-colors duration-500 hover:text-accent"
          >
            {standard}
          </Reveal>
        ))}
      </div>
      <Reveal variant="line" delay={200} className="rule" />
    </div>
  );
}
