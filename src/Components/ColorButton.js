import React, { Component } from "react";
import Wrapper from "../assets/wrappers/ColorButton";

class ColorButton extends Component {
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

  //Condition, according to which all attributes, which are not selected in database are also unselected in ui -> in short unselects button when other variant is chosen
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
      <Wrapper overlay={this.props.overlay || false}>
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
