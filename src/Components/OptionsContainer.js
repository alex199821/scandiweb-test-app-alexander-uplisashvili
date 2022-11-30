import React, { Component } from "react";
import Wrapper from "../assets/wrappers/OptionsContainer";
import OptionButton from "./OptionButton";
import ColorButton from "./ColorButton";
import whiteCartIcon from "../assets/images/whiteCartIcon.png";

class OptionsContainer extends Component {
  render() {
    const { id, name, options, type, handleItemAttributes, form } = this.props;
    return (
      <Wrapper overlay={this.props.overlay || false}>
        <h2 className="optionLabel">{name}:</h2>
        <section className="buttonsContainer">
          {/* The map method below maps all multiple choices which product  attribute has */}
          {options.map((item, index) => {
            const { displayValue, value } = item;
            if (type === "swatch") {
              //This function compares if color value matches selected color value in cart, if yes highlights chosen value
              const testIfColorChecked = () => {
                if (
                  this.props.itemInCart &&
                  this.props.itemInCart.Color === displayValue
                ) {
                  return true;
                } else {
                  return false;
                }
              };
              // console.log(this.props.name, value);
              return (
                <ColorButton
                  key={index}
                  id={id}
                  value={value}
                  displayValue={displayValue}
                  name={this.props.name}
                  handleItemAttributes={handleItemAttributes}
                  item={this.props.itemInCart || form}
                  checked={testIfColorChecked()}
                  overlay={this.props.overlay}
                />
              );
            } else {
              //This function compares if button value matches selected option value in cart, if yes highlights chosen value
              const testIfOptionChecked = () => {
                if (
                  this.props.itemInCart &&
                  this.props.itemInCart[name] === value
                ) {
                  return true;
                } else {
                  return false;
                }
              };
              return (
                <OptionButton
                  key={index}
                  id={id}
                  value={value}
                  name={this.props.name}
                  handleItemAttributes={handleItemAttributes}
                  //This or statement sends cart item as prop in case cart page is opened and provides local state of form in case of PDP Page
                  item={this.props.itemInCart || form}
                  checked={testIfOptionChecked()}
                  overlay={this.props.overlay}
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
