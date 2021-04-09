import React from "react";
import { SectionList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { navigate } from "navigation";

import PartnersListItem from "../PartnersListItem";
import PartnersListItemProps from "../PartnersListItem/PartnersListItemProps";
import SectionHeader from "../SectionHeader";
import styles from "./PartnersList.styles";

const PartnersList = ({ partners, monthlyAcceptanceConsent }) => {
  const navigation = useNavigation();
  const navigator = navigate(navigation);

  const renderListFooter = () => <View style={styles.separator} />;
  const renderSectionHeader = (date, co2value) => (
    <SectionHeader
      date={date}
      co2value={co2value}
      monthlyAcceptanceConsent={monthlyAcceptanceConsent}
    />
  );

  return (
    <SectionList<PartnersListItemProps>
      sections={partners}
      stickySectionHeadersEnabled
      ListFooterComponent={renderListFooter}
      renderSectionHeader={({ section: { date, co2value } }) =>
        renderSectionHeader(date, co2value)
      }
      keyExtractor={({ id }) => id}
      renderItem={({
        item: { id, isMitigated, name, title, co2value, iconName },
      }) => (
        <PartnersListItem
          id={id}
          isMitigated={isMitigated}
          name={name}
          onPress={() => navigator.openPartnerItem({ id })}
          title={title}
          co2value={co2value}
          iconName={iconName}
        />
      )}
    />
  );
};

export default PartnersList;
