'use client';

import { useCallback, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/sections/LoadingScreen';
import VerticalLine from '@/components/ui/VerticalLine';
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';
import { teamMembers } from '@/data/team';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  const aboutRef = useScrollReveal<HTMLDivElement>();
  const teamHeadingRef = useScrollReveal<HTMLDivElement>({ delay: 0.1 });
  const teamGridRef = useStaggerReveal<HTMLDivElement>('[data-reveal-item]', {
    stagger: 0.08,
  });

  return (
    <>
      <LoadingScreen onComplete={handleComplete} />

      <div
        className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <Header />

        <main>
          {/* ── About Us Section ── */}
          <section className="relative flex min-h-screen items-center px-6 pt-28 md:px-10 lg:px-16">
            <div className="mx-auto flex max-w-[1440px] gap-8 lg:gap-16">
              {/* Left decorative line */}
              <VerticalLine className="hidden h-[500px] shrink-0 md:flex" />

              {/* Content */}
              <div ref={aboutRef} className="flex flex-col justify-center py-16">
                <h1 className="text-5xl leading-[1.1] md:text-7xl lg:text-8xl">
                  ABOUT US
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                  Founded in late 2024, the Autonomous Racing Club (ARC) at Carleton
                  University builds self-driving race cars that compete at the cutting
                  edge of robotics, AI, and motorsport engineering.
                </p>
              </div>
            </div>
          </section>

          {/* ── Our Team Section ── */}
          <section className="relative px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
            <div className="mx-auto flex max-w-[1440px] gap-8 lg:gap-16">
              <VerticalLine className="hidden h-[400px] shrink-0 md:flex" />

              <div className="w-full">
                <div ref={teamHeadingRef}>
                  <h2 className="text-5xl leading-[1.1] md:text-7xl lg:text-8xl">
                    OUR TEAM
                  </h2>
                  <p className="mt-4 text-base text-white/70 md:text-lg">
                    A multidisciplinary team of engineers, designers, and researchers.
                  </p>
                </div>

                <div
                  ref={teamGridRef}
                  className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {teamMembers.map((member) => (
                    <div
                      key={member.name}
                      data-reveal-item
                      className="group border border-white/10 p-6 transition-colors hover:border-white/30"
                    >
                      {/* Placeholder avatar */}
                      <div className="mb-4 h-16 w-16 bg-white/10" />
                      <h3 className="text-lg not-italic">{member.name}</h3>
                      <p className="mt-1 text-sm text-white/50">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
