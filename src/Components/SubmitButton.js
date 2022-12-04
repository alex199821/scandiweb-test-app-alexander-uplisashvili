import React, { Component } from "react";
import Wrapper from "../assets/wrappers/SubmitButton";
class SubmitButton extends Component {
  render() {
    const { value, width, height } = this.props;
    // Button is given width and height variables using Styled Components
    return (
      <Wrapper width={width} height={height}>
        {value}
      </Wrapper>
    );
  }
}
export default SubmitButton;
