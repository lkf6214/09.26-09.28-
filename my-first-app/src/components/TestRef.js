import { useState, useRef } from "react";

export default function TestRef() {
  const [text, setText] = useState("안녕하세요");

  const inputValue = useRef();

  const onChangeText = () => {
    console.log(inputValue);
    let inputText = inputValue.current.value;
    setText(inputText);
  };

  return (
    <div>
      <h1>{text}</h1>
      {/* 변화가 있어야하니까 onClick아니고 onChange*/}
      <input ref={inputValue} onChange={onChangeText}></input>
    </div>
  );
}
