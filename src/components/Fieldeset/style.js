import styled from "styled-components";

export const StyleFildeset = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: none;

  label {
    width: 80%;
    padding: 10px 15px;
    text-align: left;
  }
`;

export const StyleInput = styled.input`
  width: 95%;
  margin: 5px auto;
  padding: 10px;
  background-color: var(--color-grey-2);
  border-radius: var(--border-radius);
`;

export const StyleSelect = styled.select`
  width: 95%;
  margin: 5px auto;
  padding: 10px;
  background-color: var(--color-grey-2);
  border-radius: var(--border-radius);
  color: var(--color-grey-1);
`;
