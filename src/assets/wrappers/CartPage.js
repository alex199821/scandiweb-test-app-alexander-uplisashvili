import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  width: 85%;
  margin: auto;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 100px;
  .pageNameLabel {
    width: 100%;
    font-size: 28px;
    font-weight: 700;
    padding-bottom: 50px;
    border-bottom: 1px solid var(--gray);
  }
  .orderInformationContainer {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    .orderInformationLabel {
      font-size: 16px;
      font-weight: 400;
      b {
        font-weight: 700;
      }
    }
  }
`;

export default Wrapper;
