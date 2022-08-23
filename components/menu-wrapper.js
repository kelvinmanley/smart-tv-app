import styled from "styled-components";
import { Colors } from "../ui";

const MenuWrapper = styled.div`
  background-color: ${({ mode }) =>
    mode ? "rgba(200, 200, 200, 0.95)" : "rgba(50, 50, 50, 0.95)"};
  box-shadow: 0 4px 18px ${Colors.Black};
  color: ${({ mode }) => (mode ? Colors.DarkestGrey : Colors.MidGrey)};
  height: 100vh;
  position: fixed;
  width: 400px;
  z-index: 10;
  fill: ${({ mode }) => (mode ? Colors.DarkerGrey : Colors.MidGrey)};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default MenuWrapper;
