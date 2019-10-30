// Test away
import React from "react";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

test("<Dashboard /> snapshot", () => {
  const dashboard = rtl.render(<Dashboard />);
  expect(dashboard.asFragment()).toMatchSnapshot();
});
