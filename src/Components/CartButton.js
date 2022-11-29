import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from "../assets/wrappers/CartButton";
import cartIcon from "../assets/images/cartIcon.png";
import { setItemsInCart } from "../features/cartSlice";
import CartOverlay from "./CartOverlay";
class CartButton extends Component {
  componentDidMount() {
    this.props.dispatch(setItemsInCart());
  }

  componentDidUpdate = () => {
    localStorage.setItem("cart", JSON.stringify(this.props.cart));
    this.props.dispatch(setItemsInCart());
  };

  render() {
    return (
      <Wrapper>
        <section className="cartButton">
          <img src={cartIcon} alt="Cart" className="cartIcon" />
          {this.props.itemsInCart > 0 ? (
            <div className="itemsInCartMarker">
              <p>{this.props.itemsInCart}</p>
            </div>
          ) : (
            ""
          )}
        </section>
        <section className="cartOverlayContainer">
          <CartOverlay />
        </section>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  itemsInCart: state.cart.itemsInCart,
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(CartButton);
