import React from "react";
import { useSelector } from "react-redux";

import { NoPartner } from "components";
import { partners } from "ducks";

import PartnersScreen from "./PartnersScreen";
import navigationOptions from "./PartnersScreen.navigationOptions";

const Partners = () => {
  const partnersToMitigate = useSelector(
    partners.selectors.getPartnersToMitigate
  );
  const partnersMitigated = useSelector(
    partners.selectors.getPartnersMitigated
  );

  if (partnersToMitigate.length || partnersMitigated.length) {
    return <PartnersScreen />;
  }

  return <NoPartner />;
};

Partners.navigationOptions = navigationOptions;

export default Partners;
