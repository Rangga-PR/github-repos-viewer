import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import React from "react";
import Search from "./index";

test("get repo list", async () => {
  render(<Search />);

  const searchbar = screen.getByTestId("searchbar");
  await waitFor(() =>
    fireEvent.change(searchbar, { target: { value: "rangga-pr" } })
  );
  expect(searchbar).toHaveValue("rangga-pr");
});
