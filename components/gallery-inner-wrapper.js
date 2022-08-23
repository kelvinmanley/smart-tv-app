import styled from "styled-components";

const GalleryInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 5vh;
  height: 750px;
  width: auto;
  transform: translateX(0);

  @media (max-width: 600px) {
    padding-top: 5vh;
  }
`;

export default GalleryInnerWrapper;
