import React, { Component } from "react";
import Wrapper from "../assets/wrappers/CartThumbnails";
import arrowNext from "../assets/images/arrowNext.png";
import arrowPrev from "../assets/images/arrowPrev.png";
//Component which contains images of products inside cart
class CartThumbnails extends Component {
  state = {
    index: 0,
  };

  //On click index+1 operation shows next image in Thumbnails
  nextPhoto = () => {
    if (this.state.index < this.props.item.gallery.length - 1)
      this.setState({ ...this.state, index: parseInt(this.state.index) + 1 });
  };

  //On click index-1 operation shows previous image in Thumbnails
  previousPhoto = () => {
    if (this.state.index > 0)
      this.setState({ ...this.state, index: parseInt(this.state.index) - 1 });
  };
  render() {
    const { gallery } = this.props.item;
    return (
      //Overlay props given CSS info is component is open in cart page or overlay container
      <Wrapper overlay={this.props.overlay || false}>
        <section className="imageContainer">
          {/* Image displayed according to index contained in state */}
          <img
            src={gallery[this.state.index]}
            alt="Product"
            className="productImage"
          />
          {/* Arrow icons over image disaplayed if there is more than 1 image of an item  */}
          {gallery.length > 1 && !this.props.overlay && (
            <div className="thumbnailButtonContainer">
              <button className="thumbnailButton" onClick={this.previousPhoto}>
                <img
                  src={arrowPrev}
                  alt="Previous Arrow"
                  className="thumbnailButtonIcon"
                />
              </button>
              <button className="thumbnailButton" onClick={this.nextPhoto}>
                <img
                  src={arrowNext}
                  alt="Next Arrow"
                  className="thumbnailButtonIcon"
                />
              </button>
            </div>
          )}
        </section>
      </Wrapper>
    );
  }
}

export default CartThumbnails;
