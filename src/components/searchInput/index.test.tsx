import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchInput from './';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/providers/ThemeContext';
import { useDebounce } from 'use-debounce';

jest.mock('use-debounce');

describe('SearchInput Component', () => {
  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  const mockedUseDebounce = useDebounce as jest.MockedFunction<typeof useDebounce>;

  it('renders the placeholder correctly', () => {
    mockedUseDebounce.mockReturnValue(['', Object.assign(jest.fn(), { cancel: jest.fn(), flush: jest.fn(), isPending: jest.fn() })]);
    renderWithThemeProvider(<SearchInput placeholder="Search..." onSearch={jest.fn()} />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('updates the input value on change', () => {
    mockedUseDebounce.mockReturnValue(['', Object.assign(jest.fn(), { cancel: jest.fn(), flush: jest.fn(), isPending: jest.fn() })]);
    renderWithThemeProvider(<SearchInput placeholder="Search..." onSearch={jest.fn()} />);
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });

  it('calls onSearch with debounced value', async () => {
    const onSearchMock = jest.fn();
    mockedUseDebounce.mockReturnValue(['test', Object.assign(jest.fn(), { cancel: jest.fn(), flush: jest.fn(), isPending: jest.fn() })]);
    renderWithThemeProvider(<SearchInput placeholder="Search..." onSearch={onSearchMock} />);

    await waitFor(() => {
      expect(onSearchMock).toHaveBeenCalledWith('test');
    });
  });
});
