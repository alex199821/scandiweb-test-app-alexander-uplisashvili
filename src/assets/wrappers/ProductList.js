import styled from "styled-components";

const Wrapper = styled.section`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 100px;
  .categoryLabel {
    font-size: 32px;
    text-transform: capitalize;
  }
  .productsListContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    column-gap: calc(10% / 2);
  }
`;

export default Wrapper;
