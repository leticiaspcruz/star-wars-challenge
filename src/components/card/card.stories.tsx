import type { Meta, StoryObj } from '@storybook/react';
import Card from './index';
import { Character } from '@/interfaces/swapi';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['character', 'planet', 'favorites', 'mixed'] },
    data: { control: 'object' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const characterData: Character = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: ['https://swapi.dev/api/films/1/'],
  url: 'https://swapi.dev/api/people/1/',
};

export const DefaultCard: Story = {
  args: {
    type: 'character',
    data: characterData,
  },
};
