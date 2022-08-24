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

const CloseWrapper = styled.div`
  cursor: pointer;
`;

const LightBulb = ({ iconSize = "60" }) => (
  <svg width={iconSize * 0.6} height={iconSize} viewBox="0 0 118 118">
    <path d="M75.84,27.1a35.68,35.68,0,0,1,8.61,7.09,32.45,32.45,0,0,1,5.76,9.26h0a36.84,36.84,0,0,1,1.85,6,34.64,34.64,0,0,1,.24,14,38.69,38.69,0,0,1-2.15,7.32l-.12.25c-2.06,5-5.59,9.86-9,14.66-1.75,2.42-3.48,4.82-4.94,7.15A4.69,4.69,0,0,1,71.73,95l-27.56,4.1A4.7,4.7,0,0,1,39,95.69a40.19,40.19,0,0,0-2.54-5.82,24.85,24.85,0,0,0-3-4.49c-1.43-1.63-2.88-3.29-4.29-5.2A40.42,40.42,0,0,1,25,73.24h0a41.08,41.08,0,0,1-2.81-8,35.84,35.84,0,0,1-.95-8.45v0A35.39,35.39,0,0,1,22.35,48a41.69,41.69,0,0,1,3.42-8.85l.2-.35a35.55,35.55,0,0,1,7.13-8.63,33.72,33.72,0,0,1,9.46-5.83l.28-.1a35.41,35.41,0,0,1,8-2.14,37.78,37.78,0,0,1,8.77-.2,39.14,39.14,0,0,1,8.4,1.71,38.44,38.44,0,0,1,7.79,3.49Zm-4,87.26a17.37,17.37,0,0,1-6.28,6.29,16.46,16.46,0,0,1-7.2,2.2A14.87,14.87,0,0,1,51,121.4a15.1,15.1,0,0,1-4.39-3.27l25.29-3.77Zm2.41-14.15,0,1.65,0,.58a22,22,0,0,1,0,3.25l-.49,2.39-30.64,4.56-.54-1.23-1.19-4.9,0-1.42,32.79-4.88ZM56.34,3.77A3.84,3.84,0,0,1,60.23,0h0l.27,0A3.84,3.84,0,0,1,64,3.89h0a1.27,1.27,0,0,1,0,.2l-.21,8.21h0a2.11,2.11,0,0,1,0,.26,3.84,3.84,0,0,1-3.87,3.54h0l-.27,0a3.84,3.84,0,0,1-3.53-3.88h0a1.09,1.09,0,0,1,0-.19l.2-8.25ZM14,18.15a3.84,3.84,0,0,1,2.47-6.66,3.83,3.83,0,0,1,2.76,1l6.16,5.73a3.91,3.91,0,0,1,1.22,2.68,3.82,3.82,0,0,1-1,2.76,3.86,3.86,0,0,1-2.67,1.22,3.8,3.8,0,0,1-2.76-1L14,18.15ZM3.92,60.48A3.86,3.86,0,0,1,0,56.75a3.84,3.84,0,0,1,3.73-4l8.41-.28a3.84,3.84,0,0,1,4,3.72v.06h0v.14a3.84,3.84,0,0,1-3.73,3.77h-.15l-8.3.27Zm106-11.92H110a3.84,3.84,0,0,1,2.66.86,3.81,3.81,0,0,1,1.4,2.59v0a.49.49,0,0,1,0,.13,3.84,3.84,0,0,1-3.44,4.06l-8.37.89a3.83,3.83,0,0,1-2.81-.85,3.84,3.84,0,0,1,2-6.8c2.79-.31,5.6-.63,8.4-.9ZM93.33,15.09A3.83,3.83,0,0,1,98.65,14h0a3.73,3.73,0,0,1,1.63,2.44,3.84,3.84,0,0,1-.58,2.88l-4.68,7A3.8,3.8,0,0,1,92.58,28a3.88,3.88,0,0,1-2.88-.57A3.92,3.92,0,0,1,88.06,25a3.84,3.84,0,0,1,.58-2.88l4.69-7ZM38.23,80.87A42.19,42.19,0,0,1,31,70.56,31.2,31.2,0,0,1,27.89,57,31.7,31.7,0,0,1,31.7,42.56a.47.47,0,0,0,.05-.1h0a27.5,27.5,0,0,1,13.4-11.71,29.65,29.65,0,0,1,13.93-2A32.09,32.09,0,0,1,72.39,33,27.43,27.43,0,0,1,84,46.2,28.85,28.85,0,0,1,84,68.45C81.31,75,75.15,82,71.11,88.4a1.67,1.67,0,0,0-.67,0L44.36,92.25a35,35,0,0,0-6.13-11.38Z" />
  </svg>
);

const Close = ({ handleClick }) => (
  <CloseWrapper>
    <svg onClick={handleClick} width="50" height="50" viewBox="0 0 30 30">
      <path d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z" />
    </svg>
  </CloseWrapper>
);

const Menu = ({ mode }) => (
  <MenuWrapper>
    <MenuLines mode={mode} />
    <MenuLines mode={mode} />
    <MenuLines mode={mode} />
  </MenuWrapper>
);

const Arrow = ({ mode, toggleDirection }) => (
  <ArrowWrapper toggleDirection={toggleDirection}>
    <ArrowLines mode={mode} toggleDirection={toggleDirection} />
  </ArrowWrapper>
);

export { LightBulb, Menu, Arrow, Close };

LightBulb.propTypes = {
  iconSize: PropTypes.string,
};
Close.propTypes = {
  handleClick: PropTypes.func,
};
Menu.propTypes = {
  mode: PropTypes.bool,
};
Arrow.propTypes = {
  mode: PropTypes.bool,
  toggleDirection: PropTypes.bool,
};
