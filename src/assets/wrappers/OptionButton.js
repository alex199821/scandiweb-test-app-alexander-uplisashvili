import styled from "styled-components";

const Wrapper = styled.section`
  .sizeButton {
    display: flex;
    padding: 12px 24px 12px 24px;
    font-size: 18px;
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
  }
  .sizeButtonSelected {
    background-color: var(--extraDark);
    color: var(--white);
  }
`;

export default Wrapper;
