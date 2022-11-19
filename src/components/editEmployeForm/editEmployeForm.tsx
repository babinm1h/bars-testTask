import { FC } from "react";
import st from "./editEmployeForm.module.scss";
import { IEmployee } from "../../types/employee";
import TextField from "../UI/textField/textField";
import RoleSelect from "../RoleSelect/RoleSelect";
import Checkbox from "../UI/checkbox/checkbox";
import Button from "../UI/button/button";
import { useEditEmployeeForm } from "../../hooks/components/useEditEmployeeForm";

interface IProps {
  employee: IEmployee;
  updateError: string;
}

const EditEmployeForm: FC<IProps> = ({ employee, updateError }) => {
  const { formik, handleCheckbox, handleSelect } = useEditEmployeeForm(employee);

  return (
    <div className={st.wrapper}>
      <div className={st.formBlock}>
        <h1 className={st.title}>Редактирование сотрудника №{employee.id}</h1>
        <form action="/" className={st.form} onSubmit={formik.handleSubmit} data-testid="edit-form">
          <TextField
            placeholder="Имя"
            label="Имя сотрудника"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.errors.name}
          />
          <TextField
            placeholder="Телефон"
            label="Телефон"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.errors.phone}
            mask="+9 (999) 999-9999"
          />
          <TextField
            placeholder="Дата рождения"
            label="Дата рождения"
            name="birthday"
            onChange={formik.handleChange}
            value={formik.values.birthday}
            error={formik.errors.birthday}
            mask="99.99.9999"
          />
          <RoleSelect onSelect={handleSelect} value={formik.values.role} error={formik.errors.role} />
          <Checkbox
            label="В архиве"
            id="isArchive"
            onChange={handleCheckbox}
            checked={formik.values.isArchive}
          />

          {updateError && <div className={st.error}>{updateError}</div>}

          <Button type="submit" disabled={formik.isSubmitting}>
            Обновить
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployeForm;
