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
import { Query } from "@apollo/client/react/components";
import { SINGLE_PRODUCT } from "../queries";
class SingleProduct extends Component {
  state = {
    // singleProduct: singleProduct.data.category.products[5],
    // mainImage: singleProduct.data.category.products[5].gallery[0],
    index: 0,
  };

  setMainImage = (imageIndex) => {
    this.setState({ index: imageIndex });
  };
  render() {
    return (
      <Query query={SINGLE_PRODUCT}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return console.log(error);
          console.log(data.product);
          const {
            attributes,
            brand,
            description,
            gallery,
            id,
            inStock,
            name,
            prices,
          } = data.product;
          return (
            <Wrapper>
              <ProductGalllery
                gallery={gallery}
                setMainImage={this.setMainImage}
              />
              <section className="mainImageContainer">
                <img
                  src={gallery[this.state.index]}
                  alt="Product"
                  className="mainImage"
                />
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
        }}
      </Query>
    );
  }
}
export default SingleProduct;
