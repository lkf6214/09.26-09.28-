import React from "react";

export default function Dialog(props) {
  return (
    <div
      style={
        typeof props.color !== "undefined"
          ? { backgroundColor: props.color }
          : { backgroundColor: "orange" }
      }
    >
      {/* {자바스크립트를 쓰겠다{객체}} */}
      {typeof props.title === "string" ? <h1>{props.title}</h1> : props.title}
      <p>{props.message}</p>
      {typeof props.color !== "undefined"
        ? null
        : alert("색상 값이 안들어 왔습니다!")}
      {props.children}
    </div>
  );
}
