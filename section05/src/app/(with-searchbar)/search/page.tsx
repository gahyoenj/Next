// import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { BookData } from "@/types";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${
      (
        await searchParams
      ).q
    }`,
    { cache: "force-cache" } //캐시하면 한번 검색이 된 데이터에 대해서는 조금은 더 빨라짐
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const books: BookData[] = await response.json();
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
