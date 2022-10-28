// import { Component } from "react";

// // class 형 잘 안씀 대신 읽을 수 있어야함.
// class MainHeader extends Component {
//   render() {
//     const { name, text, href } = this.props;
//     return (
//       <div>
//         <h1>{name}님 반갑습니다!</h1>
//         <a href={href}>{text}</a>
//       </div>
//     );
//   }
// }

// export default MainHeader;

// // 함수형 component 주로 씀, 위와 동일
export default function MainHeader(props) {
  const { text, age, name, href } = props;
  return (
    <div>
      <h1>{name}님 반갑습니다!</h1>
      <h1>{age}살 이시죠?</h1>
      <h1>홈페이지를 연결해 드릴게요😁</h1>
      <a href={href}>{text}</a>
    </div>
  );
}
