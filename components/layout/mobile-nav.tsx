"use client"

// 화면이 좁을 때(휴대폰 등) 쓰는 메뉴입니다.
// 햄버거(☰) 버튼을 누르면 왼쪽에서 서랍(Sheet)이 슬라이드되어 메뉴가 나옵니다.

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNav() {
  const pathname = usePathname() // 지금 보고 있는 페이지 주소
  const [open, setOpen] = React.useState(false) // 서랍이 열려있는지 여부

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* md(중간 화면) 이상에서는 숨김 — 좁은 화면에서만 보입니다 */}
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-label="메뉴 열기"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 px-4">
          {siteConfig.navItems.map((item) => {
            // 현재 페이지면 강조 표시 (홈은 정확히 "/"일 때만)
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)} // 메뉴를 누르면 서랍을 닫습니다
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
                  isActive
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
