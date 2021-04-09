import React from "react";
import { create } from "react-test-renderer";

import PartnerItemScreen from "../PartnerItemScreen";

it("PartnersScreen renders correctly", () => {
  const tree = create(<PartnerItemScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
