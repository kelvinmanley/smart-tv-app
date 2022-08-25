import styled from "styled-components";
import { CircleButtonSwatch as Swatch } from "../ui";

const CircleButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) =>
    theme.mode ? Swatch.backgroundColor.light : Swatch.backgroundColor.dark};
  border: none;
  border-radius: 50%;
  fill: ${({ theme }) => (theme.mode ? Swatch.color.light : Swatch.color.dark)};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 200ms, color 200ms, fill 400ms;
  height: 70px;
  width: 70px;
  margin: 5px 5px 10px;
  z-index: 10;

  :hover {
    border-color: ${({ theme }) =>
      theme.mode ? Swatch.hover.light : Swatch.hover.dark};
    fill: ${({ theme }) =>
      theme.mode ? Swatch.hover.light : Swatch.hover.dark};
    span {
      background: ${({ theme }) =>
        theme.mode ? Swatch.hover.light : Swatch.hover.dark};
    }
    i {
      border-color: ${({ theme }) =>
        theme.mode ? Swatch.hover.light : Swatch.hover.dark};
    }
  }

  :disabled {
    opacity: 0.25;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    height: 58px;
    width: 58px;
    margin-bottom: 15px;

    border-color: ${({ theme }) =>
      theme.mode ? Swatch.hover.light : Swatch.hover.dark};
    fill: ${({ theme }) =>
      theme.mode ? Swatch.hover.light : Swatch.hover.dark};
    span {
      background: ${({ theme }) =>
        theme.mode ? Swatch.hover.light : Swatch.hover.dark};
    }
    i {
      border-color: ${({ theme }) =>
        theme.mode ? Swatch.hover.light : Swatch.hover.dark};
    }

    :disabled {
      opacity: 0.25;
      pointer-events: auto;
    }
  }
`;

export { CircleButton };
