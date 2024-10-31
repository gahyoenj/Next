## 풀라우트캐시(Full Route Cache)

- Next 서버측에서 빌드 타임에 특정 페이지의 렌더링 결과를 캐싱하는 기능
- 빌드 타임에 미리 렌더링 해서 풀 라우트 캐시에 저장해두었기 때문에 새롭게 렌더링 할 필요 없이 캐시가 HIT 되어 브라우저에 전달
- 굉장히 빠른 속도로 렌더링 됨
- 정적 페이지에만 플라우트캐시 적용됨!
- 클라이언트 컴포넌트는 페이지 유형에 영향을 미치지 않음(서버 컴포넌트만 해당)
- Dynamic Page로 설정되는 기준

  - 특정 페이지가 접속 요청을 받을 때마다 매번 변화가 생기거나 데이터가 달라질 경우
  - 캐시되지 않는 Data Fecthing을 사용할 경우
  - 동적함수(쿠키, 헤더, 쿼리스트링)을 사용하는 컴포넌트가 있을 때

- Dynamic Page가 아니면 모두 Static Page!

<br>
- 풀라우트캐시도 revalidate 가능

- useSearchParams() should be wrapped in a suspense boundary =>빌드 타임에 인덱스 페이지를 정적으로 생성하다가 searchbar 컴포넌트에서 훅 호출해서 발생
- useSearchParams 는 쿼리 스트링을 꺼내오는 역할인데 빌드타임엔 쿼리 스트링이 없음 따라서 오류발생
  => searchbar 컴포넌트를 사전 렌더링 과정에서 배제되도록 만들어야함

```javaScript
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>
```

=> 클라이언트컴포넌트를 suspense로 감싸줘야함

- suspense = 미결,미완성 => 넥스트 서버 측에서 suspense로 묶여있는 컴포넌트는 곧바로 렌더링 하지 않고 fallback이라는 것으로 전달한 초기 HTML을 보내줌
- 컴포넌트의 비동기 작업이 종료될때까지 미완성 상태로 남음
- useSearchParams는 비동기 처리됨 => 쿼리 스트링 불러왔을 때 종료됨

### 라우트 세그먼트 옵션

- 특정 페이지에 캐싱이나 revalidate를 강제로 추가적으로 적용하는 것
- 예를 들어, dynamicParams를 false로 내보내게 되면 generateStaticParmas로 만들어진 params 이외에는 404로 보냄

```javaScript
export const dynamic = ''
```

1. auto

   - 기본값, 아무것도 강제하지 않음

2. force-dynamic

   - 페이지를 강제로 dynamic 페이지로 설정

3. force-static

   - 페이지를 강제로 static 페이지로 설정

4. error

   - 페이지를 강제로 static 페이지로 설정
   - static으로 하면 안되는 이유가 있다면 build 오류가 발생하게 됨(동적 함수가 있다거나 캐시 옵션이 설정되어있다면)

### 클라이언트 라우터 캐시

- 공통적인 레이아웃 같은 것을 클라이언트 라우터 캐시 보관
- ex. 루트 레이아웃, 서비차 레이아웃 같은 RSC payload 데이터만 클라이언트 라우터 캐시에 보관
- 그외의 RSC payload만 받아오면 됨
- 새로고침되면 클라이언트 라우터 캐시는 모두 사라짐
