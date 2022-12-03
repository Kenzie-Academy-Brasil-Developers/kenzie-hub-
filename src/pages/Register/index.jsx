import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { useState } from "react";
import { api } from "../../Services/api";
import { StyleDivTop, StyleForm, StyleSection } from "../../style/form";
import {
  StyleFildeset,
  StyleInput,
  StyleSelect,
} from "../../components/Fieldeset/style";
import { Link, useNavigate } from "react-router-dom";
import { ThemeButton } from "../../style/button";

export const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const userRegister = async (formData) => {
    console.log(formData);
    try {
      setLoading(true);
      const response = await api.post("users", formData);
      console.log(response.data);
      //toast.success(response.data.message);
    } catch (error) {
      //toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const submit = (data) => {
    userRegister(data);
    reset();
  };

  return (
    <StyleSection>
      <StyleDivTop>
        <h1>Logo</h1>
        <ThemeButton buttonSize="default" buttonColor="grey3">
          <Link to="/">Voltar</Link>
        </ThemeButton>
      </StyleDivTop>
      <StyleForm onSubmit={handleSubmit(submit)} noValidate>
        <h2>Cadastro</h2>
        <StyleFildeset>
          <label>Name</label>
          <StyleInput
            type="text"
            placeholder="Digite aqui seu nome"
            disabled={loading}
            {...register("name")}
          />
          {errors.name?.message && <p>{errors.name.message}</p>}
        </StyleFildeset>

        <StyleFildeset>
          <label>Email</label>
          <StyleInput
            type="email"
            placeholder="Digite aqui seu email"
            disabled={loading}
            {...register("email")}
          />
          {errors.email?.message && <p>{errors.email.message}</p>}
        </StyleFildeset>

        <StyleFildeset>
          <label>Senha</label>
          <StyleInput
            type="password"
            placeholder="Digite aqui sua senha"
            disabled={loading}
            {...register("password")}
          />
          {errors.password?.message && <p>{errors.password.message}</p>}
        </StyleFildeset>

        <StyleFildeset>
          {" "}
          <label>Confirmar senha</label>
          <StyleInput
            type="password"
            placeholder="Digite novamente sua senha"
            disabled={loading}
            {...register("passwordConfirmation")}
          />
          {errors.passwordConfirmation?.message && (
            <p>{errors.passwordConfirmation.message}</p>
          )}
        </StyleFildeset>

        <StyleFildeset>
          {" "}
          <label>Bio</label>
          <StyleInput
            type="text"
            placeholder="Fale sobre você"
            disabled={loading}
            {...register("bio")}
          />
          {errors.bio?.message && <p>{errors.bio.message}</p>}
        </StyleFildeset>

        <StyleFildeset>
          <label>Contato</label>
          <StyleInput
            type="tel"
            placeholder="Opção de contato"
            disabled={loading}
            {...register("contact")}
          />
          {errors.contact?.message && <p>{errors.contact.message}</p>}
        </StyleFildeset>

        <StyleFildeset>
          <label>Selecione seu módulo</label>
          <StyleSelect disabled={loading} {...register("course_module")}>
            <option value="Primeiro Módulo">Primeiro Módulo</option>
            <option value="Segundo Módulo">Segundo Módulo</option>
            <option value="Terceiro Módulo">Terceiro Módulo</option>
          </StyleSelect>
          {errors.course_module?.message && (
            <p>{errors.course_module.message}</p>
          )}
        </StyleFildeset>
        <ThemeButton
          type="submit"
          disabled={loading}
          buttonSize="big"
          buttonColor="redDesable"
        >
          {loading ? "...carregando" : "Cadastrar"}
        </ThemeButton>
      </StyleForm>
    </StyleSection>
  );
};
