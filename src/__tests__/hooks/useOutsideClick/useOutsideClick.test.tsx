import { fireEvent, renderHook } from "@testing-library/react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

describe("useOutsideClick", () => {
  test("should call handler", () => {
    const toggleVisible = jest.fn();
    const { result, unmount } = renderHook(() => useOutsideClick(false));

    const target = document.createElement("div");
    document.body.appendChild(target);
    target.onclick = toggleVisible;

    const outside = document.createElement("div");
    document.body.appendChild(outside);

    expect(result.current.isVisible).toBeFalsy();
    expect(toggleVisible).toHaveBeenCalledTimes(0);

    fireEvent.click(target);
    expect(toggleVisible).toHaveBeenCalledTimes(1);

    jest.spyOn(document, "removeEventListener");
    unmount();
    expect(document.removeEventListener).toHaveBeenCalledTimes(1);
  });
});
