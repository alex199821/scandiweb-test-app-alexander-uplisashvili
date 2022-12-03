import React, { Component } from "react";
import Wrapper from "../assets/wrappers/ProductList";
import ProductCard from "../Components/ProductCard";
import { Query } from "@apollo/client/react/components";
import { ALL_PRODUCTS, SINGLE_CATEGORY } from "../queries";
import { connect } from "react-redux";

class ProductList extends Component {
  state = {
    productList: [],
  };

  render() {
    return (
      <Query
        query={SINGLE_CATEGORY}
        variables={{ title: this.props.selectedCategory }}
      >
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return console.log(error);
          let response = data.category.products;
          return (
            <Wrapper>
              <h1 className="categoryLabel">{this.props.selectedCategory}</h1>
              <section className="productsListContainer">
                {response.map((item) => {
                  const { id, name, prices, gallery, inStock } = item;
                  return (
                    <ProductCard
                      key={id}
                      id={id}
                      name={name}
                      image={gallery[0]}
                      prices={prices[0]}
                      inStock={inStock}
                    />
                  );
                })}
              </section>
            </Wrapper>
          );
        }}
      </Query>
    );
  }
}
const mapStateToProps = (state) => ({
  selectedCategory: state.ui.selectedCategory,
});

export default connect(mapStateToProps)(ProductList);
