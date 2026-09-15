import { ArrowLink } from "@/components/ArrowLink";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70svh] flex-col justify-center pt-[140px] pb-24">
      <span className="type-mono text-accent">404</span>
      <h1 className="type-display mt-8 max-w-[14ch]">
        Səhifə tapılmadı<span className="text-accent">.</span>
      </h1>
      <p className="type-body mt-8 max-w-[44ch]">
        Axtardığınız səhifə mövcud deyil və ya ünvanı dəyişdirilib.
      </p>
      <div className="mt-10">
        <ArrowLink href="/">Ana səhifəyə qayıt</ArrowLink>
      </div>
    </section>
  );
}
