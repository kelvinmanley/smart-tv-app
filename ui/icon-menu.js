import PropTypes from "prop-types";
import styled from "styled-components";
import { CircleButtonSwatch as Swatch } from "./swatches";

const MenuWrapper = styled.div`
  width: 55%;
`;

const MenuLines = styled.span`
  display: block;
  background-color: ${({ mode }) =>
    mode ? Swatch.color.light : Swatch.color.dark};
  margin: 6px 0;
  height: 4px;
  width: 100%;
`;

const Menu = ({ mode }) => (
  <MenuWrapper>
    <MenuLines mode={mode} />
    <MenuLines mode={mode} />
    <MenuLines mode={mode} />
  </MenuWrapper>
);

export default Menu;

Menu.propTypes = {
  mode: PropTypes.bool,
};
