import Link from 'next/link';

const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} ARC &mdash; Autonomous Racing at Carleton
        </p>
        <ul className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-xs text-white/40 transition-colors hover:text-white"
              >
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
