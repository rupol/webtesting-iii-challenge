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

// buttons' text changes to reflect the state the door will be in if clicked
test("Button text changes on click", () => {
  const wrapper = rtl.render(<Dashboard />);
  const gateButton = wrapper.getByTestId("gate");
  const lockButton = wrapper.getByTestId("lock");

  // click "close gate"
  rtl.act(() => {
    rtl.fireEvent.click(gateButton);
  });

  // button text changes to "open gate"
  expect(gateButton).toHaveTextContent(/open gate/i);
  expect(lockButton).toHaveTextContent(/lock gate/i);

  // click "lock gate"
  rtl.act(() => {
    rtl.fireEvent.click(lockButton);
  });

  // button text changes to "unlock gate"
  expect(lockButton).toHaveTextContent(/unlock gate/i);
  expect(gateButton).toHaveTextContent(/open gate/i);
});

// the closed toggle button is disabled if the gate is locked
// the locked toggle button is disabled if the gate is open
test("Buttons disabled functionality", () => {
  const wrapper = rtl.render(<Dashboard />);
  const gateButton = wrapper.getByTestId("gate");
  const lockButton = wrapper.getByTestId("lock");

  // default - "lock gate" is disabled
  expect(lockButton).toHaveProperty("disabled", true);
  expect(gateButton).toHaveProperty("disabled", false);

  // click "close gate"
  rtl.act(() => {
    rtl.fireEvent.click(gateButton);
  });

  // click "lock gate"
  rtl.act(() => {
    rtl.fireEvent.click(lockButton);
  });

  // after clicks - "open gate" is disabled
  expect(gateButton).toHaveProperty("disabled", true);
  expect(lockButton).toHaveProperty("disabled", false);
});

// describe("the Dashboard component", () => {
//   it("shows 2 toggle buttons", () => {
//     const wrapper = rtl.render(<Dashboard />);
//     const buttons = wrapper.getAllByText(/Gate/i);
//     expect(buttons.length).toBe(2);
//   });

//   it("doesn't locked when click on Lock Gate and gate is Open", () => {
//     const wrapper = rtl.render(<Dashboard />);
//     const button = wrapper.getByText(/Lock Gate/i);
//     rtl.act(() => {
//       rtl.fireEvent.click(button);
//     });
//     expect(wrapper.getByText(/Unlocked/i)).toHaveClass("green-led");
//   });
//   it("shows locked  and red-led when click on Lock Gate and gate is Closed", () => {
//     const wrapper = rtl.render(<Dashboard />);
//     const close = wrapper.getByText(/Close Gate/i);
//     const lock = wrapper.getByText(/Lock Gate/i);
//     rtl.act(() => {
//       rtl.fireEvent.click(close);
//     });
//     rtl.act(() => {
//       rtl.fireEvent.click(lock);
//     });
//     expect(wrapper.getByText(/Locked/i)).toHaveClass("red-led");
//   });
// });
