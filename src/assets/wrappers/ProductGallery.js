import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  .galleryImageContainer {
    width: 7.5vw;
    height: 7.5vw;
    .galleryImage {
      object-fit: scale-down;
      object-position: center center;
      height: 100%;
      width: 100%;
    }
  }
`;

export default Wrapper;
