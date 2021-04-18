import React from "react";
import { render } from "@testing-library/react";
import Wait from "./Wait";

test("Wait renders Image", () => {
  const { container, getByAltText } = render(<Wait />);

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByAltText("Chotto matte...")).toBeInTheDocument();
});
