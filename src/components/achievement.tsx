import { Badge, Box, Card, Flex, Heading, Inset, Text } from "@radix-ui/themes";
import React, { ReactNode } from "react";

export interface AchievementCardProps {
  /** サムネイル画像へのリンク */
  imageURL: string;
  /** タイトル */
  title: string;
  /** 日付 */
  date: Date;
  /** 日付を詳しく表示するか true->toLocaleString / false->年,月のみ */
  showDetail?: boolean;
  /** 説明 */
  description: string;
  /** タグ */
  tags: achievementTagKey[];
}

export type achievementTagKey = "受賞" | "登壇" | "開発" | "参加" | "その他";
const achievementTagMap = new Map<achievementTagKey, ReactNode>([
  ["受賞", <Badge color="orange">🎖️ 受賞</Badge>],
  ["参加", <Badge color="blue">👥 参加</Badge>],
  ["開発", <Badge color="blue">💻 開発</Badge>],
  ["登壇", <Badge color="green">🎤 登壇</Badge>],
  ["その他", <Badge color="gray">⭐️ その他</Badge>],
]);

export const AchievementCard: React.FC<AchievementCardProps> = ({date, imageURL, tags, title, description, showDetail}) => {
  const dateDetail = `${date.getFullYear().toString()}年 ${(date.getMonth()+1).toString()}月`;
  return (
    <Box maxWidth="20rem" height="100%">
      <Card size="3">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={imageURL}
            alt={title}
            style={{
              display: "block",
              width: "100%",
              height: "10rem",
              objectFit: "cover",
            }}
          />
        </Inset>
        <Box>
          <Heading as="h2" mb=".5rem" wrap="pretty">{title}</Heading>
          <Flex gap="2" mb=".5rem" wrap="wrap">
            {tags.map((tag) => achievementTagMap.get(tag))}
          </Flex>
          <Text as="p" size="3">
            {description}
          </Text>
          <Text as="p" size="1" color="gray" mt=".5rem">
            {showDetail ? date.toLocaleDateString("ja-JP") : dateDetail}
          </Text>
        </Box>
      </Card>
    </Box>
  );
};
