import React, { Component } from "react";
import Wrapper from "../assets/wrappers/OptionButton";
import whiteCartIcon from "../assets/images/whiteCartIcon.png";

class OptionButton extends Component {
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
    let value = this.state.value;
    let item =
      this.props.form.length > 1
        ? this.props.form.find((item) => item.id === this.props.id)[option]
        : this.props.form[option];

    if (item !== this.props.value && this.state.checked) {
      this.setState({ checked: false });
    }
  };
  render() {
    const { displayValue, value } = this.props;

    return (
      <Wrapper>
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
