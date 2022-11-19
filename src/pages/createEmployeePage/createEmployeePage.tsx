import React, { useEffect } from "react";
import CreateEmployeeForm from "../../components/createEmployeeForm/createEmployeeForm";
import MainLayout from "../../components/mainLayout/mainLayout";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { setCreateEmployeeSuccess } from "../../redux/slices/employees.slice";
import { notifYemployeeCreated } from "../../utils/notifications";

const CreateEmployeePage = () => {
  const { createEmployeError, createEmployeSuccess } = useAppSelector((state) => state.employees);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (createEmployeSuccess) {
      notifYemployeeCreated(() => dispatch(setCreateEmployeeSuccess(false)));
    }
  }, [createEmployeSuccess]);

  return (
    <MainLayout>
      <CreateEmployeeForm createError={createEmployeError} />
    </MainLayout>
  );
};

export default CreateEmployeePage;
