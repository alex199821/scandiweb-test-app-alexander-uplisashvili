/* eslint-disable array-callback-return */
import React, { Component } from "react";
import Wrapper from "../assets/wrappers/ProductForm";
import { connect } from "react-redux";
import { addToCart } from "../features/cartSlice";
import OptionsContainer from "./OptionsContainer";
import SubmitButton from "./SubmitButton";
import { Navigate } from "react-router-dom";
import parse from "html-react-parser";

class ProductForm extends Component {
  state = {
    itemId: this.props.id,
    amount: 1,
    price: this.props.prices,
    gallery: this.props.gallery,
    brand: this.props.brand,
    name: this.props.name,
  };

  //This function created Variant Id according to chosen attributes - this will be used to stack up products with same attributes in cart
  createVariantId = () => {
    let item = [];
    Object.entries(this.state)
      //First 4 states won't be included in VariantId
      .slice(4)
      .map(([key, value]) => {
        item.push(`${key}_${value}`);
      });
    //Function removes first 4 unneeded values and joins all other values into string
    return item.join("").replace(/\s/g, "");
  };

  //This function validates form and makes sure that all attributes are selected
  validateForm = () => {
    let formValidated = true;
    Object.entries(this.state).map(([key, value]) => {
      if (`${value.length}` < 1) {
        formValidated = false;
      }
    });
    return formValidated;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm() === false) {
      console.log("Some attributes of the form are not filled in.");
    } else if (this.validateForm() === true) {
      //Below item is added to cart, at same time variantID is Created (it is used to check if 2 same products have different attributes) and original order ID is created.
      console.log(this.createVariantId());
      this.props.dispatch(
        addToCart({
          ...this.state,
          id: `${this.props.id}-${new Date().getTime()}`,
          variantId: this.createVariantId(),
        })
      );
      //State change renders Navigate component and redirects user to PLP Page.
      this.setState({ navigate: true });
    }
  };

  //Function below edits prop attribute's values
  handleItemAttributes = (result, option) => {
    this.setState({ ...this.state, [option]: result });
  };

  render() {
    const { brand, name, attributes, description } = this.props;
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
            {/* This label displays chosen currency symbol and price of product in given currency */}
            {
              this.state.price.find(
                (item) =>
                  item.currency.label === this.props.selectedCurrency.label
              ).currency.symbol
            }
            {
              this.state.price.find(
                (item) =>
                  item.currency.label === this.props.selectedCurrency.label
              ).amount
            }
          </p>
        </section>
        {/* if item is in stock only in that casse ADD TO CART button is visible */}
        {this.props.inStock && (
          <SubmitButton width={"290px"} height={"50px"} value="ADD TO CART" />
        )}
        {/* onClick state changes and navigate component is added to page -> then it redirects user to PLP Page after item is added to cart */}
        <section className="descriptionContainer">{parse(description)}</section>
        {this.state.navigate && <Navigate to={`/`} />}
      </Wrapper>
    );
  }
}
//Selector to get data from Redux
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  selectedCurrency: state.ui.selectedCurrency,
});

export default connect(mapStateToProps)(ProductForm);
