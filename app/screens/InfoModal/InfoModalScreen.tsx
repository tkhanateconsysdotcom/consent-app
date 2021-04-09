import React from "react";
import { ScrollView } from "react-native";
import HTML from "react-native-render-html";

import { ui } from "utils";

import styles from "./InfoModalScreen.styles";
import navigationOptions from "./InfoModal.navigationOptions";
import methodology from "../../../assets/methodology/methodology.json";

const InfoModalScreen = ({ route }) => {
  const partnerModelType = route?.params?.partnerModelType;
  let html: string;
  if (partnerModelType) {
    // TODO: load corresponding html
    html = `<h2> ${partnerModelType} placeholder </h2>`;
  } else {
    html = methodology[0].body;
  }

  return (
    <ScrollView style={styles.container}>
      <HTML
        html={html}
        onLinkPress={ui.onHTMLBodyLinkPress}
        baseFontStyle={styles.text}
      />
    </ScrollView>
  );
};

InfoModalScreen.navigationOptions = navigationOptions;

export default InfoModalScreen;
