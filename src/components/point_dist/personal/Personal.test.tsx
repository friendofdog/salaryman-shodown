import React from "react";
import { render } from "@testing-library/react";
import Personal from "./Personal";

test("Personal component renders Table with header", () => {
  const { container, getByText } = render(<Personal />);

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByText("履歴書")).toBeInTheDocument();
});
