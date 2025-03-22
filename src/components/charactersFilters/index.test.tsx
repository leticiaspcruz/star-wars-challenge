import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CharacterFilters from './';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/providers/ThemeContext';
import { mockCharacters } from '@/mocks/characters';

describe('CharacterFilters Component', () => {
  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  const onChangeFiltersMock = jest.fn();
  const currentFilters = { name: '', gender: '', hair_color: '' };

  it('renders filter fields correctly', () => {
    renderWithThemeProvider(
      <CharacterFilters
        onChangeFilters={onChangeFiltersMock}
        currentFilters={currentFilters}
        characters={mockCharacters}
      />
    );

    expect(screen.getByTestId('select-name')).toBeInTheDocument();
    expect(screen.getByTestId('select-gender')).toBeInTheDocument();
    expect(screen.getByTestId('select-hair_color')).toBeInTheDocument();
  });

  it('renders filter buttons correctly', () => {
    renderWithThemeProvider(
      <CharacterFilters
        onChangeFilters={onChangeFiltersMock}
        currentFilters={currentFilters}
        characters={mockCharacters}
      />
    );

    expect(screen.getByTestId('filter-button-apply-filter')).toBeInTheDocument();
    expect(screen.getByTestId('filter-button-reset-filter')).toBeInTheDocument();
  });

  it('resets form and calls onChangeFilters with empty object when reset button is clicked', () => {
    renderWithThemeProvider(
      <CharacterFilters
        onChangeFilters={onChangeFiltersMock}
        currentFilters={currentFilters}
        characters={mockCharacters}
      />
    );

    fireEvent.change(screen.getByTestId('select-name'), { target: { value: 'Leia Organa' } });
    fireEvent.click(screen.getByTestId('filter-button-reset-filter'));

    expect(onChangeFiltersMock).toHaveBeenCalledWith({});
    expect((screen.getByTestId('select-name') as HTMLSelectElement).value).toBe('');
  });
});
