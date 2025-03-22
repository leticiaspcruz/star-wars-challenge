import type { Meta, StoryObj } from '@storybook/react';
import CharacterFilters from './index';
import { mockCharacters } from '../../mocks/characters';

const meta = {
  title: 'Filters/CharacterFilters',
  component: CharacterFilters,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChangeFilters: { action: 'onChangeFilters' },
    currentFilters: { control: 'object' },
    characters: { control: 'object' },
  },
} satisfies Meta<typeof CharacterFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    characters: mockCharacters,
    currentFilters: {},
    onChangeFilters: (filters) => {
      console.log('Filters applied:', filters);
    },
  },
};

export const WithInitialFilters: Story = {
  args: {
    characters: mockCharacters,
    currentFilters: { gender: 'male' },
    onChangeFilters: (filters) => {
      console.log('Filters applied:', filters);
    },
  },
};

export const WithAllFilters: Story = {
  args: {
    characters: mockCharacters,
    currentFilters: { gender: 'male', name: 'Luke Skywalker', hair_color: 'blond' },
    onChangeFilters: (filters) => {
      console.log('Filters applied:', filters);
    },
  },
};
