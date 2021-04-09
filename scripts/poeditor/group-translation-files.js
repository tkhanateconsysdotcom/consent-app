// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

// Languages
const usedLanguages = ["en", "de", "fr", "sv", "pt", "es", "pl", "ru", "da"];
// Imports all files
const toBeImported = {
  Act: "../../app/screens/Act/translations",
  Consent: "../../app/screens/Consent/translations",
  Partners: "../../app/screens/Partners/translations",
  Settings: "../../app/screens/Settings/translations",
  MonthlyConsent: "../../app/screens/MonthlyConsent/translations",
  ComingSoon: "../../app/screens/ComingSoon/translations",
  InfoModal: "../../app/screens/InfoModal/translations",
  AddPartner: "../../app/screens/AddPartner/translations",
  PartnerItem: "../../app/screens/PartnerItem/translations",
  Intro: "../../app/screens/Intro/translations",
  About: "../../app/screens/About/translations",
  SupportUs: "../../app/screens/SupportUs/translations",
  MyLocation: "../../app/screens/MyLocation/translations",
  ActDetail: "../../app/screens/ActDetail/translations",
  Notifications: "../../app/screens/Notifications/translations",
  NoPartner: "../../app/components/NoPartner/translations",
  UI: "../../app/utils/ui/translations",
};
// eslint-disable-next-line prefer-const
let imports = {};

Object.keys(toBeImported).forEach((key) => {
  imports[key] = {};
  imports[key].path = toBeImported[key];
  usedLanguages.forEach((lang) => {
    imports[key][lang] = require(`${imports[key].path}/${lang}.json`);
  });
});

//! PUTTING ALL TRANSLATIONS TOGETHER

const languageObjects = {};
usedLanguages.forEach((language) => {
  languageObjects[language] = {
    ...imports.UI[language],
    ...imports.About[language],
    ...imports.MonthlyConsent[language],
    ...imports.ComingSoon[language],
    ...imports.NoPartner[language],
    ...imports.Act[language],
    ...imports.Consent[language],
    ...imports.Partners[language],
    ...imports.Settings[language],
    ...imports.InfoModal[language],
    ...imports.AddPartner[language],
    ...imports.PartnerItem[language],
    ...imports.Intro[language],
    ...imports.SupportUs[language],
    ...imports.MyLocation[language],
    ...imports.ActDetail[language],
    ...imports.Notifications[language],
  };
});

//! WRITING JSONs
usedLanguages.forEach((language) => {
  fs.writeFile(
    `scripts/poeditor/${language}.json`,
    JSON.stringify(languageObjects[language], null, "\t"),
    (err) => {
      if (err) throw err;
      console.log("✔", language);
    }
  );
});
