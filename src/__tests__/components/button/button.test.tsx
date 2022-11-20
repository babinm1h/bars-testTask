import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../../../components/UI/button/button";

describe("button", () => {
  test("should render children", () => {
    const child = "button123";
    render(<Button>{child}</Button>);
    expect(screen.getByText(child)).toBeInTheDocument();
  });

  test("should be disabled and have id", () => {
    const id = "id777";
    render(<Button disabled id={id} />);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute("id", id);
  });

  test("should call onClick", () => {
    const handler = jest.fn();
    render(<Button onClick={handler} />);
    const btn = screen.getByRole("button");
    expect(handler).toHaveBeenCalledTimes(0);
    fireEvent.click(btn);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
