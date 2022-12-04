import React, { Component } from "react";
import Wrapper from "../assets/wrappers/SubmitButton";
class SubmitButton extends Component {
  render() {
    const { value, width, height } = this.props;
    return (
      <Wrapper width={width} height={height}>
        {value}
      </Wrapper>
    );
  }
}
export default SubmitButton;
