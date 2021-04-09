import { pipe, filter, map, sum } from "ramda";
import moment from "moment";

import { consent, partners } from "ducks";
import { calculation } from "utils";

const isPartnerInCurrentMonth = (partner) =>
  moment(partner.creationDate).isSame(new Date(), "month") &&
  moment(partner.creationDate).isSame(new Date(), "year");
const isPartnerInCurrentYear = (partner) =>
  moment(partner.creationDate).isSame(new Date(), "year");

const getAcceptanceValue = pipe(
  map(calculation.getC02ValueFromPartner),
  sum,
  Math.round
);

const getCurrentMonthPartners = filter(isPartnerInCurrentMonth);

const getCurrentMonthTransportAcceptanceValue = pipe(
  partners.selectors.getTransportPartners,
  getCurrentMonthPartners,
  getAcceptanceValue
);
const getCurrentMonthFoodAcceptanceValue = pipe(
  partners.selectors.getFoodPartners,
  getCurrentMonthPartners,
  getAcceptanceValue
);
const getCurrentMonthOtherAcceptanceValue = pipe(
  partners.selectors.getOtherPartners,
  getCurrentMonthPartners,
  getAcceptanceValue
);

const getCurrentYearPartners = filter(isPartnerInCurrentYear);

const getCurrentYearTransportAcceptanceValue = pipe(
  partners.selectors.getTransportPartners,
  getCurrentYearPartners,
  getAcceptanceValue
);
const getCurrentYearFoodAcceptanceValue = pipe(
  partners.selectors.getFoodPartners,
  getCurrentYearPartners,
  getAcceptanceValue
);
const getCurrentYearOtherAcceptanceValue = pipe(
  partners.selectors.getOtherPartners,
  getCurrentYearPartners,
  getAcceptanceValue
);

const getCurrentMonthAllAcceptanceValue = (state) =>
  getCurrentMonthTransportAcceptanceValue(state) +
  getCurrentMonthFoodAcceptanceValue(state) +
  getCurrentMonthOtherAcceptanceValue(state);

const getCurrentYearAllAcceptanceValue = (state) =>
  getCurrentYearTransportAcceptanceValue(state) +
  getCurrentYearFoodAcceptanceValue(state) +
  getCurrentYearOtherAcceptanceValue(state);

export default {
  getMonthlyAcceptanceConsent: consent.selectors.getMonthlyAcceptanceConsent,
  getCurrentMonthTransportAcceptanceValue,
  getCurrentMonthFoodAcceptanceValue,
  getCurrentMonthOtherAcceptanceValue,
  getCurrentMonthAllAcceptanceValue,
  getCurrentYearTransportAcceptanceValue,
  getCurrentYearFoodAcceptanceValue,
  getCurrentYearOtherAcceptanceValue,
  getCurrentYearAllAcceptanceValue,
};
