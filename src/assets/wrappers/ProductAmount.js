import styled, { css } from "styled-components";

const Wrapper = styled.section.attrs((props) => {
  return { overlay: props.overlay };
})`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .amountLabel {
    font-weight: 500;
    ${({ overlay }) => {
      return overlay
        ? css`
            font-size: 16px;
          `
        : css`
            font-size: 24px;
          `;
    }}
  }
  .amountChangeButton {
    background-color: transparent;
    border-radius: 0;
    border: 1px solid var(--extraDark);
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ overlay }) => {
      return overlay
        ? css`
            width: 28px;
            height: 28px;
          `
        : css`
            width: 40px;
            height: 40px;
          `;
    }}
    .center {
      margin-top: -5px;
    }
    p {
      font-weight: 100;
      font-family: "Raleway", sans-serif;
      ${({ overlay }) => {
        return overlay
          ? css`
              font-size: 25px;
            `
          : css`
              font-size: 50px;
            `;
      }}
    }
  }
`;

export default Wrapper;
