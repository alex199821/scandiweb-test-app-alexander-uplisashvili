import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  margin: auto;
  .selections {
    display: flex;
    flex-direction: row;
    /* margin-left: 100px;
    margin-right: 100px; */
    font-size: 16px;
    width: 40%;
    cursor: pointer;
  }
  .options {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .categories {
    text-transform: uppercase;
    padding-top: 15px;

    p {
      margin: 0;
      padding-right: 10px;
      padding-left: 10px;
      border-bottom: 1.5px solid transparent;
    }
    p:hover {
      color: var(--green);
      border-bottom: 1.5px solid;
      margin: 0;
      /* padding-bottom: 5px; */
    }
  }
  .logo {
    padding-top: 15px;
    display: flex;
    height: 30px;
  }
`;

export default Wrapper;
