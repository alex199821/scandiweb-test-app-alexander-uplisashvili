import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from "../assets/wrappers/CartButton";
import cartIcon from "../assets/images/cartIcon.png";
import { setItemsInCart } from "../features/cartSlice";
import CartOverlay from "./CartOverlay";
class CartButton extends Component {
  state = {
    overlayOpen: false,
  };
  componentDidMount() {
    this.props.dispatch(setItemsInCart());
  }

  componentDidUpdate = () => {
    localStorage.setItem("cart", JSON.stringify(this.props.cart));
    this.props.dispatch(setItemsInCart());
  };

  handleClick = () => {
    this.setState({ overlayOpen: !this.state.overlayOpen });
  };
  render() {
    return (
      <Wrapper>
        <section className="cartButton" onClick={this.handleClick}>
          <img src={cartIcon} alt="Cart" className="cartIcon" />
          {this.props.itemsInCart > 0 ? (
            <div className="itemsInCartMarker">
              <p>{this.props.itemsInCart}</p>
            </div>
          ) : (
            ""
          )}
        </section>
        {this.state.overlayOpen && (
          <section className="cartOverlayContainer">
            <section className="background" />
            <CartOverlay />
          </section>
        )}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  itemsInCart: state.cart.itemsInCart,
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(CartButton);
