import styled from "styled-components";
import { PageWrapperSwatch as Swatch, Colors } from "../ui";

const PageBackground = styled.div`
  background-image: ${({ mode }) =>
    mode
      ? `linear-gradient(180deg, ${Colors.MidGrey}, ${Colors.White})`
      : `linear-gradient(180deg, ${Colors.Black}, ${Colors.Charcoal})`};
  position: fixed;
  height: 100vh;
  width: 100vw;
`;

export default PageBackground;
