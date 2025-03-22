import type { Meta, StoryObj } from '@storybook/react';
import Select from './index';

const meta = {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    label: { control: 'text' },
    value: { control: 'text' },
    options: { control: 'object' },
    onChange: { action: 'onChange' },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'select-1',
    name: 'select-1',
    label: 'Select an option',
    value: '',
    options: ['Option 1', 'Option 2', 'Option 3'],
    onChange: (e) => console.log('Selected:', e.target.value),
  },
};

export const WithInitialValue: Story = {
  args: {
    id: 'select-2',
    name: 'select-2',
    label: 'Select an option',
    value: 'Option 2',
    options: ['Option 1', 'Option 2', 'Option 3'],
    onChange: (e) => console.log('Selected:', e.target.value),
  },
};
