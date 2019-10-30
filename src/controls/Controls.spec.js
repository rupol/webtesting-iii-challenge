// Test away!
import React from "react";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";
import Controls from "./Controls";

afterEach(rtl.cleanup);

test("<Controls /> snapshot", () => {
  const controls = rtl.render(<Controls />);
  expect(controls.asFragment()).toMatchSnapshot();
});

// test("Locked gate", async () => {
//   const controls = rtl.render(<Controls />);
// });
