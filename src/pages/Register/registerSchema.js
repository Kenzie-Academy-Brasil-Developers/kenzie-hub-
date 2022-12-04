import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome precisa ter no mínimo 3 caracteres")
    .max(161),
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("Email inválido"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(
      /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Zaz]).*$/,
      "Senha invalida"
    ),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senha está diferente"),
  bio: yup.string().required("Campo obrigatório").max(300),
  contact: yup.string().required("O email é obrigatório"),
  course_module: yup.string().required("Escolha o módulo"),
});
;
