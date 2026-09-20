import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";
import { ArrowLink } from "@/components/ArrowLink";
import { certifications, licenses, type Credential } from "@/data/certifications";

export const metadata: Metadata = {
    title: "Sertifikatlar və Lisenziyalar",
    description:
        "EPCMT-nin fəaliyyətini təsdiqləyən sertifikatlar və lisenziyalar.",
    alternates: { canonical: "/sertifikatlar" },
    openGraph: {
        title: "Sertifikatlar və Lisenziyalar — EPCMT",
        description: "EPCMT-nin fəaliyyətini təsdiqləyən sertifikatlar və lisenziyalar.",
        url: "/sertifikatlar",
    },
};

function CredentialList({ items }: { items: Credential[] }) {
    if (items.length === 0) {
        return (
            <Reveal variant="fade" className="border-t border-line py-10">
                <span className="type-mono text-muted">Məlumat tezliklə əlavə olunacaq</span>
            </Reveal>
        );
    }

    return (
        <ul>
            {items.map((item, i) => (
                <Reveal
                    key={item.name}
                    variant="fade"
                    delay={i * 70}
                    className="grid grid-cols-[3rem_1fr] items-baseline gap-x-4 gap-y-2 border-t border-line py-7 md:grid-cols-[3rem_1fr_auto]"
                >
                    <span className="type-mono text-muted">
                        {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                        <span className="block text-[clamp(1.05rem,1.7vw,1.35rem)] leading-snug tracking-[-0.02em]">
                            {item.name}
                        </span>
                        <span className="type-mono mt-2 block text-muted">{item.issuer}</span>
                    </div>
                    {(item.number || item.issued || item.expires) && (
                        <div className="col-span-2 flex flex-wrap gap-x-6 gap-y-1 md:col-span-1 md:flex-col md:items-end md:text-right">
                            {item.number && <span className="type-mono text-muted">№ {item.number}</span>}
                            {item.issued && <span className="type-mono text-muted">{item.issued}</span>}
                            {item.expires && <span className="type-mono text-muted">{item.expires} qədər</span>}
                        </div>
                    )}
                </Reveal>
            ))}
            <Reveal variant="line" className="rule" />
        </ul>
    );
}

export default function CertificationsPage() {
    return (
        <>
            <PageHeader
                index="07"
                label="Sertifikatlar"
                lines={["Sertifikatlar və", "lisenziyalar"]}
                intro="Fəaliyyətimizi təsdiqləyən sənədlər və icazələr."
            />

            <section className="shell pt-20 md:pt-28 lg:pt-36">
                <SectionLabel index="07.1" label="Sertifikatlar" />
                <div className="mt-10 lg:mt-14">
                    <CredentialList items={certifications} />
                </div>
            </section>

            <section className="shell pt-20 pb-24 md:pt-28 lg:pt-36 lg:pb-36">
                <SectionLabel index="07.2" label="Lisenziyalar" />
                <div className="mt-10 lg:mt-14">
                    <CredentialList items={licenses} />
                </div>

                <Reveal variant="fade" delay={160} className="mt-16">
                    <ArrowLink href="/elaqe" tone="muted">
                        Bizimlə əlaqə
                    </ArrowLink>
                </Reveal>
            </section>
        </>
    );
}