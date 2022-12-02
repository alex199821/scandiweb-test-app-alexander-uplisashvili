import styled, { css } from "styled-components";

const Wrapper = styled.section.attrs((props) => {
  return { overlay: props.overlay };
})`
  .sizeButton {
    display: flex;
    text-transform: uppercase;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    color: var(--extraDark);
    background-color: transparent;
    border: 1px solid var(--extraDark);
    ${({ overlay }) => {
      return overlay
        ? css`
            /* width: 24px;
            height: 24px; */
            font-size: 12px;
            min-width: 28px;
            min-height: 28px;
          `
        : css`
            /* padding: 20px; */
            padding: 0px 10px;
            width: 65px;
            height: 45px;
            font-size: 16px;
          `;
    }}
  }
  .sizeButtonSelected {
    background-color: var(--extraDark);
    color: var(--white);
  }
`;

export default Wrapper;
