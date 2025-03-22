import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumb from './';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/providers/ThemeContext';

jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a data-testid={`link-${href}`} href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('Breadcrumb Component', () => {
  const items = [
    { name: 'Home', href: '/' },
    { name: 'Category', href: '/category' },
    { name: 'Product', href: '/product' },
  ];

  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  it('renders breadcrumb items correctly', () => {
    renderWithThemeProvider(<Breadcrumb items={items} />);

    items.forEach((item, index) => {
      if (index < items.length - 1) {
        expect(screen.getByTestId(`link-${item.href}`)).toHaveTextContent(item.name);
      } else {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      }
    });
  });
});
