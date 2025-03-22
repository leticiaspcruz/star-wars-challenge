import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/providers/ThemeContext';

describe('Error Component', () => {
  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  it('renders the error text correctly', () => {
    renderWithThemeProvider(<Error errorText="Test Error Message" />);
    expect(screen.getByText('Test Error Message')).toBeInTheDocument();
  });
});
