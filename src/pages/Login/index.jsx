import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { useState } from "react";
import { api } from "../../Services/api";

// /sessions

export const Login = () => {
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

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", formData);
      localStorage.setItem("@token", response.data.token);

      //toast.success(response.data.message);
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
        <button>Cadastre-se</button>
      </div>
    </section>
  );
};
