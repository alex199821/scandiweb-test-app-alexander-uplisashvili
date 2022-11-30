import styled, { css } from "styled-components";

const Wrapper = styled.section.attrs((props) => {
  return { overlay: props.overlay };
})`
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--gray);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${({ overlay }) => {
    return overlay
      ? css`
          border-bottom: none;
        `
      : css`
          border-bottom: 1px solid var(--gray);
        `;
  }}
  .brandLabel {
    ${({ overlay }) => {
      return overlay
        ? css`
            font-size: 14px;
            font-weight: 300;
            margin-bottom: 8px;
          `
        : css`
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 14px;
          `;
    }}
  }
  .nameLabel {
    ${({ overlay }) => {
      return overlay
        ? css`
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 8px;
          `
        : css`
            font-size: 24px;
            font-weight: 300;
            margin-bottom: 14px;
          `;
    }}
  }
  .priceLabel {
    ${({ overlay }) => {
      return overlay
        ? css`
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 8px;
          `
        : css`
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 16px;
          `;
    }}
  }
  .incrementAndPhotoContainer {
    display: flex;
    flex-direction: row;
    column-gap: 24px;
  }
`;

export default Wrapper;
