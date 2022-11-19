import React from "react";
import { NavLink } from "react-router-dom";
import { AllRoutes } from "../../appRoutes/appRoutes";
import st from "./header.module.scss";

const Header = () => {
  return (
    <header className={st.header}>
      <nav className={st.nav}>
        <NavLink to={AllRoutes.home} className={st.link}>
          Сотрудники
        </NavLink>
        <NavLink to={AllRoutes.createEmployee} className={st.link}>
          Добавить сотрудника
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
