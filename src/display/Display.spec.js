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
  const lockDisplay = display.getByText(/unlocked/i);
  const gateDisplay = display.getByText(/open/i);

  expect(lockDisplay).toBeVisible();
  expect(gateDisplay).toBeVisible();
});

// displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
test("Displays closed if closed", () => {
  const display = rtl.render(<Display closed={true} />);

  expect(display.getByText(/closed/i)).toBeVisible;
});

test("Displays open if open", () => {
  const display = rtl.render(<Display closed={false} />);

  expect(display.getByText(/open/i)).toBeVisible;
});

// displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
test("Displays locked if locked", () => {
  const display = rtl.render(<Display locked={true} />);

  expect(display.getByText(/locked/i)).toBeVisible;
});

test("Displays unlocked if unlocked", () => {
  const display = rtl.render(<Display locked={false} />);

  expect(display.getByText(/unlocked/i)).toBeVisible;
});

// when `locked` or `closed` use the `red-led` class
test("Display red if locked or closed", () => {
  const display = rtl.render(<Display locked={true} closed={true} />);
  const lockDisplay = display.getByText(/locked/i);
  const gateDisplay = display.getByText(/closed/i);

  expect(lockDisplay).toHaveClass("red-led");
  expect(gateDisplay).toHaveClass("red-led");
});

// when `unlocked` or `open` use the `green-led` class
test("Display red if locked or closed", () => {
  const display = rtl.render(<Display locked={false} closed={false} />);
  const lockDisplay = display.getByText(/unlocked/i);
  const gateDisplay = display.getByText(/open/i);

  expect(lockDisplay).toHaveClass("green-led");
  expect(gateDisplay).toHaveClass("green-led");
});
