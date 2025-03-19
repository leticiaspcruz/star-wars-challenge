import { createContext, useState, ReactNode, useEffect } from 'react';
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
  const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
  const [theme, setTheme] = useState<'light' | 'dark'>(storedTheme === 'dark' ? 'dark' : 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const themeSettings = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    if (storedTheme) {
      setTheme(storedTheme === 'dark' ? 'dark' : 'light');
    }
  }, [storedTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <StyledThemeProvider theme={themeSettings}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
