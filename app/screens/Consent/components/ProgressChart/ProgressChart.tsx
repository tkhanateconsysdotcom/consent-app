import React from "react";
import moment from "moment";
import "moment/min/locales";
import { View } from "react-native";

import { Text } from "components";
import { withLocalization, LocalizationContextProps } from "utils";

import styles from "./ProgressChart.styles";
import { Legend, Chart, PeriodConsent } from "./components";

interface Props {
  isMonth?: boolean;
  totalPartners: number;
  foodPartners: number;
  transportPartners: number;
  otherPartners: number;
  monthlyPartnersConsent: number;
}

const ProgressChart = ({
  totalPartners = 0,
  foodPartners = 0,
  transportPartners = 0,
  otherPartners = 0,
  monthlyPartnersConsent = 0,
  isMonth = false,
  language = "",
}: Props & LocalizationContextProps) => {
  if (!monthlyPartnersConsent) {
    return null;
  }

  const periodPartnersConsent = isMonth
    ? monthlyPartnersConsent
    : monthlyPartnersConsent * 12;

  const totalPartnersPercentage =
    totalPartners / periodPartnersConsent > 1
      ? 1
      : totalPartners / periodPartnersConsent;
  const transportPartnersPercentage =
    transportPartners / periodPartnersConsent > 1
      ? 1
      : transportPartners / periodPartnersConsent;
  const foodPartnersPercentage =
    foodPartners / periodPartnersConsent > 1
      ? 1
      : foodPartners / periodPartnersConsent;

  const period = moment()
    .locale(language)
    .format(isMonth ? "MMMM" : "YYYY");

  return (
    <View style={styles.container}>
      <View style={styles.periodContainer}>
        <Text.H3 style={styles.header}>{period}</Text.H3>
      </View>
      <Chart
        totalPartnersPercentage={totalPartnersPercentage}
        transportPartnersPercentage={transportPartnersPercentage}
        foodPartnersPercentage={foodPartnersPercentage}
      />
      <Legend
        totalPartners={totalPartners}
        foodPartners={foodPartners}
        transportPartners={transportPartners}
        otherPartners={otherPartners}
      />
      <PeriodConsent
        period={period.toLowerCase()}
        periodPartnersConsent={periodPartnersConsent}
      />
    </View>
  );
};

export default withLocalization(ProgressChart);
