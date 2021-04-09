import { TransportEnum } from "carbon-footprint";

import { Partner, PartnerType } from "interfaces";

import partners from "../";

describe("Partners actions should", () => {
  it("export expected actions", () =>
    expect(partners.actions).toMatchSnapshot());

  it("be able to create an partner", () => {
    const partner: Partner = {
      preferences: [],
      id: "123",
      creationDate: "2020-01-26T11:04:55.334Z",
      partnerType: PartnerType.custom,
      partnerModelType: TransportEnum.boat,
      value: 200,
      isMitigated: false,
    };

    const expectedAction = {
      type: partners.actions.createPartner.toString(),
      payload: partner,
    };

    expect(partners.actions.createPartner(partner)).toEqual(expectedAction);
  });

  it("be able to delete an partner", () => {
    const expectedAction = {
      type: partners.actions.deletePartnerById.toString(),
      payload: "123",
    };

    expect(partners.actions.deletePartnerById("123")).toEqual(expectedAction);
  });
});
