import type { Meta, StoryObj } from '@storybook/react';

import { Achievements } from './achievements';

const meta = {
  component: Achievements,
} satisfies Meta<typeof Achievements>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};