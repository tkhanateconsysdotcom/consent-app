import { pathOr } from "ramda";

import { namespace } from "./consent.slice";

const getMonthlyAcceptanceConsent = (state) =>
  pathOr(0, [namespace, "monthlyAcceptanceConsent"], state);

export default {
  getMonthlyAcceptanceConsent,
};
