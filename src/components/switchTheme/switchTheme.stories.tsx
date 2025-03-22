import type { Meta, StoryObj } from '@storybook/react';
import SwitchTheme from './index';
import { ThemeProvider } from '../../providers/ThemeContext';

const meta = {
  title: 'Components/SwitchTheme',
  component: SwitchTheme,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'text' },
  },
} satisfies Meta<typeof SwitchTheme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
      size: '10px'
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider>
            <Story />
        </ThemeProvider>
      );
    },
  ],
};

export const LargeSize: Story = {
    args: {
        size: '20px'
    },
    decorators: [
      (Story) => {
        return (
          <ThemeProvider>
              <Story />
          </ThemeProvider>
        );
      },
    ],
};
