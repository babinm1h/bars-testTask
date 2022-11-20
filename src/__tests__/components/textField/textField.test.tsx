import { fireEvent, render, screen } from "@testing-library/react";
import TextField from "../../../components/UI/textField/textField";

describe("textField", () => {
  const label = "test-label";
  const defaultProps = { onChange: () => {}, id: label, label: label };

  test("renders with label", () => {
    render(<TextField {...defaultProps} />);
    expect(screen.getByLabelText(label)).toBeInTheDocument();
    expect(screen.getByLabelText(label)).toHaveValue("");
  });

  test("onChange is working", () => {
    const onChange = jest.fn();
    const value = "hello";
    render(<TextField {...defaultProps} onChange={onChange} />);
    const input = screen.getByLabelText(label);
    fireEvent.change(input, { target: { value } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test("renders error", () => {
    const err = "error";
    render(<TextField {...defaultProps} error={err} />);
    expect(screen.getByText(err)).toBeInTheDocument();
  });
});
