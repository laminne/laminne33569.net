import { Avatar, Box, Card, Flex, Link, Text } from "@radix-ui/themes";
import React, { ReactNode } from "react";
import { RxPencil1 } from "react-icons/rx";
import {
  SiActivitypub,
  SiFacebook,
  SiGithub,
  SiKeybase,
  SiWantedly,
  SiX,
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
  ["Twitter", <SiX />],
  ["GitHub", <SiGithub />],
  ["Facebook", <SiFacebook />],
  ["Wantedly", <SiWantedly />],
  ["keybase", <SiKeybase />],
  ["Fedi", <SiActivitypub />],
  ["None", <RxPencil1 />],
]);

export const SocialAccount: React.FC<SocialAccountProps> = (props) => {
  return (
    <Box maxWidth="40rem" width="20rem">
      <Card>
        <Flex gap="3" align="center">
          <Avatar size="4" radius="full" fallback="l" src={props.iconURL} />
          <Box>
            <Box>
              <Flex gap="2" align="center">
                <Text as="p" size="4">
                  <Link href={props.url} underline="always">{props.accountNickname}</Link>
                </Text>
                {serviceIconMap.get(props.serviceIconKey)}
              </Flex>
            </Box>
            <Text as="p" size="2" color="gray">
              {props.accountName}
            </Text>
          </Box>
          <Box></Box>
        </Flex>
      </Card>
    </Box>
  );
};
