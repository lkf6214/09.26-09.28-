import { useState } from "react";

export default function ChangeObj(props) {
  const [index, changeIndex] = useState(0);
  let obj = props.objArr[index];

  // 뽀로로->루피->크롱 까지되고 루치로 다시 돌아와야하는데 error뜨기 때문에 입력
  const onChange = () => {
    if (index === props.objArr.length - 1) {
      changeIndex(0);
    } else {
      changeIndex(index + 1);
    }
    obj = props.objArr[index];
  };
  return (
    <div>
      <h1>이름: {obj.name} </h1>
      <h2>나이: {obj.age} </h2>
      <h3>별명: {obj.nickName} </h3>
      <button onClick={onChange}>프로필 변경하기</button>
    </div>
  );
}
