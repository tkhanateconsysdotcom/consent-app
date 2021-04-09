import React from "react";
import { create } from "react-test-renderer";

import Chart from "../Chart";

const props = {
  totalPartnersPercentage: 900,
  transportPartnersPercentage: 600,
  foodPartnersPercentage: 200,
};

jest.unmock("../Chart");

it("Chart renders correctly", () => {
  const tree = create(<Chart {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
