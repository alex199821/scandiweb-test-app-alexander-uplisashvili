import React, { Component } from "react";
import Wrapper from "../assets/wrappers/ProductList";
import Product from "../Components/ProductCard";
import { productList } from "../Utils/data";
// import { GraphQLClient, request, gql } from "graphql-request";

class ProductList extends Component {
  state = {
    productList: productList.data.category.products,
  };
  render() {
    return (
      <Wrapper>
        <h1 className="categoryLabel">All</h1>
        <section className="productsListContainer">
          {this.state.productList.map((item) => {
            const { id, name, prices, gallery } = item;
            return (
              <Product
                key={id}
                name={name}
                image={gallery[0]}
                prices={prices[0]}
              />
            );
          })}
        </section>
      </Wrapper>
    );
  }
}
export default ProductList;
