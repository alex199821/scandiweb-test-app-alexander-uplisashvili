import styled, { css } from "styled-components";

const Wrapper = styled.section.attrs((props) => {
  return { overlay: props.overlay };
})`
  ${({ overlay }) => {
    return overlay
      ? css`
          margin-top: 8px;
        `
      : css`
          margin-top: 24px;
        `;
  }}

  .optionLabel {
    text-transform: uppercase;
    font-family: "Roboto Condensed", sans-serif;
    ${({ overlay }) => {
      return overlay
        ? css`
            font-weight: 300;
            font-size: 14px;
          `
        : css`
            font-weight: 700;
            font-size: 18px;
          `;
    }}
  }
  .buttonsContainer {
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    ${({ overlay }) => {
      return overlay
        ? css`
            column-gap: 8px;
          `
        : css`
            column-gap: 12px;
          `;
    }}
  }
`;

export default Wrapper;
