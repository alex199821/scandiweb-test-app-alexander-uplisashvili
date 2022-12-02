import React, { Component } from "react";
import Wrapper from "../assets/wrappers/CartOverlay.js";
import CartItem from "./CartItem.js";
import { connect } from "react-redux";
import OptionButton from "./OptionButton.js";
import CheckoutButton from "./CheckoutButton.js";
class CartOverlay extends Component {
  render() {
    const { cart } = this.props;
    return (
      <Wrapper>
        <section className="cartOverlayContainer">
          <span className="background" onClick={this.props.handleOverlay} />
          <section className="overlay">
            <h3 className="bagAmountLabel">
              <b>My Bag:</b> 3 items
            </h3>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} overlay={true} />;
            })}
            <div className="priceContainer">
              <p className="priceLabel">Total</p>
              <p className="price">$200.00</p>
            </div>
            <div className="overlayButtonsContainer">
              <button className="viewbagButton">VIEW BAG</button>
              <button className="checkoutButton">CHECK OUT</button>
            </div>
          </section>
        </section>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(CartOverlay);
