import React, { FC } from "react";
import { IEmployee } from "../../../types/employee";
import st from "./employeeItem.module.scss";
import { NavLink } from "react-router-dom";
import { AllRoutes } from "../../appRoutes/appRoutes";
import { formatRole } from "../../../utils/formatRole";

interface IProps {
  employee: IEmployee;
}

const EmployeeItem: FC<IProps> = ({ employee }) => {
  return (
    <NavLink to={AllRoutes.employees + `/${employee.id}`} className={st.employee}>
      <div className={st.employeeInfo}>
        <span className={st.employeeName}>{employee.name}</span>
        <span>Должность: {formatRole(employee.role)}</span>
        <span>Телефон: {employee.phone}</span>
      </div>
    </NavLink>
  );
};

export default EmployeeItem;
