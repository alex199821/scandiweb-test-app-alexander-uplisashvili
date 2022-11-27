import styled from "styled-components";

const Wrapper = styled.form`
  margin-left: 100px;
  .brandName {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 8px;
  }
  .productName {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .priceContainer {
    margin-top: 36px;
    .price,
    .priceLabel {
      font-weight: 700;
      text-transform: uppercase;
      font-family: "Roboto Condensed", sans-serif;
    }
    .priceLabel {
      font-size: 18px;
    }
    .price {
      margin-top: 10px;
      font-size: 24px;
    }
  }
  .submitButton {
    margin-top: 20px;
    background-color: var(--green);
    border: none;
    border-radius: 0;
    color: var(--white);
    padding: 16px 90px 16px 90px;
  }
`;

export default Wrapper;
