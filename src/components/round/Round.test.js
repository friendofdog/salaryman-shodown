import React from "react";
import { render } from "@testing-library/react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Round from "./Round";
import { Salaryman } from "../../classes";

Enzyme.configure({ adapter: new Adapter() });

test("Round renders round start image if no winner", () => {
  const { container, getByAltText } = render(
    <Round handleRound={() => {}} round={"conformity"} winner={false} />
  );

  expect(getByAltText("Start a round")).toBeInTheDocument;
  expect(container).toBeInstanceOf(HTMLDivElement);
});

test("Round renders stat and winner if winner", () => {
  const mockSalaryman = new Salaryman("A", "B", "C", "player1");
  const { container, getByText } = render(
    <Round handleRound={() => {}} round={"conformity"} winner={mockSalaryman} />
  );

  expect(getByText("conformity")).toBeInTheDocument;
  expect(getByText("A wins the round!")).toBeInTheDocument;
  expect(container).toBeInstanceOf(HTMLDivElement);
});

test("Round renders only draw if draw", () => {
  const { container, getByText } = render(
    <Round handleRound={() => {}} round={"conformity"} winner={false} />
  );

  expect(getByText("Draw!")).toBeInTheDocument;
  expect(container).toBeInstanceOf(HTMLDivElement);
});

test("Round callback fires on image click", () => {
  const mockHandleRound = jest.fn();
  const component = mount(
    <Round handleRound={mockHandleRound} round={"conformity"} winner={false} />
  );
  component.find("img").simulate("click", { mockHandleRound });

  expect(mockHandleRound).toBeCalled();
});
