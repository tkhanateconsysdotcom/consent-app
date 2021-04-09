import {
  FoodEnum,
  TransportEnum,
  StreamingEnum,
  ElectricityEnum,
  streaming,
  food,
  transport,
  electricity,
  getInternetUsageCarbonImpact,
} from "carbon-footprint";

import { Partner, PartnerType } from "interfaces";

import calculation from "../";

const partnerFood: Partner = {
  preferences: [],
  id: "123",
  creationDate: "2020-01-26T11:04:55.334Z",
  partnerModelType: FoodEnum.beans,
  partnerType: PartnerType.romantic,
  isMitigated: false,
  value: 10,
};

const partnerFoodRecent = {
  ...partnerFood,
  creationDate: "2020-03-27T11:04:55.334Z",
};

const partnerTransport = {
  ...partnerFood,
  partnerModelType: TransportEnum.boat,
  partnerType: PartnerType.longterm,
};

const partnerStreaming = {
  ...partnerFood,
  partnerModelType: StreamingEnum.HDVideo,
  partnerType: PartnerType.platonic,
  location: ElectricityEnum.argentina,
};

const partnerElectricity = {
  ...partnerFood,
  partnerModelType: ElectricityEnum.france,
  partnerType: PartnerType.onenight,
};

const partnerCustom = {
  ...partnerFood,
  partnerModelType: "custom",
  partnerType: PartnerType.custom,
};

describe("getC02ValueFromPartner should return the correct co2 emitted value for", () => {
  it("food partner", () => {
    expect(calculation.getC02ValueFromPartner(partnerFood)).toEqual(
      food.beans * partnerFood.value
    );
  });
  it("transport partner", () => {
    expect(calculation.getC02ValueFromPartner(partnerTransport)).toEqual(
      transport.boat * partnerTransport.value
    );
  });
  it("streaming partner", () => {
    expect(calculation.getC02ValueFromPartner(partnerStreaming)).toEqual(
      getInternetUsageCarbonImpact(
        partnerStreaming.value,
        streaming[partnerStreaming.partnerModelType] * partnerStreaming.value,
        partnerStreaming.location
      )
    );
  });
  it("electricity partner", () => {
    expect(calculation.getC02ValueFromPartner(partnerElectricity)).toEqual(
      partnerElectricity.value *
        electricity[partnerElectricity.partnerModelType]
    );
  });
  it("custom partner", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    expect(calculation.getC02ValueFromPartner(partnerCustom)).toEqual(
      partnerCustom.value
    );
  });
});

describe("getFlightType should return the correct flight type for", () => {
  it("a short flight", () => {
    expect(calculation.getFlightType(60)).toEqual(
      TransportEnum.shortHaulFlight
    );
  });
  it("a medium flight", () => {
    expect(calculation.getFlightType(4 * 60)).toEqual(
      TransportEnum.mediumHaulFlight
    );
  });
  it("a long flight", () => {
    expect(calculation.getFlightType(8 * 60)).toEqual(
      TransportEnum.longHaulFlight
    );
  });
});

describe("getFlightPartnerValue should return the correct partner value for", () => {
  it("a short flight", () => {
    expect(calculation.getFlightPartnerValue(60)).toEqual(
      (((588 * 1000) / (60 + 15) + (1543 * 1000) / (2 * 60 + 35)) / 2) * 60
    );
  });
  it("a medium flight", () => {
    expect(calculation.getFlightPartnerValue(4 * 60)).toEqual(
      (((2255 * 1000) / (3 * 60 + 25) + (4205 * 1000) / (5 * 60 + 45)) / 2) *
        4 *
        60
    );
  });
  it("a long flight", () => {
    expect(calculation.getFlightPartnerValue(8 * 60)).toEqual(
      (((5837 * 1000) / (8 * 60 + 15) + (11648 * 1000) / (14 * 60 + 30)) / 2) *
        8 *
        60
    );
  });
});

describe("getLatestPartner should return the latest partner emitted", () => {
  it("if no partners", () => {
    expect(calculation.getLatestPartner(null)).toEqual(null);
  });

  it("if no partner", () => {
    expect(calculation.getLatestPartner([])).toEqual(null);
  });

  it("if one partner, return this partner", () => {
    expect(calculation.getLatestPartner([partnerFood])).toEqual(partnerFood);
  });

  it("if several partners, return the most recent partner", () => {
    expect(
      calculation.getLatestPartner([partnerFood, partnerFoodRecent])
    ).toEqual(partnerFoodRecent);
  });
});

describe("getAcceptanceIntensityInGramPerKWHromKgPerJoules should convert data from kgCO2/J to gCO2/kWh", () => {
  it("if no partners", () => {
    expect(
      calculation.getAcceptanceIntensityInGramPerKWHromKgPerJoules(
        electricity.france
      )
    ).toEqual(31);
  });
});
