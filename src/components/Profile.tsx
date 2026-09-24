import { profile } from "@/data/company";
import { Reveal } from "./Reveal";

/** The company name is literally an acronym of these five service lines. */
export function Profile() {
  return (
    <div className="grid12 gap-y-10">
      {profile.map((item, i) => (
        <Reveal
          key={item.letter}
          variant="fade"
          delay={i * 80}
          className="col-span-6 border-t border-line pt-6 md:col-span-4 lg:col-span-2 lg:pt-8"
        >
          <span className="block text-[clamp(2.75rem,5vw,4rem)] leading-none font-medium tracking-[-0.03em] text-accent">
            {item.letter}
          </span>
          <span className="type-mono mt-5 block text-ink">{item.en}</span>
          <span className="type-body mt-2 block text-[13.5px]">{item.az}</span>
        </Reveal>
      ))}
    </div>
  );
}
