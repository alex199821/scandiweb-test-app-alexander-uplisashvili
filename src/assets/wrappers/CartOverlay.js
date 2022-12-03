import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  z-index: 99;
  .background {
    /* direction: ltr; */
    background: rgba(57, 55, 72, 0.22);
    width: 200vw;
    height: 200vh;
    margin-right: -30vw;
    z-index: 1;
    position: absolute;
  }
  .cartOverlayContainer {
    direction: rtl;
    width: 85%;
    margin: auto;
    background-color: var(--white);
    .overlay {
      direction: ltr;
      display: flex;
      margin: auto;
      width: 300px;
      height: 75vh;
      background-color: var(--white);
      float: right;
      z-index: 9999999;
      flex-direction: column;
      overflow-x: hidden;
      padding: 32px 0px 32px 16px;
      padding-right: 32px;
      position: absolute;
      margin-right: -25px;
      /* ::-webkit-scrollbar {
        background-color: transparent;
      } */
      .bagAmountLabel {
        margin-bottom: 16px;
      }
      .priceContainer {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        margin-top: 12px;
        .priceLabel {
          font-weight: 500;
        }
        .price {
          font-weight: 700;
          /* margin-right: 16px; */
        }
      }

      .overlayButtonsContainer {
        display: flex;
        justify-content: space-between;
        margin-top: 32px;
        /* margin-right: 32px; */
        .checkoutButton,
        .viewbagButton {
          font-family: "Raleway", sans-serif;
          font-size: 14px;
          font-weight: 600;
          width: 135px;
          height: 45px;
          border-radius: 0;
          align-items: center;
        }
        .viewbagButton {
          background-color: transparent;
          border: 1px solid var(--extraDark);
          :active {
            background-color: var(--extraDark);
            color: var(--white);
          }
        }
        .checkoutButton {
          color: var(--white);
          background-color: var(--green);
          border: 1px solid var(--green);
          :active {
            background-color: var(--white);
            color: var(--green);
          }
        }
      }
    }
  }
`;

export default Wrapper;
