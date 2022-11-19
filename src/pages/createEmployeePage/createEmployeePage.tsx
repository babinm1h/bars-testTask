import React from "react";
import CreateEmployeeForm from "../../components/createEmployeeForm/createEmployeeForm";
import MainLayout from "../../components/mainLayout/mainLayout";
import { useAppSelector } from "../../hooks/useAppSelector";

const CreateEmployeePage = () => {
  const { createEmployeError } = useAppSelector((state) => state.employees);
  return (
    <MainLayout>
      <CreateEmployeeForm createError={createEmployeError} />
    </MainLayout>
  );
};

export default CreateEmployeePage;
