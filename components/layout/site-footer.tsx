// 모든 페이지 맨 아래에 붙는 푸터(하단 바)입니다.
// 클릭 같은 동작이 없는 정적인 부품이라 "use client"가 필요 없습니다.

import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>© 2026 {siteConfig.name}.</p>
        <p>Next.js · TailwindCSS · shadcn/ui</p>
      </div>
    </footer>
  )
}
