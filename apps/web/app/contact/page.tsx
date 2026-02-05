'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VerticalLine from '@/components/ui/VerticalLine';
import NavIcon from '@/components/ui/NavIcon';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ContactPage() {
  const leftRef = useScrollReveal<HTMLDivElement>({ y: 30 });
  const rightRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.15 });

  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-screen items-start px-6 pt-28 md:px-10 lg:px-16">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 py-16 lg:flex-row lg:gap-24">
            {/* Left side: decorative line + heading */}
            <div className="flex gap-6 lg:w-2/5">
              <VerticalLine className="hidden h-[400px] shrink-0 md:flex" />
              <div ref={leftRef}>
                <h1 className="text-4xl leading-[1.1] md:text-6xl lg:text-7xl">
                  <span className="text-white/60">{'//'}WE</span>
                  <br />
                  WOULD
                  <br />
                  LOVE TO
                  <br />
                  <span className="font-extrabold">HEAR</span>
                  <br />
                  <span className="font-extrabold">FROM</span>
                  <br />
                  <span className="text-white/60">&gt;&gt;</span>
                  <span className="font-extrabold">YOU</span>
                </h1>
              </div>
            </div>

            {/* Right side: contact info */}
            <div ref={rightRef} className="flex-1 pt-4 lg:pt-12">
              {/* Email row */}
              <div className="border-t border-white/20 py-8">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <a
                    href="mailto:contact@arcarleton.ca"
                    className="flex items-center gap-2.5 text-sm tracking-widest transition-colors hover:text-white/80"
                  >
                    <NavIcon />
                    CONTACT@ARCARLETON.CA
                  </a>
                  <p className="max-w-[240px] text-right text-sm leading-relaxed text-white/60">
                    Feel free to reach out if you want to collaborate with us, or
                    simply have a chat!
                  </p>
                </div>
              </div>

              {/* Location row */}
              <div className="border-t border-white/20 py-8">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <a
                    href="https://maps.google.com/?q=1125+Colonel+By+Dr+Ottawa+ON+K1S+5B6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm tracking-widest transition-colors hover:text-white/80"
                  >
                    <NavIcon />
                    VIEW ON GOOGLE MAPS
                  </a>
                  <div className="text-right text-sm leading-relaxed text-white/60">
                    <p>Mackenzie Building 4463</p>
                    <p>1125 Colonel By Dr, Ottawa, ON K1S 5B6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
