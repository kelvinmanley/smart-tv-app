import PropTypes from "prop-types";

import styled from "styled-components";
import { Close } from "../ui";

const MenuHeaderWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 10px;
`;

const MenuHeader = ({ handleClick }) => (
  <MenuHeaderWrapper>
    <Close handleClick={handleClick} />
  </MenuHeaderWrapper>
);

export default MenuHeader;

MenuHeader.propTypes = {
  handleClick: PropTypes.func,
};
