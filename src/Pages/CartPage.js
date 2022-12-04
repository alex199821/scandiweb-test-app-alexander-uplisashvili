import React, { Component } from "react";
import Wrapper from "../assets/wrappers/CartPage";
import CartItem from "../Components/CartItem";
import { connect } from "react-redux";
import { dispatch } from "redux";
import { countTotal } from "../features/cartSlice";
import SubmitButton from "../Components/SubmitButton";
// import { GraphQLClient, request, gql } from "graphql-request";

class CartPage extends Component {
  componentDidMount = () => {
    this.props.dispatch(countTotal(this.props.selectedCurrency));
  };
  componentDidUpdate = () => {
    this.props.dispatch(countTotal(this.props.selectedCurrency));
  };
  render() {
    const {
      cart,
      selectedCurrency: { symbol },
      subtotal,
      itemsInCart,
    } = this.props;
    return (
      <Wrapper>
        <h1 className="pageNameLabel">CART</h1>
        {cart.map((item, index) => {
          return <CartItem key={item.id} item={item} />;
        })}
        <section className="orderInformationContainer">
          <h3 className="orderInformationLabel">
            Tax 21%:{" "}
            <b>
              {symbol}
              {(subtotal * 0.21).toFixed(2)}
            </b>
          </h3>
          <h3 className="orderInformationLabel">
            Quantity: <b>{itemsInCart}</b>
          </h3>
          <h3 className="orderInformationLabel">
            Total:{" "}
            <b>
              {symbol}
              {subtotal.toFixed(2)}
            </b>
          </h3>
          <SubmitButton width={"280px"} height={"45px"} value="ORDER" />
        </section>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  itemsInCart: state.cart.itemsInCart,
  subtotal: state.cart.subtotal,
  selectedCurrency: state.ui.selectedCurrency,
});

export default connect(mapStateToProps)(CartPage);
