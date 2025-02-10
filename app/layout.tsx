import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fetch - Shelter Search',
  description: 'One stop shop for finding a furry friend',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
