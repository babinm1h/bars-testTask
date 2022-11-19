import { $instance } from ".";
import { IFilters } from "../redux/types/employees.slice.types";
import { IEmployee } from "../types/employee";

export class EmployeesService {
  static async fetchEmployees({ isArchive, role, sortBy }: Partial<IFilters>) {
    const { data } = await $instance.get<IEmployee[]>(`/employees`, {
      params: { _sort: sortBy, isArchive: isArchive || null, role },
    });
    return data;
  }

  static async fetchEmployeeById(id: number) {
    const { data } = await $instance.get<IEmployee>(`/employees/${id}`);
    return data;
  }

  static async updateEmployee({ id, ...rest }: IEmployee) {
    const { data } = await $instance.put<IEmployee>(`/employees/${id}`, rest);
    return data;
  }

  static async createEmployee(payload: Omit<IEmployee, "id">) {
    const { data } = await $instance.post<IEmployee>(`/employees`, payload);
    return data;
  }
}
