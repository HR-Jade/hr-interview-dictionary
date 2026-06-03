import type { Metadata } from "next"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// 이 페이지 전용 제목 (브라우저 탭에 "소개"로 표시됩니다)
export const metadata: Metadata = {
  title: "소개",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-2 text-2xl font-semibold">소개</h1>
      <p className="mb-6 text-muted-foreground">
        메뉴가 실제로 작동하는지 보여주기 위한 예시 페이지입니다.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>폴더가 곧 주소예요</CardTitle>
          <CardDescription>
            이 페이지는 app/about/page.tsx 파일입니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm leading-relaxed text-muted-foreground">
          Next.js에서는 app 폴더 안에 폴더를 만들면 그 이름이 그대로 웹 주소가
          됩니다. 그래서 app/about 폴더 안의 page.tsx 는 /about 주소로 열리고,
          헤더 메뉴의 “소개”를 누르면 여기로 옵니다.
        </CardContent>
      </Card>
    </div>
  )
}
