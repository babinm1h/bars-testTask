import * as Yup from "yup";

export const userUpdateEditValidationSchema = () => {
  return Yup.object().shape({
    name: Yup.string()
      .matches(/^[а-яА-ЯЁё\s]+$|^[\u0041-\u007a\s]+$/g, "Имя должно содержать только буквы одного языка")
      .max(50, "Максимальная длина 50 символов")
      .required("Обязательное поле")
      .min(1, "Минимальная длина 1 символ"),
    phone: Yup.string()
      .transform((value) => value.replace(/[^\d]/g, ""))
      .matches(/^\d+$/, "Телефон должен содержать только числа")
      .min(11, "Минимальная длина 11 символов")
      .max(11, "Максимальная длина 11 символов")
      .required("Обязательное поле"),
    birthday: Yup.string()
      .transform((value) => value.replace(/[^\d]/g, ""))
      .matches(/^\d+$/, "Телефон должен содержать только числа")
      .min(8, "Минимальная длина 8 символов")
      .max(8, "Максимальная длина 8 символов")
      .required("Обязательное поле"),
    role: Yup.string().required("Обязательное поле"),
    isArchive: Yup.boolean().required(),
  });
};
