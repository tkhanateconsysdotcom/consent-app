import React from "react";
import { create } from "react-test-renderer";

import Legend from "../Legend";

const props = {
  totalPartners: 900,
  foodPartners: 200,
  transportPartners: 600,
  otherPartners: 100,
};

jest.unmock("../Legend");

it("Legend renders correctly", () => {
  const tree = create(<Legend {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
