import * as yup from "yup";

export const viewModalSchema = yup.object().shape({
  status: yup.string().required("Escolha um status"),
});
