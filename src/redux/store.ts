import { AnyAction, combineReducers, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import employeesSlice from "./slices/employees.slice";

const rootReducer = combineReducers({
  employees: employeesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;
