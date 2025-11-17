import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: "ARC Docs", template: "%s — ARC Docs" },

  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/apple-icon.png"],
  },
};


export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
  
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
