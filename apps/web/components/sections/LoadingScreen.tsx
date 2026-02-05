'use client';

import { useEffect, useRef, useState } from 'react';
import ArcLogo from '@/components/ui/ArcLogo';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'logo' | 'loading' | 'done'>('logo');
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    // Check for reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      onComplete();
      return;
    }

    // Phase 1: Show logo for 800ms
    const logoTimer = setTimeout(() => {
      setPhase('loading');
      startRef.current = performance.now();

      // Phase 2: Animate counter 0 → 100 over ~1.5s
      const animate = (now: number) => {
        const elapsed = now - startRef.current;
        const pct = Math.min(Math.round((elapsed / 1500) * 100), 100);
        setProgress(pct);
        if (pct < 100) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setTimeout(() => {
            setPhase('done');
            setTimeout(onComplete, 400);
          }, 300);
        }
      };
      rafRef.current = requestAnimationFrame(animate);
    }, 800);

    return () => {
      clearTimeout(logoTimer);
      cancelAnimationFrame(rafRef.current);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-400 ${
        phase === 'done' ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex items-center gap-6 md:gap-10">
        <ArcLogo className="h-10 w-auto text-white md:h-14" />

        <div
          className={`overflow-hidden transition-all duration-500 ${
            phase === 'logo' ? 'max-w-0 opacity-0' : 'max-w-xs opacity-100'
          }`}
        >
          <p
            className="whitespace-nowrap text-sm tracking-widest text-white md:text-base"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            FULL SPEED. NO HANDS.
          </p>
          <p
            className="mt-1 flex justify-between text-xs tracking-widest text-white/60 md:text-sm"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <span>LOADING&hellip;</span>
            <span>{String(progress).padStart(3, '0')}%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
