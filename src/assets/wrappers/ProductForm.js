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
    margin-bottom: 20px;
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
  .descriptionContainer {
    width: 300px;
    font-size: 14px;
    margin-top: 40px;
    h3,
    h1 {
      font-weight: 500;
      margin-bottom: 8px;
    }
    p,
    li {
      margin-bottom: 16px;
    }
  }
`;

export default Wrapper;
