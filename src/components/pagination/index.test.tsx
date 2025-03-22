import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/providers/ThemeContext';

describe('Pagination Component', () => {
  const renderWithThemeProvider = (component: React.ReactElement) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
  };

  it('renders current page and total pages correctly', () => {
    renderWithThemeProvider(<Pagination currentPage={3} totalPages={10} onPageChange={() => {}} />);
    expect(screen.getByText('Page 3 of 10')).toBeInTheDocument();
  });

  it('calls onPageChange with previous page when "Prev" is clicked', () => {
    const onPageChangeMock = jest.fn();
    renderWithThemeProvider(<Pagination currentPage={5} totalPages={10} onPageChange={onPageChangeMock} />);
    fireEvent.click(screen.getByText('Prev'));
    expect(onPageChangeMock).toHaveBeenCalledWith(4);
  });

  it('calls onPageChange with next page when "Next" is clicked', () => {
    const onPageChangeMock = jest.fn();
    renderWithThemeProvider(<Pagination currentPage={5} totalPages={10} onPageChange={onPageChangeMock} />);
    fireEvent.click(screen.getByText('Next'));
    expect(onPageChangeMock).toHaveBeenCalledWith(6);
  });

  it('disables "Prev" button on the first page', () => {
    renderWithThemeProvider(<Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />);
    expect(screen.getByText('Prev')).toBeDisabled();
  });

  it('disables "Next" button on the last page', () => {
    renderWithThemeProvider(<Pagination currentPage={10} totalPages={10} onPageChange={() => {}} />);
    expect(screen.getByText('Next')).toBeDisabled();
  });

  it('does not call onPageChange when "Prev" is clicked on the first page', () => {
    const onPageChangeMock = jest.fn();
    renderWithThemeProvider(<Pagination currentPage={1} totalPages={10} onPageChange={onPageChangeMock} />);
    fireEvent.click(screen.getByText('Prev'));
    expect(onPageChangeMock).not.toHaveBeenCalled();
  });

  it('does not call onPageChange when "Next" is clicked on the last page', () => {
    const onPageChangeMock = jest.fn();
    renderWithThemeProvider(<Pagination currentPage={10} totalPages={10} onPageChange={onPageChangeMock} />);
    fireEvent.click(screen.getByText('Next'));
    expect(onPageChangeMock).not.toHaveBeenCalled();
  });
});
