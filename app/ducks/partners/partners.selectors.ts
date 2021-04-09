import { filter, propEq, find, pathOr, pipe } from "ramda";

import { PartnerType } from "interfaces";

import { namespace } from "./partners.slice";

const getAllPartners = pathOr([], [namespace]);

const getPartnerById = (state, id: string) =>
  find(propEq("id", id))(state[namespace]);

const getPartnersToMitigate = (state) =>
  pipe(getAllPartners, filter(propEq("isMitigated", false)))(state);

const getPartnersMitigated = (state) =>
  pipe(getAllPartners, filter(propEq("isMitigated", true)))(state);

const isTransportPartner = (partner) =>
  partner.partnerType === PartnerType.longterm;

const isFoodPartner = (partner) => partner.partnerType === PartnerType.romantic;

const isStreamingPartner = (partner) =>
  partner.partnerType === PartnerType.platonic;

const isElectricityPartner = (partner) =>
  partner.partnerType === PartnerType.onenight;

const isCustomPartner = (partner) => partner.partnerType === PartnerType.custom;

const isOtherPartner = (partner) =>
  partner.partnerType === PartnerType.custom ||
  partner.partnerType === PartnerType.platonic ||
  partner.partnerType === PartnerType.onenight;

const getTransportPartners = pipe(getAllPartners, filter(isTransportPartner));

const getFoodPartners = pipe(getAllPartners, filter(isFoodPartner));

const getStreamingPartners = pipe(getAllPartners, filter(isStreamingPartner));

const getElectricityPartners = pipe(
  getAllPartners,
  filter(isElectricityPartner)
);

const getCustomPartners = pipe(getAllPartners, filter(isCustomPartner));

const getOtherPartners = pipe(getAllPartners, filter(isOtherPartner));

export default {
  getAllPartners,
  getTransportPartners,
  getFoodPartners,
  getStreamingPartners,
  getElectricityPartners,
  getCustomPartners,
  getOtherPartners,
  getPartnerById,
  getPartnersToMitigate,
  getPartnersMitigated,
};
