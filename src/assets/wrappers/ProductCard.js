import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 50px;
  .blur {
    opacity: 0.4;
  }
  .productCardContainer:hover {
    box-shadow: 0px 0px 31px -7px rgba(0, 0, 0, 0.2);
  }
  .imageContainer {
    display: flex;
    padding: 16px;
    justify-content: center;
    position: relative;
    .productImage {
      height: 20vw;
      width: auto;
    }
    .outOfStockLabel {
      position: absolute;
      top: 50%;
      font-weight: 500;
      font-size: 21px;
    }
  }
  .productName {
    margin-top: 8px;
    font-weight: 300;
    font-size: 14px;
    padding: 0px 16px 0px 16px;
  }
  .productPrice {
    margin-top: 2px;
    font-weight: 500;
    font-size: 14px;
    padding: 0px 16px 16px 16px;
  }
`;

export default Wrapper;
