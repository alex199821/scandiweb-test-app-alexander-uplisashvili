import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from "../assets/wrappers/CartButton";
import cartIcon from "../assets/images/cartIcon.png";
import { dispatch } from "redux";
import { setItemsInCart } from "../features/cartSlice";
class CartButton extends Component {
  componentDidMount() {
    this.props.dispatch(setItemsInCart());
  }

  render() {
    const { itemsInCart } = this.props;
    return (
      <Wrapper>
        <img src={cartIcon} alt="Cart" className="cartIcon" />
        {this.props.itemsInCart > 0 ? (
          <div className="itemsInCartMarker">
            <p>{itemsInCart}</p>
          </div>
        ) : (
          ""
        )}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  itemsInCart: state.cart.itemsInCart,
});

export default connect(mapStateToProps)(CartButton);
