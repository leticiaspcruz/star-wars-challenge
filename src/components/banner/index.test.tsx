import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Banner from './';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/providers/ThemeContext';

jest.useFakeTimers();

describe('Banner Component', () => {
  const pageName = 'Test Page Name';
  const pageDescription = 'Test Page Description';
  const finalText = 'Test Final Text';

  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  it('renders initial credits with page name and description', () => {
    renderWithThemeProvider(<Banner pageName={pageName} pageDescription={pageDescription} finalText={finalText} />);

    expect(screen.getByText(pageName)).toBeInTheDocument();
    expect(screen.getByText(pageDescription)).toBeInTheDocument();
    expect(screen.queryByText(finalText)).not.toBeInTheDocument();
  });

  it('renders final text after animation duration', async () => {
    renderWithThemeProvider(<Banner pageName={pageName} pageDescription={pageDescription} finalText={finalText} />);

    jest.advanceTimersByTime(21000);

    await waitFor(() => {
      expect(screen.getByText(finalText)).toBeInTheDocument();
    });

    expect(screen.queryByText(pageName)).not.toBeInTheDocument();
    expect(screen.queryByText(pageDescription)).not.toBeInTheDocument();
  });
});
