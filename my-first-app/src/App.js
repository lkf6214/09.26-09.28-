// import MainHeader from "./components/MainHeader";
// import ImgComponent from "./components/ImgComponent";
// import BtnToNaver from "./components/BtnToNaver";
// import ClassState from "./components/ClassState";
// import FunctionalState from "./components/FunctionalState";
// import StatePractice from "./components/StatePractice";
// import StateCounter from "./components/Counter";
// import MainHeader from "./components/MainHeader";
// import CustomList from "./components/CustomList";
// import CustomObj from "./components/CustomObj";
// import ChangeObj from "./components/changeObj";
// import TestCss from "./components/TestCss";
// import TestStyled from "./components/TestStyled";
// import ConditionalRender from "./components/ConditionalRender";
// import PracticeOne from "./components/PracticeOne";
// import PracticeTwo from "./components/PracticeTwo";
// import { useEffect, useState, useRef } from "react";
// import AppTest from "./components/AppTest";
// import logo from "./logo.svg";
// import TestRef from "./components/TestRef";
// import ChangeFocus from "./components/ChangeFocus";
// import Comparing from "./components/Comparing";
// import TextUseEffect from "./components/TextUseEffect";
// import Timer from "./components/Timer";
// import PracticeTimer from "./components/PracticeTimer";
// import TestUseMemo from "./components/TestUseMemo";
// import UsingUseMemo from "./components/UsingUseMemo";
// 221005수
// import Where from "./components/Where";
// import Image from "./components/Image";
// import WelcomeDialog from "./components/WelcomeDialog";
// import WelcomeDialogBtn from "./components/WelcomeDialogBtn";
// import FancyBorder from "./components/FancyBorder";
// import SignUpDialog from "./components/SignUpDialog";
// import Dialog from "./components/Dialog";
// Router
import Board from "./components/Board";
import Profile from "./components/Profile";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import BoardDetail from "./components/BoardDetail";

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

// 실습...react페이지 구현
// function App() {
//   return (
//     <div className="App">
//       <AppTest logo={logo} />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <TextUseEffect />
//     </div>
//   );
// }

// PracticeTimer
// function App() {
//   const [show, setShow] = useState(false);
//   const changeFocus = useRef();

//   useEffect(() => {
//     changeFocus.current.focus();
//   }, []);

//   return (
//     <div className="App">
//       {show && <PracticeTimer />}
//       {/* show가 true일때 PracticeTimer를 보여주겠다 ,*/}
//       <button ref={changeFocus} onClick={() => setShow(!show)}>
//         {show ? "숨기기" : "보이기"}
//         {/* show가 true면 숨기기,  false면 보이기*/}
//       </button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <FancyBorder color="blue">
//         <SignUpDialog />
//         {/* <WelcomeDialogBtn />
//         <h1>Hello, props.children</h1>
//         <p>이건 매우 유용합니다!</p>
//         <p>💝</p> */}
//       </FancyBorder>
//       <Dialog />
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
