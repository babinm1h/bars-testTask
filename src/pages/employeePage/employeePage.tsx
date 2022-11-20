import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import EditEmployeForm from "../../components/editEmployeForm/editEmployeForm";
import MainLayout from "../../components/mainLayout/mainLayout";
import Loader from "../../components/UI/loader/loader";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  resetCurrentEmployeeErorr,
  setUpdateEmployeeError,
  setUpdateEmployeeSuccess,
} from "../../redux/slices/employees.slice";
import { fetchEmployeeById } from "../../redux/thunks/employees.thunks";
import { notifYemployeeUpdated, notifyError } from "../../utils/notifications";

const EmployeePage = () => {
  const dispatch = useAppDispatch();
  const { currentEmployeError, updateEmployeError, currentEmployee, isCurrentEmployeeLoading, updateEmployeSuccess } =
    useAppSelector((state) => state.employees);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    dispatch(fetchEmployeeById(+id));
  }, [id]);

  useEffect(() => {
    return () => {
      if (currentEmployeError) {
        dispatch(resetCurrentEmployeeErorr());
      }
    };
  }, [currentEmployeError]);

  useEffect(() => {
    if (updateEmployeSuccess) {
      notifYemployeeUpdated(() => dispatch(setUpdateEmployeeSuccess(false)));
    }
  }, [updateEmployeSuccess]);

  useEffect(() => {
    if (updateEmployeError) {
      notifyError(updateEmployeError, () => dispatch(setUpdateEmployeeError("")));
    }
  }, [updateEmployeError]);

  return (
    <MainLayout>
      {currentEmployeError ? (
        <div className="error">Ошибка: {currentEmployeError}</div>
      ) : isCurrentEmployeeLoading || !currentEmployee ? (
        <Loader />
      ) : (
        <EditEmployeForm employee={currentEmployee} updateError={updateEmployeError} />
      )}
    </MainLayout>
  );
};

export default EmployeePage;
