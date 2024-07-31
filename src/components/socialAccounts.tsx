import { Box, Flex } from "@radix-ui/themes";
import { SocialAccount, SocialAccountProps } from "./socialAccount";

const socialAccountData: SocialAccountProps[] = [
  {
    serviceIconKey: "Twitter",
    accountName: "@laminne33",
    accountNickname: "Tatsuto C. YAMAMOTO",
    url: "https://twitter.com/laminne33",
  },
  {
    serviceIconKey: "GitHub",
    accountName: "@laminne",
    accountNickname: "Tatsuto YAMAMOTO",
    url: "https://github.com/laminne",
    iconURL: "https://github.com/laminne.png",
  },
  {
    serviceIconKey: "Facebook",
    accountName: "@tatsuto.yamamoto.3",
    accountNickname: "Tatsuto Yamamoto",
    url: "https://www.facebook.com/tatsuto.yamamoto.3",
  },
  {
    serviceIconKey: "keybase",
    accountName: "@laminne33569",
    accountNickname: "Tatsuto Yamamoto",
    url: "https://keybase.io/laminne33569",
  },
  {
    serviceIconKey: "Fedi",
    accountName: "@la@mi.growthers.dev",
    accountNickname: "laminne (C. Yamamoto)",
    url: "https://mi.growthers.dev/@la",
    iconURL:
      "https://mi.growthers.dev/proxy/avatar.webp?url=https%3A%2F%2Fcdn2.oshavery-app.net%2Fmetre%2Fmetre%2Fced00bae-b23b-40d3-ac70-bdcd2cf3c0d3.webp&avatar=1",
  },
];

export const SocialAccounts = () => {
  return (
    <Box>
        <Flex
        gap="4"
        width="100%"
        direction="row"
        justify="start"
        wrap="wrap"
      >
        {socialAccountData.map((v) => (
          <SocialAccount {...v} />
        ))}
        </Flex>
    </Box>
  );
};
