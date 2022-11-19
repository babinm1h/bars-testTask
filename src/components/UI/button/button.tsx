import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from "react";
import st from "./button.module.scss";

interface IProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const Button: FC<PropsWithChildren<IProps>> = ({ children, ...props }) => {
  return (
    <button {...props} className={st.button}>
      {children}
    </button>
  );
};

export default Button;
