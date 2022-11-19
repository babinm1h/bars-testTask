import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import st from "./checkbox.module.scss";

interface IProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  id: string;
}

const Checkbox: FC<IProps> = ({ label, id, ...props }) => {
  return (
    <label className={st.checkbox__wrapper} htmlFor={id}>
      <input {...props} type="checkbox" className={st.checkbox__input} id={id} />
      <span className={st.checkbox__btn}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="white"
          className={st.checkbox__icon}
        >
          <path d="m2.67 7.63 2.79 2.78 7.87-7.87 1.52 1.52-9.39 9.4-4.31-4.31 1.52-1.52z" />
        </svg>
      </span>
      <span className={st.checkbox__label}>{label}</span>
    </label>
  );
};

export default Checkbox;
