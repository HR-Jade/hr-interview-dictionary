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

// 스타터킷에 포함된 기술 스택 목록 (안내 카드에서 보여줍니다)
const techStack = [
  "Next.js 16 (App Router)",
  "TypeScript",
  "TailwindCSS v4",
  "shadcn/ui",
  "lucide-react 아이콘",
  "다크모드 (next-themes)",
]

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* 환영 소개 영역 */}
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          모던 웹 스타터킷
        </h1>
        <p className="mt-3 text-muted-foreground">
          Next.js · TypeScript · TailwindCSS · shadcn/ui · 다크모드 — 바로 개발을
          시작하세요.
        </p>
      </section>

      {/* 데모 카드 2개 */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* 카드 1: 입력 폼 데모 */}
        <Card>
          <CardHeader>
            <CardTitle>로그인 데모</CardTitle>
            <CardDescription>
              Card, Label, Input, Button을 함께 쓰는 예시입니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">로그인</Button>
          </CardFooter>
        </Card>

        {/* 카드 2: 포함된 기술 스택 안내 */}
        <Card>
          <CardHeader>
            <CardTitle>포함된 기술</CardTitle>
            <CardDescription>바로 개발을 시작할 수 있어요.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2 text-sm">
              {techStack.map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {tech}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground">
            오른쪽 위 버튼이나 키보드 <kbd className="mx-1">d</kbd>키로 다크모드를
            바꿔보세요.
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
