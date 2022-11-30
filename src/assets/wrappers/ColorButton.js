import styled, { css } from "styled-components";

const Wrapper = styled.section.attrs((props) => {
  return { overlay: props.overlay };
})`
  .colorButton {
    display: flex;
    cursor: pointer;
    border: none;

    ${({ overlay }) => {
      return overlay
        ? css`
            width: 16px;
            height: 16px;
          `
        : css`
            width: 24px;
            height: 24px;
          `;
    }}
  }

  .colorButtonSelected {
    box-shadow: 0px 0px 0px 2px white, 0px 0px 0px 3px var(--green);
  }

  .border {
    border: 1px solid var(--extraDark);
  }
`;

export default Wrapper;
