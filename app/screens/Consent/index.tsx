import React from "react";
import { useSelector } from "react-redux";

import { NoPartner, NoPreference } from "components";
import { partners, userPreferences } from "ducks";

import ConsentScreen from "./ConsentScreen";
import navigationOptions from "./ConsentScreen.navigationOptions";

interface Props {
  navigation: {
    push: (screen: string) => void;
    navigate: (screen: string) => void;
  };
}

const Consent = ({ navigation }: Props) => {
  const partnersToMitigate = useSelector(
    partners.selectors.getPartnersToMitigate
  );
  const partnersMitigated = useSelector(
    partners.selectors.getPartnersMitigated
  );
  const preferences = useSelector(userPreferences.selectors.getPreference);

  console.log(preferences);
  if (preferences.length == 0) {
    return <NoPreference />;
  }
  if (partnersToMitigate.length || partnersMitigated.length) {
    return <ConsentScreen navigation={navigation} />;
  }

  return <NoPartner />;
};

Consent.navigationOptions = navigationOptions;

export default Consent;
