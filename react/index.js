// import React from 'react';
// import ReactDOM from 'react-dom';
// 함수형 컴포넌트

function HelloWorldButton() {
  // [state값, state변경함수]
  const [isClick, setClickState] = React.useState(false);
  const text = isClick ? "이제 클릭 됨" : "아직 클릭 안됨";
  //   console.log(isClick);

  return (
    <button onClick={() => setClickState(!isClick)}>
      <div>
        <span>{text}</span>
      </div>
    </button>
  );
}
const e = React.createElement;
const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(<HelloWorldButton />);
