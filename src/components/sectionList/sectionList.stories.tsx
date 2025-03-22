import type { Meta, StoryObj } from '@storybook/react';
import SectionList from './index';
import { mockCharacters } from '../../mocks/characters';

const meta = {
  title: 'Sections/SectionList',
  component: SectionList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    itemType: { control: 'radio', options: ['character', 'planet', 'favorites', 'mixed'] },
    items: { control: 'object' },
    isLoading: { control: 'boolean' },
    isError: { control: 'boolean' },
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    onPageChange: { action: 'onPageChange' },
    useTitle: { control: 'boolean' },
    usePagination: { control: 'boolean' },
  },
} satisfies Meta<typeof SectionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CharactersList: Story = {
  args: {
    items: mockCharacters,
    itemType: 'character',
    currentPage: 1,
    totalPages: 5,
    onPageChange: (page) => console.log('Page:', page),
    isLoading: false,
    isError: false,
  },
};
