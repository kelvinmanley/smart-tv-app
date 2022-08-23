import styled from "styled-components";
import { Colors } from "../ui";

const ImageWrapper = styled.div`
  background-color: ${Colors.Grey};
  border: none;
  border-radius: 10px;
  margin: 20px;
  overflow: hidden;
  height: 300px;
  width: 400px;
  transition: border 200ms, opacity 400ms;
  opacity: ${({ mode }) => (mode ? "0.2" : "1")};
  pointer-events: ${({ mode }) => (mode ? "none" : "auto")};
  position: relative;

  :hover {
    border: 3px solid orange;
  }

  @media (max-width: 600px) {
    margin: 10px;
    height: 180px;
    width: 240px;
  }
`;

export default ImageWrapper;
