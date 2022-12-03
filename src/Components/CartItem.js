import React, { Component } from "react";
import Wrapper from "../assets/wrappers/CartItem";
import OptionsContainer from "./OptionsContainer";
import ProductAmount from "./ProductAmount";
import ProductSlider from "./ProductSlider";
import { handleItemAmount, removeFromCart } from "../features/cartSlice";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import { ALL_PRODUCTS } from "../queries";

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

    return (
      <Query query={ALL_PRODUCTS}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return console.log(error);
          let attributes = data.categories[0].products.find(
            (item) => item.name === name
          ).attributes;
          console.log(data.categories);
          return (
            <Wrapper overlay={this.props.overlay || false}>
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
                      overlay={this.props.overlay || false}
                    />
                  );
                })}
              </section>
              <section className="incrementAndPhotoContainer">
                <ProductAmount
                  item={this.props.item}
                  handleAmount={this.handleAmount}
                  overlay={this.props.overlay}
                />
                <ProductSlider
                  item={this.props.item}
                  overlay={this.props.overlay}
                />
              </section>
            </Wrapper>
          );
        }}
      </Query>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartItem);
