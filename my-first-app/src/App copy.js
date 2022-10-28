// import MainHeader from "./components/MainHeader";
import ImgComponent from "./components/ImgComponent";
import BtnToNaver from "./components/BtnToNaver";
import ClassState from "./components/ClassState";
import FunctionalState from "./components/FunctionalState";
import StatePractice from "./components/StatePractice";
import StateCounter from "./components/Counter";
import MainHeader from "./components/MainHeader";
import CustomList from "./components/CustomList";
import CustomObj from "./components/CustomObj";
import ChangeObj from "./components/changeObj";
import TestCss from "./components/TestCss";
import TestStyled from "./components/TestStyled";
import ConditionalRender from "./components/ConditionalRender";
import PracticeOne from "./components/PracticeOne";
import PracticeTwo from "./components/PracticeTwo";
import { useState } from "react";
import AppTest from "./components/AppTest";
import logo from "./logo.svg";

// 화면을 만들어준 파일

// function App() {
//   const nameArr = ['뽀로로', '루피', '크롱이'];
//   return (
//   <div className="App">
//   <CustomList arr={nameArr} />
//   </div>
//   );
//   }
//   export default App;

// // 배열arr
// function App() {
//   const nameArr = ["뽀로로", "루피", "크롱"];

//   const pororoObj = [
//     {
//       name: "뽀로로",
//       age: "4",
//       nickName: "해결박사",
//     },
//     {
//       name: "루피",
//       age: "3",
//       nickName: "귀염둥이",
//     },
//     {
//       name: "크롱",
//       age: "4",
//       nickName: "사고뭉치",
//     },
//   ];

//   return (
//     <div className="App">
//       <ChangeObj objArr={pororoObj} />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <TestCss />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <TestStyled />
//     </div>
//   );
// }

// function App() {
//   const [Condition, setCondition] = useState("보이기");

//   const onChange = () => {
//     condition === "보이기" ? setCondition("감추기") : setCondition("보이기");
//   };

//   const ConditionRender = condition === "김추기" && <ConditionalRender />;

//   return (
//     <div className="App">
//       {ConditionRender}
//       <button onClick={onChange}>{condition}</button>
//     </div>
//   );
// }

// 실습
// function App() {
//   const [condition, setCondition] = useState("1번");

//   const onChange = () => {
//     condition === "1번" ? setCondition("2번") : setCondition("1번");
//   };

//   return (
//     <div className="App">
//       {condition === "1번" ? (
//         <PracticeOne text={condition} />
//       ) : (
//         <PracticeTwo text={condition} />
//       )}
//       <button onClick={onChange}>{condition}</button>
//     </div>
//   );
// }

function App() {
  return <div className="App"></div>;
}

export default App;
