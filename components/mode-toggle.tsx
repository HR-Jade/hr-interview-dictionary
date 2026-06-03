"use client"

// 이 파일은 "다크모드 전환 버튼"입니다.
// 해(Sun)/달(Moon) 아이콘 버튼을 누르면 밝은 테마 ↔ 어두운 테마가 바뀝니다.

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  // resolvedTheme: 지금 실제로 보이는 테마("light" 또는 "dark")
  // setTheme: 테마를 바꾸는 함수
  const { resolvedTheme, setTheme } = useTheme()

  // 버튼을 누르면 현재 테마의 반대로 전환합니다.
  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="테마 전환"
      title="밝음/어두움 전환 (단축키: d)"
    >
      {/* 해와 달 아이콘을 둘 다 깔아두고, CSS로 현재 테마에 맞는 것만 보여줍니다.
          (밝을 때는 해, 어두울 때는 달 — .dark 클래스 유무로 자동 전환)
          서버와 브라우저가 똑같은 화면을 그리므로 깜빡임/경고가 없습니다. */}
      <Sun className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">테마 전환</span>
    </Button>
  )
}
