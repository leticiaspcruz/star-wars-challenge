import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PlanetsFilters from './';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/providers/ThemeContext';
import { Planet } from '@/interfaces/swapi';
import { mockPlanets } from '@/mocks/planets';

describe('PlanetsFilters Component', () => {
  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  const mockCurrentFilters: Partial<Planet> = {
    climate: 'arid',
  };

  const mockOnChangeFilters = jest.fn();

  it('renders all filter fields correctly', () => {
    renderWithThemeProvider(
      <PlanetsFilters
        onChangeFilters={mockOnChangeFilters}
        currentFilters={mockCurrentFilters}
        planets={mockPlanets}
      />
    );
    expect(screen.getByRole('combobox', { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /climate/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /terrain/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /population/i })).toBeInTheDocument();
  });

  it('renders filter buttons correctly', () => {
    renderWithThemeProvider(
      <PlanetsFilters
        onChangeFilters={mockOnChangeFilters}
        currentFilters={mockCurrentFilters}
        planets={mockPlanets}
      />
    );

    expect(screen.getByText('Apply filter')).toBeInTheDocument();
    expect(screen.getByText('Reset filter')).toBeInTheDocument();
  });

  it('populates select options with unique values', () => {
    renderWithThemeProvider(
      <PlanetsFilters
        onChangeFilters={mockOnChangeFilters}
        currentFilters={mockCurrentFilters}
        planets={mockPlanets}
      />
    );
    expect(screen.getByRole('combobox', { name: /climate/i })).toHaveTextContent('arid');
    expect(screen.getByRole('combobox', { name: /climate/i })).toHaveTextContent('temperate');
    expect(screen.getByRole('combobox', { name: /climate/i })).toHaveTextContent('temperate, tropical');
    expect(screen.getByRole('combobox', { name: /terrain/i })).toHaveTextContent('desert');
    expect(screen.getByRole('combobox', { name: /terrain/i })).toHaveTextContent('grasslands, mountains');
    expect(screen.getByRole('combobox', { name: /terrain/i })).toHaveTextContent('jungle, rainforests');
  });

  it('initializes form values with current filters', () => {
    renderWithThemeProvider(
      <PlanetsFilters
        onChangeFilters={mockOnChangeFilters}
        currentFilters={mockCurrentFilters}
        planets={mockPlanets}
      />
    );
    expect(screen.getByRole('combobox', { name: /climate/i })).toHaveValue('arid');
  });

  it('updates form values when select inputs change', () => {
      renderWithThemeProvider(
        <PlanetsFilters
          onChangeFilters={mockOnChangeFilters}
          currentFilters={mockCurrentFilters}
          planets={mockPlanets}
        />
      );

      fireEvent.change(screen.getByRole('combobox', { name: /name/i }), { target: { value: 'Alderaan' } });
      expect(screen.getByRole('combobox', { name: /name/i })).toHaveValue('Alderaan');
  });
});
