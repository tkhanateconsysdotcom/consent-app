import React from "react";
import { create } from "react-test-renderer";

import ProgressChart from "../ProgressChart";

jest.unmock("../ProgressChart");

const props = {
  totalPartners: 900,
  foodPartners: 200,
  transportPartners: 600,
  otherPartners: 100,
  monthlyPartnersConsent: 1000,
};

it("ProgressChart renders correctly", () => {
  const tree = create(<ProgressChart {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("ProgressChart should not render if monthlyPartnersConsent equals 0", () => {
  const tree = create(
    <ProgressChart {...props} monthlyPartnersConsent={0} />
  ).toJSON();
  expect(tree).toBeNull();
});
