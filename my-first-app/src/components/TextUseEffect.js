import { useEffect, useRef, useState } from "react";

export default function TextUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("입력해 주세요!");
  const inputValue = useRef();

  const onButtonClick = () => {
    console.log("🖱 버튼 클릭!");
    setCount(count + 1);
  };

  const onInputChange = () => {
    console.log("💻키 입력");
    setText(inputValue.current.value);
    // 실제값은 value에 들어가 있음
    // 키입력해도 settext가 나옴
  };

  useEffect(() => {
    console.log("🎨 렌더링 할 때마다 실행되는 useEffect");
  }, [count]);

  // 버튼 클릭 될때만 불려나가게
  useEffect(() => {
    console.log("🖱 버튼 클릭 될 때마다 실행되는 useEffect");
  }, [count]);

  useEffect(() => {
    console.log("💻키 입력 할때마다 실행되는 useEffect");
  }, [text]);

  // 둘 다 불러오는 거
  useEffect(() => {
    console.log("🚩🚩둘다 보고있는 useEffect");
  }, [count, text]);

  // 최초 렌더링
  useEffect(() => {
    console.log("🚧최초 렌더링 시에만 실행되는 useEffect");
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>+1 버튼</button>
      <br />
      <br />
      <br />
      <input ref={inputValue} onChange={onInputChange}></input>
      <h1>{text}</h1>
    </>
  );
}
