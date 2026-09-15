import { Media } from "./Media";
import { Reveal } from "./Reveal";

/** Full-bleed breathing image between major sections. No text, no overlay. */
export function ImageBreak({
  src,
  alt,
  caption,
  grayscale = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  grayscale?: boolean;
}) {
  return (
    <section className="w-full">
      <Reveal variant="clip" className="h-[52vh] w-full md:h-[70vh] lg:h-[86vh]">
        <Media
          src={src}
          alt={alt}
          sizes="100vw"
          grayscale={grayscale}
          className="h-full w-full"
        />
      </Reveal>
      {caption && (
        <div className="shell">
          <Reveal variant="fade" className="type-mono mt-4 text-muted">
            {caption}
          </Reveal>
        </div>
      )}
    </section>
  );
}
