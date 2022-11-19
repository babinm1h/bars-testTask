import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateEmployeePage from "../../pages/createEmployeePage/createEmployeePage";
import EmployeePage from "../../pages/employeePage/employeePage";
import EmployeesPage from "../../pages/employeesPage/employeesPage";
import ErrorPage from "../../pages/errorPage/errorPage";

export enum AllRoutes {
  home = "/",
  employees = "/employees",
  createEmployee = "/employees/create",
  any = "/*",
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AllRoutes.home} element={<EmployeesPage />} />
      <Route path={AllRoutes.employees + "/:id"} element={<EmployeePage />} />
      <Route path={AllRoutes.createEmployee} element={<CreateEmployeePage />} />
      <Route path={AllRoutes.any} element={<ErrorPage message="Ошибка! Страница не найдена :(" />} />
    </Routes>
  );
};

export default AppRoutes;
