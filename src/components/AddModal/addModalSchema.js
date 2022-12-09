import * as yup from "yup";

export const addModalSchema = yup.object().shape({
  title: yup.string().required("Digite o título"),
  status: yup.string().required("Escolha um status"),
});
