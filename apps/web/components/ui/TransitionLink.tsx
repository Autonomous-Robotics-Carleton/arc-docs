'use client';

import { type ReactNode, type MouseEvent } from 'react';
import { useTransition } from '@/context/TransitionContext';

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
}

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
  'aria-label': ariaLabel,
}: TransitionLinkProps) {
  const { navigateTo, phase } = useTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Allow cmd/ctrl+click to open in new tab
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    // Prevent default navigation
    e.preventDefault();
    e.stopPropagation();

    // Don't navigate if mid-transition
    if (phase !== 'idle') {
      return;
    }

    // Call optional onClick handler (e.g., close mobile menu)
    if (onClick) {
      onClick();
    }

    // Trigger the transition
    navigateTo(href);
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
