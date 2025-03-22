import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/providers/ThemeContext';
import { NAV_LINKS } from '@/constants/navbar';
import { useScreenSize } from '@/hooks';

jest.mock('@/hooks', () => ({
  useScreenSize: jest.fn(),
}));

describe('NavBar Component', () => {
  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  beforeEach(() => {
    (useScreenSize as jest.Mock).mockClear();
  });

  it('renders the Logo component', () => {
    (useScreenSize as jest.Mock).mockReturnValue({ isClient: true, isMobileView: false });
    renderWithThemeProvider(<NavBar />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });

  it('renders desktop navigation links when not mobile view', () => {
    (useScreenSize as jest.Mock).mockReturnValue({ isClient: true, isMobileView: false });
    renderWithThemeProvider(<NavBar />);
    NAV_LINKS.forEach((link) => {
      expect(screen.getByRole('link', { name: link.name })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: link.name })).toHaveAttribute('href', link.href);
    });
  });

  it('renders mobile navigation elements when mobile view', () => {
    (useScreenSize as jest.Mock).mockReturnValue({ isClient: true, isMobileView: true });
    renderWithThemeProvider(<NavBar />);
    expect(screen.getByText('☰')).toBeInTheDocument();
  });

  it('toggles mobile menu on hamburger icon click', () => {
    (useScreenSize as jest.Mock).mockReturnValue({ isClient: true, isMobileView: true });
    renderWithThemeProvider(<NavBar />);
    const hamburgerIcon = screen.getByText('☰');
    fireEvent.click(hamburgerIcon);
    NAV_LINKS.forEach((link) => {
      expect(screen.getByRole('link', { name: link.name })).toBeInTheDocument();
    });
  });

  it('closes mobile menu on link click', () => {
    (useScreenSize as jest.Mock).mockReturnValue({ isClient: true, isMobileView: true });
    renderWithThemeProvider(<NavBar />);
    const hamburgerIcon = screen.getByText('☰');
    fireEvent.click(hamburgerIcon);
    fireEvent.click(screen.getByRole('link', { name: NAV_LINKS[0].name }));
    NAV_LINKS.forEach((link) => {
      expect(screen.queryByRole('link', { name: link.name })).toBeNull();
    });
  });

  it('renders without errors', () => {
    (useScreenSize as jest.Mock).mockReturnValue({ isClient: true, isMobileView: false });
    const { container } = renderWithThemeProvider(<NavBar />);
    expect(container).toBeInTheDocument();
  });

  it('does not render when isClient is false', () => {
    (useScreenSize as jest.Mock).mockReturnValue({ isClient: false, isMobileView: false });
    const { container } = renderWithThemeProvider(<NavBar />);
    expect(container).toBeEmptyDOMElement();
  });
});
