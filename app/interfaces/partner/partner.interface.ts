import {
  ElectricityEnum,
  FoodEnum,
  StreamingEnum,
  TransportEnum,
} from "carbon-footprint";

enum PartnerType {
  romantic = "romantic",
  longterm = "longterm",
  shortterm = "shortterm",
  platonic = "platonic",
  onenight = "onenight",
  custom = "custom",
}

type PartnerModel =
  | FoodEnum
  | TransportEnum
  | StreamingEnum
  | ElectricityEnum
  | "custom";

interface PartnerPayload {
  name?: string;
  partnerType: PartnerType;
  partnerModelType: PartnerModel;
  value: number;
  creationDate: string;
  location?: ElectricityEnum;
}

interface Partner extends PartnerPayload {
  id: string;
  isMitigated: boolean;
  preferences: Preference[];
}

interface Preference {
  preference: string;
  id: string;
  isMitigated: boolean;
}

export { Partner, PartnerPayload, PartnerType, PartnerModel, Preference };
