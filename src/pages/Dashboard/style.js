import styled from "styled-components";

export const StyledUserData = styled.section`
  border-bottom: 2px solid var(--color-grey-3);

  div {
    width: 70%;
    height: 131px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 10px;
  }

  @media (min-width: 600px) {
    div {
      height: 118px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const StyledTechs = styled.section`
  width: 70%;
  max-height: 469px;
  margin: 20px auto;
`;

export const StyledTechAdd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledList = styled.div`
  margin: 20px auto;
  background-color: var(--color-grey-3);
  padding: 10px;
  border-radius: var(--border-radius);

  ul {
    overflow: auto;
    max-height: 469px;

    ::-webkit-scrollbar {
      width: 0px;
    }
  }

  li {
    margin: 10px 0;
    padding: 15px;
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    background-color: var(--color-grey-4);
    border-radius: var(--border-radius);

    button {
     width: 100%;
    }
  }
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
