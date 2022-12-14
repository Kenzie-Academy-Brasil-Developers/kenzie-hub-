import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerSchema } from "./registerSchema";
import { api } from "../../Services/api";
import logo from "../../assets/logo.svg";

import { StyleDivTop, StyleForm, StyleSection } from "../../style/form";
import { ThemeButton } from "../../style/button";
import { AuthContext } from "../../contexts/AuthContext";
import {
  StyleFildeset,
  StyleInput,
  StyleSelect,
} from "../../components/Fieldeset/style";

export const Register = () => {
  const { loading } = useContext(AuthContext);
  const { setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

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
    try {
      setLoading(true);
      const response = await api.post("users", formData);
      navigate("/");
    } catch (error) {
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
        <img src={logo} alt="Logo" />
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
            placeholder="Fale sobre voc??"
            disabled={loading}
            {...register("bio")}
          />
          {errors.bio?.message && <p>{errors.bio.message}</p>}
        </StyleFildeset>

        <StyleFildeset>
          <label>Contato</label>
          <StyleInput
            type="tel"
            placeholder="Op????o de contato"
            disabled={loading}
            {...register("contact")}
          />
          {errors.contact?.message && <p>{errors.contact.message}</p>}
        </StyleFildeset>

        <StyleFildeset>
          <label>Selecione seu m??dulo</label>
          <StyleSelect disabled={loading} {...register("course_module")}>
            <option value="Primeiro M??dulo">Primeiro M??dulo</option>
            <option value="Segundo M??dulo">Segundo M??dulo</option>
            <option value="Terceiro M??dulo">Terceiro M??dulo</option>
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
