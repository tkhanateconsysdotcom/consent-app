import React from "react";
import { create } from "react-test-renderer";

import PeriodConsent from "../PeriodConsent";

const props = {
  period: "this month",
  periodPartnersConsent: 760,
};

jest.unmock("../PeriodConsent");

it("PeriodConsent renders correctly", () => {
  const tree = create(<PeriodConsent {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("PeriodConsent renders correctly if tons", () => {
  const tree = create(
    <PeriodConsent periodPartnersConsent={14340} {...props} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
