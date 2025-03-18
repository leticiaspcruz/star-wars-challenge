'use client';

import GlobalStyles from '@/themes/globalStyles';
import { Instrument_Sans } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeContext';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en" className={`${instrumentSans.variable}`}>
        <body>
          <GlobalStyles />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
