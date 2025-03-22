import type { Meta, StoryObj } from '@storybook/react';
import Banner from './index';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    pageName: { control: 'text' },
    pageDescription: { control: 'text' },
    finalText: { control: 'text' },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageName: 'A Long Time Ago...',
    pageDescription: 'In a galaxy far, far away....',
    finalText: 'The End.',
  },
};

export const ShortText: Story = {
  args: {
    pageName: 'Home',
    pageDescription: 'Welcome',
    finalText: 'Home.',
  },
};

export const LongText: Story = {
  args: {
    pageName: 'The Galactic Empire Strikes Back with a Very Long Title',
    pageDescription: 'This is a description that goes on and on to test how it handles very long text.',
    finalText: 'A very long final text to test the limits of the component.',
  },
};
