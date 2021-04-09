import React from "react";
import { View, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";

import NoPreference from "..";

const container: ViewStyle = { flex: 1, margin: 20, marginBottom: 50 };

storiesOf("NoPreference", module).add("NoPreference", () => (
  <View style={container}>
    <NoPreference />
  </View>
));
