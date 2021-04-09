import React from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { t } from "utils";
import { navigate } from "navigation";

import Text from "../Text";
import StickersImage from "../StickersImage";
import Button from "../Button";
import styles from "./NoPartner.styles";

export default function NoPartner() {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <ScrollView style={styles.container}>
      <StickersImage sticker="earth" />
      <View style={styles.textView}>
        <Text.H1 style={styles.header}>
          {t("NO_PARTNER_COMPONENT_TITLE")}
        </Text.H1>
        <Text.Primary style={styles.paragraph}>
          {t("NO_PARTNER_COMPONENT_THANKS")}
        </Text.Primary>
        <Text.Primary style={styles.paragraph}>
          {t("NO_PARTNER_COMPONENT_START_USING_APP")}
        </Text.Primary>
        <Button.Primary
          fullWidth
          style={styles.button}
          onPress={() => navigator.openAddPartner()}
          textType={"Primary"}
        >
          <Text.Primary bold white>
            {t("NO_PARTNER_COMPONENT_ADD_FIRST_PARTNER")}
          </Text.Primary>
        </Button.Primary>
      </View>
    </ScrollView>
  );
}
