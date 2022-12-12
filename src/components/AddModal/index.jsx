import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../contexts/ModalContext";
import { yupResolver } from "@hookform/resolvers/yup";

import { addModalSchema } from "./addModalSchema";
import { api } from "../../Services/api";
import { AuthContext } from "../../contexts/AuthContext";

import { ThemeButton } from "../../style/button";
import { StyleDivTop, StyleForm, StyleSection } from "../../style/form";
import { StyleFildeset, StyleInput, StyleSelect } from "../Fieldeset/style";
import { StyledModal } from "../../style/modal";

export const AddModal = () => {
  const { setModalAddStatus } = useContext(ModalContext);
  const { setLoading } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(addModalSchema),
  });

  const techAdd = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("users/techs", formData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const submit = (data) => {
    techAdd(data);
    reset();
  };

  return (
    <StyledModal>
      <StyleSection>
        <StyleDivTop>
          <h4>Cadastrar tecnologia</h4>
          <button onClick={() => setModalAddStatus(false)}>X</button>
        </StyleDivTop>
        <StyleForm onSubmit={handleSubmit(submit)} noValidate>
          <StyleFildeset>
            <label>Nome</label>
            <StyleInput
              placeholder="Digite o nome da tecnologia"
              {...register("title")}
            />
            {errors.title?.message && <p>{errors.title.message}</p>}
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
          <ThemeButton buttonSize="big" buttonColor="red">
            Cadastrar Tecnologia
          </ThemeButton>
        </StyleForm>
      </StyleSection>
    </StyledModal>
  );
};
