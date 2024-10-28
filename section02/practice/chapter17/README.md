# ISR(증분 정적 재생성)

- 단순히 그냥 SSG 방식으로 생성된 정적 페이지를 일정시간을 주기로 다시 생성하는 기술
- SSG = 빌드타임에 미리 정적으로 생성하게두면 그 시간 이후에는 다시 생성되지 않음
- 빌드타임에 생성된 페이지에 유통기한이 있어 유통기한이 지나기 전까지는 계속 이미 완성된 페이지 주다가 그 이후부터는 다시 새롭게 정적으로 생성
- 매우 빠른 속도로 응답 가능(기존 SSG 방식의 장점) + 최신 데이터 반영 가능(SSR 방식의 장점)
- <br>

```javaScript
export const getStaticProps = async () => {
  console.log("인덱스페이지");
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: {
      allBooks,
      recoBooks,
    },
    revalidate : 3,
  };
};
```

- revalidate 이용하면 ISR 방식 사용 할 수 있음
- ISR을 적용하기 어려운 페이지도 존재함
  - 시간과 관계없이 사용자의 행동에 따라 데이터가 업데이트 되는 페이지

### On-Demand ISR

- 요청을 받을 때마다 페이지를 다시 생성하는 ISR
- 주문형 재 검증
- 페이지 업데이트를 트리거링 할 수 있음
- revalidate.ts 라는 api routes를 만들어서 사용할 수 있음!
