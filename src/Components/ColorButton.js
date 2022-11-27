import React, { Component } from "react";
import Wrapper from "../assets/wrappers/ColorButton";
import whiteCartIcon from "../assets/images/whiteCartIcon.png";

class ColorButton extends Component {
  state = {
    checked: this.props.checked,
    name: this.props.name,
  };
  handleClick = (e) => {
    this.setState({ checked: !this.state.checked });
    this.props.handleFormState(e.target.value, this.state.name, this.props.id);
  };

  componentDidUpdate = () => {
    let option = this.state.name;
    let item =
      this.props.form.length > 1
        ? this.props.form.find((item) => item.id === this.props.id)[option]
        : this.props.form[option];

    if (item !== this.props.displayValue && this.state.checked) {
      this.setState({ checked: false });
    }
  };
  render() {
    const { displayValue, value } = this.props;
    // console.log(`${this.state.checked}+${displayValue} `);
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
