import React from "react";
import { View } from "react-native";
import moment from "moment";

import "moment/min/locales";
import { Text } from "components";
import { withLocalization, LocalizationContextProps, t } from "utils";

import styles from "./SectionHeader.styles";

interface Props {
  date: Date;
  co2value: number;
  monthlyAcceptanceConsent: number;
}

const SectionHeader = ({
  date,
  co2value = 1,
  monthlyAcceptanceConsent = 1,
  language = "",
}: Props & LocalizationContextProps) => {
  let percentageConsent = 1;

  if (monthlyAcceptanceConsent && co2value) {
    percentageConsent = Math.round((co2value / monthlyAcceptanceConsent) * 100);
    if (percentageConsent < 1) {
      percentageConsent = 1;
    }
  }

  return (
    <View style={styles.container}>
      <Text.Primary darkGray bold style={styles.text}>
        {moment(date).locale(language).format("MMMM YYYY")}
      </Text.Primary>
      {percentageConsent && (
        <Text.Secondary
          red={percentageConsent > 100}
          green={percentageConsent < 100}
        >
          {percentageConsent + " % " + t("PARTNERS_SCREEN_HEADER_OF_CONSENT")}
        </Text.Secondary>
      )}
    </View>
  );
};

export default withLocalization(SectionHeader);
