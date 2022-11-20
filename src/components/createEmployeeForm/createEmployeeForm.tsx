import React, { FC } from "react";
import { useCreateEmployeeForm } from "../../hooks/components/useCreateEmployeeForm";
import RoleSelect from "../RoleSelect/RoleSelect";
import Button from "../UI/button/button";
import Checkbox from "../UI/checkbox/checkbox";
import TextField from "../UI/textField/textField";
import st from "./createEmployeeForm.module.scss";

interface IProps {
  
}

const CreateEmployeeForm: FC<IProps> = () => {
  const { formik, handleCheckbox, handleSelect } = useCreateEmployeeForm();
  return (
    <div className={st.wrapper}>
      <form action="/" className={st.form} onSubmit={formik.handleSubmit} data-testid="create-form">
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
        <Checkbox label="В архиве" id="isArchive" onChange={handleCheckbox} checked={formik.values.isArchive} />

        <Button type="submit" disabled={formik.isSubmitting} role="button">
          Создать
        </Button>
      </form>
    </div>
  );
};

export default CreateEmployeeForm;
