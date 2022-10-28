import { useEffect, useState, useRef } from "react";

export default function PracticeTimer() {
  const [render, setRender] = useState(0);
  const time = useRef(0);
  // useRef가 time에 선언됨
  // 0초로 초기화
  const changeFocus = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      // 함수
      time.current = time.current + 1;
      console.log(time.current, "타이머 실행 중");
    }, 1000);

    changeFocus.current.focus();

    return () => {
      clearInterval(timer);
      console.log("타이머 종료");
    };
  }, []);
  // 최초 한 번만 불러오기 위해 [] 넣었음

  const showTime = () => {
    setRender(render + 1);
  };

  return (
    <>
      <h1>{time.current}</h1>
      <button ref={changeFocus} onClick={showTime}>
        시간
      </button>
    </>
  );
}
