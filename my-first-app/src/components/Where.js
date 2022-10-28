import React from "react";

export default function Where() {
  const where = prompt("어디로 갈까요? left / right");

  return (
    <>
      <h1>Where.js</h1>

      {where === "left" ? (
        <h1>여기는 왼쪽입니다</h1>
      ) : (
        <h1>여기는 오른쪽입니다</h1>
      )}
    </>
  );

  //   if (where === "left") {
  //     return (
  //       <>
  //         <h1>여기는 왼쪽입니다.</h1>
  //       </>
  //     );
  //   } else if (where === "right") {
  //     return (
  //       <>
  //         <h1>여기는 오른쪽 입니다.</h1>
  //       </>
  //     );
  //   } else {
  //     <>
  //       <h1>값을 잘 못 입력 하셨습니다!</h1>
  //     </>;
  //   }
}
