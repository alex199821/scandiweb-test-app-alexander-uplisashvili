import styled from "styled-components";

export const Wrapper = styled.section`
  z-index: 99;
  .selected {
    display: flex;
    flex-direction: row;
    background-color: transparent;
    border: none;
    align-items: center;
    gap: 7px;
    padding: 5px 10px;
    font-size: 18px;
    cursor: pointer;
  }

  .rotate {
    transform: rotate(180deg);
  }
  .arrowIcon {
    display: flex;
    width: 7px;
  }
  .options {
    display: none;
    flex-direction: column;
    position: absolute;
    padding-top: 5px;
    padding-bottom: 5px;
    align-items: flex-start;
    box-shadow: 0px 0px 31px -7px rgba(0, 0, 0, 0.2);
    background-color: white;
  }
  .optionsShow {
    display: flex;
  }
  .singleOption {
    background-color: white;
    border: none;
    display: flex;
    justify-content: flex-start;
    padding: 10px 20px 10px 10px;
    width: 100%;
    font-size: 18px;
  }
  .singleOption:hover {
    background-color: var(--lightGrey);
  }
`;
