import type { Meta, StoryObj } from '@storybook/react';
import Banner from './index';
import { StaticImageData } from 'next/legacy/image';
import mockImage from '../../assets/home-banner.jpg';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    altText: { control: 'text' },
    text: { control: 'text' },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: mockImage as StaticImageData,
    altText: 'Banner Image',
    text: 'This is a banner text',
  },
};
