"use client"

// 모든 페이지 맨 위에 항상 붙어있는 헤더(상단 바)입니다.
// 왼쪽: 로고 + 가로 메뉴 / 오른쪽: 다크모드 버튼 + 모바일 메뉴 버튼

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Rocket } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { MobileNav } from "@/components/layout/mobile-nav"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    // sticky top-0: 스크롤해도 화면 맨 위에 계속 붙어있게 합니다
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        {/* 왼쪽 묶음: 로고 + (넓은 화면용) 가로 메뉴 */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <Rocket className="size-5" />
            <span>{siteConfig.name}</span>
          </Link>

          {/* hidden md:flex → 좁은 화면에선 숨기고, 넓은 화면에서만 보입니다 */}
          <nav className="hidden items-center gap-1 md:flex">
            {siteConfig.navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground",
                    isActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* 오른쪽 묶음: 다크모드 버튼 + 모바일 메뉴(좁은 화면에서만 보임) */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
