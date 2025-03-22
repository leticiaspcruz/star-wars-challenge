import type { Meta, StoryObj } from '@storybook/react';
import Footer from './index';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomCopyright: Story = {
  args: {
    customCopyright: '&copy; 2025 by Custom Copyright',
  },
  render: (args) => (
    <Footer {...args} />
  ),
};

export const WithCustomSocialMedia: Story = {
  args: {
    customSocialMedia: {
      facebook: 'https://custom-facebook.com',
      instagram: 'https://custom-instagram.com',
      linkedin: 'https://custom-linkedin.com',
    },
  },
  render: (args) => (
    <Footer {...args} />
  ),
};

export const WithNoSocialMedia: Story = {
    args: {
        hideSocialMedia: true,
    },
    render: (args) => (
        <Footer {...args} />
    )
}
