import React, { Component } from "react";
import Wrapper from "../assets/wrappers/NavBar";
import { Outlet } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import CartButton from "./CartButton";
import shopLogo from "../assets/images/shopLogo.png";
import CurrencySelect from "./CurrencySelect";
import { ALL_CATEGORIES } from "../queries";
import CartOverlay from "./CartOverlay";
import { connect } from "react-redux";
import { setCategory, handleOverlay } from "../features/uiSlice";
class NavBar extends Component {
  //Overlay is part of navbar, therefore its opening / closing is managed via Navbar compoenent
  handleOverlay = () => {
    this.props.dispatch(handleOverlay());
  };

  //On click one of 3 categories is selected
  handleCategory = (category) => {
    this.props.dispatch(setCategory(category));
  };

  //Statement which makes sure that if overlay is open it becomes impossible to scroll the page
  componentDidUpdate = () => {
    if (this.props.overlayOpen) {
      document.body.style.overflow = "hidden";
    } else if (!this.props.overlayOpen) {
      document.body.style.overflow = "auto";
    }
  };

  render() {
    return (
      <>
        {/* Query to fetch all variants of different product categories */}
        <Query query={ALL_CATEGORIES}>
          {({ loading, error, data }) => {
            if (loading) return null;
            {/* Display error if Graph QL End point not launched */}
            if (error) return <h1 className="serverError">CONNECTION ERROR://</h1>
            let categories = data.categories;
            return (
              <Wrapper>
                <section className="selections categories">
                  {/* Categories mapped + selected category is underlined */}
                  {categories.map((category, index) => {
                    const { name } = category;
                    return (
                      <p
                        key={index}
                        className={
                          this.props.selectedCategory === name
                            ? "category selectedCategory"
                            : "category"
                        }
                        onClick={() => this.handleCategory(name)}
                      >
                        {name}
                      </p>
                    );
                  })}
                </section>
                <section className="logo">
                  <img src={shopLogo} alt="ShopLogo" />
                </section>
                <section className="selections options">
                  <CurrencySelect />
                  <div
                    onClick={this.props.cart.length > 0 && this.handleOverlay}
                  >
                    <CartButton />
                  </div>
                </section>
              </Wrapper>
            );
          }}
        </Query>
        {/* Below is overlay container which only appears on state change */}
        {this.props.overlayOpen && (
          <CartOverlay
            handleOverlay={this.handleOverlay}
            overlayOpen={this.props.overlayOpen}
          />
        )}
        <Outlet />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  selectedCategory: state.ui.selectedCategory,
  overlayOpen: state.ui.overlayOpen,
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(NavBar);
