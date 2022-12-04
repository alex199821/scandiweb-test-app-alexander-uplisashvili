import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from "../assets/wrappers/CartButton";
import cartIcon from "../assets/images/cartIcon.png";
import { countItemsInCart } from "../features/cartSlice";
class CartButton extends Component {
  //Functions to count amount of items in cart on load and on every rerender
  componentDidMount() {
    this.props.dispatch(countItemsInCart());
  }
  componentDidUpdate = () => {
    localStorage.setItem("cart", JSON.stringify(this.props.cart));
    this.props.dispatch(countItemsInCart());
  };

  render() {
    return (
      //This is source code for Cart Icon in Navbar
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
      </Wrapper>
    );
  }
}
//Selector to get data from Redux
const mapStateToProps = (state) => ({
  itemsInCart: state.cart.itemsInCart,
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(CartButton);
