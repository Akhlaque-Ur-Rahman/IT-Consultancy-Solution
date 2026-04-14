"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/components/ui/utils";

export type FormThemeOption = { value: string; label: string };

type FormThemeSelectProps = {
  id?: string;
  value: string;
  onValueChange: (value: string) => void;
  options: readonly FormThemeOption[];
  className?: string;
  "aria-label"?: string;
};

/**
 * Theme-matched dropdown without Radix Select — avoids `react-remove-scroll`
 * (scroll lock) conflicting with Lenis and causing horizontal overflow on open.
 */
export function FormThemeSelect({
  id,
  value,
  onValueChange,
  options,
  className,
  "aria-label": ariaLabel,
}: FormThemeSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const [panelBox, setPanelBox] = React.useState({
    top: 0,
    left: 0,
    width: 0,
    maxHeight: 320,
  });

  React.useEffect(() => setMounted(true), []);

  const placePanel = React.useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const r = trigger.getBoundingClientRect();
    const margin = 16;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const width = Math.min(Math.max(r.width, 120), vw - margin * 2);
    let left = r.left;
    if (left + width > vw - margin) left = Math.max(margin, vw - margin - width);
    if (left < margin) left = margin;

    const gap = 6;
    let top = r.bottom + gap;
    const below = vh - r.bottom - margin;
    const above = r.top - margin;
    let maxHeight = Math.min(340, Math.max(120, below - gap));

    if (below < 160 && above > below) {
      const h = Math.min(340, above - gap);
      maxHeight = Math.max(120, h);
      top = Math.max(margin, r.top - maxHeight - gap);
    }

    setPanelBox({ top, left, width, maxHeight });
  }, []);

  React.useLayoutEffect(() => {
    if (!open) return;
    placePanel();
    const onScrollOrResize = () => placePanel();
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [open, placePanel]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (triggerRef.current?.contains(t)) return;
      if (panelRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  const selected = options.find((o) => o.value === value);
  const reactId = React.useId().replace(/:/g, "");
  const listboxId = id ? `${id}-listbox` : `theme-select-list-${reactId}`;

  const panel =
    open &&
    mounted &&
    createPortal(
      <div
        ref={panelRef}
        id={listboxId}
        role="listbox"
        aria-labelledby={id}
        /* Lenis: don’t forward wheel/touch to smooth page scroll — only this list scrolls */
        data-lenis-prevent
        data-lenis-prevent-wheel
        data-lenis-prevent-touch
        style={{
          position: "fixed",
          top: panelBox.top,
          left: panelBox.left,
          width: panelBox.width,
          maxHeight: panelBox.maxHeight,
          zIndex: 240,
        }}
        className={cn(
          "theme-form-select-scroll overscroll-contain box-border overflow-y-auto overflow-x-hidden rounded-xl border border-white/[0.12] bg-[#0a0a0a] py-1.5 pr-0.5 text-white shadow-[0_24px_64px_-12px_rgba(0,0,0,0.88),0_0_0_1px_rgba(245,158,11,0.1)]",
        )}
      >
        {options.map((opt) => {
          const isSel = opt.value === value;
          return (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={isSel}
              className={cn(
                "relative flex w-full min-w-0 cursor-pointer select-none items-start gap-2 rounded-lg py-2.5 pl-9 pr-3 text-left text-[15px] leading-snug text-gray-200 outline-none transition-colors",
                "hover:bg-[#f59e0b]/14 hover:text-[#fde68a] focus-visible:bg-[#f59e0b]/14 focus-visible:text-[#fde68a]",
                isSel && "bg-[#f59e0b]/10 font-medium text-[#fbbf24]",
              )}
              onClick={() => {
                onValueChange(opt.value);
                setOpen(false);
              }}
            >
              <span className="pointer-events-none absolute left-2 top-2.5 flex h-4 w-4 items-center justify-center">
                {isSel ? (
                  <Check className="h-4 w-4 text-[#f59e0b]" strokeWidth={2.5} aria-hidden />
                ) : null}
              </span>
              <span className="min-w-0 flex-1 [overflow-wrap:anywhere] pr-0.5">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>,
      document.body,
    );

  return (
    <>
      <button
        type="button"
        id={id}
        ref={triggerRef}
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listboxId : undefined}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "relative flex w-full min-w-0 items-center justify-between gap-2 rounded-xl border border-white/[0.1] bg-black/50 py-3.5 pl-3 pr-3 text-left text-[15px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm outline-none transition-[color,box-shadow,border-color]",
          "focus:border-[#f59e0b]/45 focus:ring-2 focus:ring-[#f59e0b]/20",
          className,
        )}
      >
        <span className="min-w-0 flex-1 truncate text-left">{selected?.label}</span>
        <ChevronDown
          className="pointer-events-none h-4 w-4 shrink-0 text-[#f59e0b]/80"
          strokeWidth={2}
          aria-hidden
        />
      </button>
      {panel}
    </>
  );
}
