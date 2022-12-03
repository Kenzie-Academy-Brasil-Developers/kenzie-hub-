import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  transition: 0.4s;

  &:hover {
    filter: brightness(1.2);
  }

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "default":
        return css`
          max-width: 60px;
        `;
      case "big":
        return css`
          width: 100%;
          height: 48px;
        `;
      default:
        console.log("Algo está errado com o button");
    }
  }}
`;
