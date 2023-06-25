
import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import ViewButton from "../ViewButton/ViewButton";

import "@testing-library/jest-dom";

afterEach(cleanup);
describe("all button tests", () => {
  test("should have OK text", () => {
    const buttonProps = { buttonText: "Ok" };
    render(<ViewButton {...buttonProps} />);
    expect(screen.getByRole("button")).toHaveTextContent("Ok");
  });
  it(" test button prop text ", () => {
    const { getByText } = render(<ViewButton buttonText="test" />);
    const buttonEl = getByText(/test/i);
    expect(buttonEl).toBeInTheDocument();
  });
 
  test("renders button text and calls onClick handler", () => {
    const buttonText = "Click me";
    const onClickMock = jest.fn();
    const { getByText } = render(
      <ViewButton onClick={onClickMock} buttonText={buttonText} />
    );
    const button = getByText(buttonText);
    expect(button).toBeTruthy();
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});