import React from "react";
import { render } from "@testing-library/react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import PointDist from "./PointDist";
import { Salaryman } from "../../classes";

Enzyme.configure({ adapter: new Adapter() });

const initSalaryman = new Salaryman();
const mockSalaryman = new Salaryman("A", "B", "C", "player1");
const mockChangeCallback = jest.fn();
const mockSubmitCallback = jest.fn();

test("PointDist renders Form for point distribution", () => {
  const { container, getByText } = render(
    <PointDist
      creation={true}
      player={mockSalaryman}
      onChange={mockChangeCallback()}
      onSubmit={mockSubmitCallback()}
      redistribute={false}
      redistCountdown={-1}
      redistInit={false}
      winner={initSalaryman}
      user={"player1"}
    />
  );

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByText("履歴書")).toBeInTheDocument();
  expect(getByText("職業訓練歴")).toBeInTheDocument();
});

test("PointDist passes callbacks to Form", () => {
  const component = mount(
    <PointDist
      creation={true}
      player={mockSalaryman}
      onChange={mockChangeCallback()}
      onSubmit={mockSubmitCallback()}
      redistribute={false}
      redistCountdown={-1}
      redistInit={false}
      winner={initSalaryman}
      user={"player1"}
    />
  );

  component.find("form").simulate("change", { mockChangeCallback });
  component.find("form").simulate("submit", { mockSubmitCallback });

  expect(mockSubmitCallback).toBeCalled();
  expect(mockChangeCallback).toBeCalled();
});

test("PointDist renders Wait if player won round", () => {
  const { container, queryByText, getByAltText } = render(
    <PointDist
      creation={false}
      player={mockSalaryman}
      onChange={mockChangeCallback()}
      onSubmit={mockSubmitCallback()}
      redistribute={false}
      redistCountdown={-1}
      redistInit={false}
      winner={mockSalaryman}
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
      onChange={mockChangeCallback()}
      onSubmit={mockSubmitCallback()}
      redistribute={false}
      redistCountdown={-1}
      redistInit={false}
      winner={initSalaryman}
      user={"player1"}
    />
  );

  expect(container).toBeInstanceOf(HTMLDivElement);
  expect(getByText("Redistribute a point?")).toBeInTheDocument();
  expect(getByText("職業訓練歴")).toBeInTheDocument();
});
