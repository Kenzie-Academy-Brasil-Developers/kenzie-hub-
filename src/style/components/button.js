import styled, { css } from "styled-components";

export const ThemeButton = styled.button`
 
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 4px;
  transition: 0.4s;

  &:hover {
    filter: brightness(1.2);
  }

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "default":
        return css`
          padding: 10px 15px;
        `;
      case "big":
        return css`
          width: 95%;
          height: 48px;
          padding: 5px;
          margin: 10px auto;
        `;
      default:
        console.log("Algo está errado com o button");
    }
  }}

  ${({ buttonColor }) => {
    switch (buttonColor) {
      case "red":
        return css`
          background-color: var(--color-primary);
        `;
        case "redDesable":
        return css`
          background-color: var(--color-primary-negative);
        `;
      case "grey":
        return css`
          background-color: var(--color-grey-1);
        `;
      case "grey3":
        return css`
          background-color: var(--color-grey-3);
        `;
      default:
        console.log("Algo está errado com o button");
    }
  }}
`;
