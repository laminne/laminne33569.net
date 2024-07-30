import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { Avatar, Box, Card, Flex, Link, Text } from "@radix-ui/themes";
import React, { ReactNode } from "react";
import { RxPencil1 } from "react-icons/rx";
import {
  SiActivitypub,
  SiFacebook,
  SiGithub,
  SiKeybase,
  SiWantedly,
} from "react-icons/si";

type ServiceIconKey =
  | "Twitter"
  | "GitHub"
  | "Facebook"
  | "Wantedly"
  | "keybase"
  | "Fedi"
  | "None";
export interface SocialAccountProps {
  /** サービスのアイコン */
  serviceIconKey: ServiceIconKey;
  /** アカウント名 @example `@laminne` */
  accountName: string;
  /** アカウント表示名 */
  accountNickname: string;
  /** アカウントのアイコンURL */
  iconURL?: string;
  /** アカウントのURL */
  url: string;
}

const serviceIconMap = new Map<ServiceIconKey, ReactNode>([
  ["Twitter", <TwitterLogoIcon />],
  ["GitHub", <SiGithub />],
  ["Facebook", <SiFacebook />],
  ["Wantedly", <SiWantedly />],
  ["keybase", <SiKeybase />],
  ["Fedi", <SiActivitypub />],
  ["None", <RxPencil1 />],
]);

export const SocialAccount: React.FC<SocialAccountProps> = (props) => {
  return (
    <Box maxWidth="15rem">
      <Card>
        <Flex gap="3" align="center">
          <Avatar size="3" radius="full" fallback="l" />
          <Box>
            <Box>
              <Flex gap="1" align="baseline">
                <Text as="p" size="3">
                  <Link href={props.url} underline="always">{props.accountNickname}</Link>
                </Text>
                {serviceIconMap.get(props.serviceIconKey)}
              </Flex>
            </Box>
            <Text as="p" size="1" color="gray">
              {props.accountName}
            </Text>
          </Box>
          <Box></Box>
        </Flex>
      </Card>
    </Box>
  );
};
