import React from "react";
import { render } from "@testing-library/react";

import Gameover from "./Gameover";
import { Salaryman } from "../../classes";

test("PointDist renders Personal on game creation", () => {
  const mockSalaryman = new Salaryman("A", "B", "C", "player1");

  const { container, getByText } = render(<Gameover winner={mockSalaryman} />);

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByText("A wins the game!")).toBeInTheDocument();
});
