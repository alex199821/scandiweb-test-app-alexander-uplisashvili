import React, { Component } from "react";
import Wrapper from "../assets/wrappers/CartPage";
import CartItem from "../Components/CartItem";
import { connect } from "react-redux";
import { dispatch } from "redux";

// import { GraphQLClient, request, gql } from "graphql-request";

class CartPage extends Component {
  // componentDidUpdate() {
  //   console.log(this.props.cart);
  // }
  render() {
    const { cart } = this.props;
    return (
      <Wrapper>
        <h1 className="pageNameLabel">CART</h1>
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

export default connect(mapStateToProps)(CartPage);
