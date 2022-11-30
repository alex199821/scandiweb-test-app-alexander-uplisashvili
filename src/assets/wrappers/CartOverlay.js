import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  position: absolute;
  margin: auto;
  width: 300px;
  height: 100%;
  background-color: white;
  float: right;
  z-index: 9999999;
  direction: ltr;
  flex-direction: column;
  overflow: auto;
  overflow-x: hidden;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
`;

export default Wrapper;
