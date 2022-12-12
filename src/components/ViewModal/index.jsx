import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../contexts/ModalContext";
import { yupResolver } from "@hookform/resolvers/yup";

import { viewModalSchema } from "./viewModalSchema";
import { api } from "../../Services/api";
import { AuthContext } from "../../contexts/AuthContext";

import { ThemeButton } from "../../style/button";
import { StyleDivTop, StyleForm, StyleSection } from "../../style/form";
import { StyleFildeset, StyleInput, StyleSelect } from "../Fieldeset/style";
import { StyledModal } from "../../style/modal";

export const ViewModal = ({ id }) => {
  console.log(id);
  const { setModalViewStatus, dataTech } = useContext(ModalContext);
  const { setLoading } = useContext(AuthContext);
  console.log(dataTech);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(viewModalSchema),
  });

  const techDelete = async () => {
    try {
      setLoading(true);
      const response = await api.delete(`users/techs/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const submit = (id) => {
    reset();
  };

  return (
    <StyledModal>
      <StyleSection>
        <StyleDivTop>
          <h4>Cadastrar tecnologia</h4>
          <button onClick={() => setModalViewStatus(false)}>X</button>
        </StyleDivTop>
        <StyleForm onSubmit={handleSubmit(submit)} noValidate>
          <StyleFildeset>
            <label>Nome</label>
            <StyleInput value="nome"></StyleInput>
          </StyleFildeset>
          <StyleFildeset>
            <label>Selecionar status</label>
            <StyleSelect {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </StyleSelect>
            {errors.status?.message && <p>{errors.status.message}</p>}
          </StyleFildeset>
          <button onClick={() => setModalViewStatus(true)}>Salvar alterações</button>
          <button onClick={()=> techDelete(id)}>Excluir</button>
        </StyleForm>
      </StyleSection>
    </StyledModal>
  );
};
