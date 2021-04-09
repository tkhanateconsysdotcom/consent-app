import { map, pipe, groupBy, toPairs, sum } from "ramda";
import moment from "moment";

import { partners } from "ducks";
import { Partner } from "interfaces";
import { calculation, ui } from "utils";

interface PartnerListItem extends Partner {
  title: string;
  co2value: number;
  iconName: string;
  creationDate: string;
  onPress: () => void;
}

const getPartnerListItem = (item: Partner) => {
  const partnerItem: PartnerListItem = {
    ...item,
    title: ui.getTranslationModelType(item.partnerModelType),
    co2value: calculation.getC02ValueFromPartner(item),
    iconName: ui.getIconFromModelType(item.partnerModelType),
    onPress: () => {
      // do nothing.
    },
  };

  return partnerItem;
};

const getStartOfMonth = (time) => moment(time).startOf("month").format();

const groupByMonth = groupBy((item: PartnerListItem) =>
  getStartOfMonth(item.creationDate)
);

const dateObjMap = map(([date, data, co2value]) => ({
  date: date,
  data: data,
  co2value: co2value,
}));

/* moment().utc().toISOString() gives "YYYY-MM-DDTHH:mm:ss.sssZ" */
const filterByMostRecent = (array: [PartnerListItem]) =>
  array.sort((a, b) => +new Date(b.creationDate) - +new Date(a.creationDate));

const getMonthlyPourcentage = (items) =>
  map(
    (item) => [...item, sum(map((partner) => partner.co2value, item[1]))],
    items
  );

const getPartners = (state) =>
  pipe(
    partners.selectors.getAllPartners,
    map(getPartnerListItem),
    filterByMostRecent,
    groupByMonth,
    toPairs,
    getMonthlyPourcentage,
    dateObjMap
  )(state);

export default {
  getPartners,
  getPartnerListItem,
};
