import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/providers/ThemeContext';

describe('Button Component', () => {
  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  it('renders children correctly', () => {
    renderWithThemeProvider(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClickMock = jest.fn();
    renderWithThemeProvider(<Button onClick={onClickMock}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('disables the button when disabled prop is true', () => {
    renderWithThemeProvider(<Button disabled>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeDisabled();
  });

  it('does not call onClick when disabled', () => {
    const onClickMock = jest.fn();
    renderWithThemeProvider(<Button disabled onClick={onClickMock}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(onClickMock).not.toHaveBeenCalled();
  });
});
