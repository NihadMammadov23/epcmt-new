"use client";

import { useState } from "react";
import { ArrowButton } from "./ArrowLink";
import { company } from "@/data/company";

const fields = [
  { name: "name", label: "Ad və soyad", type: "text", required: true, half: true },
  { name: "company", label: "Şirkət", type: "text", required: false, half: true },
  { name: "email", label: "Email", type: "email", required: true, half: true },
  { name: "phone", label: "Telefon", type: "tel", required: false, half: true },
  { name: "subject", label: "Mövzu", type: "text", required: true, half: false },
] as const;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    // No backend is configured yet — hand the message to the mail client
    // rather than pretending it was delivered.
    if (!endpoint) {
      const body = [
        `Ad və soyad: ${data.name ?? ""}`,
        `Şirkət: ${data.company ?? ""}`,
        `Email: ${data.email ?? ""}`,
        `Telefon: ${data.phone ?? ""}`,
        "",
        data.message ?? "",
      ].join("\n");
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
        data.subject ?? "Müraciət",
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-8 gap-y-9">
      {fields.map((field) => (
        <label
          key={field.name}
          className={`group flex flex-col gap-3 ${field.half ? "col-span-2 sm:col-span-1" : "col-span-2"}`}
        >
          <span className="type-mono text-muted">
            {field.label}
            {field.required && <span className="text-accent"> *</span>}
          </span>
          <input
            name={field.name}
            type={field.type}
            required={field.required}
            className="border-b border-line bg-transparent pb-3 text-[15px] tracking-tight outline-none transition-colors duration-300 focus:border-ink"
          />
        </label>
      ))}

      <label className="col-span-2 flex flex-col gap-3">
        <span className="type-mono text-muted">
          Mesaj<span className="text-accent"> *</span>
        </span>
        <textarea
          name="message"
          required
          rows={4}
          className="resize-none border-b border-line bg-transparent pb-3 text-[15px] leading-relaxed tracking-tight outline-none transition-colors duration-300 focus:border-ink"
        />
      </label>

      <div className="col-span-2 mt-2 flex flex-wrap items-center gap-6">
        <ArrowButton disabled={status === "sending"}>
          {status === "sending" ? "Göndərilir" : "Müraciəti göndər"}
        </ArrowButton>

        {status === "sent" && (
          <span className="type-mono text-accent">Müraciətiniz göndərildi</span>
        )}
        {status === "error" && (
          <span className="type-mono text-accent">
            Xəta baş verdi — {company.email}
          </span>
        )}
      </div>
    </form>
  );
}
