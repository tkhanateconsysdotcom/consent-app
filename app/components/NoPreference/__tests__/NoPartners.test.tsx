import React from "react";
import { create } from "react-test-renderer";

import NoPreference from "../";

jest.unmock("../");

it("renders correctly NoPreference", () => {
  const tree = create(<NoPreference />).toJSON();
  expect(tree).toMatchSnapshot();
});
