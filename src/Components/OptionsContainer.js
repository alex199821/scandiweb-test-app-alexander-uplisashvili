import React, { Component } from "react";
import Wrapper from "../assets/wrappers/OptionsContainer";
import OptionButton from "./OptionButton";
import ColorButton from "./ColorButton";

class OptionsContainer extends Component {
  //On component mount unfilled product attributes are added to product form
  componentDidMount = () => {
    this.props.handleItemAttributes("", this.props.name);
  };
  render() {
    const { name, options, type, handleItemAttributes, form } = this.props;
    return (
      //Overlay props given CSS info is component is open in cart page or overlay container
      <Wrapper overlay={this.props.overlay || false}>
        <h2 className="optionLabel">{name}:</h2>
        <section className="buttonsContainer">
          {/* The map method below maps all multiple choices which product  attribute has */}
          {options.map((item, index) => {
            const { displayValue, value, id } = item;
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
              return (
                <ColorButton
                  key={id}
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
                  key={id}
                  id={id}
                  //Below is value which will be displayed inside button
                  value={value}
                  //Below is attribute name on which change should be handeled onClick
                  name={this.props.name}
                  handleItemAttributes={handleItemAttributes}
                  //This || statement sends cart item as prop in case cart page is opened and provides local state of form in case of PDP Page
                  item={this.props.itemInCart || form}
                  //If checked is true button is highlighted.
                  checked={testIfOptionChecked()}
                  //If button is used inside overlay (overlay prop provided) different styling is applied using styled components.
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
