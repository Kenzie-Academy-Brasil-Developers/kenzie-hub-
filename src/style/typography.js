import styled, { css } from "styled-components";

export const ThemeParagraph = styled.p`
  font-size: 12px;

  ${({ pStyle }) => {
    switch (pStyle) {
      case "HeadlineBold":
        return css`
          font-weight: bold;
        `;
      case "HeadlineItalic":
        return css`
          font-style: italic;
        `;
      default: console.log("Algo está errado com a typography");
      ;
    }
  }}
`;
