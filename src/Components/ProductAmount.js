import React, { Component } from "react";
import Wrapper from "../assets/wrappers/ProductAmount";
import whiteCartIcon from "../assets/images/whiteCartIcon.png";

class ProductAmount extends Component {
  render() {
    const {
      item: { id, amount },
      handleAmount,
    } = this.props;

    return (
      <Wrapper overlay={this.props.overlay || false}>
        <button
          className="amountChangeButton"
          onClick={() => handleAmount(id, "inc", amount)}
        >
          <p>+</p>
        </button>
        <p className="amountLabel">{amount}</p>
        <button
          className="amountChangeButton"
          onClick={() => handleAmount(id, "dec", amount)}
        >
          <p className="center">-</p>
        </button>
      </Wrapper>
    );
  }
}
export default ProductAmount;
