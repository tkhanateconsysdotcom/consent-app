import { FoodEnum } from "carbon-footprint";

import { Partner, PartnerType } from "interfaces";

import partners from "../";

describe("Partners reducer should", () => {
  it("return the initial state", () => {
    // TODO: fix eslint complains bellow
    // eslint-disable-next-line
    expect(partners.reducer(undefined, {} as any)).toEqual([]);
  });

  it("handle partner creation", () => {
    const partner: Partner = {
      preferences: [],
      id: "123",
      creationDate: "2020-01-26T11:04:55.334Z",
      partnerType: PartnerType.custom,
      partnerModelType: FoodEnum.nuts,
      value: 200,
      isMitigated: false,
    };
    const action = {
      type: partners.actions.createPartner.toString(),
      payload: partner,
    };

    expect(partners.reducer(undefined, action)).toEqual([partner]);

    expect(partners.reducer([partner], action)).toEqual([partner, partner]);
  });

  it("handle partner delete", () => {
    const partner: Partner = {
      preferences: [],
      id: "123",
      creationDate: "2020-01-26T11:04:55.334Z",
      partnerType: PartnerType.custom,
      partnerModelType: FoodEnum.nuts,
      value: 200,
      isMitigated: false,
    };
    const action = {
      type: partners.actions.deletePartnerById.toString(),
      payload: partner.id,
    };

    expect(partners.reducer([partner], action)).toEqual([]);
  });
});
