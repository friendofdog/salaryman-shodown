import React from "react";
import { render } from "@testing-library/react";
import Redistribute from "./Redistribute";

test("Redistribute renders Div with time remaining", () => {
  const { container, getByText } = render(
    <Redistribute redistCountdown={99} />
  );

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByText("Time remaining: 99")).toBeInTheDocument();
});
