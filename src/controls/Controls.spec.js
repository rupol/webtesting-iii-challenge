// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

afterEach(rtl.cleanup);

test("<Controls /> snapshot", () => {
  const controls = rtl.render(<Controls />);
  expect(controls.asFragment()).toMatchSnapshot();
});

// provide buttons to toggle the `closed` and `locked` states
test("Gate controls are rendered", () => {
  const controls = rtl.render(<Controls />);
  const lock = controls.getByTestId("lock");
  const close = controls.getByTestId("gate");

  expect(lock).toBeVisible();
  expect(close).toBeVisible();
});

// buttons' text changes to reflect the state the door will be in if clicked

// the closed toggle button is disabled if the gate is locked

// the locked toggle button is disabled if the gate is open
