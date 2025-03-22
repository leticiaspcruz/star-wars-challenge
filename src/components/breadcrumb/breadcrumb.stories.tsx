import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumb from './index';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { name: 'Home', href: '/' },
      { name: 'Characters', href: '/characters' },
      { name: 'Planets', href: '/planets' },
    ],
  },
};

export const ShortBreadcrumb: Story = {
  args: {
    items: [
      { name: 'Home', href: '/' },
      { name: 'Characters', href: '/characters' },
    ],
  },
};

export const LongBreadcrumb: Story = {
  args: {
    items: [
      { name: 'Home', href: '/' },
      { name: 'Characters', href: '/characters' },
      { name: 'Planets', href: '/planets' },
    ],
  },
};

export const SingleItemBreadcrumb: Story = {
    args: {
        items: [{name: 'Home', href: '/'}]
    }
}
