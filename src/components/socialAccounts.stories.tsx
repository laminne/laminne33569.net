import type { Meta, StoryObj } from '@storybook/react';

import { SocialAccounts } from './socialAccounts';

const meta = {
  component: SocialAccounts,
} satisfies Meta<typeof SocialAccounts>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};