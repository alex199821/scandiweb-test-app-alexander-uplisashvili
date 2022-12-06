import React, { Component } from "react";
import { Wrapper } from "../assets/wrappers/CurrencySelect";
import { connect } from "react-redux";
import arrowIcon from "../assets/images/arrowIcon.png";
import { setCurrency } from "../features/uiSlice";
import { Query } from "@apollo/client/react/components";
import { CURRENCIES } from "../queries";

class CurrencySelect extends Component {
  constructor() {
    super();
    //Ref is used to diffrentiate Currency Dropdown from all other elements on page
    this.selectorRef = React.createRef(null);
  }

  state = {
    selectedOption: "",
    optionsOpen: false,
  };

  //Functio to open / close currency drop down
  handleOptions = () => {
    this.setState({
      optionsOpen: !this.state.optionsOpen,
    });
  };

  //Function to close dropdown if there is click anywhere outside of currency dropdown
  handleOptionsClose = (e) => {
    if (e.target !== this.selectorRef.current) {
      this.setState({
        optionsOpen: false,
      });
    }
  };

  //Function to select currency and save it in redux
  chooseOption = ({ e, label, symbol }) => {
    this.handleOptionsClose(e);
    this.setState({
      selectedOption: { label, symbol },
    });
    this.props.dispatch(setCurrency({ label, symbol }));
  };

  //On page load currency is selected according to redux state and event listener is added to monitor clicks outside dropdown
  componentDidMount = () => {
    this.setState({
      ...this.state,
      selectedOption: this.props.selectedCurrency,
    });
    document.addEventListener("click", this.handleOptionsClose, true);
  };

  componentWillUnmount = () => {
    document.removeEventListener("click", this.handleOptionsClose, true);
  };

  render() {
    const { selectedOption } = this.state;
    return (
      //Query to fetch all avaiable currency variants
      <Query query={CURRENCIES} variables={{ id: this.state.id }}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return console.log(error);
          let currencyOptions = data.category.products[0].prices;
          return (
            <Wrapper>
              {/* Button for currecy drop down which contains selected symbol and arrow inside dropdown  */}
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
                className={
                  this.state.optionsOpen ? "options optionsShow" : "options"
                }
              >
                {/* All currency options are mapped below */}
                {currencyOptions.map((option, index) => {
                  const {
                    currency: { label, symbol },
                  } = option;
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
        }}
      </Query>
    );
  }
}
//Selector to get data from Redux
const mapStateToProps = (state) => ({
  selectedCurrency: state.ui.selectedCurrency,
});

export default connect(mapStateToProps)(CurrencySelect);
