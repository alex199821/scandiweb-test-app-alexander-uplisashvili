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
  handleOverlay = () => {
    this.props.dispatch(handleOverlay());
  };

  handleCategory = (category) => {
    this.props.dispatch(setCategory(category));
  };
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
        <Query query={ALL_CATEGORIES}>
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return console.log(error);
            let categories = data.categories;
            return (
              <Wrapper>
                <section className="selections categories">
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
                  <div onClick={this.handleOverlay}>
                    <CartButton />
                  </div>
                </section>
              </Wrapper>
            );
          }}
        </Query>
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
});

export default connect(mapStateToProps)(NavBar);
