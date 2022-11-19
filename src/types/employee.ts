export enum EmployeeRole {
  waiter = "waiter",
  cook = "cook",
  driver = "driver",
}

export interface IEmployee {
  id: number;
  name: string;
  isArchive: boolean;
  role: EmployeeRole;
  phone: string;
  birthday: string;
}
