import React from "react";
import { render } from "@testing-library/react";

import Player from "./Player";
import { Salaryman } from "../../classes";

test("Player renders player name and stat points", () => {
  const mockSalaryman = new Salaryman("Some Guy", "B", "C", "player1");
  const { container, getByText, queryByText } = render(
    <Player player={mockSalaryman} user={"player1"} />
  );

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByText("Some Guy")).toBeInTheDocument;
  expect(queryByText("??")).not.toBeInTheDocument;
});

test("Player hides opponent stat points", () => {
  const mockSalaryman = new Salaryman("A", "B", "C", "player1");
  const { getAllByText } = render(
    <Player player={mockSalaryman} user={"player2"} />
  );

  expect(getAllByText("??")).toBeInTheDocument;
});
