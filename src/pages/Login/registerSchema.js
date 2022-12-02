import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("Email inválido"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "É necessário uma senha de pelo menos 6 dígitos"),
});
