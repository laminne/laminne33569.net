import { DataList, Text } from "@radix-ui/themes"
import { ReactNode } from "react"

const aboutMeData: [string, ReactNode][] = [
    [
        "年齢",
        <Text as="p">20</Text>
    ],
    [
        "出身地",
        <Text>広島県広島市</Text>
    ],
    [
        "在住地",
        <Text>島根県松江市</Text>
    ],
    [
        "肩書き",
        <Text>学生 (高専 本科5年生)</Text>
    ],
    [
        "所属",
        <Text>松江工業高専 情報工学科</Text>
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
