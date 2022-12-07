import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "./registerSchema";
import { AuthContext} from "../../contexts/AuthContext";

import { StyleDiv, StyleForm, StyleSection } from "../../style/form";
import { StyleFildeset, StyleInput } from "../../components/Fieldeset/style";
import { ThemeButton } from "../../style/button";
import logo  from "../../assets/logo.svg";

export const LoginForm = () => {
  const { login }= useContext(AuthContext)
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

  const submit = (data) => {
    login(data);
    reset();
  };
 
  return (
    <StyleSection>
      <div>
       <img src={logo} alt="Logo" />
      </div>
      <StyleForm onSubmit={handleSubmit(submit)} noValidate>
        <h2>Login</h2>
        <StyleFildeset>
          <label>Email</label>
          <StyleInput
            type="email"
            placeholder="email@email.com"
            disabled={loading}
            {...register("email")}
          />
          {errors.email?.message && <p>{errors.email.message}</p>}
        </StyleFildeset>

        <StyleFildeset>
          <label>Senha</label>
          <StyleInput
            type="password"
            placeholder="Digite sua senha"
            disabled={loading}
            {...register("password")}
          />
          {errors.password?.message && <p>{errors.password.message}</p>}
        </StyleFildeset>

        <ThemeButton
          type="submit"
          disabled={loading}
          buttonSize="big"
          buttonColor="red"
        >
          {loading ? "...carregando" : "Entrar"}
        </ThemeButton>
        <StyleDiv>
          <label>Ainda não possui uma conta?</label>
          <ThemeButton type="button" buttonSize="big" buttonColor="grey">
            <Link to="/register">Cadastre-se</Link>
          </ThemeButton>
        </StyleDiv>
      </StyleForm>
    </StyleSection>
  );
};
