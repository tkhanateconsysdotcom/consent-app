/* eslint import/order:0 */
/* SCREENS */
import * as Act from "../../screens/Act/translations";
import * as Consent from "../../screens/Consent/translations";
import * as Partners from "../../screens/Partners/translations";
import * as Settings from "../../screens/Settings/translations";
import * as Notifications from "../../screens/Notifications/translations";
import * as MonthlyConsent from "../../screens/MonthlyConsent/translations";
import * as ComingSoon from "../../screens/ComingSoon/translations";
import * as InfoModal from "../../screens/InfoModal/translations";
import * as AddPartner from "../../screens/AddPartner/translations";
import * as PartnerItem from "../../screens/PartnerItem/translations";
import * as Intro from "../../screens/Intro/translations";
import * as About from "../../screens/About/translations";
import * as SupportUs from "../../screens/SupportUs/translations";
import * as MyLocation from "../../screens/MyLocation/translations";
import * as MyPreferences from "../../screens/MyPreferences/translations";
import * as ActDetail from "../../screens/ActDetail/translations";

/* COMPONENTS */
import * as NoPartner from "components/NoPartner/translations";
import * as NoPreference from "components/NoPreference/translations";

/* UTILS */
import * as UI from "utils/ui/translations";

const en = {
  ...UI.en,
  ...About.en,
  ...Notifications.en,
  ...MonthlyConsent.en,
  ...NoPartner.en,
  ...NoPreference.en,
  ...Act.en,
  ...Consent.en,
  ...Partners.en,
  ...Settings.en,
  ...ComingSoon.en,
  ...InfoModal.en,
  ...AddPartner.en,
  ...PartnerItem.en,
  ...Intro.en,
  ...SupportUs.en,
  ...MyLocation.en,
  ...MyPreferences.en,
  ...ActDetail.en,
};

const de = {
  ...UI.de,
  ...About.de,
  ...MonthlyConsent.de,
  ...NoPartner.de,
  ...NoPreference.de,
  ...Act.de,
  ...Consent.de,
  ...Partners.de,
  ...Settings.de,
  ...ComingSoon.de,
  ...InfoModal.de,
  ...AddPartner.de,
  ...PartnerItem.de,
  ...Intro.de,
  ...SupportUs.de,
  ...MyLocation.de,
  ...MyPreferences.de,
  ...ActDetail.de,
};

const fr = {
  ...UI.fr,
  ...About.fr,
  ...Notifications.fr,
  ...MonthlyConsent.fr,
  ...NoPartner.fr,
  ...NoPreference.fr,
  ...Act.fr,
  ...Consent.fr,
  ...Partners.fr,
  ...Settings.fr,
  ...ComingSoon.fr,
  ...InfoModal.fr,
  ...AddPartner.fr,
  ...PartnerItem.fr,
  ...Intro.fr,
  ...SupportUs.fr,
  ...MyLocation.fr,
  ...MyPreferences.fr,
  ...ActDetail.fr,
};

const sv = {
  ...UI.sv,
  ...About.sv,
  ...Notifications.sv,
  ...MonthlyConsent.sv,
  ...NoPartner.sv,
  ...NoPreference.sv,
  ...Act.sv,
  ...Consent.sv,
  ...Partners.sv,
  ...Settings.sv,
  ...ComingSoon.sv,
  ...InfoModal.sv,
  ...AddPartner.sv,
  ...PartnerItem.sv,
  ...Intro.sv,
  ...SupportUs.sv,
  ...MyLocation.sv,
  ...MyPreferences.sv,
  ...ActDetail.sv,
};

const pt = {
  ...UI.pt,
  ...About.pt,
  ...Notifications.pt,
  ...MonthlyConsent.pt,
  ...NoPartner.pt,
  ...NoPreference.pt,
  ...Act.pt,
  ...Consent.pt,
  ...Partners.pt,
  ...Settings.pt,
  ...InfoModal.pt,
  ...AddPartner.pt,
  ...PartnerItem.pt,
  ...Intro.pt,
  ...SupportUs.pt,
  ...MyLocation.pt,
  ...MyPreferences.pt,
  ...ActDetail.pt,
};

const es = {
  ...UI.es,
  ...About.es,
  ...Notifications.es,
  ...MonthlyConsent.es,
  ...NoPartner.es,
  ...NoPreference.es,
  ...Act.es,
  ...Consent.es,
  ...Partners.es,
  ...Settings.es,
  ...InfoModal.es,
  ...AddPartner.es,
  ...PartnerItem.es,
  ...Intro.es,
  ...SupportUs.es,
  ...MyLocation.es,
  ...MyPreferences.es,
  ...ActDetail.es,
};

const ru = {
  ...UI.ru,
  ...About.ru,
  ...Notifications.ru,
  ...MonthlyConsent.ru,
  ...NoPartner.ru,
  ...NoPreference.ru,
  ...Act.ru,
  ...Consent.ru,
  ...Partners.ru,
  ...Settings.ru,
  ...InfoModal.ru,
  ...AddPartner.ru,
  ...PartnerItem.ru,
  ...Intro.ru,
  ...SupportUs.ru,
  ...MyLocation.ru,
  ...MyPreferences.ru,
  ...ActDetail.ru,
};

const pl = {
  ...UI.pl,
  ...About.pl,
  ...Notifications.pl,
  ...MonthlyConsent.pl,
  ...NoPartner.pl,
  ...NoPreference.pl,
  ...Act.pl,
  ...Consent.pl,
  ...Partners.pl,
  ...Settings.pl,
  ...InfoModal.pl,
  ...AddPartner.pl,
  ...PartnerItem.pl,
  ...Intro.pl,
  ...SupportUs.pl,
  ...MyLocation.pl,
  ...MyPreferences.pl,
  ...ActDetail.pl,
};

const da = {
  ...UI.da,
  ...About.da,
  ...Notifications.da,
  ...MonthlyConsent.da,
  ...NoPartner.da,
  ...NoPreference.da,
  ...Act.da,
  ...Consent.da,
  ...Partners.da,
  ...Settings.da,
  ...InfoModal.da,
  ...AddPartner.da,
  ...PartnerItem.da,
  ...Intro.da,
  ...SupportUs.da,
  ...MyLocation.da,
  ...MyPreferences.da,
  ...ActDetail.da,
};

export interface TranslationKeys
  extends UI.TranslationKeys,
    MonthlyConsent.TranslationKeys,
    NoPartner.TranslationKeys,
    NoPreference.TranslationKeys,
    Act.TranslationKeys,
    Consent.TranslationKeys,
    Partners.TranslationKeys,
    ComingSoon.TranslationKeys,
    InfoModal.TranslationKeys,
    AddPartner.TranslationKeys,
    PartnerItem.TranslationKeys,
    Settings.TranslationKeys,
    Intro.TranslationKeys,
    About.TranslationKeys,
    Notifications.TranslationKeys,
    MyLocation.TranslationKeys,
    MyPreferences.TranslationKeys,
    SupportUs.TranslationKeys,
    ActDetail.TranslationKeys {}

export { en, de, fr, sv, pt, es, pl, ru, da };
