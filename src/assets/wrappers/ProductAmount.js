import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .amountLabel {
    font-size: 24px;
    font-weight: 500;
  }
  .amountChangeButton {
    background-color: transparent;
    border-radius: 0;
    border: 1px solid var(--extraDark);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    .center {
      margin-top: -5px;
    }
    p {
      font-weight: 100;
      font-size: 50px;
      font-family: "Raleway", sans-serif;
    }
  }
`;

export default Wrapper;
