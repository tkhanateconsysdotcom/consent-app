import React from "react";
import { View } from "react-native";

import { t } from "utils";
import { Colors } from "style";

import styles from "./Legend.styles";
import LegendItem from "../LegendItem";

interface Prop {
  totalPartners: number;
  foodPartners: number;
  transportPartners: number;
  otherPartners: number;
}

const Legend = ({
  totalPartners,
  transportPartners,
  foodPartners,
  otherPartners,
}: Prop) => {
  const items = [
    {
      name: t("CONSENT_SCREEN_PROGRESS_CHART_LEGEND_ITEM_TOTAL"),
      value: totalPartners,
      color: Colors.apricot,
    },
    {
      name: t("CONSENT_SCREEN_PROGRESS_CHART_LEGEND_ITEM_TRANSPORT"),
      value: transportPartners,
      color: Colors.yellow50,
    },
    {
      name: t("CONSENT_SCREEN_PROGRESS_CHART_LEGEND_ITEM_FOOD"),
      value: foodPartners,
      color: Colors.green50,
    },
    {
      name: t("CONSENT_SCREEN_PROGRESS_CHART_LEGEND_ITEM_OTHER"),
      value: otherPartners,
      color: Colors.grey70,
    },
  ];
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <LegendItem
          key={index}
          name={item.name}
          value={item.value}
          color={item.color}
        />
      ))}
    </View>
  );
};

export default Legend;
