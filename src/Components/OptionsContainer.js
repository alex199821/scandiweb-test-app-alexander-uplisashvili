import React, { Component } from "react";
import Wrapper from "../assets/wrappers/OptionsContainer";
import OptionButton from "./OptionButton";
import ColorButton from "./ColorButton";
import whiteCartIcon from "../assets/images/whiteCartIcon.png";

class OptionsContainer extends Component {
  state = {};
  render() {
    const { id, name, items, type, handleFormState, form } = this.props;

    return (
      <Wrapper>
        <h2 className="optionLabel">{name}:</h2>
        <section className="buttonsContainer">
          {items.map((item, index) => {
            const { displayValue, value } = item;
            if (type === "swatch") {
              const testIfCheckedColor = () => {
                if (
                  this.props.props &&
                  this.props.props.Color === displayValue
                ) {
                  return true;
                } else {
                  return false;
                }
              };
              return (
                <ColorButton
                  key={index}
                  id={id}
                  value={value}
                  displayValue={displayValue}
                  name={this.props.name}
                  handleFormState={handleFormState}
                  form={form}
                  checked={testIfCheckedColor()}
                />
              );
            } else {
              const testIfCheckedOption = () => {
                if (this.props.props && this.props.props[name] === value) {
                  return true;
                } else {
                  return false;
                }
              };
              return (
                <OptionButton
                  key={index}
                  id={id}
                  displayValue={displayValue}
                  value={value}
                  name={this.props.name}
                  handleFormState={handleFormState}
                  form={form}
                  checked={testIfCheckedOption()}
                />
              );
            }
          })}
        </section>
      </Wrapper>
    );
  }
}
export default OptionsContainer;
