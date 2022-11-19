import { FC } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { EmployeeRole } from "../../types/employee";
import { formatRole } from "../../utils/formatRole";
import Select from "../UI/select/select";
import SelectItem from "../UI/select/selectItem";

interface IProps {
  value: string;
  onSelect: (role: string) => void;
  error?: string;
}

const RoleSelect: FC<IProps> = ({ value, onSelect, error }) => {
  const { isVisible, onToggleVisible, ref } = useOutsideClick(false);

  const handleSelect = (role: string) => {
    onToggleVisible();
    onSelect(role);
  };

  return (
    <Select
      value={value ? formatRole(value as EmployeeRole) : ""}
      isOpen={isVisible}
      onInputClick={onToggleVisible}
      selectRef={ref}
      placeholder="Выберите должность..."
      label="Должность"
      error={error}
    >
      {Object.keys(EmployeeRole).map((r) => (
        <SelectItem key={r} isSelected={value === r} value={r} onClick={handleSelect}>
          {formatRole(r as EmployeeRole)}
        </SelectItem>
      ))}
    </Select>
  );
};

export default RoleSelect;
