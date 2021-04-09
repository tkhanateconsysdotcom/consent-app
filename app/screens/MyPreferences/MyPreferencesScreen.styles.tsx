import { StyleSheet } from "react-native";

import { Colors, Layout } from "style";

const styles = StyleSheet.create({
  container: {
    ...Layout.containerWithPadding,
  },
  intro: {
    paddingTop: 30,
  },
  acceptanceIntensityContainer: {
    flexDirection: "row",
  },
  acceptanceIntensity: {
    paddingVertical: 20,
  },
  scrollContainer: {
    borderTopColor: Colors.green10,
    borderTopWidth: 2,
  },
});

export default styles;
