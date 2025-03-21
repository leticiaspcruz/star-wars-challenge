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
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <div style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
