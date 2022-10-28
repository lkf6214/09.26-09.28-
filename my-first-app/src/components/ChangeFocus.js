// 버튼 누르면 focus 이동하는 것

import { useState, useRef } from "react";

export default function ChangeFocus() {
  const inputOne = useRef();
  const inputTwo = useRef();

  const changeFocusOne = () => {
    inputOne.current.focus();
  };

  const changeFocusTwo = () => {
    inputTwo.current.focus();
  };

  return (
    <div>
      <input ref={inputOne}></input>
      <input ref={inputTwo}></input>
      <br />
      <button onClick={changeFocusOne}>1번 버튼</button>
      <button onClick={changeFocusTwo}>2번 버튼</button>
    </div>
  );
}
