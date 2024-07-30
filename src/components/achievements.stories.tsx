import type { Meta, StoryObj } from '@storybook/react';

import { Achevements } from './achievements';

const meta = {
  component: Achevements,
} satisfies Meta<typeof Achevements>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};