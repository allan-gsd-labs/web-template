import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Web Template',
  description: 'allan-gsd-labs web template',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-zinc-950 text-zinc-100">
        <div className="mx-auto max-w-3xl p-6">{children}</div>
      </body>
    </html>
  );
}
