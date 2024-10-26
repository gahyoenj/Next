This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## 네비게이팅

### 프로그래매틱한 페이지이동(Programmatice Navigation)

- 특정 버튼이 클릭되었거나 특정 조건이 만족되었을 때 함수 내부에서 페이지가 이동되는 것
- router.replace 이용하면 뒤로가기를 방지하며 페이지 이동시킬 수 있음
  -router.back 을 통해 뒤로가기 가능

## 프리페칭

- 프리페칭 = 사전에 미리 불러오는 것
- 페이지를 사전에 불러옴
- 현재 사용자가 보고 있는 페이지에서 연결된 모든 페이지들을 사전에 미리 불러와놓음
- 이동할 가능성 있는 기능을 모두 불러놓는 것!
  => 빠른 페이지 이동을 위해 제공되는 기능

- 넥스트는 작성한 모든 리액트 컴포넌트를 페이지 별로 분리해서 저장을 미리 해둠
- 사전 렌더링 과정에서 js 번들 파일 전달할때 현재 페이지에 해당하는 코드들만 전달이 됨!!
  => 모든 페이지에 해당하는 js 코드들을 매번 번들링해서 전달하면 파일의 용량이 너무 커지게 되므로 hydration이 느려짐

- 다시 페이지를 이동하려고 하면 이동하려고 하는 페이지의 js 코드를 추가로 불러와야하는 과정이 필요함
  => 페이지 이동이 느려질 수 있음

==>이러한 문제를 방지하기 위해 프리페칭 기능이 필요!

#### 초기 접속 시에 요청 페이지의 JS bundle을 전달 받고 페이지 이동이 일어나기 전에 PreFetching 기능을 이용해 연결된 페이지들을 미리 불러옴

- Link 컴포넌트로 구현된 경로가 아니라면 프리페칭이 일어나지 않음
- 프로그래매틱한 페이지도 프리페칭 시키고 싶다면 useEffect 이용해서 마운트 되었을 때 실행 시키면 됨
- router.prefecth 이용하면 됨

## api routes

- api 폴더 아래 파일 만들게 되면 해당 파일은 웹 페이지가 아닌 api routes로써 api 응답을 정의하는 파일로 설정됨
- api 경로는 폴더 구조에 맞춰 갖게 됨 (/api/~~)
