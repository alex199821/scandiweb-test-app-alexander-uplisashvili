import React, { Component } from "react";
import Wrapper from "../assets/wrappers/ProductCard";
import CheckoutButton from "./CheckoutButton";
import { Link, Navigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { connect } from "react-redux";

class ProductCard extends Component {
  state = {
    isHoveringOver: false,
    inStock: true,
  };
  componentDidMount = () => {
    this.setState({ ...this.state, inStock: this.props.inStock });
  };

  //Function below control hovering over Product Card
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

  //This function allows user to add a product to the cart from PLP if it doesn’t have any attributes, else it redirects user to PDP
  handleAddToCartFromPlp = (e) => {
    e.preventDefault();
    if (this.props.attributes < 1) {
      this.props.dispatch(
        addToCart({
          id: `${this.props.id}-${new Date().getTime()}`,
          //In case of products with no attribute every time oly item brand and name will be in variantId
          variantId: `brand_${this.props.brand}name_${this.props.name}`,
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
      //This state change makes redirect true what allows <Navigate/> to take user to PDP Page
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
        {/* This link wraps whole Product Card what allows user to go Product's PDP Page if Checkout button was not clicked */}
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
        {/* Component to redirect user to PDP Page */}
        {this.state.redirect && <Navigate to={`pdp/${this.props.id}`} />}
      </Wrapper>
    );
  }
}
//Selector to get data from Redux
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(ProductCard);
