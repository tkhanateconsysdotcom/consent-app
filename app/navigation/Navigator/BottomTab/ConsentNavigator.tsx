import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ConsentScreen from "../../../screens/Consent";
import MontlyConsentScreen from "../../../screens/MonthlyConsent";
import AddPartnerScreen from "../../../screens/AddPartner";
import MyPreferences from "../../../screens/MyPreferences";

const Stack = createStackNavigator();

const ConsentNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="Consent"
      options={ConsentScreen.navigationOptions}
      component={ConsentScreen}
    />
    <Stack.Screen
      name="MonthlyConsent"
      options={MontlyConsentScreen.navigationOptions}
      component={MontlyConsentScreen}
    />
    <Stack.Screen
      name="AddPartner"
      options={AddPartnerScreen.navigationOptions}
      component={AddPartnerScreen}
    />
    <Stack.Screen
      name="MyPreferences"
      options={MyPreferences.navigationOptions}
      component={MyPreferences}
    />
  </Stack.Navigator>
);

export default ConsentNavigator;
