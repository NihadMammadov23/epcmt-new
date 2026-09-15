import { values } from "@/data/company";
import { Reveal } from "./Reveal";

export function Values() {
  return (
    <div className="grid12 gap-y-0">
      {values.map((value, i) => (
        <Reveal
          key={value.index}
          variant="fade"
          delay={i * 90}
          className="col-span-12 border-t border-line py-8 md:col-span-6 md:py-10 lg:col-span-3 lg:py-12"
        >
          <span className="type-mono text-accent">{value.index}</span>
          <h3 className="type-mono mt-6 text-ink">{value.title}</h3>
          <p className="type-body mt-4 max-w-[34ch] text-[14px] lg:max-w-none">
            {value.body}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
