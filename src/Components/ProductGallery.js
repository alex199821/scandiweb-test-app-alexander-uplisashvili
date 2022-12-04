import React, { Component } from "react";
import Wrapper from "../assets/wrappers/ProductGallery";
import CheckoutButton from "./CheckoutButton";

class ProductGalllery extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.gallery.map((image, index) => {
          return (
            <div
              key={index}
              className="galleryImageContainer"
              onClick={() => this.props.setMainImage(index)}
            >
              <img src={image} alt="Product" className="galleryImage" />
            </div>
          );
        })}
      </Wrapper>
    );
  }
}

export default ProductGalllery;
