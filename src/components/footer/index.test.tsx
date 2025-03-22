import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/providers/ThemeContext';

describe('Footer Component', () => {
  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  it('renders social media icons', () => {
    renderWithThemeProvider(<Footer />);
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
  });

  it('opens social media links in new tabs', () => {
    renderWithThemeProvider(<Footer />);
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: /instagram/i })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('target', '_blank');
  });

  it('renders without errors', () => {
      const { container } = renderWithThemeProvider(<Footer/>);
      expect(container).toBeInTheDocument();
  });
});
