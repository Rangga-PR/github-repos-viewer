import { render, screen } from "@testing-library/react";

import React from "react";
import Repolist from "./index";

const state = {
  loading: false,
  error: "",
  data: [],
};

const data = {
  id: 1,
  html_url: "https://github.com/test/test-repo",
  name: "test-repo",
  description: "lorem ipsum",
  language: "go",
};

test("renders empty state", () => {
  render(<Repolist state={state} />);
  const notFoundIcon = screen.getByTestId("not found icon");
  expect(notFoundIcon).toBeInTheDocument();
});

test("renders loading state", () => {
  render(<Repolist state={{ ...state, loading: true }} />);
  const spinner = screen.getByTestId("spinner");
  expect(spinner).toBeInTheDocument();
});

test("renders repo cards", () => {
  render(<Repolist state={{ ...state, data: [data] }} />);
  const name = screen.getByText("test-repo");
  const desc = screen.getByText("lorem ipsum");
  const lang = screen.getByText("go");
  expect(name).toBeInTheDocument();
  expect(desc).toBeInTheDocument();
  expect(lang).toBeInTheDocument();
});
