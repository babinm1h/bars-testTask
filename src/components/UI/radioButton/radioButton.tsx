import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import st from "./radioButton.module.scss";

interface IProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  id: string;
}

const RadioButton: FC<IProps> = ({ label, id, ...props }) => {
  return (
    <label className={st.checkbox__wrapper} htmlFor={id}>
      <input {...props} type="radio" className={st.checkbox__input} id={id} />
      <span className={st.checkbox__btn}></span>
      <span className={st.checkbox__label}>{label}</span>
    </label>
  );
};

export default RadioButton;
