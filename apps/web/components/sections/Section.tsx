import { forwardRef } from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className = '', id }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`relative px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40 ${className}`}
      >
        <div className="mx-auto max-w-[1440px]">{children}</div>
      </section>
    );
  }
);

Section.displayName = 'Section';
export default Section;
