import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 24px;
  .optionLabel {
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    font-family: "Roboto Condensed", sans-serif;
  }
  .buttonsContainer {
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    column-gap: 12px;
  }
`;

export default Wrapper;
