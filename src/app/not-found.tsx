'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const stickerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const emojiRef = useRef<HTMLDivElement | null>(null);
  const confettiRef = useRef<HTMLDivElement | null>(null);
  const jokeRef = useRef<HTMLParagraphElement | null>(null);
  const jokes = [
    'Page not found, but vibes are.',
    '404: The page went AFK.',
    'Lost in the cloud. Bring snacks.',
    'Oops… coffee spilled on the router.',
  ];

  useEffect(() => {
    gsap.set([glowRef.current, stickerRef.current, titleRef.current, emojiRef.current], { opacity: 0 });
    gsap.set(stickerRef.current, { scale: 0.98, rotate: -2 });
    gsap.set(titleRef.current, { y: 12 });
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.to(glowRef.current, { opacity: 1, duration: 0.6 })
      .to(stickerRef.current, { opacity: 1, scale: 1, rotate: 0, duration: 0.8 }, '-=0.3')
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
      .to(emojiRef.current, { opacity: 1, duration: 0.4 }, '-=0.2');
    gsap.to(stickerRef.current, { y: 6, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    const onMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      gsap.to(stickerRef.current, { x: nx * 14, y: ny * 10, rotate: nx * 3, duration: 0.4, ease: 'power2.out' });
      const s = 1 + Math.min(0.06, Math.hypot(nx, ny) * 0.06);
      gsap.to(titleRef.current, { scale: s, duration: 0.25, ease: 'power2.out' });
      gsap.to(emojiRef.current, { rotate: nx * 8, y: ny * 6, duration: 0.25, ease: 'power2.out' });
    };
    containerRef.current?.addEventListener('mousemove', onMove);
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'c') cheer();
    };
    window.addEventListener('keydown', onKey);
    if (jokeRef.current) {
      jokeRef.current.textContent = jokes[0];
      const cycle = () => {
        gsap.to(jokeRef.current, {
          opacity: 0,
          y: 6,
          duration: 0.22,
          ease: 'power2.out',
          onComplete: () => {
            const next = jokes[Math.floor(Math.random() * jokes.length)];
            if (jokeRef.current) {
              jokeRef.current.textContent = next;
              gsap.to(jokeRef.current, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' });
            }
          },
        });
      };
      const id = setInterval(cycle, 2600);
      return () => {
        containerRef.current?.removeEventListener('mousemove', onMove);
        window.removeEventListener('keydown', onKey);
        gsap.killTweensOf([glowRef.current, stickerRef.current, titleRef.current, emojiRef.current]);
        clearInterval(id);
      };
    }
    return () => {
      containerRef.current?.removeEventListener('mousemove', onMove);
      window.removeEventListener('keydown', onKey);
      gsap.killTweensOf([glowRef.current, stickerRef.current, titleRef.current, emojiRef.current]);
    };
  }, []);

  const cheer = () => {
    if (!confettiRef.current || !containerRef.current) return;
    const colors = ['#f59e0b', '#d97706', '#22c55e', '#60a5fa', '#f43f5e'];
    for (let i = 0; i < 24; i++) {
      const piece = document.createElement('div');
      piece.className = 'absolute w-2 h-2 rounded-sm';
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.left = '50%';
      piece.style.top = '45%';
      confettiRef.current.appendChild(piece);
      const angle = Math.random() * Math.PI * 2;
      const dist = 120 + Math.random() * 100;
      const x = Math.cos(angle) * dist;
      const y = Math.sin(angle) * dist + 60;
      gsap.fromTo(
        piece,
        { x: 0, y: 0, opacity: 1, rotate: 0 },
        { x, y, rotate: Math.random() * 360, opacity: 0, duration: 1.6, ease: 'power3.out', onComplete: () => piece.remove() }
      );
    }
    gsap.fromTo(emojiRef.current, { scale: 1 }, { scale: 1.12, yoyo: true, repeat: 1, duration: 0.2 });
  };

  return (
    <div ref={containerRef} className="relative min-h-[100svh] bg-black text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f0f0f] via-[#0a0a0a] to-black" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] px-6">
        <div className="relative mb-10">
          <div ref={glowRef} className="absolute -inset-12 blur-3xl bg-[#f59e0b]/15 rounded-full" />
          <div
            ref={stickerRef}
            className="mx-auto w-[220px] rounded-2xl border border-[#f59e0b]/40 bg-[#0b0b0b] shadow-[0_0_60px_rgba(245,158,11,0.15)] relative px-5 py-4"
          >
            <div className="absolute -top-2 -left-2 rotate-[-6deg] bg-[#f59e0b] text-black text-xs font-bold px-2 py-1 rounded">
              Oops!
            </div>
            <div className="text-sm text-gray-300">We misplaced this page somewhere in the cloud.</div>
          </div>
          <div ref={confettiRef} className="pointer-events-none absolute inset-0" />
        </div>
        <div className="text-center max-w-3xl">
          <div className="relative inline-block mb-3">
            <div className="absolute -inset-6 blur-3xl bg-[#f59e0b]/20 rounded-full" />
            <h1 ref={titleRef} className="text-7xl md:text-8xl font-extrabold tracking-tight">
              404
            </h1>
          </div>
          <div ref={emojiRef} className="mx-auto mb-3 text-3xl select-none">😅</div>
          <p ref={jokeRef} className="text-lg md:text-xl text-gray-300" aria-live="polite" />
          
        </div>
      </div>
    </div>
  );
}
