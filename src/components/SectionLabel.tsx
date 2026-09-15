import { Reveal } from "./Reveal";

export function SectionLabel({
  index,
  label,
  className = "",
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <Reveal variant="fade" className={`flex items-center gap-3 ${className}`}>
      <span className="type-mono text-accent">{index}</span>
      <span aria-hidden className="h-px w-6 bg-line" />
      <span className="type-mono text-muted">{label}</span>
    </Reveal>
  );
}
