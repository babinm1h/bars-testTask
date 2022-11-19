import { useFormik } from "formik";
import { updateEmployee } from "../../redux/thunks/employees.thunks";
import { EmployeeRole, IEmployee } from "../../types/employee";
import { useAppDispatch } from "../useAppDispatch";
import { userUpdateEditValidationSchema } from "../../utils/validation.helpers";

export const useEditEmployeeForm = (employee: IEmployee) => {
  const dispatch = useAppDispatch();

  const initialValues = {
    name: employee.name,
    phone: employee.phone,
    birthday: employee.birthday,
    role: employee.role,
    isArchive: employee.isArchive,
  };

  const validationSchema = userUpdateEditValidationSchema();

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values, { setSubmitting }) => {
      dispatch(updateEmployee({ ...values, id: employee.id, role: values.role as EmployeeRole }));
      setSubmitting(false);
    },
  });

  const handleSelect = (role: string) => {
    formik.setFieldValue("role", role);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue("isArchive", e.target.checked);
  };

  return { handleCheckbox, handleSelect, formik };
};
