import React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from "react-native-admob";

import { Text, Button } from "components";
import { t } from "utils";
import { navigate } from "navigation";

import styles from "./ConsentScreen.styles";
import { NumberOfDaysVegetarian, ProgressChart } from "./components";
import { selectors } from "./ducks";
import navigationOptions from "./ConsentScreen.navigationOptions";

interface Props {
  navigation: {
    push: (screen: string) => void;
  };
}

const ConsentScreen = (props: Props) => {
  const navigator = navigate(props.navigation);
  const monthlyAcceptanceConsent = useSelector(
    selectors.getMonthlyAcceptanceConsent
  );
  const totalCurrentMonthPartners = useSelector(
    selectors.getCurrentMonthAllAcceptanceValue
  );
  const transportCurrentMonthPartners = useSelector(
    selectors.getCurrentMonthTransportAcceptanceValue
  );
  const foodCurrentMonthPartners = useSelector(
    selectors.getCurrentMonthFoodAcceptanceValue
  );
  const otherCurrentMonthPartners = useSelector(
    selectors.getCurrentMonthOtherAcceptanceValue
  );

  const totalCurrentYearPartners = useSelector(
    selectors.getCurrentYearAllAcceptanceValue
  );
  const transportCurrentYearPartners = useSelector(
    selectors.getCurrentMonthTransportAcceptanceValue
  );
  const foodCurrentYearPartners = useSelector(
    selectors.getCurrentYearFoodAcceptanceValue
  );
  const otherCurrentYearPartners = useSelector(
    selectors.getCurrentYearOtherAcceptanceValue
  );

  // Display an interstitial
  AdMobInterstitial.setAdUnitID("ca-app-pub-4482303808779676~5440604106");
  AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
  AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());

  // Display a rewarded ad
  AdMobRewarded.setAdUnitID("ca-app-pub-4482303808779676~5440604106");
  AdMobRewarded.requestAd().then(() => AdMobRewarded.showAd());

  return (
    <ScrollView style={styles.container}>
      <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-4482303808779676~5440604106"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={(error) => console.error(error)}
        style={{ width: "auto", height: "auto" }}
      />
      <PublisherBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-4482303808779676~5440604106"
        testDevices={[PublisherBanner.simulatorId]}
        onAdFailedToLoad={(error) => console.error(error)}
        onAppEvent={(event) => console.log(event.name, event.info)}
        style={{ width: "auto", height: "auto" }}
      />
      <ProgressChart
        isMonth
        totalPartners={totalCurrentMonthPartners}
        foodPartners={foodCurrentMonthPartners}
        transportPartners={transportCurrentMonthPartners}
        otherPartners={otherCurrentMonthPartners}
        monthlyPartnersConsent={monthlyAcceptanceConsent}
      />
      <Button.Primary
        style={styles.monthlyConsentButton}
        fullWidth
        textType={"Primary"}
        onPress={() => navigator.openMontlyConsent()}
      >
        <Text.Primary bold center white>
          {t("CONSENT_SCREEN_SET_MONTHLY_CONSENT")}
        </Text.Primary>
      </Button.Primary>
      <NumberOfDaysVegetarian />
      <ProgressChart
        totalPartners={totalCurrentYearPartners}
        foodPartners={foodCurrentYearPartners}
        transportPartners={transportCurrentYearPartners}
        otherPartners={otherCurrentYearPartners}
        monthlyPartnersConsent={monthlyAcceptanceConsent}
      />
    </ScrollView>
  );
};

ConsentScreen.navigationOptions = navigationOptions;

export default ConsentScreen;
