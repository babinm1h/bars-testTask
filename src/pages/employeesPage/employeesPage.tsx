import React, { useEffect } from "react";
import Filters from "../../components/filters/filters";
import EmployeeList from "../../components/employeesList/employeesList";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchEmployees } from "../../redux/thunks/employees.thunks";
import st from "./employeesPage.module.scss";
import MainLayout from "../../components/mainLayout/mainLayout";

const EmployeePage = () => {
  const dispatch = useAppDispatch();
  const { isEmployeesLoading, employees, filters } = useAppSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees({ isArchive: filters.isArchive, role: filters.role, sortBy: filters.sortBy }));
  }, [filters.isArchive, filters.sortBy, filters.role, dispatch]);

  return (
    <MainLayout>
      <div className={st.wrapper}>
        <Filters role={filters.role} />
        <EmployeeList employees={employees} isLoading={isEmployeesLoading} />
      </div>
    </MainLayout>
  );
};

export default EmployeePage;
