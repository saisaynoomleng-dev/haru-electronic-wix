import { SanityLive } from '@/sanity/lib/live';
import '../globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        {children}
        <SanityLive />
      </ThemeProvider>
    </main>
  );
}
