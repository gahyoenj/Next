import { BookData } from "@/Types";

//함수의 반환값 타입으로는 비동기로 반환하므로 Promise<>
export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = "https://onebite-books-server-main-psi-six.vercel.app//book";

  if (q) {
    url += `/search?q=${q}`;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
