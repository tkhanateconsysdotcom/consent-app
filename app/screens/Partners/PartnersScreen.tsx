import React from "react";
import { SafeAreaView, View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { Text, Button } from "components";
import { consent } from "ducks";
import { t } from "utils";
import { navigate } from "navigation";

import styles from "./PartnersScreen.styles";
import { PartnersList } from "./components";
import { selectors } from "./ducks";

const PartnersScreen = () => {
  const monthlyAcceptanceConsent = useSelector(
    consent.selectors.getMonthlyAcceptanceConsent
  );
  const partners = useSelector(selectors.getPartners);
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <PartnersList
          monthlyAcceptanceConsent={monthlyAcceptanceConsent}
          partners={partners}
        />
      </SafeAreaView>
      <View style={styles.buttonView}>
        <Button.Primary
          fullWidth
          onPress={() => navigator.openAddPartner()}
          textType={"Secondary"}
        >
          <Text.Secondary numberOfLines={1} center white bold>
            {t("PARTNERS_SCREEN_ADD_PARTNER")}
          </Text.Secondary>
        </Button.Primary>
      </View>
    </>
  );
};

export default PartnersScreen;
