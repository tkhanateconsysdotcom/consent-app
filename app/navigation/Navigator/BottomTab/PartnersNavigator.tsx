import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PartnerItemScreen from "../../../screens/PartnerItem";
import PartnersScreen from "../../../screens/Partners";
import AddPartnerScreen from "../../../screens/AddPartner";

const Stack = createStackNavigator();

const PartnersNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="Partners"
      options={PartnersScreen.navigationOptions}
      component={PartnersScreen}
    />
    <Stack.Screen
      name="PartnerItem"
      options={PartnerItemScreen.navigationOptions}
      component={PartnerItemScreen}
    />
    <Stack.Screen
      name="AddPartner"
      options={AddPartnerScreen.navigationOptions}
      component={AddPartnerScreen}
    />
  </Stack.Navigator>
);

export default PartnersNavigator;
