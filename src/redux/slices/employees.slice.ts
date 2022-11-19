import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeRole } from "../../types/employee";
import {
  createEmployee,
  fetchEmployeeById,
  fetchEmployees,
  updateEmployee,
} from "../thunks/employees.thunks";
import { IEmployeesState, TSortBy } from "../types/employees.slice.types";

const initialState: IEmployeesState = {
  isEmployeesLoading: false,
  employees: [],
  employeesError: "",
  currentEmployee: null,
  currentEmployeError: "",
  isCurrentEmployeeLoading: false,
  updateEmployeError: "",
  createEmployeError: "",
  filters: {
    role: null,
    isArchive: false,
    sortBy: null,
  },
};

const employeesSlice = createSlice({
  initialState,
  name: "employees",
  reducers: {
    toggleIsArchived(state) {
      state.filters.isArchive = !state.filters.isArchive;
    },
    setSortBy(state, action: PayloadAction<TSortBy>) {
      state.filters.sortBy = action.payload;
    },
    setRoleFilter(state, action: PayloadAction<EmployeeRole | null>) {
      state.filters.role = action.payload;
    },
    resetCurrentEmployeeErorr(state) {
      state.currentEmployeError = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.employees = action.payload;
      state.isEmployeesLoading = false;
    });

    builder.addCase(fetchEmployees.pending, (state) => {
      state.isEmployeesLoading = true;
    });

    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.isEmployeesLoading = false;
      state.employeesError = action.payload as string;
    });

    builder.addCase(fetchEmployeeById.fulfilled, (state, action) => {
      state.currentEmployee = action.payload;
      state.currentEmployeError = "";
      state.isCurrentEmployeeLoading = false;
    });

    builder.addCase(fetchEmployeeById.pending, (state) => {
      state.isCurrentEmployeeLoading = true;
    });

    builder.addCase(fetchEmployeeById.rejected, (state, action) => {
      state.currentEmployeError = action.payload as string;
      state.isCurrentEmployeeLoading = false;
    });

    builder.addCase(updateEmployee.fulfilled, (state, action) => {
      state.currentEmployee = action.payload;
      state.updateEmployeError = "";
    });

    builder.addCase(updateEmployee.pending, (state) => {});

    builder.addCase(updateEmployee.rejected, (state, action) => {
      state.updateEmployeError = action.payload as string;
    });

    builder.addCase(createEmployee.fulfilled, (state, action) => {
      state.employees.push(action.payload);
      state.createEmployeError = "";
    });

    builder.addCase(createEmployee.pending, (state) => {});

    builder.addCase(createEmployee.rejected, (state, action) => {
      state.createEmployeError = action.payload as string;
    });
  },
});

export default employeesSlice.reducer;
export const { setRoleFilter, setSortBy, resetCurrentEmployeeErorr, toggleIsArchived } =
  employeesSlice.actions;
