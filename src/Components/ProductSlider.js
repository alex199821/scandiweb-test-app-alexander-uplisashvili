import React, { Component } from "react";
import Wrapper from "../assets/wrappers/ProductSlider";
import { product } from "../Utils/data";
import CheckoutButton from "./CheckoutButton";
import arrowNext from "../assets/images/arrowNext.png";
import arrowPrev from "../assets/images/arrowPrev.png";

class ProductSlider extends Component {
  state = {
    index: "",
  };

  componentDidMount() {
    this.setState({ index: 0 });
  }

  nextPhoto = () => {
    if (this.state.index < this.props.item.gallery.length - 1)
      this.setState({ ...this.state, index: parseInt(this.state.index) + 1 });
  };

  previousPhoto = () => {
    if (this.state.index > 0)
      this.setState({ ...this.state, index: parseInt(this.state.index) - 1 });
  };
  render() {
    const { gallery } = this.props.item;
    // console.log(gallery);
    return (
      <Wrapper>
        <section className="imageContainer">
          <img
            src={gallery[this.state.index]}
            alt="Product"
            className="productImage"
          />
          {gallery.length > 1 && (
            <div className="sliderButtonContainer">
              <button className="sliderButton" onClick={this.previousPhoto}>
                <img
                  src={arrowPrev}
                  alt="Previous Arrow"
                  className="sliderButtonIcon"
                />
              </button>
              <button className="sliderButton" onClick={this.nextPhoto}>
                <img
                  src={arrowNext}
                  alt="Next Arrow"
                  className="sliderButtonIcon"
                />
              </button>
            </div>
          )}
        </section>
      </Wrapper>
    );
  }
}

export default ProductSlider;
