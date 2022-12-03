import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { api } from "../../Services/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { StyleDiv, StyleForm, StyleSection } from "../../style/form";
import { StyleFildeset, StyleInput } from "../../components/Fieldeset/style";
import { ThemeButton } from "../../style/button";
import { logo } from "../../assets/logo.svg";


export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
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

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", formData);
      console.log(response.data.user.name);
      console.log(response.data.user.course_module);
      localStorage.setItem("@TOKEN", response.data.token);
      setUser(response.data.user);
      navigate("/dashboard");
    } catch (error) {
      //toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const submit = (data) => {
    userLogin(data);
    reset();
  };

  return (
    <StyleSection>
      <div>
        {/* <img src={logo} alt="Logo" /> */}
        <h1>Kenzie Hub</h1>
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
