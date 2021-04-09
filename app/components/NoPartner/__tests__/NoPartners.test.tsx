import React from "react";
import { create } from "react-test-renderer";

import NoPartner from "../";

jest.unmock("../");

it("renders correctly NoPartner", () => {
  const tree = create(<NoPartner />).toJSON();
  expect(tree).toMatchSnapshot();
});
