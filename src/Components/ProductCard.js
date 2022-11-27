import React, { Component } from "react";
import Wrapper from "../assets/wrappers/ProductCard";
import { product } from "../Utils/data";
import CheckoutButton from "./CheckoutButton";
class Product extends Component {
  state = {
    product: product,
    isHoveringOver: false,
    inStock: true,
  };

  handleMouseOver = () => {
    this.setState({
      isHoveringOver: true,
    });
  };

  handleMouseOut = () => {
    this.setState({
      isHoveringOver: false,
    });
  };
  render() {
    const { image, name, prices } = this.props;
    const {
      amount,
      currency: { symbol },
    } = prices;
    return (
      <Wrapper
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <section
          className={!this.state.inStock ? "blur" : "productCardContainer"}
        >
          <div className="imageContainer">
            <img src={image} alt={name} className="productImage" />
            {this.state.isHoveringOver && this.state.inStock && (
              <CheckoutButton />
            )}
            {!this.state.inStock && (
              <p className="outOfStockLabel">OUT OF STOCK</p>
            )}
          </div>
          <p className="productName">{name}</p>
          <p className="productPrice">
            {symbol}
            {amount}
          </p>
        </section>
      </Wrapper>
    );
  }
}
export default Product;
