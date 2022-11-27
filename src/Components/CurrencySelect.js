import React, { Component } from "react";
import { Wrapper } from "../assets/wrappers/CurrencySelect";
import { options } from "../Utils/data";
import arrowIcon from "../assets/images/arrowIcon.png";
class CurrencySelect extends Component {
  constructor() {
    super();
    this.selectorRef = React.createRef(null);
  }

  state = {
    selectedOption: options.filter((option) => option.label === "USD")[0],
    optionsOpen: false,
  };

  handleOptions = (e) => {
    this.setState({
      optionsOpen: !this.state.optionsOpen,
    });
  };

  handleOptionsClose = (e) => {
    if (e.target !== this.selectorRef.current) {
      this.setState({
        optionsOpen: false,
      });
    }
  };

  chooseOption = (e) => {
    this.handleOptionsClose(e);
    this.setState({
      selectedOption: options.filter(
        (option) => option.label === e.target.value
      )[0],
    });
  };

  componentDidMount = () => {
    document.addEventListener("click", this.handleOptionsClose, true);
  };

  componentWillUnmount = () => {
    document.removeEventListener("click", this.handleOptionsClose, true);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Wrapper>
        <button
          onClick={this.handleOptions}
          ref={this.selectorRef}
          className="selected"
        >
          {selectedOption.symbol}
          <img
            src={arrowIcon}
            alt="Arrow"
            className={
              this.state.optionsOpen ? "arrowIcon" : "rotate arrowIcon"
            }
          />
        </button>
        <div
          className={this.state.optionsOpen ? "options optionsShow" : "options"}
        >
          {options.map((option, index) => {
            const { label, symbol } = option;
            return (
              <button
                key={index}
                className="singleOption"
                onClick={this.chooseOption}
                value={label}
              >
                {symbol} {label}
              </button>
            );
          })}
        </div>
      </Wrapper>
    );
  }
}
export default CurrencySelect;
