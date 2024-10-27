import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect } from "react";
import style from "./index.module.css";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = () => {
  //컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수

  const data = "hello";

  return {
    props: {
      data,
    }, // 객체 타입이어야 객체 읽어와서 객체 안에 있는 props라는 property 값을 페이지에 전달해줌
  };
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);
  // 이 콘솔은 두번 찍힘 => 사전레더링을 위해서 서버에서 한번 브라우저에서 한번(hydration)에서 한번 총 두번 실행됨
  //따라서 이 안에서도 window. 못함! => 서버에서 실행되므로

  useEffect(() => {
    console.log(window);
  }, []); // useEffect 사용하면 마운트 됐을때 실행되므로 브라우저에서만 실행됨

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

//자바스크립트의 모든 함수는 사실 객체이므로 객체.메서드가 가능한것
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
