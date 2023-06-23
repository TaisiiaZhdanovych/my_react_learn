import React from "react";
import { render } from "@testing-library/react";
import Modal from "../Modal/Modal";





jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
test("render modal", () => {
    const { asFragment } = render(<Modal/>)
    expect(asFragment(<Modal/>)).toMatchSnapshot();
})



test("modal close", () => {
    
    const { getByTestId } = render(<Modal/>);

    expect(getByTestId("closeModal")).toBeTruthy();
   
});

