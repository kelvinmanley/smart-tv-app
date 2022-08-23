import styled from "styled-components";

const NavWrapper = styled.div`
  bottom: ${({ state }) => (state ? "-90px" : "0")};
  display: flex;
  justify-content: center;
  position: fixed;
  transition: bottom 300ms;
  width: 100%;
  z-index: 10;
`;

export default NavWrapper;
