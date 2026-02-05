'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VerticalLine from '@/components/ui/VerticalLine';
import Button from '@/components/ui/Button';
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';
import { teamMembers } from '@/data/team';

export default function TeamPage() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>('[data-reveal-item]', {
    stagger: 0.08,
  });
  const ctaRef = useScrollReveal<HTMLDivElement>({ delay: 0.2 });

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-center px-6 pt-28 md:px-10 lg:px-16">
          <div className="mx-auto flex max-w-[1440px] gap-8 lg:gap-16">
            <VerticalLine className="hidden h-[400px] shrink-0 md:flex" />
            <div ref={headingRef} className="flex flex-col justify-center py-16">
              <h1 className="text-5xl leading-[1.1] md:text-7xl lg:text-8xl">
                OUR TEAM
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                A multidisciplinary team of engineers, designers, and researchers
                pushing the boundaries of autonomous racing.
              </p>
            </div>
          </div>
        </section>

        {/* Team grid */}
        <section className="px-6 pb-24 md:px-10 lg:px-16">
          <div
            ref={gridRef}
            className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {teamMembers.map((member) => (
              <div
                key={member.name}
                data-reveal-item
                className="group border border-white/10 p-6 transition-colors hover:border-white/30"
              >
                <div className="mb-4 h-16 w-16 bg-white/10" />
                <h3 className="text-lg font-bold italic">{member.name}</h3>
                <p className="mt-1 text-sm text-white/50">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join CTA */}
        <section className="px-6 pb-32 md:px-10 lg:px-16">
          <div
            ref={ctaRef}
            className="mx-auto max-w-[1440px] border border-white/10 p-10 text-center md:p-16"
          >
            <h2 className="text-3xl md:text-5xl">JOIN THE TEAM</h2>
            <p className="mx-auto mt-4 max-w-md text-base text-white/60">
              We&apos;re always looking for passionate people. Whether you&apos;re into
              software, hardware, or design — there&apos;s a place for you.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="outline">
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
