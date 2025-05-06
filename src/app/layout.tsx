import type { Metadata } from 'next';
import './globals.css';
import { mainFont } from '@/lib/fonts';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: {
    template: '%s | Haru Electronics',
    default: 'Haru Electronics',
  },
  description:
    'Haru Electronics is an e-commerce web app that sells all types of electronics such as computers, cameras, mobile phones and accessories, headphones, speakers, TV, home cinema, etc.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={mainFont.variable}>{children}</body>
    </html>
  );
}
