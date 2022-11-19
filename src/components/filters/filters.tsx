import { FC } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setRoleFilter, setSortBy, toggleIsArchived } from "../../redux/slices/employees.slice";
import Checkbox from "../UI/checkbox/checkbox";
import RadioButton from "../UI/radioButton/radioButton";
import st from "./filters.module.scss";
import { EmployeeRole } from "../../types/employee";
import RoleSelect from "../RoleSelect/RoleSelect";

interface IProps {
  role: EmployeeRole | null;
}
const Filters: FC<IProps> = ({ role }) => {
  const dispatch = useAppDispatch();

  const onApplySortByName = () => {
    dispatch(setSortBy("name"));
  };

  const onApplySortByBirth = () => {
    dispatch(setSortBy("birthday"));
  };

  const onSelectRole = (role: string) => {
    dispatch(setRoleFilter(role as EmployeeRole));
  };

  return (
    <form className={st.filters}>
      <div className={st.sorts}>
        <div>Сортировать по:</div>
        <RadioButton id="name" name="sortby" label="Имени" onChange={onApplySortByName} />
        <RadioButton id="birth" name="sortby" label="Дате рождения" onChange={onApplySortByBirth} />
      </div>

      <div className={st.filter}>
        <div>Фильтры:</div>
        <Checkbox id="archived" label="В архиве" onChange={() => dispatch(toggleIsArchived())} />

        <RoleSelect value={role || ""} onSelect={onSelectRole} />
      </div>
    </form>
  );
};

export default Filters;
