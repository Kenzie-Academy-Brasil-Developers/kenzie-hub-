import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../contexts/ModalContext";
import { yupResolver } from "@hookform/resolvers/yup";

import { addModalSchema } from "./addModalSchema";

import { ThemeButton } from "../../style/button";
import { StyleForm, StyleSection } from "../../style/form";
import { StyleFildeset, StyleInput, StyleSelect } from "../Fieldeset/style";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import { StyledModal } from "./style";

export const AddModal = () => {
  const { setModalAddStatus } = useContext(ModalContext);
  const { setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

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
      <div>
        <h4>Cadastrar tecnologia</h4>
        <button onClick={() => setModalAddStatus(false)}>X</button>
      </div>
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
