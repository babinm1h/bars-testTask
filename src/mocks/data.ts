import { EmployeeRole, IEmployee } from "../types/employee";

export const mockedEmployees: IEmployee[] = [
  {
    name: "User123",
    phone: "+7 (777) 777-7777",
    birthday: "11.11.1999",
    role: EmployeeRole.waiter,
    isArchive: false,
    id: 19,
  },
];
