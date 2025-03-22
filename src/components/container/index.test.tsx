import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from './index';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/providers/ThemeContext';

describe('Container Component', () => {
  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  it('renders children correctly', () => {
    renderWithThemeProvider(
      <Container>
        <div>Test Container Content</div>
      </Container>
    );
    expect(screen.getByText('Test Container Content')).toBeInTheDocument();
  });
});
