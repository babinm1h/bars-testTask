import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import CreateEmployeeForm from "../../../components/createEmployeeForm/createEmployeeForm";

describe("createEmployeeForm", () => {
  test("fields should be empty", () => {
    render(
      <Provider store={store}>
        <CreateEmployeeForm />
      </Provider>
    );
    expect(screen.getByTestId("create-form")).toHaveFormValues({
      name: "",
      phone: "",
      birthday: "",
    });
  });

  test("should show errors on submit", async () => {
    const invalidName = "имя717171";
    const invalidPhone = "12345";
    render(
      <Provider store={store}>
        <CreateEmployeeForm />
      </Provider>
    );
    const form = screen.getByTestId("create-form");
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
    const requiredErrors = await screen.findAllByText("Обязательное поле");
    await waitFor(() => {
      expect(nameError).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(phoneError).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(requiredErrors.length).toBeGreaterThan(1);
    });
  });
});
