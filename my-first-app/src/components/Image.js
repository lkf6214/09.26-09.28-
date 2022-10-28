// // import catImg from "../../public/images/cat.jpg";

// export default function Image() {
//   return (
//     <>
//       <img src="/images/cat.jpg" alt="괭이" />
//     </>
//   );
// }

import catImg from "../images/cat.jpg";

export default function Image() {
  return (
    <>
      <img src={catImg} alt="괭이" />
    </>
  );
}
