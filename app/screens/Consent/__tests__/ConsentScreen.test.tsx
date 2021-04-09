import React from "react";
import { create } from "react-test-renderer";

import ConsentScreen from "../ConsentScreen";

const props = {
  navigation: {
    push: () => {
      // do nothing.
    },
  },
};

it("ConsentScreen renders correctly", () => {
  // const tree = create(<ConsentScreen {...props} />).toJSON();
  // expect(tree).toMatchSnapshot();
});

// TODO: add test to verify that monthly consent is opened
