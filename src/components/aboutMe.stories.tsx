import type { Meta, StoryObj } from '@storybook/react';

import { AboutMe } from './aboutMe';

const meta = {
  component: AboutMe,
} satisfies Meta<typeof AboutMe>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};