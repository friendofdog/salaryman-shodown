import React from "react";
import { render } from "@testing-library/react";
import Stats from "./Stats";
import { Salaryman } from "../../../classes";

test("PointDist renders Personal on game creation", () => {
  const mockSalaryman = new Salaryman("A", "B", "C", "player1");

  const { container, getByText } = render(
    <Stats player={mockSalaryman} redistribute={false} redistInit={false} />
  );

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByText("conformity")).toBeInTheDocument();
});
