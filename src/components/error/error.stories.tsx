import type { Meta, StoryObj } from '@storybook/react';
import Error from './index';

const meta = {
  title: 'Components/Error',
  component: Error,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    errorText: { control: 'text' },
  },
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    errorText: 'Ops! An error occurred.',
  },
};
