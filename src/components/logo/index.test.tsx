import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './';
import '@testing-library/jest-dom';

describe('Logo Component', () => {
  it('renders the logo image', () => {
    render(<Logo />);
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
  });

  it('renders the logo link', () => {
    render(<Logo />);
    const logoLink = screen.getByRole('link', { name: /logo/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('renders without errors', () => {
    const { container } = render(<Logo />);
    expect(container).toBeInTheDocument();
  });
});
