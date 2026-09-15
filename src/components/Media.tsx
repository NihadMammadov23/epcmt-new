"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Image wrapper.
 *
 * Until the real EPCMT photography is dropped into /public/images, this renders
 * a quiet technical placeholder that carries the target filename, so the layout
 * stays intact and the missing asset is obvious rather than broken.
 */
export function Media({
  src,
  alt,
  className = "",
  imgClassName = "",
  sizes = "100vw",
  priority = false,
  grayscale = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  grayscale?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#ecebe5] ${className}`}>
      {failed ? (
        <Placeholder src={src} />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className={`object-cover ${grayscale ? "grayscale" : ""} ${imgClassName}`}
        />
      )}
    </div>
  );
}

function Placeholder({ src }: { src: string }) {
  const name = src.split("/").pop() ?? "";
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,#efeee8_0%,#e4e3dc_55%,#eceae3_100%)]">
      <span
        aria-hidden
        className="absolute top-4 left-4 h-3 w-3 border-t border-l border-[#c9c8c0]"
      />
      <span
        aria-hidden
        className="absolute right-4 bottom-4 h-3 w-3 border-r border-b border-[#c9c8c0]"
      />
      <span className="type-mono px-4 text-center text-[#9b9a92]">{name}</span>
    </div>
  );
}
