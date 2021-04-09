import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { useDispatch, useSelector } from "react-redux";

import { Text, Button } from "components";
import { consent } from "ducks";
import { t } from "utils";
import { Colors } from "style";
import { navigate } from "navigation";

import styles from "./MonthlyConsentScreen.styles";
import navigationOptions from "./MonthlyConsentScreen.navigationOptions";

const MIN_MONTHLY_ACCEPTANCE_CONSENT = 0;
const MAX_MONTHLY_ACCEPTANCE_CONSENT = 1000;

const translationMontlyConsentCountries = [
  "MONTHLY_CONSENT_SCREEN_LUXEMBOURG",
  "MONTHLY_CONSENT_SCREEN_UNITED_STATES",
  "MONTHLY_CONSENT_SCREEN_JAPAN",
  "MONTHLY_CONSENT_SCREEN_SWEDEN",
  "MONTHLY_CONSENT_SCREEN_FRANCE",
  "MONTHLY_CONSENT_SCREEN_CHINA",
  "MONTHLY_CONSENT_SCREEN_BRAZIL",
  "MONTHLY_CONSENT_SCREEN_INDIA",
  "MONTHLY_CONSENT_SCREEN_ETHIOPIA",
];

const CountryExample = (translation, index) => (
  <Text.Secondary center key={index} style={styles.worldExampleItem}>
    {t(translation)}
  </Text.Secondary>
);

const MonthlyConsentScreen = ({ navigation }) => {
  const monthlyConsent = useSelector(
    consent.selectors.getMonthlyAcceptanceConsent
  );
  const navigator = navigate(navigation);

  const [sliderValue, setSliderValue] = useState(monthlyConsent);
  const dispatch = useDispatch();

  const onPressInfo = () =>
    WebBrowser.openBrowserAsync(
      "https://en.wikipedia.org/wiki/List_of_countries_by_acceptance_dioxide_PARTNERs_per_capita"
    );

  const onPressSaveConsent = () => {
    dispatch(
      consent.actions.setMonthlyAcceptanceConsent(Math.round(sliderValue))
    );
    navigator.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.personnalConsentContainer}>
          <Text.Primary bold>
            {t("MONTHLY_CONSENT_SCREEN_SLIDE_TO_SET")}
          </Text.Primary>
        </View>
        <Slider
          minimumTrackTintColor={Colors.green50}
          maximumTrackTintColor={Colors.grey}
          thumbTintColor={Colors.green50}
          style={styles.slider}
          maximumValue={MAX_MONTHLY_ACCEPTANCE_CONSENT}
          minimumValue={MIN_MONTHLY_ACCEPTANCE_CONSENT}
          value={sliderValue}
          onSlidingComplete={setSliderValue}
        />
        <Text.Primary lightGray>
          {Math.round(sliderValue) + " kg CO2eq"}
        </Text.Primary>
        <View style={styles.worldConsentContainer}>
          <View style={styles.worldExampleTitle}>
            <Text.Primary bold>
              {t("MONTHLY_CONSENT_SCREEN_ACCEPTANCE_PARTNERS_WORLD")}
              <Ionicons
                name="md-information-circle"
                size={26}
                color={Colors.green50}
                onPress={onPressInfo}
              />
            </Text.Primary>
          </View>
          {translationMontlyConsentCountries.map(CountryExample)}
          <View style={styles.parisAgreement}>
            <Text.Secondary center>
              {t("MONTHLY_CONSENT_SCREEN_PARIS_AGREEMENT")}
              <Text.Secondary bold blue>
                {" 166 kg CO2"}
              </Text.Secondary>
            </Text.Secondary>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button.Primary onPress={onPressSaveConsent} textType={"Primary"}>
          <Text.Primary white center bold>
            {t("MONTHLY_CONSENT_SCREEN_SAVE")}
          </Text.Primary>
        </Button.Primary>
      </View>
    </View>
  );
};

MonthlyConsentScreen.navigationOptions = navigationOptions;

export default MonthlyConsentScreen;
