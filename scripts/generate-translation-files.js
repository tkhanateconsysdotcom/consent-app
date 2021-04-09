import fs from "fs";
import prompt_sync from "prompt-sync";

const paths = [
  "app/screens/Act/translations/",
  "app/screens/Consent/translations/",
  "app/screens/Partners/translations/",
  "app/screens/Settings/translations/",
  "app/screens/MonthlyConsent/translations/",
  "app/screens/ComingSoon/translations/",
  "app/screens/Methodology/translations/",
  "app/screens/AddPartner/translations/",
  "app/screens/PartnerItem/translations/",
  "app/screens/Intro/translations/",
  "app/screens/About/translations/",
  "app/screens/SupportUs/translations/",
  "app/screens/MyLocation/translations/",
  "app/screens/ActDetail/translations/",
  "app/components/NoPartner/translations/",
  "app/utils/ui/translations/",
];

const englishFile = "en.json";
const prompt = prompt_sync();

// https://www.loc.gov/standards/iso639-2/php/code_list.php
const language = prompt("What is the new language ISO Code? ");
console.log("language", language);

const copyAndRename = (path) => {
  fs.copyFile(path + englishFile, path + language + ".json", (err) => {
    if (err) throw err;
    console.log("Creation of " + path + language + ".json");
  });
};

paths.forEach(copyAndRename);
