import styled from "styled-components";

export const StyleSection = styled.section`
  width: 95%;
  padding: 20px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    margin: 20px 0;
  }
`;

export const StyleForm = styled.form`
  width: 100%;
  height: 90%;
  padding: 25px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: var(--color-grey-3);
`;

export const StyleDiv = styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;
`;

export const StyleDivTop = styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;
