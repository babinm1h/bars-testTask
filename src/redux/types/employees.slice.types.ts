import { IEmployee, EmployeeRole } from "../../types/employee";

export type TSortBy = keyof IEmployee | null;

export interface IFilters {
  sortBy: TSortBy;
  isArchive: boolean;
  role: EmployeeRole | null;
}

export interface IEmployeesState {
  employees: IEmployee[];
  isEmployeesLoading: boolean;
  filters: IFilters;
  employeesError: string;

  currentEmployee: IEmployee | null;
  isCurrentEmployeeLoading: boolean;
  currentEmployeError: string;
  updateEmployeError: string;
  createEmployeError: string;
}
