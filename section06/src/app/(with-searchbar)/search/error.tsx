"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h3>검색과정에서 오류가 발생했습니다</h3>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh(); //현재 페이지에 필요한 서버 컴포너트들을 다시 불러옴 비동기적으로 실행됨!
            reset(); //에러 상태를 초기화, 컴포넌트를 다시 렌더링
          });
        }}
      >
        다시 시도
      </button>
    </div>
  );
}
