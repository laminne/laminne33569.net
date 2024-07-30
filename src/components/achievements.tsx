import { Box, Flex } from "@radix-ui/themes";
import { AchievementCard, AchievementCardProps } from "./achievement";

const achievementData: AchievementCardProps[] = [
  {
    title: "松江OSS活用ビジネスプランコンテスト 2019 優秀賞",
    description:
      "松江市で開催された松江OSS活用ビジネスプランコンテストに学生部門で参加し、全体2位の優秀賞を受賞しました。",
    tags: ["登壇", "受賞"],
    imageURL: "",
    date: new Date("2019-02-23T00:00:00.000"),
    showDetail: false,
  },
  {
    title: "中高生国際Rubyプログラミングコンテスト2020 最優秀賞",
    description:
      "チーム 「松江高専の人」としてDXRubyを使ったシューティングゲーム「Spell Out」を開発しました。ゲーム部門最優秀賞を受賞しました。",
    tags: ["開発", "受賞"],
    imageURL: "",
    date: new Date("2021-02-01T00:00:00.000"),
    showDetail: false,
  },
  {
    title: "Rubyアソシエーション オンラインセミナー 登壇",
    description:
      "Rubyアソシエーション主催のオンラインセミナー「〜プログラミングで可能性の扉を開こう〜」に登壇しました。",
    tags: ["登壇"],
    imageURL: "",
    date: new Date("2021-11-01T00:00:00.000"),
    showDetail: false,
  },
  {
    title: "日本情報オリンピック 2021/2022 本選出場",
    description:
      "日本情報オリンピックの本選に松江高専代表(学校推薦枠)として出場しました。",
    tags: ["参加"],
    imageURL: "",
    date: new Date("2022-02-01T00:00:00.000"),
    showDetail: false,
  },
  {
    title: "Hatena (Remote) Internship 2023",
    description:
      "株式会社はてなのサマーインターンシップに参加しました。最終日の成果発表会ではMackerelチームとして発表し、社長賞を受賞しました。",
    tags: ["開発", "受賞", "その他"],
    imageURL: "",
    date: new Date("2023-08-10T00:00:00.000"),
    showDetail: false,
  },
];

export const Achevements = () => {
  return (
    <Box>
      <Flex gap="3" width="auto" direction="row" justify="start" wrap="wrap" align="stretch">
        {achievementData.map((v) => (
          <AchievementCard
            imageURL={v.imageURL}
            date={v.date}
            description={v.description}
            showDetail={v.showDetail}
            title={v.title}
            tags={v.tags}
          />
        ))}
      </Flex>
    </Box>
  );
};
