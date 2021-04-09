import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, View } from "react-native";
import { isEmpty, pathOr } from "ramda";
import moment from "moment";
import "moment/min/locales";
import { FormattedNumber } from "react-native-globalize";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Text, Tag, Button } from "components";
import { partners } from "ducks";
import {
  calculation,
  ui,
  t,
  withLocalization,
  LocalizationContextProps,
} from "utils";
import { navigate } from "navigation";

import styles from "./PartnerItemScreen.styles";
import navigationOptions from "./PartnerItemScreen.navigationOptions";

const PartnerItemScreen = ({ language = "" }: LocalizationContextProps) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const route = useRoute();
  const partnerId = pathOr("", ["params", "id"], route);

  const dispatch = useDispatch();

  const partner = useSelector((state) =>
    partners.selectors.getPartnerById(state, partnerId)
  );
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onPress = () => {};

  const { creationDate, partnerModelType, name } = partner || {
    creationDate: new Date(),
    partnerModelType: "",
    preferences: [],
    name: "",
  };

  const date = moment(creationDate, "YYYY-MM-DDTHH:mm:ss.sssZ");
  const day = date.locale(language).format("dddd");
  const monthAndYear = date.locale(language).format("Do MMMM YYYY");
  const co2Partner = calculation.getC02ValueFromPartner(partner || {});
  const deletePartner = () =>
    dispatch(partners.actions.deletePartnerById(partner.id));

  useEffect(() => {
    /* Avoid crash right after an partner is deleted */
    if (!partner) navigator.goBack();
  }, [navigator, partner]);

  return (
    <Fragment>
      {!isEmpty(partner) && (
        <ScrollView style={styles.container}>
          {name.length ? (
            <>
              <Text.H3>{t("PARTNER_ITEM_SCREEN_NAME")}</Text.H3>
              <Text.Primary darkGray style={styles.item}>
                {name}
              </Text.Primary>
            </>
          ) : null}
          <Text.H3>{t("PARTNER_ITEM_SCREEN_TYPE")}</Text.H3>
          <ScrollView horizontal style={styles.item}>
            <Tag
              selected
              onPress={onPress}
              title={ui.getTranslationModelType(partnerModelType)}
            />
          </ScrollView>
          <Text.H3>{t("PARTNER_ITEM_SCREEN_QUANTITY")}</Text.H3>
          <Text.Primary darkGray style={styles.item}>
            <FormattedNumber
              maximumFractionDigits={2}
              value={partner.preferences ? partner.preferences.length : 0}
            />{" "}
            {co2Partner > 1 ? " kgC02eq" : " gC02eq"}
          </Text.Primary>
          <Text.H3>{t("PARTNER_ITEM_SCREEN_DATE")}</Text.H3>
          <View style={styles.date}>
            <Text.Primary darkGray style={[styles.item, styles.day]}>
              {day + " "}
            </Text.Primary>
            <Text.Primary darkGray style={styles.item}>
              {monthAndYear}
            </Text.Primary>
          </View>
          <Button.Primary
            fullWidth
            onPress={deletePartner}
            textType={"Primary"}
          >
            <Text.Primary white>
              {t("PARTNER_ITEM_SCREEN_DELETE_PARTNER")}
            </Text.Primary>
          </Button.Primary>
        </ScrollView>
      )}
    </Fragment>
  );
};

PartnerItemScreen.navigationOptions = navigationOptions;

export default withLocalization(PartnerItemScreen);
