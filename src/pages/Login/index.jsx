import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { useState } from "react";
import { api } from "../../Services/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// /sessions

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
      localStorage.setItem("@token", response.data.token);
      setUser(response.data.user);
      navigate("/dashboard")
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
    <section>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <label>Email</label>
        <input
          type="email"
          placeholder="email@email.com"
          disabled={loading}
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}

        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          disabled={loading}
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "...carregando" : "Entrar"}
        </button>
      </form>

      <div>
        <label>Ainda não possui uma conta?</label>
        <button type="button">
          <Link to="/register">Cadastre-se</Link>
        </button>
      </div>
    </section>
  );
};
