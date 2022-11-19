import { createAsyncThunk } from "@reduxjs/toolkit";
import { EmployeesService } from "../../API/employees.service";
import { IEmployee } from "../../types/employee";
import { IFilters } from "../types/employees.slice.types";

export const fetchEmployees = createAsyncThunk(
  "fetch_employees",
  async (payload: Partial<IFilters>, thunk) => {
    try {
      const data = await EmployeesService.fetchEmployees(payload);
      return data;
    } catch (err: any) {
      return thunk.rejectWithValue(err.response?.data.message);
    }
  }
);

export const fetchEmployeeById = createAsyncThunk("fetch_employee", async (id: number, thunk) => {
  try {
    const data = await EmployeesService.fetchEmployeeById(id);
    return data;
  } catch (err: any) {
    if (err.response?.status === 404) {
      return thunk.rejectWithValue("Сотрудник не найден");
    }
    return thunk.rejectWithValue(err.response?.data.message);
  }
});

export const updateEmployee = createAsyncThunk("update_employee", async (payload: IEmployee, thunk) => {
  try {
    const data = await EmployeesService.updateEmployee(payload);
    return data;
  } catch (err: any) {
    return thunk.rejectWithValue(err.response?.data.message);
  }
});

export const createEmployee = createAsyncThunk(
  "create_employee",
  async (payload: Omit<IEmployee, "id">, thunk) => {
    try {
      const data = await EmployeesService.createEmployee(payload);
      return data;
    } catch (err: any) {
      return thunk.rejectWithValue(err.response?.data.message);
    }
  }
);
