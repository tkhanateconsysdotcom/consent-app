import { FoodEnum, TransportEnum } from "carbon-footprint";
import moment from "moment";

import { partners } from "ducks";
import { Partner, PartnerType } from "interfaces";
import { calculation } from "utils";

import { selectors } from "../";

let state;

const partnerToday: Partner = {
  preferences: [],
  id: "1",
  creationDate: moment().utc().toISOString(),
  partnerModelType: FoodEnum.beans,
  partnerType: PartnerType.romantic,
  isMitigated: false,
  value: 10,
};

const partnerLastMonth: Partner = {
  preferences: [],
  id: "12",
  creationDate: moment().subtract(1, "month").utc().toISOString(),
  partnerModelType: TransportEnum.boat,
  partnerType: PartnerType.longterm,
  isMitigated: false,
  value: 100,
};

const partnerLastYear: Partner = {
  preferences: [],
  id: "123",
  creationDate: moment().subtract(1, "year").utc().toISOString(),
  partnerModelType: FoodEnum.cheese,
  partnerType: PartnerType.romantic,
  isMitigated: false,
  value: 5,
};

describe("if there are partners", () => {
  beforeEach(() => {
    state = {
      [partners.namespace]: [partnerToday, partnerLastMonth, partnerLastYear],
    };
  });

  test("`getCurrentMonthFoodAcceptanceValue` should return CO2 value from today's partner", () =>
    expect(selectors.getCurrentMonthFoodAcceptanceValue(state)).toEqual(
      calculation.getC02ValueFromPartner(partnerToday)
    ));

  test("`getCurrentMonthAllAcceptanceValue` should return CO2 value from today's partner", () =>
    expect(selectors.getCurrentMonthAllAcceptanceValue(state)).toEqual(
      calculation.getC02ValueFromPartner(partnerToday)
    ));

  test("`getCurrentMonthOtherAcceptanceValue` should return CO2 values from today's partner", () =>
    expect(selectors.getCurrentMonthOtherAcceptanceValue(state)).toEqual(0));

  test("`getCurrentMonthTransportAcceptanceValue` should return CO2 values from today's partner", () =>
    expect(selectors.getCurrentMonthTransportAcceptanceValue(state)).toEqual(
      0
    ));

  test("`getCurrentYearFoodAcceptanceValue` should return CO2 value from today's partner", () =>
    expect(selectors.getCurrentYearFoodAcceptanceValue(state)).toEqual(
      calculation.getC02ValueFromPartner(partnerToday)
    ));

  test("`getCurrentYearAllAcceptanceValue` should return CO2 value from today's partner", () =>
    expect(selectors.getCurrentYearAllAcceptanceValue(state)).toEqual(
      Math.round(calculation.getC02ValueFromPartner(partnerToday)) +
        Math.round(calculation.getC02ValueFromPartner(partnerLastMonth))
    ));

  test("`getCurrentYearOtherAcceptanceValue` should return CO2 values from today's partner", () =>
    expect(selectors.getCurrentYearOtherAcceptanceValue(state)).toEqual(0));

  test("`getCurrentYearTransportAcceptanceValue` should return CO2 values from today's partner", () =>
    expect(selectors.getCurrentYearTransportAcceptanceValue(state)).toEqual(
      Math.round(calculation.getC02ValueFromPartner(partnerLastMonth))
    ));
});

describe("if there are no partners", () => {
  beforeEach(() => {
    state = {
      [partners.namespace]: [],
    };
  });

  test("`getCurrentMonthFoodAcceptanceValue` should return 0", () =>
    expect(selectors.getCurrentMonthFoodAcceptanceValue(state)).toEqual(0));

  test("`getCurrentMonthAllAcceptanceValue` should return 0", () =>
    expect(selectors.getCurrentMonthAllAcceptanceValue(state)).toEqual(0));

  test("`getCurrentMonthOtherAcceptanceValue` should return 0", () =>
    expect(selectors.getCurrentMonthOtherAcceptanceValue(state)).toEqual(0));

  test("`getCurrentMonthTransportAcceptanceValue` should return 0", () =>
    expect(selectors.getCurrentMonthTransportAcceptanceValue(state)).toEqual(
      0
    ));

  test("`getCurrentYearFoodAcceptanceValue` should return 0", () =>
    expect(selectors.getCurrentYearFoodAcceptanceValue(state)).toEqual(0));

  test("`getCurrentYearAllAcceptanceValue` should return 0", () =>
    expect(selectors.getCurrentYearAllAcceptanceValue(state)).toEqual(0));

  test("`getCurrentYearOtherAcceptanceValue` should return 0", () =>
    expect(selectors.getCurrentYearOtherAcceptanceValue(state)).toEqual(0));

  test("`getCurrentYearTransportAcceptanceValue` should return 0", () =>
    expect(selectors.getCurrentYearTransportAcceptanceValue(state)).toEqual(0));
});
