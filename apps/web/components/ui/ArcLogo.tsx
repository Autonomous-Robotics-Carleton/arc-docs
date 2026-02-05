/* eslint-disable @next/next/no-img-element */
export default function ArcLogo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/brand/arc-logo.svg"
      alt="ARC"
      className={className}
      draggable={false}
    />
  );
}
