import styled from "styled-components";
import { PageWrapperSwatch as Swatch } from "../ui";

const PageBackground = styled.div`
  background-image: ${({ theme }) =>
    theme.mode
      ? `linear-gradient(180deg, ${Swatch.gradient.light.stop1}, ${Swatch.gradient.light.stop2})`
      : `linear-gradient(180deg, ${Swatch.gradient.dark.stop1}, ${Swatch.gradient.dark.stop2})`};
  position: fixed;
  height: 100vh;
  width: 100vw;
`;

export default PageBackground;
