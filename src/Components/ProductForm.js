import React, { Component } from "react";
import Wrapper from "../assets/wrappers/ProductForm";
import cartIcon from "../assets/images/cartIcon.png";
import SizeButton from "./OptionButton";
import { dispatch } from "redux";
import { connect } from "react-redux";
import { addToCart } from "../features/cartSlice";
import OptionsContainer from "./OptionsContainer";
class ProductForm extends Component {
  state = {
    id: `${this.props.id}-${new Date().getTime()}`,
    brand: this.props.brand,
    name: this.props.name,
    amount: 1,
    price: this.props.prices.find((value) => value.currency.label === "USD"),
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addToCart(this.state));
  };

  handleFormState = (result, option) => {
    this.setState({ ...this.state, [option]: result });
  };

  // componentDidUpdate() {
  //   console.log(`${this.props.id}-${new Date().getTime()}`);
  //   console.log();
  // }

  render() {
    const { brand, name, attributes } = this.props;

    return (
      <Wrapper onSubmit={this.handleSubmit}>
        <h2 className="brandName">{brand}</h2>
        <h3 className="productName">{name}</h3>
        {attributes.map((attribute, index) => {
          const { items, name, type, id } = attribute;
          return (
            <OptionsContainer
              id={this.props.id}
              key={index}
              name={name}
              items={items}
              type={type}
              handleFormState={this.handleFormState}
              form={this.state}
            />
          );
        })}
        <section className="priceContainer">
          <h3 className="priceLabel">Price:</h3>
          <p className="price">
            {this.state.price.currency.symbol}
            {this.state.price.amount}
          </p>
        </section>
        <button type="submit" className="submitButton">
          ADD TO CART
        </button>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(ProductForm);
