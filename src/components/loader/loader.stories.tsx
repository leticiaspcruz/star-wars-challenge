import type { Meta, StoryObj } from '@storybook/react';
import LoaderLightsaber from './index';

const meta = {
  title: 'Components/Loader',
  component: LoaderLightsaber,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoaderLightsaber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
