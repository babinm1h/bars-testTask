import { EmployeeRole } from "../types/employee";

export const formatRole = (role: EmployeeRole) => {
  if (role === EmployeeRole.cook) return "Повар";
  if (role === EmployeeRole.driver) return "Водитель";
  if (role === EmployeeRole.waiter) return "Официант";
  return "";
};
