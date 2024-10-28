import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}

//app 컴포넌트는 현재 접속 요청이 온 페이지 역할을 하는 컴포넌트를 props로 전달 받게 됨
//app 컴포넌트에서 전달을 받았을 때 Component.getLayout 으로 꺼내와서 쓸 수 있는 것!
