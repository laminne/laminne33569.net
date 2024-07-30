import type { Meta, StoryObj } from '@storybook/react';

import { SocialAccount } from './socialAccount';

const meta = {
  component: SocialAccount,
} satisfies Meta<typeof SocialAccount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accountName: '@laminne',
    accountNickname: 'laminne',
    url: 'https://twitter.com/laminne33',
    serviceIconKey: "Twitter",
  },
} satisfies Story;