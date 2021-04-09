import { pipe, propOr, includes, filter, isEmpty, not } from "ramda";
import moment from "moment";
import { FoodEnum } from "carbon-footprint";

import { partners } from "ducks";
import { calculation } from "utils";

const meatArray = [
  FoodEnum.beef,
  FoodEnum.chicken,
  FoodEnum.fish,
  FoodEnum.lamb,
  FoodEnum.pork,
  FoodEnum.redMeat,
  FoodEnum.tuna,
  FoodEnum.turkey,
  FoodEnum.whiteMeat,
];

const isMeatPartner = (partner) =>
  includes(partner.partnerModelType, meatArray);

const getCreationDate = propOr(moment().utc().toISOString(), "creationDate");
const getDaysElapsedSinceToday = (date) => moment().diff(date, "days");

const getFoodPartners = partners.selectors.getFoodPartners;
const getMeatPartners = pipe(getFoodPartners, filter(isMeatPartner));
const isAnyMeatPartnerSaved = pipe(getMeatPartners, isEmpty, not);

const getLatestPartner = calculation.getLatestPartner;
const getDaysSincePartner = (partner) =>
  pipe(getCreationDate, moment, getDaysElapsedSinceToday)(partner);

const getDaysWithoutEatingMeat = (state) =>
  pipe(getMeatPartners, getLatestPartner, getDaysSincePartner)(state);

export default {
  isAnyMeatPartnerSaved,
  getDaysWithoutEatingMeat,
};
