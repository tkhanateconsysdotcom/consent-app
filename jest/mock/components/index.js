/* React Native */
jest.mock(
  "react-native/Libraries/Components/Touchable/TouchableOpacity",
  () => "TouchableOpacity"
);

/* Consent Screen */
jest.mock(
  "../../../app/screens/Consent/components/ProgressChart",
  () => "ProgressChart"
);
jest.mock(
  "../../../app/screens/Consent/components/NumberOfDaysVegetarian",
  () => "NumberOfDaysVegetarian"
);
jest.mock(
  "../../../app/screens/Consent/components/ProgressChart/components/LegendItem",
  () => "LegendItem"
);
jest.mock(
  "../../../app/screens/Consent/components/ProgressChart/components/Legend",
  () => "Legend"
);
jest.mock(
  "../../../app/screens/Consent/components/ProgressChart/components/PeriodConsent",
  () => "PeriodConsent"
);
jest.mock(
  "../../../app/screens/Consent/components/ProgressChart/components/Chart",
  () => "Chart"
);

/* Partners Screen */
jest.mock(
  "../../../app/screens/Partners/components/PartnersList",
  () => "PartnersList"
);
jest.mock(
  "../../../app/screens/Partners/components/PartnersListItem",
  () => "PartnersListItem"
);
jest.mock(
  "../../../app/screens/Partners/components/SectionHeader",
  () => "SectionHeader"
);

/* Settings Screen */
jest.mock(
  "../../../app/screens/Settings/components/SettingsRow",
  () => "SettingsRow"
);

/* Shared Components */
jest.mock("../../../app/components/StickersImage", () => "StickersImage");
jest.mock("../../../app/components/TextInput", () => "TextInput");
jest.mock("../../../app/components/SocialMedia", () => "SocialMedia");
jest.mock("../../../app/components/Tag", () => "Tag");
jest.mock("../../../app/components/NoPartner", () => "NoPartner");
jest.mock("../../../app/components/Text", () => require("./Text.mock").default);
jest.mock(
  "../../../app/components/Button",
  () => require("./Button.mock").default
);
