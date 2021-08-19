import { render, screen } from "@testing-library/react";

import React from "react";
import Topbar from "./index";

test("renders content", () => {
  render(<Topbar />);
  const logo = screen.getByTestId("github logo");
  const searchbar = screen.getByTestId("searchbar");
  expect(logo).toBeInTheDocument();
  expect(searchbar).toBeInTheDocument();
});
