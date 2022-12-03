import React, { Component } from "react";
import Wrapper from "../assets/wrappers/SingleProduct";
import ProductGalllery from "../Components/ProductGallery";
import ProductForm from "../Components/ProductForm";
import { Query } from "@apollo/client/react/components";
import { SINGLE_PRODUCT } from "../queries";
class SingleProduct extends Component {
  state = {
    index: 0,
    id: "",
  };

  setMainImage = (imageIndex) => {
    this.setState({ index: imageIndex });
  };

  componentDidMount() {
    // console.log(this.props.match.params.id);
    // let { id } = this.props.match.params;
    let id = window.location.pathname.split("/")[2];
    this.setState({ id: id });
  }
  render() {
    return (
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
              />
            </Wrapper>
          );
        }}
      </Query>
    );
  }
}
export default SingleProduct;
