import React, { Component } from "react";
import Wrapper from "../assets/wrappers/ProductList";
import ProductCard from "../Components/ProductCard";
import { Query } from "@apollo/client/react/components";
import { SINGLE_CATEGORY } from "../queries";
import { connect } from "react-redux";

class ProductList extends Component {
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
                  const {
                    id,
                    name,
                    brand,
                    prices,
                    gallery,
                    inStock,
                    attributes,
                  } = item;
                  let price = prices.find(
                    (item) =>
                      item.currency.label === this.props.selectedCurrency.label
                  );
                  return (
                    <ProductCard
                      key={id}
                      id={id}
                      name={name}
                      brand={brand}
                      image={gallery[0]}
                      prices={price}
                      pricesInCurrencies={prices}
                      inStock={inStock}
                      attributes={attributes}
                      gallery={gallery}
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
  selectedCurrency: state.ui.selectedCurrency,
});

export default connect(mapStateToProps)(ProductList);
