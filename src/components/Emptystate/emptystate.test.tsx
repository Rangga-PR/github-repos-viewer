import { render, screen } from "@testing-library/react";

import Emptystate from "./index";
import React from "react";

test("renders icon & caption", () => {
  render(<Emptystate />);
  const icon = screen.getByTestId("not found icon");
  const caption = screen.getByTestId("not found caption");
  expect(icon).toBeInTheDocument();
  expect(caption).toBeInTheDocument();
});
