import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "../../../components/UI/checkbox/checkbox";

describe("checkbox", () => {
  test("renders with label", () => {
    const label = "label123";
    render(<Checkbox label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test("should be disabled", () => {
    render(<Checkbox disabled />);
    const box = screen.getByRole("checkbox");
    expect(box).toBeDisabled();
  });

  test("should be checked after change", () => {
    render(<Checkbox />);
    const box = screen.getByRole("checkbox");
    expect(box).not.toBeChecked();
    fireEvent.change(box, { target: { checked: true } });
    expect(box).toBeChecked();
  });
});
