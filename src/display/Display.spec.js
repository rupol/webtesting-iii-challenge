// Test away!
import React from "react";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);

test("<Display /> snapshot", () => {
  const display = rtl.render(<Display />);
  expect(display.asFragment()).toMatchSnapshot();
});
