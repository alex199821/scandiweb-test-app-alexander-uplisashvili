import React, { Component } from "react";
import { Wrapper } from "../assets/wrappers/CheckoutButton";
import whiteCartIcon from "../assets/images/whiteCartIcon.png";

class CheckoutButton extends Component {
  render() {
    return (
      <Wrapper>
        <img src={whiteCartIcon} alt="Cart" className="cartIcon" />
      </Wrapper>
    );
  }
}
export default CheckoutButton;
