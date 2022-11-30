import React, { Component } from "react";
import {
  singleProduct,
  singleProduct1,
  singleProduct2,
  singleProduct3,
  singleProduct4,
  singleProduct5,
  singleProduct6,
  singleProduct7,
} from "../Utils/data";
import Wrapper from "../assets/wrappers/SingleProduct";
import ProductGalllery from "../Components/ProductGallery";
import ProductForm from "../Components/ProductForm";
// import { GraphQLClient, request, gql } from "graphql-request";

class SingleProduct extends Component {
  state = {
    singleProduct: singleProduct.data.category.products[1],
    mainImage: singleProduct.data.category.products[1].gallery[0],
  };
  render() {
    const {
      attributes,
      brand,
      description,
      gallery,
      id,
      inStock,
      name,
      prices,
    } = this.state.singleProduct;
    return (
      <Wrapper>
        <ProductGalllery gallery={gallery} />
        <section className="mainImageContainer">
          <img src={this.state.mainImage} alt="Product" className="mainImage" />
        </section>
        <ProductForm
          id={id}
          name={name}
          brand={brand}
          attributes={attributes}
          prices={prices}
          gallery={gallery}
        />
      </Wrapper>
    );
  }
}
export default SingleProduct;
