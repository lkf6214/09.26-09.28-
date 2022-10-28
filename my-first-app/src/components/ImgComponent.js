import React, { Component } from "react";
import catImg from "../cat.jpg";

class ImgComponent extends Component {
  render() {
    return <img src={catImg} alt="고양이" width={500} />;
  }
}

// function ImgComponent() {
//   return <img src={catImg} alt="고양이" />;
// }

export default ImgComponent;
