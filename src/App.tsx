import {
  Avatar,
  Box,
  Callout,
  Flex,
  Heading,
  Link,
  Section,
  Text,
} from "@radix-ui/themes";
import { SocialAccounts } from "./components/socialAccounts";
import { Achievements } from "./components/achievements";
import { useState } from "react";
import { AboutMe } from "./components/aboutMe";
import { InfoCircledIcon } from "@radix-ui/react-icons";

type colorName =
  | "gray"
  | "gold"
  | "bronze"
  | "brown"
  | "yellow"
  | "amber"
  | "orange"
  | "tomato"
  | "red"
  | "ruby"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "iris"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "jade"
  | "green"
  | "grass"
  | "lime"
  | "mint"
  | "sky";
const aka: [string, colorName][] = [
  ["laminne", "ruby"],
  ["laminne33569", "purple"],
  ["Tatsuto Yamamoto", "blue"],
  ["Tatsuto C. YAMAMOTO", "cyan"],
  ["Cotori Yamamoto", "amber"],
];

function App() {
  // 添字
  const [name, setName] = useState<number>(2);

  return (
    <>
      <Section pb="0">
        <Flex direction="column" justify="center" align="center" mb="0rem">
          <Avatar
            src="https://github.com/laminne.png"
            fallback="la"
            radius="full"
            size="9"
          />
          <Heading as="h2" size="8" mt="2rem" align="center">
            Hi 👋 <wbr />
            I'm <wbr />
            <Text
              as="span"
              color={aka[name % 5][1]}
              onClick={() => {
                setName(name + 1);
              }}
              style={{ cursor: "pointer" }}
            >
              {aka[name % 5][0]}
            </Text>
          </Heading>

          <Text as="p" wrap="wrap" align="center">
            Web programmer
            <wbr />{" "}
            <Text as="span" color="blue">
              @Kyoto / @Hiroshima
            </Text>
          </Text>
        </Flex>
      </Section>

      <Section pt="3rem">
        <Flex direction="column" justify="center" align="center">
          <Box maxWidth="50rem">
            <Text wrap="wrap" as="p" mb="2.5rem">
              松江高専の5年生です.
              <br />
              Web系を中心にプログラミングをしています.
              <br />
              基本的に
              <ruby>
                laminne<rp>(</rp>
                <rt>らみん</rt>
                <rp>)</rp>
              </ruby>
              という名前で活動しています(nは2個です).
            </Text>
          </Box>
          <AboutMe />
        </Flex>
      </Section>

      <Section>
        <Flex direction="column" justify="center" align="center">
          <Heading as="h2" mb="1rem">
            主な実績
          </Heading>

          <Callout.Root mb="2rem">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              ここは内容が充実していません。
              <br />
              <Link href="https://github.com/laminne/laminne33569.net">
                laminne/laminne33569.net
              </Link>
              {" "}にStarをつけてくれると嬉しいです
            </Callout.Text>
          </Callout.Root>

          <Box maxWidth="80%">
            <Achievements />
          </Box>
        </Flex>
      </Section>

      <Section maxWidth="75%" ml="12.5%">
        <Heading as="h2" mb="1rem">
          外部リンク
        </Heading>

        <SocialAccounts />
        <Text as="p" size="2" color="gray" mt="1rem">
          <InfoCircledIcon />{" "}
          商標やアイコンの権利はそれぞれの権利者に帰属します.
          <br />
          Simple icons/Radix iconsをReact icons経由で利用しています
        </Text>
      </Section>

      <Text as="div" align="center">
        &copy; 2024 Tatsuto Yamamoto
      </Text>
    </>
  );
}

export default App;
