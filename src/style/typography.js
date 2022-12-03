import styled, { css } from "styled-components";
import { BaseTitle } from "./components/BaseTitle";

export const StyledTitle = styled(BaseTitle)`
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ theme }) => theme.color.black};
`;



export const StyledParagraph = styled.p`
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
