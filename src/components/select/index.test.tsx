import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/providers/ThemeContext';
import { mockSelect } from '@/mocks/select';

describe('Select Component', () => {
  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  it('renders label and options correctly', () => {
    renderWithThemeProvider(<Select {...mockSelect} />);
    expect(screen.getByLabelText('Test Select:')).toBeInTheDocument();
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('sets the correct initial value', () => {
    renderWithThemeProvider(<Select {...mockSelect} value="Option 2" />);
    expect((screen.getByRole('combobox') as HTMLSelectElement).value).toBe('Option 2');
  });

  it('applies data-testid correctly', () => {
    renderWithThemeProvider(<Select {...mockSelect} />);
    expect(screen.getByTestId('test-select-element')).toBeInTheDocument();
  });

  it('renders "All" as the default option', () => {
    renderWithThemeProvider(<Select {...mockSelect} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect((screen.getByRole('combobox') as HTMLSelectElement).value).toBe('');
  });
});
