import { process } from "@/data/company";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <div>
      {/* Desktop: single thin line drawn across all six steps */}
      <div className="hidden lg:block">
        <div className="relative">
          <Reveal
            variant="line"
            className="absolute top-[7px] right-0 left-0 h-px bg-line"
          />
          <div className="grid grid-cols-6 gap-x-8">
            {process.map((item, i) => (
              <Reveal
                key={item.step}
                variant="fade"
                delay={200 + i * 130}
                className="relative pt-0"
              >
                <span
                  aria-hidden
                  className="block h-[15px] w-[15px] border border-ink bg-paper"
                />
                <span className="type-mono mt-7 block text-accent">{item.step}</span>
                <h3 className="type-mono mt-3 text-ink">{item.title}</h3>
                <p className="type-body mt-4 max-w-[26ch] text-[13.5px]">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / tablet: vertical rail */}
      <div className="relative lg:hidden">
        <Reveal
          variant="fade"
          className="absolute top-2 bottom-2 left-[7px] w-px bg-line"
        />
        <div className="flex flex-col gap-9">
          {process.map((item, i) => (
            <Reveal
              key={item.step}
              variant="fade"
              delay={i * 90}
              className="relative flex gap-6 pl-0"
            >
              <span
                aria-hidden
                className="mt-1 block h-[15px] w-[15px] shrink-0 border border-ink bg-paper"
              />
              <div>
                <span className="type-mono text-accent">{item.step}</span>
                <h3 className="type-mono mt-2.5 text-ink">{item.title}</h3>
                <p className="type-body mt-3 max-w-[40ch] text-[14px]">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
