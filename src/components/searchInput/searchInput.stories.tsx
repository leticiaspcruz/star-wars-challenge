import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from './index';

const meta = {
  title: 'Inputs/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    onSearch: { action: 'onSearch' },
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
    onSearch: (searchTerm: string) => {
      console.log('Search term:', searchTerm);
    },
  },
};
