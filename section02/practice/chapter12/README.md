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

### 데이터 페칭

- 기존의 리액트 방식으로 데이터 페칭을 하면 초기 접속 요청부터 데이터 로딩이 오래 걸림
  => 컴포넌트 마운트 시점에 fetchData 호출하므로

- next는 fcp 문제를 해결하기 위해 사전 렌더링 방식을 이용하기 때문에 완성된 HTML 을 받아서 그대로 렌더링
- 이때 서버측에서 js 코드 실행해서 사전 렌더링을 직접 진행하는 과정에서 백엔드서버에서 현재 필요한 데이터를 미리 불러오도록 설정할 수 있음!
  => 데이터를 빠른 타이밍에 호출 할 수 있음

- 데이터 페칭이 이미 완료된 페이지를 보여주는 것!

- 만약 이때 데이터페칭이 오래걸리는 경우가 생긴다면..?
  => 이러한 문제점을 해결하기 위해 next는 사전 렌더링이 오래 걸릴 것 같은 페이지에 대해서 빌드타임(build time)에 미리 사전 렌더링을 마쳐놓는 등의 다양한 방식을 제공함

## 서버사이드 렌더링 방식

### SSR

- 가장 기본적인 사전 렌더링 방식
- 요청이 들어올 때마다 사전렌더링 진행

### SSG

- 정적 사이트 생성
- 빌드타임에 미리 페이지를 사전렌더링

### ISR

- 증분 정적 재생성

---

## SSR

```javaScript
export const getServerSideProps = () => {};
```

- 이런식으로 약속된 이름의 함수를 써주면 이 함수를 써준 페이지는 ssr로 작동함
- 페이지로 요청 경로가 들어옴 -> 그러면 다음으로 getSeverSideProps 함수 작동 => 백엔드 서버로 데이터 불러온다던가 서드파티로 데이터 불러온다던가 불러옴
  -> 그러고나서 페이지가 렌더링 됨

- 이 함수는 서버측에서 딱 한번만 실행되는 함수임 => 이 함수 내에서 브라우저를 읽을 수 없으므로 window. 이런 거 못함
