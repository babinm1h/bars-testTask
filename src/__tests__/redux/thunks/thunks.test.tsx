import { AsyncThunkAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { EmployeesService } from "../../../API/employees.service";
import { fetchEmployees } from "../../../redux/thunks/employees.thunks";
import { IFilters } from "../../../redux/types/employees.slice.types";
import { IEmployee } from "../../../types/employee";
import { mockedEmployees } from "../../../mocks/data";
import employeesSlice, { initialState } from "../../../redux/slices/employees.slice";

jest.mock("../../../API/employees.service");

describe("employees thunks", () => {
  let employyesApi: jest.Mocked<typeof EmployeesService>;

  beforeAll(() => {
    employyesApi = EmployeesService as any;
  });

  afterAll(() => {
    jest.unmock("../../../API/employees.service");
  });

  describe("fetchEmployees", () => {
    let action: AsyncThunkAction<IEmployee[], Partial<IFilters>, {}>;
    let dispatch: Dispatch<any>;
    let getState: () => void;
    let arg: Partial<IFilters>;
    let result: IEmployee[];

    beforeEach(() => {
      dispatch = jest.fn();
      getState = jest.fn();

      employyesApi.fetchEmployees.mockClear();
      employyesApi.fetchEmployees.mockResolvedValue(mockedEmployees);

      arg = {};
      result = mockedEmployees;
      action = fetchEmployees(arg);
    });

    test("should be fulfilled", async () => {
      expect(employyesApi.fetchEmployees).toHaveBeenCalledTimes(0);
      const res = await action(dispatch, getState, null);
      expect(employyesApi.fetchEmployees).toHaveBeenCalledTimes(1);
      expect(res.type).toBe("fetch_employees/fulfilled");
      expect(res.payload).toBe(result);
    });

    test("employees slice", async () => {
      const slice = employeesSlice(initialState, fetchEmployees.pending("", arg));
      expect(slice.isEmployeesLoading).toBeTruthy();
      expect(slice.employees.length).toEqual(0);

      const sliceAfterFulfilled = employeesSlice(initialState, fetchEmployees.fulfilled(result, "", arg));
      expect(sliceAfterFulfilled.isEmployeesLoading).toBeFalsy();
      expect(sliceAfterFulfilled.employees).toEqual(result);
    });
  });
});
