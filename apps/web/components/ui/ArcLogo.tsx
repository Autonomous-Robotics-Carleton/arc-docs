export default function ArcLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ARC"
    >
      {/* Stylized "arc" wordmark */}
      <text
        x="0"
        y="48"
        fill="currentColor"
        fontFamily="var(--font-heading), sans-serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="56"
        letterSpacing="-2"
      >
        arc
      </text>
      {/* TM symbol */}
      <text
        x="152"
        y="20"
        fill="currentColor"
        fontFamily="var(--font-body), sans-serif"
        fontWeight="400"
        fontSize="10"
      >
        ™
      </text>
    </svg>
  );
}
