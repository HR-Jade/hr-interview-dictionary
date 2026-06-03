import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "연락처",
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-2 text-2xl font-semibold">연락처</h1>
      <p className="mb-6 text-muted-foreground">
        입력 폼을 조합한 예시입니다. (아직 실제로 전송되지는 않아요.)
      </p>

      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>문의하기</CardTitle>
          <CardDescription>이름과 이메일을 남겨주세요.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">이름</Label>
            <Input id="name" placeholder="홍길동" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-email">이메일</Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="you@example.com"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">보내기</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
