import { createContext, useState, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme } from '@/themes/dark';
import { lightTheme } from '@/themes/light';

type ThemeContextType = {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeSettings = theme === 'light' ? lightTheme : darkTheme;

  console.log('theme --', theme);
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <StyledThemeProvider theme={themeSettings}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
