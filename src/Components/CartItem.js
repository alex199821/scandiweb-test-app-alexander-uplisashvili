import React, { Component } from "react";
import Wrapper from "../assets/wrappers/CartItem";
import OptionsContainer from "./OptionsContainer";
import { connect } from "react-redux";
import { editAttributes } from "../features/cartSlice";
import { dispatch } from "redux";

class CartItem extends Component {
  handleFormState = (option, name, id) => {
    this.props.dispatch(editAttributes({ option, name, id }));
  };
  render() {
    const { id, name, brand, amount, size, price } = this.props.item;

    let attributes = this.props.productsList.find(
      (item) => item.name === name
    ).attributes;

    return (
      <Wrapper>
        <h2>{brand}</h2>
        <h3>{name}</h3>
        <p>$50,00</p>
        {attributes.map((attribute, index) => {
          const { items, name, type } = attribute;
          return (
            <OptionsContainer
              key={index}
              id={id}
              name={name}
              items={items}
              type={type}
              handleFormState={this.handleFormState}
              form={
                this.props.cart.cart.length > 1
                  ? this.props.cart.cart
                  : this.props.cart.cart[0]
              }
              props={this.props.item}
            />
          );
        })}
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  productsList: state.products.productsList,
  cart: state.cart,
});

export default connect(mapStateToProps)(CartItem);
