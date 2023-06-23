import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ViewButton from "../ViewButton/ViewButton";

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
