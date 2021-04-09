import React from "react";
import { create } from "react-test-renderer";
import { FormattedProvider } from "react-native-globalize";

import { partners } from "ducks";

import AddPartnerScreen from "../AddPartnerScreen";

const props = {
  navigation: {
    push: jest.fn(),
    goBack: jest.fn(),
  },
};

const RealDate = Date.now;

beforeAll(() => {
  Date.now = jest.fn(() => new Date("2019-04-07T10:20:30Z").getTime());
});

afterAll(() => {
  Date.now = RealDate;
});

it("AddPartnerScreen renders correctly", () => {
  // const tree = create(
  //   <FormattedProvider locale="en">
  //     <AddPartnerScreen {...props} />
  //   </FormattedProvider>
  // ).toJSON();
  // expect(tree).toMatchSnapshot();
});

it("AddPartnerScreen should go back and call usedispatch if save button is pressed", () => {
  // const root = create(
  //   <FormattedProvider locale="en">
  //     <AddPartnerScreen {...props} />
  //   </FormattedProvider>
  // ).root;
  // // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // // @ts-ignore
  // const button = root.findByType("Button.Primary");
  // jest.spyOn(partners.actions, "createPartner");
  //
  // button.props.onPress();
  // expect(props.navigation.goBack).toHaveBeenCalled();
  // expect(partners.actions.createPartner).toHaveBeenCalled();
});
