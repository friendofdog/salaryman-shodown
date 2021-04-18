import React from "react";
import { render } from "@testing-library/react";
import Stats from "./Stats";
import { Salaryman } from "../../../classes";

test("Stats renders Table", () => {
  const mockSalaryman = new Salaryman("A", "B", "C", "player1");

  const { container, getByText } = render(
    <Stats player={mockSalaryman} redistribute={false} redistInit={false} />
  );

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByText("職業訓練歴")).toBeInTheDocument();
});

test("Stats shows player points", () => {
  const mockSalaryman = new Salaryman("A", "B", "C", "player1");

  const { getByText } = render(
    <Stats player={mockSalaryman} redistribute={false} redistInit={false} />
  );

  expect(getByText("10")).toBeInTheDocument();
});

test("Stats Input on redistribute true, redistInit false, points 10", () => {
  const mockSalaryman = new Salaryman("A", "B", "C", "player1");

  const { getByLabelText } = render(
    <Stats player={mockSalaryman} redistribute={true} redistInit={false} />
  );
  const input = getByLabelText("conformity");

  expect(input.id).toBe("conformity");
  expect(input.min).toBe("5");
  expect(input.max).toBe("10");
  expect(input.defaultValue).toBe("5");
  expect(input.disabled).toBe(false);
});

test("Stats Input on redistribute true, redistInit false, points 0", () => {
  const mockSalaryman = new Salaryman("A", "B", "C", "player1");
  mockSalaryman.points = 0;

  const { getByLabelText } = render(
    <Stats player={mockSalaryman} redistribute={true} redistInit={false} />
  );
  const input = getByLabelText("conformity");

  expect(input.id).toBe("conformity");
  expect(input.min).toBe("1");
  expect(input.max).toBe("5");
  expect(input.defaultValue).toBe("5");
  expect(input.disabled).toBe(true);
});

test("Stats Input on redistribute true, redistInit false, points 0", () => {
  const mockSalaryman = new Salaryman("A", "B", "C", "player1");
  mockSalaryman.points = 0;

  const { getByLabelText } = render(
    <Stats player={mockSalaryman} redistribute={true} redistInit={true} />
  );
  const input = getByLabelText("conformity");

  expect(input.id).toBe("conformity");
  expect(input.min).toBe("1");
  expect(input.max).toBe("5");
  expect(input.defaultValue).toBe("5");
  expect(input.disabled).toBe(false);
});

test("Stats Input on redistribute false, redistInit false, points 0", () => {
  // redistInit is irrelevant in this test, omitting
  const mockSalaryman = new Salaryman("A", "B", "C", "player1");
  mockSalaryman.points = 0;

  const { getByLabelText } = render(
    <Stats player={mockSalaryman} redistribute={false} />
  );
  const input = getByLabelText("conformity");

  expect(input.id).toBe("conformity");
  expect(input.min).toBe("1");
  expect(input.max).toBe("5");
  expect(input.defaultValue).toBe("5");
  expect(input.disabled).toBe(false);
});
