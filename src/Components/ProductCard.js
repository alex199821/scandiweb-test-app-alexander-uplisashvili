import React, { Component } from "react";
import Wrapper from "../assets/wrappers/ProductCard";
import { product } from "../Utils/data";
import CheckoutButton from "./CheckoutButton";
import { Link, Navigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { connect } from "react-redux";

class ProductCard extends Component {
  state = {
    product: product,
    isHoveringOver: false,
    inStock: true,
  };
  componentDidMount = () => {
    this.setState({ ...this.state, inStock: this.props.inStock });
  };

  handleMouseOver = () => {
    this.setState({
      isHoveringOver: true,
    });
  };

  handleMouseOut = () => {
    this.setState({
      isHoveringOver: false,
      reirect: false,
    });
  };

  handleAddToCartFromPlp = (e) => {
    e.preventDefault();
    if (this.props.attributes < 1) {
      this.props.dispatch(
        addToCart({
          id: `${this.props.id}-${new Date().getTime()}`,
          variantId: this.props.id,
          itemId: this.props.id,
          amount: 1,
          price: this.props.pricesInCurrencies,
          gallery: this.props.gallery,
          brand: this.props.brand,
          name: this.props.name,
        })
      );
      window.scrollTo(0, 0);
    } else {
      this.setState({ redirect: true });
    }
  };
  render() {
    const { image, name, brand, prices, inStock, id } = this.props;
    const {
      amount,
      currency: { symbol },
    } = prices;
    return (
      <Wrapper
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <Link
          to={`pdp/${id}`}
          style={{ textDecoration: "none", color: "var(--extraDark)" }}
        >
          <section
            className={
              inStock ? "productCardContainer" : "productCardContainer blur"
            }
          >
            <div className="imageContainer">
              <img src={image} alt={name} className="productImage" />
              {this.state.isHoveringOver && this.state.inStock && (
                <CheckoutButton handleAddToCart={this.handleAddToCartFromPlp} />
              )}
              {!this.state.inStock && (
                <p className="outOfStockLabel">OUT OF STOCK</p>
              )}
            </div>
            <p className="productName">
              {brand} {name}
            </p>
            <p className="productPrice">
              {symbol}
              {amount}
            </p>
          </section>
        </Link>
        {this.state.redirect && <Navigate to={`pdp/${this.props.id}`} />}
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(ProductCard);
