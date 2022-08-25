import styled, { keyframes } from "styled-components";
import { Colors } from "../ui";

const spin = keyframes`
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 8px solid ${Colors.MidGrey};
  border-radius: 50%;
  border-top: 8px solid ${Colors.Orange};
  width: 60px;
  height: 60px;
  -webkit-animation: ${spin} 2s linear infinite;
  animation: ${spin} 2s linear infinite;
`;

export default Loader;
