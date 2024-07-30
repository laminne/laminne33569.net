import type { Meta, StoryObj } from '@storybook/react';

import { AchievementCard } from './achievement';

const meta = {
  component: AchievementCard,
} satisfies Meta<typeof AchievementCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageURL: "https://github.com/laminne.png",
    title: "title",
    date: new Date("2004-05-16T08:00:00.000Z"),
    showDetail: true,
    description: "new Human(props);",
    tags: ["受賞", "登壇", "参加", "その他", "開発"],
  }
};