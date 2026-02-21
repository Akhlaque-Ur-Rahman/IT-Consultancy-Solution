'use client';
import dynamic from 'next/dynamic';

const HeroModernClient = dynamic(() => import('@/components/HeroModernClient'), { ssr: false });

export default function HeroModernWrapper() {
  return <HeroModernClient />;
}
