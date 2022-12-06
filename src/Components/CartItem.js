import React, { Component } from "react";
import Wrapper from "../assets/wrappers/CartItem";
import OptionsContainer from "./OptionsContainer";
import ProductAmount from "./ProductAmount";
import CartThumbnails from "./CartThumbnails";
import { handleItemAmount, removeFromCart } from "../features/cartSlice";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import { SINGLE_PRODUCT } from "../queries";

class CartItem extends Component {
  errorHandleonCartEdit = () => {
    console.log("Item attributes not editable in cart");
  };

  //Function to handle amount of given item in cart
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
    //Conditional case, in which if amount of item in cart falls below 1, item is removed from cart
    if (this.props.item.amount < 1) {
      this.props.dispatch(removeFromCart(this.props.item.id));
    }
  };
  render() {
    //Destructuring of item props
    const { itemId, name, brand, price } = this.props.item;
    //Selecting currency and displaying corresponding info accodring to redux state
    let priceInCurrency = price.find(
      (item) => item.currency.label === this.props.selectedCurrency.label
    );
    return (
      //Each item info is fetched or retrieved from apollo cache according to Id
      <Query query={SINGLE_PRODUCT} variables={{ id: itemId }}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return console.log(error);
          let attributes = data.product.attributes;
          return (
            //Overlay props given CSS info is component is open in cart page or overlay container
            <Wrapper overlay={this.props.overlay || false}>
              <section className="productOption">
                <h2 className="brandLabel">{brand}</h2>
                <h3 className="nameLabel">{name}</h3>
                <p className="priceLabel">
                  {priceInCurrency.currency.symbol}
                  {priceInCurrency.amount}
                </p>
                {/* Mapping each attribute and its value for rendering  */}
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
                      overlay={this.props.overlay}
                    />
                  );
                })}
              </section>
              <section className="incrementAndPhotoContainer">
                {/* Component below allows user to change amount of item in cart */}
                <ProductAmount
                  item={this.props.item}
                  handleAmount={this.handleAmount}
                  overlay={this.props.overlay}
                />
                {/* Component below contains & displays product images */}
                <CartThumbnails
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

//Selector to get data from Redux
const mapStateToProps = (state) => ({
  cart: state.cart,
  selectedCurrency: state.ui.selectedCurrency,
});

export default connect(mapStateToProps)(CartItem);
