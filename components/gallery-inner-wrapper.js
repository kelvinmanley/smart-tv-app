import styled from "styled-components";

const GalleryInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 5vw;
  padding-top: 7vh;
  height: 750px;
  width: fit-content;
  transform: ${({ horizontalIndex }) =>
    `translateX(${horizontalIndex * 440}px)`};
  transition: transform 300ms;

  @media (max-width: 600px) {
    min-height: 710px;
    max-height: 710px;
    padding-left: 7vw;
    padding-top: 5vh;
    transform: ${({ horizontalIndex }) =>
      `translateX(${horizontalIndex * 260}px)`};
  }
`;

export default GalleryInnerWrapper;
