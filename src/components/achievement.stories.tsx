import type { Meta, StoryObj } from '@storybook/react';

import { AchievementCard } from './achievement';

const meta = {
  component: AchievementCard,
} satisfies Meta<typeof AchievementCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:   {
    title: "第1回 Matz葉がにロボコン 大会運営支援システム開発",
    description: "松江市で開催された小学生向けのロボコン大会「Matz葉がにロボコン」の運営支援を行うシステム「KCMS」を開発しました。",
    tags: ["開発"],
    imageURL: "/kcms.png",
    date: new Date("2024-01-06T00:00:00.000"),
    showDetail: false,
    links: [["テストリンク", "https://laminne33569.net"]]
  }
};