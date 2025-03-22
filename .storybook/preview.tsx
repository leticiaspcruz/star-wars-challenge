import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Preview } from '@storybook/react';
import { darkTheme } from '../src/themes/dark';
import GlobalStyles from '../src/themes/globalStyles';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: darkTheme.colors.background,
        },
      ],
    },
    darkMode: {
      current: 'dark',
    },
    viewport: {
      viewports: {
        mobileSmall: {
          name: 'Mobile Small',
          styles: {
            width: '320px',
            height: '568px',
          },
        },
        mobileMedium: {
          name: 'Mobile Medium',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        mobileLarge: {
          name: 'Mobile Large',
          styles: {
            width: '414px',
            height: '736px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktopSmall: {
          name: 'Desktop Small',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
        desktopLarge: {
          name: 'Desktop Large',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
      defaultViewport: 'mobileMedium',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <div style={{ fontFamily: "'Instrument Sans', sans-serif", backgroundColor: darkTheme.colors.background, minHeight: '100vh', padding: '20px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
