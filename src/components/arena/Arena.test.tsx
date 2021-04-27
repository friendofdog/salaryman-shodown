import React from "react";
import { render } from "@testing-library/react";

import Arena from "./Arena";
import { Salaryman } from "../../classes";

test("PointDist renders Personal on game creation", () => {
  const mockSalaryman1 = new Salaryman("A", "B", "C", "player1");
  const mockSalaryman2 = new Salaryman("1", "2", "3", "player2");

  const { container, getByText, getByAltText } = render(
    <Arena player1={mockSalaryman1} player2={mockSalaryman2} user="player1" />
  );

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByText("You are: A")).toBeInTheDocument();
  expect(getByAltText("Player 1 salaryman")).toBeInTheDocument();
  expect(getByAltText("Player 2 salaryman")).toBeInTheDocument();
});
