import type { Meta, StoryObj } from '@storybook/react';
import PlanetsFilters from './index';
import { mockPlanets } from '../../mocks/planets';

const meta = {
  title: 'Filters/PlanetsFilters',
  component: PlanetsFilters,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChangeFilters: { action: 'onChangeFilters' },
    currentFilters: { control: 'object' },
    planets: { control: 'object' },
  },
} satisfies Meta<typeof PlanetsFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    planets: mockPlanets,
    currentFilters: {},
    onChangeFilters: (filters) => {
      console.log('Filters applied:', filters);
    },
  },
};

export const WithInitialFilters: Story = {
  args: {
    planets: mockPlanets,
    currentFilters: { climate: 'arid' },
    onChangeFilters: (filters) => {
      console.log('Filters applied:', filters);
    },
  },
};

export const WithAllFilters: Story = {
  args: {
    planets: mockPlanets,
    currentFilters: { climate: 'arid', name: 'Tatooine', terrain: 'desert', population: '200000' },
    onChangeFilters: (filters) => {
      console.log('Filters applied:', filters);
    },
  },
};
