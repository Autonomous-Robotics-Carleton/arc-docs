'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArcLogo from '@/components/ui/ArcLogo';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomePage() {
  const heroRef = useScrollReveal<HTMLDivElement>();
  const identityRef = useScrollReveal<HTMLDivElement>({ delay: 0.1 });
  const missionRef = useScrollReveal<HTMLDivElement>({ delay: 0.1 });
  const sponsorsRef = useScrollReveal<HTMLDivElement>({ delay: 0.1 });

  return (
    <>
      <Header />

      <main>
        {/* ── Hero with large ARC logo ── */}
        <section className="relative px-6 pt-28 md:px-10 lg:px-16">
          <div
            ref={heroRef}
            className="mx-auto max-w-[1440px] py-16 md:py-24 lg:py-32"
          >
            <ArcLogo className="h-20 w-auto text-white md:h-28 lg:h-36" />
          </div>
        </section>

        {/* ── Identity Section ── */}
        <section className="relative px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-[1440px] py-16 md:py-20">
            <div
              ref={identityRef}
              className="flex flex-col gap-6 md:flex-row md:items-start md:gap-16 lg:gap-24"
            >
              <h2 className="shrink-0 text-3xl md:text-4xl lg:text-5xl">
                IDENTITY
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                ARC is a student-run engineering club at Carleton University focused
                on building autonomous robotics systems. We give students hands-on
                experience in designing, building, and testing robots while
                fostering interdisciplinary collaboration across engineering,
                computer science, and design disciplines.
              </p>
            </div>
          </div>
        </section>

        {/* ── Mission Section ── */}
        <section className="relative px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-[1440px] py-16 md:py-20">
            <div
              ref={missionRef}
              className="flex flex-col gap-6 md:flex-row md:items-start md:gap-16 lg:gap-24"
            >
              <h2 className="shrink-0 text-3xl md:text-4xl lg:text-5xl">
                MISSION
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                Our mission is to create a collaborative and inclusive space for
                students to explore and contribute to the future of autonomous
                vehicles: developing practical skills, valuable experience,
                meaningful connections, and cutting edge projects along the way.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sponsors Section ── */}
        <section className="relative px-6 pb-24 md:px-10 md:pb-32 lg:px-16 lg:pb-40">
          <div className="mx-auto max-w-[1440px]">
            <div ref={sponsorsRef}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl">SPONSORS</h2>
              {/* Placeholder for sponsor logos */}
              <div className="mt-12 min-h-[200px] md:mt-16 md:min-h-[300px]">
                {/* Sponsors will go here */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ── Bottom Marquee ── */}
      <div className="overflow-hidden border-t border-white/10 bg-black py-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="mx-4 text-4xl tracking-wider text-white/20 md:text-5xl lg:text-6xl"
            >
              AHEAD OF THE CURVE&nbsp;&nbsp;AHEAD OF THE CURVE&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
