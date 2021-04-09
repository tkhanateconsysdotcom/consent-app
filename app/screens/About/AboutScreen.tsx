import React from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import QRCode from "react-native-qrcode-svg";
import { getUniqueId } from "react-native-device-info";

import { StickersImage, Text } from "components";
import { t } from "utils";
import { userPreferences } from "ducks";
import { base64Logo } from "screens/About/Logo";

import styles from "./AboutScreen.styles";
import navigationOptions from "./AboutScreen.navigationOptions";

const AboutScreen = () => {
  const preferences = useSelector(userPreferences.selectors.getPreference);

  return (
    <ScrollView style={styles.container}>
      <StickersImage sticker="earth" />
      <Text.Primary style={styles.header}>
        {t("ABOUT_SCREEN_INTRO")}
      </Text.Primary>
      <Text.H2 style={styles.header}>{t("ABOUT_SCREEN_CARE_HEADER")}</Text.H2>
      <Text.H3 style={styles.subHeader}>{t("ABOUT_SCREEN_PRIVACY")}</Text.H3>
      <Text.Primary>{t("ABOUT_SCREEN_PRIVACY_BODY")}</Text.Primary>
      <QRCode
        value={JSON.stringify({
          preferences: preferences,
          id: getUniqueId(),
          isMitigated: false,
        })}
        logo={{ uri: base64Logo }}
        logoSize={30}
        logoBackgroundColor="transparent"
      />
      <View style={styles.githubView}>
        <Text.Primary>{t("ABOUT_SCREEN_CAN_BE_FOUND")}</Text.Primary>
        <Text.Link url="https://github.com/tkhanateconsysdotcom/consent-app">
          {t("ABOUT_SCREEN_GITHUB")}
        </Text.Link>
      </View>
      <View style={styles.separator} />
    </ScrollView>
  );
};

AboutScreen.navigationOptions = navigationOptions;

export default AboutScreen;
