// 사이트 전체에서 함께 쓰는 정보를 한 곳에 모아둔 설정 파일입니다.
// 이름이나 메뉴를 바꾸고 싶으면 여기만 고치면 헤더·푸터·모바일 메뉴에 한 번에 반영됩니다.

export const siteConfig = {
  name: "모던 웹 스타터킷",
  description: "Next.js, TypeScript, TailwindCSS, shadcn/ui로 만든 출발점.",

  // 헤더와 모바일 메뉴에 표시되는 메뉴 링크 목록입니다.
  // href는 이동할 주소, title은 화면에 보이는 글자입니다.
  navItems: [
    { title: "홈", href: "/" },
    { title: "소개", href: "/about" },
    { title: "연락처", href: "/contact" },
  ],
}

// siteConfig의 타입(데이터 모양)을 다른 파일에서 쓰고 싶을 때를 위해 함께 내보냅니다.
export type SiteConfig = typeof siteConfig
