import styled, { css } from "styled-components";

const Wrapper = styled.section.attrs((props) => {
  return { overlay: props.overlay };
})`
  border-bottom: 1px solid var(--gray);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${({ overlay }) => {
    return overlay
      ? css`
          padding-top: 20px;
          padding-bottom: 20px;
          border-bottom: none;
        `
      : css`
          border-bottom: 1px solid var(--gray);
          padding-top: 24px;
          padding-bottom: 24px;
        `;
  }}
  .productOption {
    .brandLabel {
      ${({ overlay }) => {
        return overlay
          ? css`
              font-weight: 300;
              font-size: 14px;
              margin-bottom: 8px;
            `
          : css`
              font-weight: 600;
              font-size: 24px;
              margin-bottom: 14px;
            `;
      }}
    }
    .nameLabel {
      ${({ overlay }) => {
        return overlay
          ? css`
              font-weight: 300;
              font-size: 14px;
              margin-bottom: 8px;
            `
          : css`
              font-weight: 400;
              font-size: 24px;
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
  }

  .incrementAndPhotoContainer {
    display: flex;
    flex-direction: row;
    ${({ overlay }) => {
      return overlay
        ? css`
            column-gap: 8px;
          `
        : css`
            column-gap: 24px;
          `;
    }}
  }
`;

export default Wrapper;
