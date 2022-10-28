import { useState, useRef } from "react";

const Comparing = () => {
  // 화살표함수는 메모리가 좋다 this를 가지지 않음
  const [countState, setState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;
  const [render, setRender] = useState(0);

  const reRender = () => {
    setRender(render + 1);
  };

  const countUpState = () => {
    setState(countState + 1);
    console.log("State: ", countState);
  };

  const countUpRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref: ", countRef.current);
  };

  const countUpVar = () => {
    countVar = countVar + 1;
    console.log("Variable: ", countVar);
  };

  return (
    <>
      <h1>State:{countState}</h1>
      <h1>Ref: {countRef.current}</h1>
      <h1>Variable : {countVar}</h1>
      <button onClick={countUpState}>State +1</button>
      <button onClick={countUpRef}>Ref +1</button>
      <button onClick={countUpVar}>Variable +1</button>
      <button onClick={reRender}>렌더링!</button>
    </>
  );
};

export default Comparing;

// state: 즉시 보임
// Ref : 값을 유지하고 있다가 렌더링되면 그때 수정됨
