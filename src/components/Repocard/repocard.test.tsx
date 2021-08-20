import { render, screen } from "@testing-library/react";

import React from "react";
import Repocard from "./index";

const data = {
  id: 1,
  html_url: "https://github.com/test/test-repo",
  name: "test-repo",
  description: "lorem ipsum",
  language: "go",
};

test("renders content", () => {
  render(<Repocard data={data} />);
  const name = screen.getByText("test-repo");
  const desc = screen.getByText("lorem ipsum");
  const lang = screen.getByText("go");
  expect(name).toBeInTheDocument();
  expect(desc).toBeInTheDocument();
  expect(lang).toBeInTheDocument();
});
