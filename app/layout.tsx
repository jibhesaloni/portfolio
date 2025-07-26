import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Anup Ingle',
  description: 'Assistant Professor.',
  keywords: 'C/C++ and Python Programming, Academic, Publications, Patents',
  authors: [{ name: 'Dr. Anup Ingle' }],
  openGraph: {
    title: 'Dr. Anup Ingle- Portfolio',
    description: 'Assistant Professor',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
