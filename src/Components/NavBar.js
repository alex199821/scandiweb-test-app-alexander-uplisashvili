import React, { Component } from "react";
import Wrapper from "../assets/wrappers/NavBar";
import { Outlet } from "react-router-dom";
import CartButton from "./CartButton";
import shopLogo from "../assets/images/shopLogo.png";
import { categories } from "../Utils/data";
// import { GraphQLClient, request, gql } from "graphql-request";
import CurrencySelect from "./CurrencySelect";
class NavBar extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <section className="selections categories">
            {categories.map((category, index) => {
              return (
                <p key={index} className="category">
                  {category}
                </p>
              );
            })}
          </section>
          <section className="logo">
            <img src={shopLogo} alt="ShopLogo" />
          </section>
          <section className="selections options">
            <CurrencySelect />
            <CartButton />
          </section>
        </Wrapper>
        {/* <section className="background"></section> */}
        <Outlet />
      </>
    );
  }
}
export default NavBar;
