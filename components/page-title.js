import styled from "styled-components";
import PropTypes from "prop-types";
import { PageTitleSwatch as Swatch } from "../ui";

const Title = styled.h3`
  color: ${({ theme }) =>
    theme.mode ? Swatch.color.light : Swatch.color.dark};
  font-weight: 300;
  position: fixed;
  left: 20px;
  top: 5px;
  transition: color 300ms;

  @media (max-width: 600px) {
    font-size: 16px;
    top: 0;
  }
`;

const PageTitle = ({ title = "title", topic = "topic" }) => (
  <Title>
    <strong>{title}</strong> | {topic}
  </Title>
);

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string,
  topic: PropTypes.string,
};
