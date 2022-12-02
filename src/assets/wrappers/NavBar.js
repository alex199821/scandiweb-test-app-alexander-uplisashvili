import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  margin: auto;
  /* background-color: blue; */
  .selections {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    width: 40%;
    cursor: pointer;
  }
  .options {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 15px;
  }

  .categories {
    text-transform: uppercase;
    padding-top: 15px;

    .category {
      margin: 0;
      padding-right: 10px;
      padding-left: 10px;
      border-bottom: 1.5px solid transparent;
    }
    .selectedCategory {
      color: var(--green);
      border-bottom: 1.5px solid;
      margin: 0;
      /* padding-bottom: 5px; */
    }
  }
  .logo {
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    height: 30px;
  }
`;

export default Wrapper;
