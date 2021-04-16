import React from "react";
import { render } from "@testing-library/react";
import Personal from "./Personal";

test("PointDist renders Personal on game creation", () => {
  const { container, getByText } = render(<Personal />);

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByText("履歴書")).toBeInTheDocument();
});
