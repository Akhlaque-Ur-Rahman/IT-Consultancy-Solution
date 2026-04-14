"use client";

/**
 * Section depth presets (home page rhythm — Phase 1):
 * - surface: #000 — top-center gold radial + bottom vignette
 * - surfaceRaised: #0a0a0a — corner amber glows only
 * - ribbon: #050505 — narrow gold wash at top (trust strip)
 *
 * Pick one preset per band; do not combine ad-hoc extra full-bleed glows.
 */
import { cn } from "@/lib/utils";

const PRESET_BG = {
  surface: "bg-black",
  surfaceRaised: "bg-[#0a0a0a]",
  ribbon: "bg-[#050505]",
} as const;

export type SectionAmbientPreset = keyof typeof PRESET_BG;

type SectionAmbientProps = {
  preset: SectionAmbientPreset;
  className?: string;
  children: React.ReactNode;
  as?: "section" | "div";
};

function AmbientLayers({ preset }: { preset: SectionAmbientPreset }) {
  if (preset === "surface") {
    return (
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute -top-32 left-1/2 h-[min(50vh,480px)] w-[min(120vw,920px)] -translate-x-1/2 opacity-[0.22]"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(245,158,11,0.42) 0%, rgba(245,158,11,0.1) 48%, transparent 72%)",
            filter: "blur(4px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>
    );
  }

  if (preset === "surfaceRaised") {
    return (
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        aria-hidden
      >
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-[#f59e0b] blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-[#f59e0b] blur-3xl" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div
        className="absolute left-0 right-0 top-0 h-28 opacity-[0.28]"
        style={{
          background:
            "linear-gradient(180deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.05) 55%, transparent 100%)",
        }}
      />
    </div>
  );
}

export function SectionAmbient({
  preset,
  className,
  children,
  as: Comp = "section",
}: SectionAmbientProps) {
  return (
    <Comp
      className={cn(
        "relative overflow-hidden",
        PRESET_BG[preset],
        className,
      )}
    >
      <AmbientLayers preset={preset} />
      <div className="relative z-10">{children}</div>
    </Comp>
  );
}
