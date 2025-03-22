import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/providers/ThemeContext';

jest.mock('./styles', () => ({
  Text: ({ variant, weight, align, children, className }: { variant: string, weight: string, align: 'left' | 'center' | 'right', children: React.ReactNode, className?: string }) => (
    <div
      data-testid={`text-${variant}-${weight}-${align}`}
      style={{
        fontWeight: weight === 'bold' ? 'bold' : weight === 'light' ? '300' : 'normal',
        textAlign: align,
        fontSize: variant === 'heading' ? '24px' : variant === 'subheading' ? '20px' : variant === 'small' ? '12px' : '16px',
      }}
      className={className}
    >
      {children}
    </div>
  ),
}));

describe('Text Component', () => {
  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  it('renders children correctly', () => {
    renderWithThemeProvider(<Text>Hello, World!</Text>);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('applies the correct variant styles', () => {
    renderWithThemeProvider(<Text variant="heading">Heading Text</Text>);
    expect(screen.getByTestId('text-heading-regular-left')).toHaveStyle('font-size: 24px;');

    renderWithThemeProvider(<Text variant="subheading">Subheading Text</Text>);
    expect(screen.getByTestId('text-subheading-regular-left')).toHaveStyle('font-size: 20px;');

    renderWithThemeProvider(<Text variant="paragraph">Paragraph Text</Text>);
    expect(screen.getByTestId('text-paragraph-regular-left')).toHaveStyle('font-size: 16px;');

    renderWithThemeProvider(<Text variant="small">Small Text</Text>);
    expect(screen.getByTestId('text-small-regular-left')).toHaveStyle('font-size: 12px;');
  });

  it('applies the correct weight styles', () => {
    renderWithThemeProvider(<Text weight="regular">Regular Text</Text>);
    expect(screen.getByTestId('text-paragraph-regular-left')).toHaveStyle('font-weight: normal;');

    renderWithThemeProvider(<Text weight="bold">Bold Text</Text>);
    expect(screen.getByTestId('text-paragraph-bold-left')).toHaveStyle('font-weight: bold;');

    renderWithThemeProvider(<Text weight="light">Light Text</Text>);
    expect(screen.getByTestId('text-paragraph-light-left')).toHaveStyle('font-weight: 300;');
  });

  it('applies the correct align styles', () => {
    renderWithThemeProvider(<Text align="left">Left Text</Text>);
    expect(screen.getByTestId('text-paragraph-regular-left')).toHaveStyle('text-align: left;');

    renderWithThemeProvider(<Text align="center">Center Text</Text>);
    expect(screen.getByTestId('text-paragraph-regular-center')).toHaveStyle('text-align: center;');

    renderWithThemeProvider(<Text align="right">Right Text</Text>);
    expect(screen.getByTestId('text-paragraph-regular-right')).toHaveStyle('text-align: right;');
  });

  it('applies a custom className', () => {
    renderWithThemeProvider(<Text className="custom-class">Custom Class Text</Text>);
    expect(screen.getByTestId('text-paragraph-regular-left')).toHaveClass('custom-class');
  });

  it('renders with default props', () => {
    renderWithThemeProvider(<Text>Default Text</Text>);
    expect(screen.getByTestId('text-paragraph-regular-left')).toBeInTheDocument();
  });
});
