import styled from "styled-components";

export const Wrapper = styled.section`
  .cartButton {
    display: flex;
    position: relative;
    .itemsInCartMarker {
      display: flex;
      justify-content: center;
      background-color: var(--dark);
      color: white;
      border-radius: 50%;
      font-size: 10px;
      width: 18px;
      height: 18px;
      position: absolute;
      margin-left: 20px;
      margin-top: -8px;
      align-items: center;
      p {
        font-family: sans-serif;
        font-weight: 600;
      }
    }
    .cartIcon {
      height: 18px;
      width: auto;
      margin-left: 10px;
    }
  }

  .cartOverlayContainer {
    direction: rtl;
    /* margin-top: 125px; */
    .background {
      background: rgba(57, 55, 72, 0.22);
      width: 200vw;
      height: 200vh;
      margin-right: -80vw;
      z-index: 999999;
      position: absolute;
    }
  }
`;
