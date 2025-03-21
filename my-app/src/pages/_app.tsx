import type { AppProps } from 'next/app'
import GlobalStyles from '@/themes/globalStyles';
import { Instrument_Sans } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeContext';
import { NavBar, Footer } from '@/components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  weight: ['400', '700'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={`${instrumentSans.variable}`}>
        <GlobalStyles />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
