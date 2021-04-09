import throttle from "lodash.throttle";

const navigateOneTime = (navigate) =>
  throttle(navigate, 1000, { trailing: false });

/* navigate */
const openComingSoon = (navigation) => (props = {}) => {
  navigation.navigate("ComingSoon", props);
};

const openInfoModal = (navigation) => (props = {}) => {
  navigation.navigate("InfoModal", {
    screen: "InfoModal",
    params: props,
  });
};

/* push */
const openMontlyConsent = (navigation) => (props = {}) => {
  navigation.push("MonthlyConsent", props);
};

const openAddPartner = (navigation) => (props = {}) => {
  navigation.push("AddPartner", props);
};

const openActDetails = (navigation) => (props = {}) => {
  navigation.push("ActDetail", props);
};

const openPartnerItem = (navigation) => (props = {}) => {
  navigation.push("PartnerItem", props);
};

const openAbout = (navigation) => (props = {}) => {
  navigation.push("About", props);
};

const openMyLocation = (navigation) => (props = {}) => {
  navigation.push("MyLocation", props);
};

const openNotifications = (navigation) => (props = {}) => {
  navigation.push("Notifications", props);
};

const openMyPreferences = (navigation) => (props = {}) => {
  console.log("pushed MyPreferences");
  navigation.push("MyPreferences", props);
};

const openSupportUs = (navigation) => (props = {}) => {
  navigation.push("SupportUs", props);
};

const openStorybook = (navigation) => (props = {}) => {
  navigation.push("Storybook", props);
};

const openConsent = (navigation) => (props = {}) => {
  navigation.push("Consent", props);
};

const navigate = (navigation) => ({
  goBack: navigation.goBack,
  openComingSoon: navigateOneTime(openComingSoon(navigation)),
  openInfoModal: navigateOneTime(openInfoModal(navigation)),
  openConsent: navigateOneTime(openConsent(navigation)),
  openMontlyConsent: navigateOneTime(openMontlyConsent(navigation)),
  openAddPartner: navigateOneTime(openAddPartner(navigation)),
  openActDetails: navigateOneTime(openActDetails(navigation)),
  openPartnerItem: navigateOneTime(openPartnerItem(navigation)),
  openAbout: navigateOneTime(openAbout(navigation)),
  openMyLocation: navigateOneTime(openMyLocation(navigation)),
  openMyPreferences: navigateOneTime(openMyPreferences(navigation)),
  openNotifications: navigateOneTime(openNotifications(navigation)),
  openSupportUs: navigateOneTime(openSupportUs(navigation)),
  openStorybook: navigateOneTime(openStorybook(navigation)),
});

export default navigate;
