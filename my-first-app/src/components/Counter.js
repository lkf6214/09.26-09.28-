import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // useState(0)은 초기값이라는 뜻 시작이 0이니까 0입력

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      {/* 리엑트에서 속성값은 onClick 대문자 */}
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}
