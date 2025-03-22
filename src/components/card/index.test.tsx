import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Card from './';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/providers/ThemeContext';
import { mockCharacters } from '@/mocks/characters';
import { mockPlanets } from '@/mocks/planets';

describe('Card Component', () => {
  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  it('renders character info correctly from mock data', () => {
    renderWithThemeProvider(<Card type="character" data={mockCharacters[0]} />);
    expect(screen.getByText('Darth Vader')).toBeInTheDocument();
    expect(screen.getByText('Height: 202 cm')).toBeInTheDocument();
  });

  it('renders planet info correctly from mock data', () => {
    renderWithThemeProvider(<Card type="planet" data={mockPlanets[0]} />);
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
    expect(screen.getByText('Rotation Period: 23 hours')).toBeInTheDocument();
  });

  it('toggles show more/less with mock character data', async () => {
    renderWithThemeProvider(<Card type="character" data={mockCharacters[0]} />);
    fireEvent.click(screen.getByText('Show more'));
    await waitFor(() => {
      expect(screen.getByText('Hair Color: none')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('Show less'));
    await waitFor(() => {
      expect(screen.queryByText('Hair Color: none')).toBeNull();
    });
  });

  it('renders mixed info correctly with mock data', () => {
    renderWithThemeProvider(<Card type="mixed" data={mockCharacters[0]} />);
    expect(screen.getByText('Darth Vader')).toBeInTheDocument();

    renderWithThemeProvider(<Card type="mixed" data={mockPlanets[0]} />);
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
  });

  it('renders favorites info correctly with mock data', () => {
    renderWithThemeProvider(<Card type="favorites" data={mockCharacters[0]} />);
    expect(screen.getByText('Darth Vader')).toBeInTheDocument();

    renderWithThemeProvider(<Card type="favorites" data={mockPlanets[0]} />);
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
  });
});
