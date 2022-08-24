import styled from "styled-components";
import { CircleButtonSwatch as Swatch } from "./swatches";

const MenuWrapper = styled.div`
  width: 55%;
`;

const MenuLines = styled.span`
  display: block;
  background-color: ${({ theme }) =>
    theme.mode ? Swatch.color.light : Swatch.color.dark};
  margin: 6px 0;
  height: 4px;
  width: 100%;
`;

const Menu = () => (
  <MenuWrapper>
    <MenuLines />
    <MenuLines />
    <MenuLines />
  </MenuWrapper>
);

export default Menu;
