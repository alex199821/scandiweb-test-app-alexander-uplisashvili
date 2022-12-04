import styled, { css } from "styled-components";

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--green);
  border: 1px solid var(--green);
  border: none;
  border-radius: 0;
  color: var(--white);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  :active {
    background-color: var(--white);
    color: var(--green);
    border: 1px solid var(--green);
  }
`;

export default Wrapper;
