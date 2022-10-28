import React from "react";
import Dialog from "./Dialog";

export default function WelcomeDialog(props) {
  return (
    <>
      <Dialog
        color="pink"
        title="Welcome "
        message="우리집🏝 에 오신 걸 환영합니다."
      />

      <button onClick={() => alert(props.alertMessage)}>{props.content}</button>
    </>
  );
}
