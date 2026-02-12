import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MA Agency - AI Automation & Solutions',
  description: 'Transform your business with cutting-edge AI solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}