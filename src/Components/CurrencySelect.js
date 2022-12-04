import React, { Component } from "react";
import { Wrapper } from "../assets/wrappers/CurrencySelect";
import { options } from "../Utils/data";
import { connect } from "react-redux";
import arrowIcon from "../assets/images/arrowIcon.png";
import { setCurrency } from "../features/uiSlice";
class CurrencySelect extends Component {
  constructor() {
    super();
    this.selectorRef = React.createRef(null);
  }

  state = {
    selectedOption: options.filter((option) => option.label === "USD")[0],
    optionsOpen: false,
  };

  handleOptions = () => {
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

  chooseOption = ({ e, label, symbol }) => {
    this.handleOptionsClose(e);
    this.setState({
      selectedOption: options.filter((option) => option.label === label)[0],
    });
    this.props.dispatch(setCurrency({ label, symbol }));
  };

  componentDidMount = () => {
    // console.log(options.filter((option) => option.label === "USD")[0].symbol);

    this.setState({
      ...this.state,
      selectedOption: options.filter(
        (option) => option.label === this.props.selectedCurrency.label
      )[0],
    });
    document.addEventListener("click", this.handleOptionsClose, true);
  };

  componentDidUpdate = () => {
    // console.log(this.props.selectedCurrency);
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
                onClick={(e) => this.chooseOption({ e, label, symbol })}
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
const mapStateToProps = (state) => ({
  selectedCurrency: state.ui.selectedCurrency,
});

export default connect(mapStateToProps)(CurrencySelect);
