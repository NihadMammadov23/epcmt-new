import Link from "next/link";
import { company, navigation } from "@/data/company";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="shell pt-16 pb-10 lg:pt-20">
        <div className="grid12 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <Reveal variant="fade" className="type-mono">
              {company.name}
            </Reveal>
            <Reveal variant="rise" delay={80} className="type-body mt-5 max-w-[38ch]">
              Mühəndislik, tikinti və layihələrin idarə olunması üzrə kompleks
              həllər.
            </Reveal>
          </div>

          <div className="col-span-6 lg:col-span-3 lg:col-start-7">
            <span className="type-mono text-muted">Şirkət</span>
            <ul className="mt-6 flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] tracking-tight text-muted transition-colors duration-300 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/elaqe"
                  className="text-[14px] tracking-tight text-muted transition-colors duration-300 hover:text-ink"
                >
                  Əlaqə
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-3 lg:col-start-10">
            <span className="type-mono text-muted">Əlaqə</span>
            <ul className="mt-6 flex flex-col gap-3 text-[14px] tracking-tight text-muted">
              <li>
                <a href={`tel:${company.phoneHref}`} className="transition-colors duration-300 hover:text-ink">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors duration-300 hover:text-ink">
                  {company.email}
                </a>
              </li>
              <li className="max-w-[24ch] leading-relaxed">{company.address}</li>
            </ul>
          </div>
        </div>

        {/* Oversized wordmark */}
        <Reveal
          variant="clip"
          className="mt-20 hidden w-full select-none md:block"
        >
          <span
            aria-hidden
            className="block w-full text-center text-[clamp(5rem,19.5vw,17rem)] leading-[0.8] font-medium tracking-[-0.055em] text-ink"
          >
            {company.name}
          </span>
        </Reveal>
        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-7 md:flex-row md:items-center md:justify-between">
          <span className="type-mono text-muted">© 2026 {company.name}</span>

          <span className="type-mono flex items-center gap-2 text-muted">
            <a
              href="https://penne.media"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink transition-colors duration-300 hover:text-accent"
            ><img
                src="/penne.png"
                alt=""
                width={25}
                height={20}
                className="h-16 w-12 shrink-0"
              /></a>
            <a
              href="https://penne.media"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink transition-colors duration-300 hover:text-accent"
            >
              Penne Media
            </a>
            tərəfindən hazırlandı.
          </span>

          <span className="type-mono text-muted">{company.descriptor}</span>
        </div>

      </div>
    </footer >
  );
}
