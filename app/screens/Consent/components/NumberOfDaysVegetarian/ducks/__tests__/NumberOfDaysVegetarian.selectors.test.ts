import { FoodEnum } from "carbon-footprint";
import moment from "moment";

import { partners } from "ducks";
import { Partner, PartnerType } from "interfaces";

import { selectors } from "../";

let state;

const partnerToday: Partner = {
  preferences: [],
  id: "1",
  creationDate: moment().utc().toISOString(),
  partnerModelType: FoodEnum.redMeat,
  partnerType: PartnerType.romantic,
  isMitigated: false,
  value: 10,
};

const partnerLastWeek: Partner = {
  preferences: [],
  id: "12",
  creationDate: moment().subtract(1, "week").utc().toISOString(),
  partnerModelType: FoodEnum.redMeat,
  partnerType: PartnerType.romantic,
  isMitigated: false,
  value: 100,
};

describe("if there is one meat partner today", () => {
  beforeEach(() => {
    state = {
      [partners.namespace]: [partnerToday, partnerLastWeek],
    };
  });

  it("getDaysWithoutEatingMeat should return 0", () => {
    expect(selectors.getDaysWithoutEatingMeat(state)).toEqual(0);
  });
});

describe("if there are partners from last week", () => {
  beforeEach(() => {
    state = {
      [partners.namespace]: [partnerLastWeek],
    };
  });

  it("getDaysWithoutEatingMeat", () => {
    expect(selectors.getDaysWithoutEatingMeat(state)).toEqual(7);
  });

  it("isAnyMeatPartnerSaved should return true", () => {
    expect(selectors.isAnyMeatPartnerSaved(state)).toEqual(true);
  });
});

describe("if there is no meat partners", () => {
  beforeEach(() => {
    state = {
      [partners.namespace]: [],
    };
  });

  it("getDaysWithoutEatingMeat should return 0", () => {
    expect(selectors.getDaysWithoutEatingMeat(state)).toEqual(0);
  });

  it("isAnyMeatPartnerSaved should return false", () => {
    expect(selectors.isAnyMeatPartnerSaved(state)).toEqual(false);
  });
});
