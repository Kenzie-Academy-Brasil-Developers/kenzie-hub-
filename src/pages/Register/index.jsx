import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { useState } from "react";
import { api } from "../../Services/api";
import { Navigate } from "react-router-dom";

// /users

export const Register = () => {
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
    <section>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <label>Name</label>
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          disabled={loading}
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}

        <label>Email</label>
        <input
          type="email"
          placeholder="Digite aqui seu email"
          disabled={loading}
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}

        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          disabled={loading}
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}

        <label>Confirmar senha</label>
        <input
          type="password"
          placeholder="Digite novamente sua senha"
          disabled={loading}
          {...register("passwordConfirmation")}
        />
        {errors.passwordConfirmation?.message && (
          <p>{errors.passwordConfirmation.message}</p>
        )}

        <label>Bio</label>
        <input
          type="text"
          placeholder="Fale sobre você"
          disabled={loading}
          {...register("bio")}
        />
        {errors.bio?.message && <p>{errors.bio.message}</p>}

        <label>Contato</label>
        <input
          type="tel"
          placeholder="Opção de contato"
          disabled={loading}
          {...register("contact")}
        />
        {errors.contact?.message && <p>{errors.contact.message}</p>}

        <select disabled={loading} {...register("course_module")}>
          <option value=""></option>
          <option value="Primeiro Módulo">Primeiro Módulo</option>
          <option value="Segundo Módulo">Segundo Módulo</option>
          <option value="Terceiro Módulo">Terceiro Módulo</option>
        </select>
        {errors.course_module?.message && <p>{errors.course_module.message}</p>}

        <button type="submit" disabled={loading}>
        {loading
            ? "...carregando"
            : "Cadastrar"}
        </button>
      </form>
    </section>
  );
};
