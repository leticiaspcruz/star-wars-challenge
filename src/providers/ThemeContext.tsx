import { createContext, useState, ReactNode, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme } from '@/themes/dark';
import { lightTheme } from '@/themes/light';

type ThemeContextType = {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if(typeof window === 'undefined') return;
    const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

    if (storedTheme) {
      setTheme(storedTheme === 'dark' ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    if (typeof window === 'undefined') return;
    localStorage.setItem('theme', newTheme);
  };

  const themeSettings = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <StyledThemeProvider theme={themeSettings}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
