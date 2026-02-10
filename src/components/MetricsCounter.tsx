'use client';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';

interface MetricProps {
  label: string;
  value: number;
  suffix: string;
  delay?: number;
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const displayValue = suffix === '%' 
          ? latest.toFixed(1)
          : Math.floor(latest).toLocaleString();
        ref.current.textContent = `${displayValue}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return <div ref={ref} className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">0{suffix}</div>;
}

export function MetricsCounter({ metrics }: { metrics: MetricProps[] }) {
  return (
    <section className="relative py-20 bg-[#0a0a0a] border-y border-[#262626] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f59e0b] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f59e0b] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-[#121212] border border-[#262626] rounded-lg hover:border-[#f59e0b]/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <AnimatedNumber value={metric.value} suffix={metric.suffix} />
              <p className="text-base font-medium text-gray-300 mt-3">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}