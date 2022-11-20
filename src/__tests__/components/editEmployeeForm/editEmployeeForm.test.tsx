import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { EmployeeRole, IEmployee } from "../../../types/employee";
import EditEmployeForm from "../../../components/editEmployeForm/editEmployeForm";

describe("editEmployeeForm", () => {
  const testEmployee: IEmployee = {
    birthday: "20.10.2022",
    id: 2,
    isArchive: false,
    name: "Имя",
    phone: "+7 (917) 327-7777",
    role: EmployeeRole.waiter,
  };

  test("should render all fields with correct values", () => {
    render(
      <Provider store={store}>
        <EditEmployeForm employee={testEmployee} updateError="" />
      </Provider>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Телефон")).toBeInTheDocument();
    expect(screen.getByText("Имя сотрудника")).toBeInTheDocument();
    expect(screen.getByText("Дата рождения")).toBeInTheDocument();
    expect(screen.getByText("В архиве")).toBeInTheDocument();

    expect(screen.getByTestId("edit-form")).toHaveFormValues({
      name: testEmployee.name,
      birthday: testEmployee.birthday,
      phone: testEmployee.phone,
    });
  });

  test("should show errors on submit", async () => {
    const invalidName = "wr000ng name";
    const invalidPhone = "12345";
    render(
      <Provider store={store}>
        <EditEmployeForm employee={testEmployee} updateError="" />
      </Provider>
    );
    const form = screen.getByTestId("edit-form");
    const nameField = screen.getByPlaceholderText("Имя");
    const phoneField = screen.getByPlaceholderText("Телефон");

    fireEvent.change(nameField, { target: { value: invalidName } });
    fireEvent.change(phoneField, { target: { value: invalidPhone } });
    expect(nameField).toHaveValue(invalidName);

    const onSubmit = () => {
      fireEvent.submit(form);
    };
    act(() => {
      onSubmit();
    });

    const nameError = await screen.findByText("Имя должно содержать только буквы одного языка");
    const phoneError = await screen.findByText("Минимальная длина 11 символов");
    await waitFor(() => {
      expect(nameError).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(phoneError).toBeInTheDocument();
    });
  });
});
