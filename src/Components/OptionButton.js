import React, { Component } from "react";
import Wrapper from "../assets/wrappers/OptionButton";
import whiteCartIcon from "../assets/images/whiteCartIcon.png";

class OptionButton extends Component {
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
    //Statement below checks if button's value matches product's chosen state value. Then it unselects all buttons if match is not made.
    if (this.props.item[option] !== this.props.value && this.state.checked) {
      this.setState({ checked: false });
    }
  };
  render() {
    const { displayValue, value } = this.props;
    return (
      <Wrapper overlay={this.props.overlay || false}>
        <input
          className={
            this.state.checked ? "sizeButton sizeButtonSelected" : "sizeButton"
          }
          type="button"
          value={value}
          onClick={this.handleClick}
        />
      </Wrapper>
    );
  }
}
export default OptionButton;
