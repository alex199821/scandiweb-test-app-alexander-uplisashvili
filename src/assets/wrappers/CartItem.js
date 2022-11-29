import styled from "styled-components";

const Wrapper = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--gray);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .brandLabel {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 14px;
  }
  .nameLabel {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 16px;
  }
  .priceLabel {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .incrementAndPhotoContainer {
    display: flex;
    flex-direction: row;
    column-gap: 24px;
  }
`;

export default Wrapper;
