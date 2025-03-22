import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SectionList from './';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/providers/ThemeContext';
import { useScreenSize } from '@/hooks';
import { mockPlanets } from '@/mocks/planets';
import { mockCharacters } from '@/mocks/characters';

jest.mock('@/hooks');

describe('SectionList Component', () => {
  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  const mockedUseScreenSize = useScreenSize as jest.MockedFunction<typeof useScreenSize>;

  beforeEach(() => {
    mockedUseScreenSize.mockReturnValue({ isClient: true, isMobileView: false });
  });

  it('renders characters list', async () => {
    renderWithThemeProvider(<SectionList items={mockCharacters} isLoading={false} isError={false} currentPage={1} totalPages={1} onPageChange={jest.fn()} itemType="character" />);
    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
      expect(screen.getByText('Leia Organa')).toBeInTheDocument();
    });
  });

  it('renders planets list', async () => {
    renderWithThemeProvider(<SectionList items={mockPlanets} isLoading={false} isError={false} currentPage={1} totalPages={1} onPageChange={jest.fn()} itemType="planet" />);
    await waitFor(() => {
      expect(screen.getByText('Tatooine')).toBeInTheDocument();
      expect(screen.getByText('Alderaan')).toBeInTheDocument();
    });
  });
});
