export default function NavIcon({
  filled = false,
  className = '',
}: {
  filled?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-block h-2.5 w-2.5 border border-white/60 ${filled ? 'bg-white' : ''} ${className}`}
      aria-hidden="true"
    />
  );
}
