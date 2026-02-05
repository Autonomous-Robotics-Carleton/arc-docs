'use client';

export default function VerticalLine({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`} aria-hidden="true">
      {/* Top square */}
      <div className="h-3 w-3 border border-white/60" />
      {/* Line */}
      <div className="w-px flex-1 bg-white/30" />
      {/* Bottom square */}
      <div className="h-3 w-3 border border-white/60" />
    </div>
  );
}
