# 모던 웹 스타터킷

빠르게 웹 개발을 시작할 수 있도록 미리 세팅해 둔 출발점(스타터킷)입니다.
설치는 이미 끝나 있으니, 아래 순서대로 실행하면 바로 화면을 볼 수 있어요.

## 포함된 기술

| 기술 | 역할 |
|------|------|
| Next.js (App Router) | 웹 프레임워크 (페이지·서버를 담당) |
| TypeScript | 타입이 있는 JavaScript (실수를 미리 잡아줌) |
| TailwindCSS v4 | CSS 스타일링 (클래스로 디자인) |
| shadcn/ui | 예쁜 UI 컴포넌트 모음 |
| lucide-react | 아이콘 모음 |
| next-themes | 다크모드(밝음/어두움) 전환 |

## 실행 방법

터미널에서 이 폴더(`next-app`)로 이동한 뒤:

```bash
npm run dev
```

그다음 브라우저에서 **http://localhost:3000** 을 열면 됩니다.
(멈추려면 터미널에서 `Ctrl + C`)

## 다크모드 사용법

- 화면 오른쪽 위의 **해/달 버튼**을 누르면 밝음 ↔ 어두움이 바뀝니다.
- 또는 키보드 **`d` 키**로도 바꿀 수 있어요.

## 폴더 구조 (핵심만)

```
next-app/
├─ app/
│  ├─ layout.tsx      # 모든 페이지를 감싸는 바깥 틀 (헤더·푸터·테마 적용)
│  ├─ page.tsx        # 첫 화면 (홈페이지, 주소: /)
│  ├─ about/page.tsx  # 소개 페이지 (주소: /about)
│  ├─ contact/page.tsx# 연락처 페이지 (주소: /contact)
│  └─ globals.css     # 전체 색상·테마 정의 (밝음/어두움 색)
├─ components/
│  ├─ ui/             # shadcn 기본 부품 (button, card, input, label, sheet)
│  ├─ layout/         # 사이트 틀: site-header, site-footer, mobile-nav
│  ├─ mode-toggle.tsx # 다크모드 전환 버튼
│  └─ theme-provider.tsx # 테마 기능을 켜주는 부품
├─ config/
│  └─ site.ts         # 사이트 이름·설명·메뉴 목록 (한 곳에 모음)
└─ lib/
   └─ utils.ts        # cn() — 클래스 이름을 합쳐주는 도우미
```

> 메뉴를 바꾸고 싶으면 `config/site.ts`의 `navItems`만 고치면 됩니다.
> 헤더와 모바일 메뉴에 한 번에 반영돼요.

## UI 부품 더 추가하기

shadcn/ui에는 더 많은 부품이 있어요. 필요할 때 아래처럼 가져오면 됩니다:

```bash
npx shadcn@latest add dialog        # 팝업 창
npx shadcn@latest add dropdown-menu # 드롭다운 메뉴
npx shadcn@latest add badge         # 작은 라벨 배지
```

가져온 부품은 `components/ui/` 폴더에 생기고, 코드에서는 이렇게 불러 씁니다:

```tsx
import { Badge } from "@/components/ui/badge"
```

## 유용한 명령어

```bash
npm run dev        # 개발 서버 실행
npm run build      # 배포용으로 빌드
npm run typecheck  # 타입 오류 검사 (tsc --noEmit)
npm run lint       # 코드 스타일 검사
```
