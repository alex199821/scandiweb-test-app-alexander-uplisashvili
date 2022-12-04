import React, { Component } from "react";
import Wrapper from "../assets/wrappers/OptionButton";

class OptionButton extends Component {
  //Marks button checked if it is in cart page and selected in cart
  state = {
    checked: this.props.checked,
  };

  //On click checks / unchecks button and selets attribute+sends choice to redux
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
    const { value } = this.props;
    return (
      <Wrapper overlay={this.props.overlay || false}>
        <input
          className={
            this.state.checked
              ? "optionButton optionButtonSelected"
              : "optionButton"
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
