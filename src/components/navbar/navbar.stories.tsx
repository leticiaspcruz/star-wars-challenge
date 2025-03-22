import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NavBar from './index';

const mockNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const meta = {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DesktopView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktopLarge',
    },
  },
  decorators: [
    (Story) => <Story {...{ args: { navLinks: mockNavLinks } }} />,
  ],
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobileMedium',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative' }}>
        <Story {...{ args: { navLinks: mockNavLinks } }} />
      </div>
    ),
  ],
};
