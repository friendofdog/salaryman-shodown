import React from "react";
import { render } from "@testing-library/react";

import Title from "./Title";

test("Title renders H1", () => {
  const { container, getByText, queryByAltText } = render(<Title />);

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByText("Salaryman Shodown")).toBeInTheDocument();
  expect(queryByAltText("Salaryman Shodown title")).not.toBeInTheDocument();
});

test("Title renders TitleImage", () => {
  const { container, getByAltText, queryByText } = render(
    <Title showImg={true} />
  );

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByAltText("Salaryman Shodown title")).toBeInTheDocument();
  expect(queryByText("Salaryman Shodown")).not.toBeInTheDocument();
});
