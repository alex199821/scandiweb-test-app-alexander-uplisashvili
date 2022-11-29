import React, { Component } from "react";
import Wrapper from "../assets/wrappers/CartOverlay.js";
import CartItem from "./CartItem.js";
import { connect } from "react-redux";

class CartOverlay extends Component {
  render() {
    const { cart } = this.props;
    return (
      <Wrapper>
        <h3>
          My Bag: <p>3 items</p>
        </h3>
        {cart.map((item, index) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(CartOverlay);
