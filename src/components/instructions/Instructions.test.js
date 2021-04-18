import React from "react";
import { render } from "@testing-library/react";

import Instructions from "./Instructions";

test("PointDist renders Personal on game creation", () => {
  const { container, getByText } = render(<Instructions />);

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByText("INSTRUCTIONS")).toBeInTheDocument();
});
