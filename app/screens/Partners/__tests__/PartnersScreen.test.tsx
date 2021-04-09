import React from "react";
import { create } from "react-test-renderer";

import PartnersScreen from "../PartnersScreen";

it("PartnersScreen renders correctly", () => {
  const tree = create(<PartnersScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
