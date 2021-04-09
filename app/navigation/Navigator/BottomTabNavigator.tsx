import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TabBarIcon } from "components";
import { t } from "utils";
import { Colors } from "style";

import ActNavigator from "./BottomTab/ActNavigator";
import ConsentNavigator from "./BottomTab/ConsentNavigator";
import PartnersNavigator from "./BottomTab/PartnersNavigator";
import SettingsNavigator from "./BottomTab/SettingsNavigator";

const BottomTab = createBottomTabNavigator();

const ConsentOptions = {
  tabBarLabel: t("CONSENT_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-calculator"} />
  ),
};

const PartnersOptions = {
  tabBarLabel: t("PARTNERS_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-stats-chart-sharp"} />
  ),
};

const ActOptions = {
  tabBarLabel: t("ACT_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-hand-left-sharp"} />
  ),
};

const SettingsOptions = {
  tabBarLabel: t("SETTINGS_SCREEN_TAB_NAME"),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-options"} />
  ),
};

const BottomTabNavigator = (): React.ReactElement => {
  const { bottom } = useSafeAreaInsets();
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.green50,
        inactiveTintColor: Colors.grey40,
        style: {
          backgroundColor: Colors.white,
          borderTopWidth: 2,
          borderTopColor: Colors.green10,
          paddingBottom: bottom / 2 + 6,
        },
      }}
    >
      <BottomTab.Screen
        name="ConsentNavigator"
        options={ConsentOptions}
        component={ConsentNavigator}
      />
      <BottomTab.Screen
        name="PartnersNavigator"
        options={PartnersOptions}
        component={PartnersNavigator}
      />
      <BottomTab.Screen
        name="Act"
        options={ActOptions}
        component={ActNavigator}
      />
      <BottomTab.Screen
        name="SettingsNavigator"
        options={SettingsOptions}
        component={SettingsNavigator}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
