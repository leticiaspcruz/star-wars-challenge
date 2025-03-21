import type { AppProps } from 'next/app'
import GlobalStyles from '@/themes/globalStyles';
import { Instrument_Sans } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeContext';
import { NavBar, Footer } from '@/components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import { MainContainer} from '@/shared/pagesStyles';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  weight: ['400', '700'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <StyleSheetManager shouldForwardProp={isPropValid}>
      <div
        className={`${instrumentSans.variable}`}
      >
        <GlobalStyles />
        <MainContainer>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </MainContainer>
      </div>
      </StyleSheetManager>
    </ThemeProvider>
  );
}
