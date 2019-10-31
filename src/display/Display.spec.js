// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);

test("<Display /> snapshot", () => {
  const display = rtl.render(<Display />);
  expect(display.asFragment()).toMatchSnapshot();
});

// displays if gate is open/closed and if it is locked/unlocked
test("Default gate display is rendered", () => {
  const display = rtl.render(<Display />);
  const unlocked = display.getByText(/unlocked/i);
  const open = display.getByText(/open/i);

  expect(unlocked).toBeVisible();
  expect(open).toBeVisible();
});

// displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise

// displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise

// when `locked` or `closed` use the `red-led` class

// when `unlocked` or `open` use the `green-led` class
