// Test away
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

test("<Dashboard /> snapshot", () => {
  const dashboard = rtl.render(<Dashboard />);
  expect(dashboard.asFragment()).toMatchSnapshot();
});

// shows the controls and display
test("shows the controls and display", () => {
  const dashboard = rtl.render(<Dashboard />);
  const lock = dashboard.getByText(/lock gate/i);
  const close = dashboard.getByText(/close gate/i);
  const unlocked = dashboard.getByText(/unlocked/i);
  const open = dashboard.getByText(/open/i);

  expect(lock).toBeVisible();
  expect(close).toBeVisible();
  expect(unlocked).toBeVisible();
  expect(open).toBeVisible();
});
