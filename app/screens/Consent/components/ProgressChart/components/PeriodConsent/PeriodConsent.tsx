import React from "react";
import { View } from "react-native";

import { Text } from "components";
import { t } from "utils";

import styles from "./PeriodConsent.styles";

interface Prop {
  period: string;
  periodPartnersConsent: number;
}

const PeriodConsent = ({ periodPartnersConsent = 0, period = "" }: Prop) => {
  let consent = periodPartnersConsent.toString();
  let units = " kg";
  if (periodPartnersConsent > 999) {
    consent = (periodPartnersConsent / 1000).toFixed(2);
    units = " ton(s)";
  }

  return (
    <View style={styles.container}>
      <Text.Secondary bold center>
        {t("CONSENT_SCREEN_PROGRESS_CHART_LEGEND_PERIOD_CONSENT")}
        {period}
        {" : "}
        <Text.Secondary lightGray center>
          {consent + units}
        </Text.Secondary>
      </Text.Secondary>
    </View>
  );
};

export default PeriodConsent;
