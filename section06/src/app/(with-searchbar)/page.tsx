import BookItem from "@/components/book-item";
import style from "./page.module.css";
// import books from "@/mock/books.json";
import { BookData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";
import BookItemSkeleton from "@/components/skeleton/book-item-skeleton";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";

async function AllBooks() {
  await delay(1500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const allBooks: BookData[] = await response.json();

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

async function ReacoBooks() {
  await delay(3000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    { next: { revalidate: 3 } } //페이지를 다이나믹하게 설정하는 옵션은 아님!
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const recoBooks: BookData[] = await response.json();

  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export const dynamic = "force-dynamic";
//이 페이지는 static 페이지이므로 스트리밍 적용 해봤자 이미 빌드타임에 비동기 작업도 끝냄 따라서 스트리밍 확인하기 위해 강제로  dynamic 페이지로 바꿈

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <Suspense
          fallback={
            <>
              <BookListSkeleton count={3} />
            </>
          }
        >
          <ReacoBooks />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense
          fallback={
            <>
              <BookItemSkeleton />
              <BookItemSkeleton />
              <BookItemSkeleton />
            </>
          }
        >
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
}
