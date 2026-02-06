'use client';

import { type ReactNode } from 'react';
import { TransitionProvider } from '@/context/TransitionContext';
import LoadingScreen from '@/components/sections/LoadingScreen';

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <TransitionProvider>
      <LoadingScreen />
      {children}
    </TransitionProvider>
  );
}
