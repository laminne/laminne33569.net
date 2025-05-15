import { DataList, Text } from "@radix-ui/themes"
import { ReactNode } from "react"

const aboutMeData: [string, ReactNode][] = [
    [
        "年齢 (Age)",
        <Text as="p">21</Text>
    ],
    [
        "出身地 (Birthplace)",
        <Text>広島県広島市 (Hiroshima)</Text>
    ],
    [
        "在住地 (Residential Area)",
        <Text>京都府京都市 (Kyoto)</Text>
    ],
    [
        "所属 (Worked at)",
        <Text><a href="https://www.hatena.co.jp/">株式会社 はてな (Hatena Co., Ltd.)</a></Text>
    ],
    [
        "主なプログラミング言語",
        <Text>TypeScript(フロントエンド/バックエンド), Go</Text>
    ]
]
export const AboutMe = () => {
    return (
        <DataList.Root>
            {aboutMeData.map((v) => (
                <DataList.Item key={v[0]}>
                    <DataList.Label>{v[0]}</DataList.Label>
                    <DataList.Value>{v[1]}</DataList.Value>
                </DataList.Item>
            ))}
        </DataList.Root>
    )
}
