import { useFormik } from "formik";
import { createEmployee } from "../../redux/thunks/employees.thunks";
import { EmployeeRole } from "../../types/employee";
import { useAppDispatch } from "../useAppDispatch";
import { userUpdateEditValidationSchema } from "../../utils/validation.helpers";

export const useCreateEmployeeForm = () => {
  const dispatch = useAppDispatch();

  const initialValues = {
    name: "",
    phone: "",
    birthday: "",
    role: "",
    isArchive: false,
  };

  const validationSchema = userUpdateEditValidationSchema();

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values, { setSubmitting, resetForm, setFieldValue }) => {
      dispatch(createEmployee({ ...values, role: values.role as EmployeeRole }));
      setSubmitting(false);
      resetForm();
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
