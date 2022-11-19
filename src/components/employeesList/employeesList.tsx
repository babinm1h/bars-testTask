import React, { FC } from "react";
import { IEmployee } from "../../types/employee";
import Loader from "../UI/loader/loader";
import EmployeeItem from "./employeeItem/employeeItem";
import st from "./employeesList.module.scss";

interface IProps {
  employees: IEmployee[];
  isLoading: boolean;
}

const EmployeeList: FC<IProps> = ({ isLoading, employees }) => {
  return (
    <div className={st.list}>
      {isLoading ? <Loader /> : employees.map((user) => <EmployeeItem key={user.id} employee={user} />)}
    </div>
  );
};

export default EmployeeList;
