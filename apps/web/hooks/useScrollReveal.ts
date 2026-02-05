'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, ensureGsapRegistered, prefersReducedMotion } from '@/lib/animations';

type ScrollRevealOptions = {
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
};

/**
 * Fade + slide-in a single element when it enters the viewport.
 */
export function useScrollReveal<T extends HTMLElement>(opts: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  const { y = 40, duration = 0.8, delay = 0, start = 'top 85%' } = opts;

  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;
    ensureGsapRegistered();

    const el = ref.current;
    gsap.set(el, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, duration, delay, ease: 'power2.out' });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [y, duration, delay, start]);

  return ref;
}

/**
 * Stagger-reveal children matching a selector when the container enters the viewport.
 */
export function useStaggerReveal<T extends HTMLElement>(
  itemSelector: string,
  opts: { y?: number; stagger?: number; duration?: number; start?: string } = {}
) {
  const ref = useRef<T>(null);
  const { y = 30, stagger = 0.1, duration = 0.6, start = 'top 85%' } = opts;

  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;
    ensureGsapRegistered();

    const container = ref.current;
    const items = container.querySelectorAll(itemSelector);
    if (!items.length) return;

    gsap.set(items, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: container,
      start,
      once: true,
      onEnter: () => {
        gsap.to(items, { opacity: 1, y: 0, duration, stagger, ease: 'power2.out' });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [itemSelector, y, stagger, duration, start]);

  return ref;
}
