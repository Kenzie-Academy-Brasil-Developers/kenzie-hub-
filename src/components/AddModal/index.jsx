import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { ThemeButton } from "../../style/button";
import { StyleSection } from "../../style/form";
import { StyleFildeset, StyleInput, StyleSelect } from "../Fieldeset/style";

export const AddModal = () => {
  const { setModalStatus } = useContext(ModalContext);

  return (
    <StyleSection>
      <div>
        <h4>Cadastrar tecnologia</h4>
        <button onClick={() => setModalStatus(false)}>X</button>
      </div>
      <form>
        <StyleFildeset>
          <label>Nome</label>
          <StyleInput placeholder="Digite o nome da tecnologia" />
        </StyleFildeset>
        <StyleFildeset>
          <label>Selecionar status</label>
          <StyleSelect>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </StyleSelect>
        </StyleFildeset>
        <ThemeButton buttonSize="big" buttonColor="red">
          Cadastrar Tecnologia
        </ThemeButton>
      </form>
    </StyleSection>
  );
};
