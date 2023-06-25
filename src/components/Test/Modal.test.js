import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "../Modal/Modal";

import "@testing-library/jest-dom";
import { useDispatch } from "react-redux";



jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
describe("modal", () => {
it("render modal", () => {
  const { asFragment } = render(<Modal />);
  expect(asFragment(<Modal />)).toMatchSnapshot();
});

it("modal close", () => {
  const { getByTestId } = render(<Modal />);

  expect(getByTestId("closeModal")).toBeTruthy();
});
  it("onClick closeTest modal", () => {
    const dispatch = jest.fn()
    useDispatch.mockReturnValue(jest.fn())
    const propsFunc = jest.fn()
    const { getByTestId } = render(<Modal onClick={propsFunc} />);
  fireEvent.click(getByTestId("closeModal"));
    expect(propsFunc).toHaveBeenCalledTimes(1);
})  
})


