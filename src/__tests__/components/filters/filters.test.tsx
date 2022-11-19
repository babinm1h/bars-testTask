import { fireEvent, render, screen } from "@testing-library/react";
import Filters from "../../../components/filters/filters";
import * as reduxHooks from "react-redux";
import * as actions from "../../../redux/slices/employees.slice";

jest.mock("react-redux");
const mockedDispatch = jest.spyOn(reduxHooks, "useDispatch");

describe("filters", () => {
  test("should call setSortBy name", async () => {
    const disp = jest.fn();
    mockedDispatch.mockReturnValue(disp);
    const mockedSetSortBy = jest.spyOn(actions, "setSortBy");

    render(<Filters role={null} />);

    const nameRadio = screen.getByTestId("filter-name");
    expect(nameRadio).not.toBeChecked();
    fireEvent.click(nameRadio);

    expect(disp).toHaveBeenCalledTimes(1);
    expect(mockedSetSortBy).toBeCalledWith("name");
  });

  test("should call toggleIsArchived", async () => {
    const disp = jest.fn();
    mockedDispatch.mockReturnValue(disp);
    const mockedSetSortBy = jest.spyOn(actions, "toggleIsArchived");

    render(<Filters role={null} />);

    const isArchivedCheckbox = screen.getByTestId("filter-archived");
    expect(isArchivedCheckbox).not.toBeChecked();
    fireEvent.click(isArchivedCheckbox);

    expect(disp).toHaveBeenCalledTimes(1);
    expect(mockedSetSortBy).toBeCalledTimes(1);
    expect(isArchivedCheckbox).toBeChecked();
  });
});
