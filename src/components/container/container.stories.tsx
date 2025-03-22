import type { Meta, StoryObj } from '@storybook/react';
import Container from './index';
import { Text } from '@/components';

const meta = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Text>This is a container with content.</Text>,
  },
};

export const WithLongContent: Story = {
  args: {
    children: (
      <div>
        <Text>
          This is a container with a lot of content. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </Text>
      </div>
    ),
  },
};

export const WithMultipleElements: Story = {
  args: {
    children: (
      <div>
        <Text>Element 1</Text>
        <Text>Element 2</Text>
        <Text>Element 3</Text>
      </div>
    ),
  },
};
