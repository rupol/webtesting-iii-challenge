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

test("Buttons fire toggleClosed and toggleLocked functions on click", () => {
  const toggleClosed = jest.fn();
  const toggleLocked = jest.fn();
  const controls = rtl.render(
    <Controls toggleClosed={toggleClosed} toggleLocked={toggleLocked} />
  );
  const gateButton = controls.getByText(/close gate/i);
  const lockButton = controls.getByText(/lock gate/i);

  rtl.act(() => {
    rtl.fireEvent.click(gateButton);
  });

  expect(toggleClosed).toHaveBeenCalled;

  rtl.act(() => {
    rtl.fireEvent.click(lockButton);
  });

  expect(toggleLocked).toHaveBeenCalled;
});
