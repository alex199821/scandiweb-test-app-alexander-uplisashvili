import React, { Component } from "react";
import { Wrapper } from "../assets/wrappers/CheckoutButton";
import whiteCartIcon from "../assets/images/whiteCartIcon.png";

class CheckoutButton extends Component {
  render() {
    //Button which allows user to add item from PLP Or move to product's PDP Page
    return (
      <Wrapper onClick={(e) => this.props.handleAddToCart(e)}>
        <img src={whiteCartIcon} alt="Cart" className="cartIcon" />
      </Wrapper>
    );
  }
}
export default CheckoutButton;
