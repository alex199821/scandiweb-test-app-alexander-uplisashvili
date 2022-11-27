import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  width: 85%;
  margin: auto;
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 100px;
  .mainImageContainer {
    margin-left: 40px;
    width: 35vw;
    height: 35vw;
    .mainImage {
      object-fit: scale-down;
      object-position: top left;
      height: 100%;
      width: 100%;
    }
  }
`;

export default Wrapper;
