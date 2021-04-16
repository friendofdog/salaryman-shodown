import React from "react";
import { render } from "@testing-library/react";
import PointDist from "./PointDist.js";
import { Salaryman } from "../../classes";

const mockSalaryman = new Salaryman("A", "B", "C", "player1");

test("PointDist renders Personal on game creation", () => {
  const { container, getByText } = render(
    <PointDist
      creation={true}
      player={mockSalaryman}
      onChange={() => {}}
      onSubmit={() => {}}
      redistribute={false}
      redistCountdown={-1}
      redistInit={false}
      winner={{}}
      user={"player1"}
    />
  );

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByText("履歴書")).toBeInTheDocument();
  expect(getByText("職業訓練歴")).toBeInTheDocument();
});

test("PointDist renders Wait if player won round", () => {
  const { container, queryByText, getByAltText } = render(
    <PointDist
      creation={false}
      player={mockSalaryman}
      onChange={() => {}}
      onSubmit={() => {}}
      redistribute={false}
      redistCountdown={-1}
      redistInit={false}
      winner={{ id: "player1" }}
      user={"player1"}
    />
  );

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByAltText("Chotto matte...")).toBeInTheDocument();
  expect(queryByText("職業訓練歴")).not.toBeInTheDocument();
});

test("PointDist renders Redistribute if player won round", () => {
  const { container, getByText } = render(
    <PointDist
      creation={false}
      player={mockSalaryman}
      onChange={() => {}}
      onSubmit={() => {}}
      redistribute={false}
      redistCountdown={-1}
      redistInit={false}
      winner={{}}
      user={"player1"}
    />
  );

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByText("Redistribute a point?")).toBeInTheDocument();
  expect(getByText("職業訓練歴")).toBeInTheDocument();
});
