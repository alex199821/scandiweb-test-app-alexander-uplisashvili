import styled, { css } from "styled-components";

const Wrapper = styled.section.attrs((props) => {
  return { overlay: props.overlay };
})`
  .imageContainer {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
    ${({ overlay }) => {
      return overlay
        ? css`
            width: 100px;
          `
        : css`
            width: 200px;
          `;
    }}
    .productImage {
      width: 100%;
      height: auto;
    }
    .thumbnailButtonContainer {
      display: flex;
      flex-direction: row;
      position: absolute;
      column-gap: 8px;
      bottom: 16px;
      right: 16px;
      .thumbnailButton {
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
        .thumbnailButtonIcon {
          display: flex;
          width: auto;
          height: 100%;
        }
      }
      .thumbnailButton:hover {
        opacity: 0.9;
      }
      .thumbnailButton:active {
        opacity: 1;
      }
    }
  }
`;

export default Wrapper;
