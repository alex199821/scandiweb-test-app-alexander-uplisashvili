import React, { Component } from "react";
import Wrapper from "../assets/wrappers/SingleProduct";
import ProductGalllery from "../Components/ProductGallery";
import ProductForm from "../Components/ProductForm";
import { Query } from "@apollo/client/react/components";
import { SINGLE_PRODUCT } from "../queries";

class ProductPage extends Component {
  state = {
    index: 0,
    id: "",
  };

  //This function selects main image on PDP
  setMainImage = (imageIndex) => {
    this.setState({ index: imageIndex });
  };

  //On page load item ID is selected from url
  componentDidMount() {
    let id = window.location.pathname.split("/")[2];
    this.setState({ id: id });
  }
  render() {
    return (
      // Each product is fetched using Item Id variable
      <Query query={SINGLE_PRODUCT} variables={{ id: this.state.id }}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return console.log(error);
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
                inStock={inStock}
                description={description}
              />
            </Wrapper>
          );
        }}
      </Query>
    );
  }
}
export default ProductPage;
