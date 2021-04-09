import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import uuid from "uuid";

import { Button, ListItem, Text, TextInput } from "components";
import { userPreferences } from "ducks";
import { Layout } from "constant";
import { Preference } from "interfaces";
import { PreferenceSelection } from "components/PreferenceSelection/PreferenceSelection";

import navigationOptions from "./MyPreferencesScreen.navigationOptions";
import styles from "./MyPreferencesScreen.styles";

interface Props {
  preferenceString: string;
}

const AddPreferenceButton = ({ preferenceString }: Props) => {
  const dispatch = useDispatch();

  const addPreference = () => {
    const preference = {
      preference: preferenceString,
      id: uuid(),
      isMitigated: false,
    };

    dispatch(userPreferences.actions.addPreference(preference));
  };

  const styles = StyleSheet.create({
    button: {
      margin: Layout.PADDING_HORIZONTAL,
    },
  });

  return (
    <Button.Primary
      onPress={addPreference}
      textType={"Primary"}
      style={styles.button}
    >
      <Text.Primary white={false} red={true} center bold>
        {"Add Preference"}
      </Text.Primary>
    </Button.Primary>
  );
};

const PARTNER_NAME_MAX_LENGTH = 150;

const MyPreferencesScreen = () => {
  const [preferenceName, setPartnerName] = useState<string>("");
  const onChangePartnerName = useCallback((name: string) => {
    if (name.length < PARTNER_NAME_MAX_LENGTH) {
      setPartnerName(name);
    }
  }, []);
  const dispatch = useDispatch();
  const preferencesSelector: Preference[] = useSelector(
    userPreferences.selectors.getPreference
  );
  const preferences = preferencesSelector ? preferencesSelector : [];

  const onPress = useCallback(
    (pref: Preference) => {
      dispatch(userPreferences.actions.removePreference(pref));
    },
    [dispatch]
  );

  function foo() {
    // do nothing.
  }

  return (
    <View style={styles.container}>
      <Text.Primary style={styles.intro}>
        {"Add any actions you will allow with your partners:"}
      </Text.Primary>
      <View style={styles.acceptanceIntensityContainer}>
        <TextInput
          isOptional={false}
          placeholder={"Acceptable Actions"}
          title={"Please add any preferences you have"}
          onChangeText={onChangePartnerName}
          value={preferenceName}
        />
      </View>
      <View>
        <AddPreferenceButton preferenceString={preferenceName} />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <ListItem title={"SELECT A PREFERENCE TO REMOVE"} onPress={foo} />
        {!Array.isArray(preferences)
          ? () => {
              // do nothing
            }
          : preferences.map((p: Preference) => (
              <PreferenceSelection
                key={p.id}
                preference={p}
                onSelectPreference={() => onPress(p)}
                selectedPreference={p}
              />
            ))}
      </ScrollView>
    </View>
  );
};

MyPreferencesScreen.navigationOptions = navigationOptions;

export default MyPreferencesScreen;
