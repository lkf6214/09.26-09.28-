import Dialog from "./Dialog";

export default function SignUpDialog() {
  return (
    <Dialog
      //   color="green"
      title={<button onClick={() => alert("Welcome!")}>웰컴 버튼</button>}
      message="회원가입이 필요한 페이지로 이동합니다"
    >
      <a href="#"> 회원가입 페이지로 이동</a>
    </Dialog>
  );
}
