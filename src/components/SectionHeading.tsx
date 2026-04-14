import React from "react";
import { cn } from "@/lib/utils";

/** Shared gradient for highlighted words in section titles (brand standard). */
export const sectionHeadingAccentClassName =
  "bg-gradient-to-r from-[#fde68a] via-[#f59e0b] to-[#d97706] bg-clip-text text-transparent";

export function SectionHeadingAccent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn(sectionHeadingAccentClassName, className)}>
      {children}
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  /** Center: overline with lines on both sides. Left: short line + overline (editorial). */
  align?: "center" | "left";
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  /** Semantic level for the main title */
  titleAs?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  align = "left",
  subtitle,
  children,
  className,
  eyebrowClassName,
  titleClassName,
  subtitleClassName,
  titleAs = "h2",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  const eyebrowEl = (
    <span
      className={cn(
        "text-xs font-bold uppercase tracking-[0.28em] text-[#f59e0b]",
        eyebrowClassName,
      )}
    >
      {eyebrow}
    </span>
  );

  const titleClasses = cn(
    "text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-5xl",
    isCenter && "mx-auto max-w-4xl [text-wrap:balance]",
    titleClassName,
  );

  const subtitleClasses = cn(
    "mt-4 text-sm leading-relaxed text-gray-500 md:text-base",
    isCenter ? "mx-auto max-w-lg" : "max-w-2xl",
    subtitleClassName,
  );

  return (
    <div
      className={cn(
        isCenter ? "mb-12 text-center md:mb-16" : "mb-10 md:mb-12",
        className,
      )}
    >
      {isCenter ? (
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#f59e0b]/80 md:w-12" />
          {eyebrowEl}
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#f59e0b]/80 md:w-12" />
        </div>
      ) : (
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-[#f59e0b] to-transparent md:w-12" />
          {eyebrowEl}
        </div>
      )}

      {titleAs === "h1" ? (
        <h1 className={titleClasses}>{children}</h1>
      ) : titleAs === "h3" ? (
        <h3 className={titleClasses}>{children}</h3>
      ) : (
        <h2 className={titleClasses}>{children}</h2>
      )}

      {subtitle ? <p className={subtitleClasses}>{subtitle}</p> : null}
    </div>
  );
}
