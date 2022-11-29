import styled from "styled-components";

const Wrapper = styled.section`
  .imageContainer {
    display: flex;
    height: 100%;
    width: 200px;
    justify-content: center;
    align-items: center;
    position: relative;
    .productImage {
      width: 100%;
      height: auto;
    }
    .sliderButtonContainer {
      display: flex;
      flex-direction: row;
      position: absolute;
      column-gap: 8px;
      bottom: 16px;
      right: 16px;
      .sliderButton {
        display: flex;
        background-color: var(--extraDark);
        border-radius: 0;
        border: none;
        opacity: 0.8;
        width: 20px;
        height: 20px;
        align-items: center;
        justify-content: center;
        padding: 5px;
        .sliderButtonIcon {
          display: flex;
          width: auto;
          height: 100%;
        }
      }
      .sliderButton:hover {
        opacity: 0.9;
      }
      .sliderButton:active {
        opacity: 1;
      }
    }
  }
`;

export default Wrapper;
