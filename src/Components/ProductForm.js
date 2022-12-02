import React, { Component } from "react";
import Wrapper from "../assets/wrappers/ProductForm";
import cartIcon from "../assets/images/cartIcon.png";
import { connect } from "react-redux";
import { addToCart } from "../features/cartSlice";
import OptionsContainer from "./OptionsContainer";
class ProductForm extends Component {
  state = {
    id: `${this.props.id}-${new Date().getTime()}`,
    amount: 1,
    price: this.props.prices.find((value) => value.currency.label === "USD"),
    gallery: this.props.gallery,
    brand: this.props.brand,
    name: this.props.name,
  };

  //This function created Variant Id according to chosen attributes - this will be used to stack up products with same attributes in cart
  createVariantId = () => {
    let item = [];
    Object.entries(this.state)
      .slice(4)
      .map(([key, value]) => {
        item.push(`${key}_${value}`);
      });
    //Function removes first 4 unneeded values and joins all other values into string
    return item.join("").replace(/\s/g, "");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(
      addToCart({ ...this.state, variantId: this.createVariantId() })
    );
  };

  handleItemAttributes = (result, option) => {
    this.setState({ ...this.state, [option]: result });
  };

  render() {
    const { brand, name, attributes } = this.props;
    return (
      <Wrapper onSubmit={this.handleSubmit}>
        <h2 className="brandName">{brand}</h2>
        <h3 className="productName">{name}</h3>
        {attributes.map((attribute, index) => {
          const { items, name, type } = attribute;
          return (
            <OptionsContainer
              id={this.props.id}
              key={`${this.props.id}-${index}`}
              name={name}
              options={items}
              type={type}
              handleItemAttributes={this.handleItemAttributes}
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
