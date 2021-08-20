import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import App from "./App";
import React from "react";
import { ReposProvider } from "./context/repos";

test("get repo list", async () => {
  render(
    <ReposProvider>
      <App />
    </ReposProvider>
  );

  //test initial state: no repo
  const caption = screen.getByTestId("not found caption");
  const searchbar = screen.getByTestId("searchbar");
  expect(caption).toBeInTheDocument();

  fireEvent.change(searchbar, { target: { value: "rangga-pr" } });
  await waitFor(() =>
    fireEvent.keyPress(searchbar, { key: "Enter", keyCode: 13 })
  );

  //test loading state
  expect(screen.getByTestId("spinner")).toBeInTheDocument();

  //test get repo success
  await waitFor(() =>
    expect(screen.getAllByTestId("repo card").length).toBeGreaterThanOrEqual(1)
  );
});
