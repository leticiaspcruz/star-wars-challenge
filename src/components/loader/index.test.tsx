import React from 'react';
import { render, screen } from '@testing-library/react';
import LoaderLightsaber from './';
import '@testing-library/jest-dom';
import { LIGHTSABERS } from '@/constants/lightsabers';

describe('LoaderLightsaber Component', () => {
  it('renders all lightsabers correctly', () => {
    render(<LoaderLightsaber />);

    LIGHTSABERS.forEach((saber) => {
      expect(screen.getByTestId(`lightsaber-${saber.id}`)).toBeInTheDocument();
      expect(screen.getByTestId(`plasma-${saber.color}`)).toBeInTheDocument();
      expect(screen.getByTestId(`switch-${saber.id}`)).toBeInTheDocument();
    });
  });

  it('renders the correct number of lightsabers', () => {
    render(<LoaderLightsaber />);
    const lightsabers = screen.getAllByTestId(/lightsaber-/);
    expect(lightsabers).toHaveLength(LIGHTSABERS.length);
  });

  it('renders the correct plasma colors', () => {
    render(<LoaderLightsaber />);
    LIGHTSABERS.forEach(saber => {
      const plasma = screen.getByTestId(`plasma-${saber.color}`);
      expect(plasma).toHaveClass(saber.color);
    });
  });

  it('renders without errors', () => {
      const { container } = render(<LoaderLightsaber/>);
      expect(container).toBeInTheDocument();
  });
});
