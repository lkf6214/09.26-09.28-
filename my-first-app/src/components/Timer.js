import { useEffect } from "react";

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 실행 중");
    }, 1000);

    // 클리너함수역할을 하는 코드, 보이기 누르면 숫자 멈춤
    return () => {
      clearInterval(timer);
    };
  }, []);
  // [] 넣었기 때문에 최초 로딩시 한 번만 나온다
  return (
    <>
      <h1> 타이머가 실행 중 입니다.</h1>
    </>
  );
}
