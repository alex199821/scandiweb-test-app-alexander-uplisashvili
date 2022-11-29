import React, { Component } from "react";
import Wrapper from "../assets/wrappers/ColorButton";
import whiteCartIcon from "../assets/images/whiteCartIcon.png";

class ColorButton extends Component {
  state = {
    checked: this.props.checked,
  };
  handleClick = (e) => {
    if (!this.props.checked) {
      this.setState({ checked: !this.state.checked });
    }
    this.props.handleItemAttributes(e.target.value, this.props.name);
  };

  componentDidUpdate = () => {
    let option = this.props.name;
    if (
      this.props.item[option] !== this.props.displayValue &&
      this.state.checked
    ) {
      this.setState({ checked: false });
    }
  };
  render() {
    const { displayValue, value } = this.props;
    return (
      <Wrapper>
        <button
          style={{
            backgroundColor: value,
            border:
              displayValue === "White" ? `1px solid var(--extraDark)` : "",
          }}
          className={
            this.state.checked
              ? "colorButton  colorButtonSelected"
              : "colorButton"
          }
          value={displayValue}
          type="button"
          onClick={this.handleClick}
        />
      </Wrapper>
    );
  }
}
export default ColorButton;
