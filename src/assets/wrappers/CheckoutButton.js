import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: var(--green);
  position: absolute;
  bottom: 0px;
  right: 25px;
  cursor: pointer;

  .cartIcon {
    display: flex;
    width: auto;
    height: 18px;
  }
`;
