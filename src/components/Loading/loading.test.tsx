import { render, screen } from "@testing-library/react";

import Loading from "./index";
import React from "react";

test("renders spinner", () => {
  render(<Loading />);
  const spinner = screen.getByTestId("spinner");
  expect(spinner).toBeInTheDocument();
});
