import PropTypes from "prop-types";
import styled from "styled-components";

const CloseWrapper = styled.div`
  cursor: pointer;
`;

const Close = ({ handleClick }) => (
  <CloseWrapper>
    <svg onClick={handleClick} width="50" height="50" viewBox="0 0 30 30">
      <path d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z" />
    </svg>
  </CloseWrapper>
);

export default Close;

Close.propTypes = {
  handleClick: PropTypes.func,
};
