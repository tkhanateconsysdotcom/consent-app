import React from "react";
import { create } from "react-test-renderer";

import MyPreferencesScreen from "../MyPreferencesScreen";

// jest.unmock("../");

it("MyPreferencesScreen renders correctly", () => {
  const tree = create(<MyPreferencesScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
