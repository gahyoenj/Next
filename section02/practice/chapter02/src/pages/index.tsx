//app 컴포넌트 말고는 import css 안되므로 css module 기능 활용해야함
//기존의 css를 module처럼 사용할 수 있는 것
//자동으로 classname 유니크하게 만들어줌

import style from "./index.module.css";

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>인덱스</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}
