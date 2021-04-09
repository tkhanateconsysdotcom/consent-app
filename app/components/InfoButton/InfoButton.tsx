import React from "react";
import { useSelector } from "react-redux";
import { pathOr } from "ramda";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { partners } from "ducks";
import { navigate } from "navigation";

import styles from "./InfoButton.styles";

const InfoButton = () => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const route = useRoute();
  const partnerId = pathOr("", ["params", "id"], route);

  const { partnerModelType } =
    useSelector((state) =>
      partners.selectors.getPartnerById(state, partnerId)
    ) || {};

  return (
    <Ionicons
      name="md-information-circle"
      size={26}
      style={styles.infoIcon}
      onPress={() => navigator.openInfoModal({ partnerModelType })}
    />
  );
};

export default InfoButton;
