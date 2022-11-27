import styled from "styled-components";

const Wrapper = styled.section`
  .colorButton {
    display: flex;
    width: 32px;
    height: 32px;
    cursor: pointer;
    border: none;
  }

  .colorButtonSelected {
    box-shadow: 0px 0px 0px 2px white, 0px 0px 0px 3px var(--green);
  }

  .border {
    border: 1px solid var(--extraDark);
  }
`;

export default Wrapper;
