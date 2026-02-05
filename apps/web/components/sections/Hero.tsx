'use client';

import { useRef } from 'react';
import VerticalLine from '@/components/ui/VerticalLine';

type HeroProps = {
  heading: string;
  description?: string;
  children?: React.ReactNode;
};

export default function Hero({ heading, description, children }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[80vh] items-center px-6 pt-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto flex max-w-[1440px] gap-8 lg:gap-16">
        {/* Left decorative line */}
        <VerticalLine className="hidden h-[400px] shrink-0 md:flex" />

        {/* Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl leading-tight md:text-7xl lg:text-8xl">{heading}</h1>
          {description && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
