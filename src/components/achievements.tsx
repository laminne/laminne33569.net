import { Box, Flex } from "@radix-ui/themes";
import { AchievementCard, AchievementCardProps } from "./achievement";

const achievementData: AchievementCardProps[] = [
  {
    title: "松江OSS活用ビジネスプランコンテスト 2019 優秀賞",
    description:
      "松江市で開催された松江OSS活用ビジネスプランコンテストに学生部門で参加し、優秀賞を受賞しました。",
    tags: ["登壇", "受賞"],
    imageURL: "/matsueOSS.png",
    date: new Date("2019-02-23T00:00:00.000"),
    showDetail: false,
    links: [
      ["松江OSS活用ビジネスプランコンテスト2019", "https://www.shimane-oss.org/biz-contest2019/"]
    ]
  },
  {
    title: "中高生国際Rubyプログラミングコンテスト2020 最優秀賞",
    description:
      "チーム 「松江高専の人」としてDXRubyを使ったシューティングゲーム「Spell Out」を開発しました。ゲーム部門最優秀賞を受賞しました。",
    tags: ["開発", "受賞"],
    imageURL: "/spellout.png",
    date: new Date("2021-02-01T00:00:00.000"),
    showDetail: false,
    links: [
      ["stonesaw/spell-out", "https://github.com/stonesaw/spell-out"]
    ]
  },
  {
    title: "Rubyアソシエーション オンラインセミナー 登壇",
    description:
      "Rubyアソシエーション主催のオンラインセミナー「〜プログラミングで可能性の扉を開こう〜」に登壇しました。",
    tags: ["登壇"],
    imageURL: "/spellout.png",
    date: new Date("2021-11-01T00:00:00.000"),
    showDetail: false,
  },
  {
    title: "日本情報オリンピック 2021/2022 本選出場",
    description:
      "日本情報オリンピックの本選に松江高専代表(学校推薦枠)として出場しました。",
    tags: ["参加"],
    imageURL: "/joi.png",
    date: new Date("2022-02-01T00:00:00.000"),
    showDetail: false,
    links: [["JOI 2021/2022 公式サイト", "https://www2.ioi-jp.org/joi/2021/index.html"]]
  },
  {
    title: "Hatena (Remote) Internship 2023",
    description:
      "Mackerelチームで数値ウィジェット機能の新機能の開発などを行い、最終日の成果発表会で社長賞を受賞しました。",
    tags: ["開発", "受賞", "その他"],
    imageURL: "/intern.png",
    date: new Date("2023-08-10T00:00:00.000"),
    showDetail: false,
    links: [["インターンシップ レポートサイト", "https://hatena.co.jp/recruit/intern/2023/report"]]
  },
  {
    title: "第1回 Matz葉がにロボコン 大会運営支援システム開発",
    description: "松江市で開催された小学生向けのロボコン大会「Matz葉がにロボコン」の運営支援を行うシステム「KCMS」を開発しました。",
    tags: ["開発"],
    imageURL: "/kcms.png",
    date: new Date("2024-01-06T00:00:00.000"),
    showDetail: false,
    links: [["poporonnet/kcms", "https://github.com/poporonnet/kcms"]],
  }
];

export const Achievements = () => {
  return (
    <Box width="100%" m="0">
      <Flex gap="3" width="100%" direction="row" justify="center" wrap="wrap" align="stretch">
        {achievementData.map((v) => (
          <AchievementCard
            imageURL={v.imageURL}
            date={v.date}
            description={v.description}
            showDetail={v.showDetail}
            title={v.title}
            tags={v.tags}
            links={v.links}
            key={v.title}
          />
        ))}
      </Flex>
    </Box>
  );
};
