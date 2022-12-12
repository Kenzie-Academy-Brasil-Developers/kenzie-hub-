import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../contexts/ModalContext";
import { yupResolver } from "@hookform/resolvers/yup";

import { viewModalSchema } from "./viewModalSchema";
import { api } from "../../Services/api";
import { AuthContext } from "../../contexts/AuthContext";

import { ThemeButton } from "../../style/button";
import { StyleForm, StyleSection } from "../../style/form";
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

  const techView = async () => {
    try {
      setLoading(true);
      const response = await api.post(`users/techs/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const submit = (id) => {
    techView(id);
    reset();
  };

  return (
    <StyledModal>
      <StyleSection>
        <div>
          <h4>Cadastrar tecnologia</h4>
          <button onClick={() => setModalViewStatus(false)}>X</button>
        </div>
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
          <button onClick={console.log("oi")}>Salvar alterações</button>
          <button>Excluir</button>
        </StyleForm>
      </StyleSection>
    </StyledModal>
  );
};
