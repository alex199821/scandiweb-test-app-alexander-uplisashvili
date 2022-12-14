import React, { Component } from "react";
import Wrapper from "../assets/wrappers/CartOverlay.js";
import CartItem from "./CartItem.js";
import { connect } from "react-redux";
import SubmitButton from "./SubmitButton.js";
import { Link } from "react-router-dom";
import { countTotal } from "../features/cartSlice.js";
class CartOverlay extends Component {
  //Functions to count amount of items in cart on load and on every rerender
  componentDidMount = () => {
    this.props.dispatch(countTotal(this.props.selectedCurrency));
  };
  componentDidUpdate = () => {
    this.props.dispatch(countTotal(this.props.selectedCurrency));
  };
  render() {
    const {
      cart,
      subtotal,
      selectedCurrency: { symbol },
    } = this.props;
    return (
      <Wrapper>
        <section className="cartOverlayContainer">
          {/* Element with clasname background is gray background over page when overlay is open */}
          <span className="background" onClick={this.props.handleOverlay} />
          <section className="overlay">
            <h3 className="bagAmountLabel">
              <b>My Bag:</b> {this.props.itemsInCart} items
            </h3>
            {/* Mapping of every original item in cart */}
            {cart.map((item) => {
              return <CartItem key={item.id} item={item} overlay={true} />;
            })}
            <div className="priceContainer">
              <p className="priceLabel">Total</p>
              {/*Item value and currency rounded to nearest 2 decimals */}
              <p className="price">
                {symbol}
                {subtotal.toFixed(2)}
              </p>
            </div>
            <div className="overlayButtonsContainer">
              {/* Button which navigates user to cart page */}
              <Link to={`/cart`}>
                <button
                  className="viewbagButton"
                  onClick={this.props.handleOverlay}
                >
                  VIEW BAG{" "}
                </button>
              </Link>
              <SubmitButton value="CHECK OUT" width={"135px"} height={"45px"} />
            </div>
          </section>
        </section>
      </Wrapper>
    );
  }
}
//Selector to get data from Redux
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  subtotal: state.cart.subtotal,
  itemsInCart: state.cart.itemsInCart,
  selectedCurrency: state.ui.selectedCurrency,
});

export default connect(mapStateToProps)(CartOverlay);
