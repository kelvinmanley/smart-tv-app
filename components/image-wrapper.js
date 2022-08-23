import styled from "styled-components";

const ImageWrapper = styled.div`
  background-color: #000;
  border-radius: 10px;
  margin: 20px;
  overflow: hidden;
  height: 300px;
  width: 400px;
  position: relative;

  @media (max-width: 600px) {
    margin: 10px;
    height: 180px;
    width: 240px;
  }
`;

export default ImageWrapper;
