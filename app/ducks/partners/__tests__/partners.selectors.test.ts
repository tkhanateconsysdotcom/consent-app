import {
  FoodEnum,
  TransportEnum,
  StreamingEnum,
  ElectricityEnum,
} from "carbon-footprint";

import { Partner, PartnerType } from "interfaces";

import partners from "../";

let state;

const partnerFood: Partner = {
  preferences: [],
  id: "1",
  creationDate: "2020-01-26T11:04:55.334Z",
  partnerModelType: FoodEnum.redMeat,
  partnerType: PartnerType.romantic,
  isMitigated: false,
  value: 10,
};

const partnerTransport: Partner = {
  preferences: [],
  id: "2",
  creationDate: "2020-01-26T11:04:55.334Z",
  partnerModelType: TransportEnum.bus,
  partnerType: PartnerType.longterm,
  isMitigated: false,
  value: 13,
};

const partnerCustom: Partner = {
  preferences: [],
  id: "3",
  creationDate: "2020-01-26T11:04:55.334Z",
  partnerModelType: "custom",
  partnerType: PartnerType.custom,
  isMitigated: false,
  value: 100,
};

const partnerStreaming: Partner = {
  preferences: [],
  id: "4",
  creationDate: "2020-01-26T11:04:55.334Z",
  partnerModelType: StreamingEnum.HDVideo,
  partnerType: PartnerType.platonic,
  isMitigated: false,
  value: 23.32,
};

const partnerElectricity: Partner = {
  preferences: [],
  id: "4",
  creationDate: "2020-01-26T11:04:55.334Z",
  partnerModelType: ElectricityEnum.france,
  partnerType: PartnerType.onenight,
  isMitigated: false,
  value: 1000,
};

const partnerMitigated: Partner = {
  ...partnerFood,
  id: "5",
  isMitigated: true,
};

describe("if there are partners", () => {
  beforeEach(() => {
    state = {
      [partners.namespace]: [
        partnerMitigated,
        partnerFood,
        partnerCustom,
        partnerTransport,
        partnerStreaming,
        partnerElectricity,
      ],
    };
  });

  test("`getPartnerById` should return no partner", () =>
    expect(partners.selectors.getPartnerById(state, "1")).toEqual(partnerFood));

  test("`getPartnersMitigated` should return mitigated partners", () =>
    expect(partners.selectors.getPartnersMitigated(state)).toEqual([
      partnerMitigated,
    ]));

  test("`getPartnersToMitigate` should return mitigated partners", () =>
    expect(partners.selectors.getPartnersToMitigate(state)).toEqual([
      partnerFood,
      partnerCustom,
      partnerTransport,
      partnerStreaming,
      partnerElectricity,
    ]));

  test("`getCustomPartners` should return custom partners", () =>
    expect(partners.selectors.getCustomPartners(state)).toEqual([
      partnerCustom,
    ]));

  test("`getFoodPartners` should return food partners", () =>
    expect(partners.selectors.getFoodPartners(state)).toEqual([
      partnerMitigated,
      partnerFood,
    ]));

  test("`getTransportPartners` should return transport partners", () =>
    expect(partners.selectors.getTransportPartners(state)).toEqual([
      partnerTransport,
    ]));

  test("`getStreamingPartners` should return streaming partners", () =>
    expect(partners.selectors.getStreamingPartners(state)).toEqual([
      partnerStreaming,
    ]));

  test("`getElectricityPartners` should return electricity partners", () =>
    expect(partners.selectors.getElectricityPartners(state)).toEqual([
      partnerElectricity,
    ]));

  test("`getOtherPartners` should return streaming and custom partners", () =>
    expect(partners.selectors.getOtherPartners(state)).toEqual([
      partnerCustom,
      partnerStreaming,
      partnerElectricity,
    ]));
});

describe("if there are no partners", () => {
  beforeEach(() => {
    state = {
      [partners.namespace]: [],
    };
  });

  test("`getPartnerById` should return no partner", () =>
    expect(partners.selectors.getPartnerById(state, "1")).toEqual(undefined));

  test("`getPartnersMitigated` should return mitigated no partner", () =>
    expect(partners.selectors.getPartnersMitigated(state)).toEqual([]));

  test("`getPartnersToMitigate` should return mitigated no partner", () =>
    expect(partners.selectors.getPartnersToMitigate(state)).toEqual([]));

  test("`getCustomPartners` should return mitigated no partner", () =>
    expect(partners.selectors.getCustomPartners(state)).toEqual([]));

  test("`getFoodPartners` should return mitigated no partner", () =>
    expect(partners.selectors.getFoodPartners(state)).toEqual([]));

  test("`getTransportPartners` should return mitigated no partner", () =>
    expect(partners.selectors.getTransportPartners(state)).toEqual([]));

  test("`getStreamingPartners` should return mitigated no partner", () =>
    expect(partners.selectors.getStreamingPartners(state)).toEqual([]));

  test("`getElectricityPartners` should return mitigated no partner", () =>
    expect(partners.selectors.getElectricityPartners(state)).toEqual([]));
});
