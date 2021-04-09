import React from "react";
import { create } from "react-test-renderer";

import MonthlyConsentScreen from "../MonthlyConsentScreen";

const props = {
  navigation: {
    goBack: jest.fn(),
  },
};

it("MonthlyConsentScreen renders correctly", () => {
  const tree = create(<MonthlyConsentScreen {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("MonthlyConsentScreen should go back if save button is pressed", () => {
  const root = create(<MonthlyConsentScreen {...props} />).root;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const button = root.findByType("Button.Primary");

  button.props.onPress();
  expect(props.navigation.goBack).toHaveBeenCalled();
});
