import { FoodEnum, TransportEnum } from "carbon-footprint";
import moment from "moment";

import { partners } from "ducks";
import { Partner, PartnerType } from "interfaces";
import { calculation } from "utils";

import { selectors } from "../";

let state;

const christmas = moment("2020-12-24T03:24:00");
const monthsAgo = moment().subtract(2, "month");

/* TODO: remove this function copied from selectors file */
const getStartOfMonth = (time) => moment(time).startOf("month").format();

const partnerNotMitigatedOld: Partner = {
  preferences: [],
  id: "3",
  creationDate: monthsAgo.toISOString(),
  partnerModelType: FoodEnum.beans,
  partnerType: PartnerType.romantic,
  isMitigated: false,
  value: 30,
};

const partnerNotMitigated: Partner = {
  preferences: [],
  id: "1",
  creationDate: christmas.toISOString(),
  partnerModelType: FoodEnum.beans,
  partnerType: PartnerType.romantic,
  isMitigated: false,
  value: 10,
};

const partnerMitigated: Partner = {
  preferences: [],
  id: "12",
  creationDate: christmas.toISOString(),
  partnerModelType: TransportEnum.boat,
  partnerType: PartnerType.longterm,
  isMitigated: true,
  value: 100,
};

describe("if there are partners", () => {
  beforeEach(() => {
    state = {
      [partners.namespace]: [
        partnerNotMitigated,
        partnerMitigated,
        partnerNotMitigatedOld,
      ],
    };
  });

  test("`getPartners` should return all partners", () => {
    expect(JSON.stringify(selectors.getPartners(state))).toEqual(
      JSON.stringify([
        {
          date: getStartOfMonth(partnerNotMitigatedOld.creationDate),
          data: [selectors.getPartnerListItem(partnerNotMitigatedOld)],
          co2value: calculation.getC02ValueFromPartner(partnerNotMitigatedOld),
        },
        {
          date: getStartOfMonth(partnerMitigated.creationDate),
          data: [
            selectors.getPartnerListItem(partnerNotMitigated),
            selectors.getPartnerListItem(partnerMitigated),
          ],
          co2value:
            calculation.getC02ValueFromPartner(partnerNotMitigated) +
            calculation.getC02ValueFromPartner(partnerMitigated),
        },
      ])
    );
  });
});

describe("if there are no partners", () => {
  beforeEach(() => {
    state = {
      [partners.namespace]: [],
    };
  });

  test("`getPartners` should return empty array", () =>
    expect(selectors.getPartners(state)).toEqual([]));
});
