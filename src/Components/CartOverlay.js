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
          <b>My Bag:</b> 3 items
        </h3>
        {cart.map((item, index) => {
          return <CartItem key={item.id} item={item} overlay={true} />;
        })}
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(CartOverlay);
