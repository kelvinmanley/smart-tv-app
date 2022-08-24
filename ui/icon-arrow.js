import PropTypes from "prop-types";
import styled from "styled-components";
import { CircleButtonSwatch as Swatch } from "./swatches";

const ArrowWrapper = styled.div`
  padding: ${({ toggleDirection }) =>
    toggleDirection ? "0 13% 0 0" : "0 0 0 13%"};
`;

const ArrowLines = styled.i`
  border: solid ${({ mode }) => (mode ? Swatch.color.light : Swatch.color.dark)};
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 3px;
  transform: ${({ toggleDirection }) =>
    toggleDirection ? "rotate(-45deg)" : "rotate(135deg)"};
  -webkit-transform: ${({ toggleDirection }) =>
    toggleDirection ? "rotate(-45deg)" : "rotate(135deg)"};
  width: 22px;
  height: 22px;
`;

const Arrow = ({ mode, toggleDirection }) => (
  <ArrowWrapper toggleDirection={toggleDirection}>
    <ArrowLines mode={mode} toggleDirection={toggleDirection} />
  </ArrowWrapper>
);

export default Arrow;

Arrow.propTypes = {
  mode: PropTypes.bool,
  toggleDirection: PropTypes.bool,
};
