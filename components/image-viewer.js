import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import Image from "next/image";
import { ImageViewerSwatch as Swatch } from "../ui";
import { Close } from "../ui";
import { PageTitle } from "../components";

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const ImageViewerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  z-index: 20;
  -webkit-animation: ${fadeIn} 150ms linear;
  animation: ${fadeIn} 150ms linear;
`;

const CloseLayer = styled.div`
  background-color: ${({ mode }) =>
    mode ? Swatch.backgroundColor.light : Swatch.backgroundColor.dark};
  display: flex;
  justify-content: right;
  height: 100vh;
  width: 100%;
  opacity: 0.95;
  padding-top: 10px;
  position: fixed;
  fill: ${({ mode }) =>
    mode ? Swatch.closeButtonColor.light : Swatch.closeButtonColor.dark};
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 550px;
  height: ${({ width, height }) => `${(height / width) * 550}px`};

  @media (max-width: 600px) {
    width: 275px;
    height: ${({ width, height }) => `${(height / width) * 275}px`};
  }
`;

const ImageViewer = ({
  mode,
  url,
  description,
  width,
  height,
  topic,
  handleClick,
}) => (
  <ImageViewerWrapper>
    <CloseLayer onClick={handleClick} mode={mode}>
      <Close handleClick={handleClick} />
    </CloseLayer>
    <PageTitle
      title="Smart TV App"
      topic={description?.slice(0, 22) || topic?.slice(0, 22)}
      mode={mode}
    />
    <ImageWrapper width={width} height={height}>
      <Image
        src={url}
        alt={description || ""}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={url}
      />
    </ImageWrapper>
  </ImageViewerWrapper>
);

export default ImageViewer;

ImageViewer.propTypes = {
  mode: PropTypes.bool,
  url: PropTypes.string,
  description: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  topic: PropTypes.string,
  handleClick: PropTypes.func,
};
