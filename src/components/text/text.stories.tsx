import type { Meta, StoryObj } from '@storybook/react';
import Text from './index';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['heading', 'subheading', 'paragraph', 'small'] },
    weight: { control: 'radio', options: ['regular', 'bold', 'light'] },
    align: { control: 'radio', options: ['left', 'center', 'right'] },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paragraph: Story = {
  args: {
    children: 'This is a paragraph text.',
    variant: 'paragraph',
  },
};

export const Heading: Story = {
  args: {
    children: 'This is a heading text.',
    variant: 'heading',
  },
};

export const Subheading: Story = {
  args: {
    children: 'This is a subheading text.',
    variant: 'subheading',
  },
};

export const BoldText: Story = {
  args: {
    children: 'This text is bold.',
    weight: 'bold',
  },
};

export const LightText: Story = {
  args: {
    children: 'This text is light.',
    weight: 'light',
  },
};

export const CenteredText: Story = {
  args: {
    children: 'This text is centered.',
    align: 'center',
  },
};
