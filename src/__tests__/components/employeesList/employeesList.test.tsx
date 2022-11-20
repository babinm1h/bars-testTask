import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import EmployeeList from "../../../components/employeesList/employeesList";
import { mockedEmployees } from "../../../mocks/data";

describe("employeesList", () => {
  test("renders EmployeeItem", () => {
    render(
      <BrowserRouter>
        <EmployeeList employees={mockedEmployees} isLoading={false} />
      </BrowserRouter>
    );
    expect(screen.getByText(mockedEmployees[0].name)).toBeInTheDocument();
  });

  test("should show loader instead of EmployeeItem", () => {
    render(
      <BrowserRouter>
        <EmployeeList employees={mockedEmployees} isLoading={true} />
      </BrowserRouter>
    );
    expect(screen.queryByText(mockedEmployees[0].name)).not.toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
