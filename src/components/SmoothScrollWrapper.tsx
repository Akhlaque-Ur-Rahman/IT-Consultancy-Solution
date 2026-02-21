'use client';
import dynamic from 'next/dynamic';

const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), { ssr: false });

export default function SmoothScrollWrapper() {
  return <SmoothScroll />;
}
