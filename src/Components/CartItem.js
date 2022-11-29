import React, { Component } from "react";
import Wrapper from "../assets/wrappers/CartItem";
import OptionsContainer from "./OptionsContainer";
import ProductAmount from "./ProductAmount";
import ProductSlider from "./ProductSlider";
import { handleItemAmount, removeFromCart } from "../features/cartSlice";
import { connect } from "react-redux";

class CartItem extends Component {
  errorHandleonCartEdit = () => {
    console.log("Item attributes not editable in cart");
  };

  handleAmount = (id, value, amount) => {
    if (value === "inc") {
      let value = amount + 1;
      this.props.dispatch(handleItemAmount({ id, value }));
    } else if (value === "dec") {
      let value = amount - 1;
      this.props.dispatch(handleItemAmount({ id, value }));
    }
  };

  componentDidUpdate = () => {
    if (this.props.item.amount < 1) {
      this.props.dispatch(removeFromCart(this.props.item.id));
    }
  };
  render() {
    const { id, name, brand, amount, size, price } = this.props.item;

    let attributes = this.props.productsList.find(
      (item) => item.name === name
    ).attributes;

    return (
      <Wrapper>
        <section className="productOption">
          <h2 className="brandLabel">{brand}</h2>
          <h3 className="nameLabel">{name}</h3>
          <p className="priceLabel">$50,00</p>
          {attributes.map((attribute, index) => {
            const { items, name, type } = attribute;
            return (
              <OptionsContainer
                key={`${this.props.item.id}-${attribute.id}`}
                name={name}
                options={items}
                type={type}
                handleItemAttributes={this.errorHandleonCartEdit}
                itemInCart={this.props.item}
              />
            );
          })}
        </section>
        <section className="incrementAndPhotoContainer">
          <ProductAmount
            item={this.props.item}
            handleAmount={this.handleAmount}
          />
          <ProductSlider item={this.props.item} />
        </section>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  productsList: state.products.productsList,
  cart: state.cart,
});

export default connect(mapStateToProps)(CartItem);
