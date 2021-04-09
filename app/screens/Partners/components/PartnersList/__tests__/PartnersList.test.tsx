import React from "react";
import { create } from "react-test-renderer";
import { FoodEnum, TransportEnum } from "carbon-footprint";

import { partners } from "ducks";
import { Partner, PartnerType } from "interfaces";

import { selectors } from "../../../ducks";
import PartnersList from "../PartnersList";

jest.unmock("../PartnersList");

const partnerNotMitigatedOld: Partner = {
  preferences: [],
  id: "3",
  creationDate: new Date("2020-01-01T12:08:16.623Z").toISOString(),
  partnerModelType: FoodEnum.beans,
  partnerType: PartnerType.romantic,
  isMitigated: false,
  value: 30,
};

const partnerNotMitigated: Partner = {
  preferences: [],
  id: "1",
  creationDate: new Date("2020-03-01T12:08:16.623Z").toISOString(),
  partnerModelType: FoodEnum.beans,
  partnerType: PartnerType.romantic,
  isMitigated: false,
  value: 10,
};

const partnerMitigated: Partner = {
  preferences: [],
  id: "12",
  creationDate: new Date("2020-03-01T12:08:16.623Z").toISOString(),
  partnerModelType: TransportEnum.boat,
  partnerType: PartnerType.longterm,
  isMitigated: true,
  value: 100,
};

const state = {
  [partners.namespace]: [
    partnerNotMitigated,
    partnerMitigated,
    partnerNotMitigatedOld,
  ],
};

const props = {
  partners: selectors.getPartners(state),
  monthlyAcceptanceConsent: 24,
  navigator: {
    push: () => {
      // do nothing.
    },
    navigate: () => {
      // do nothing.
    },
  },
};

it("PartnersList renders correctly", () => {
  const tree = create(<PartnersList {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("PartnersList renders correctly if no partners", () => {
  const tree = create(<PartnersList {...props} partners={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
