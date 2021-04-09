import React from "react";
import { View, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";

import NoPartner from "..";

const container: ViewStyle = { flex: 1, margin: 20, marginBottom: 50 };

storiesOf("NoPartner", module).add("NoPartner", () => (
  <View style={container}>
    <NoPartner />
  </View>
));
