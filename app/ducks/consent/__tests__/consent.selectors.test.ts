import consent from "../";

let state;

const initialState = {
  monthlyAcceptanceConsent: 500,
};

describe("Consent selector should", () => {
  beforeEach(() => {
    state = {
      [consent.namespace]: initialState,
    };
  });

  test("return the monthly consent", () =>
    expect(consent.selectors.getMonthlyAcceptanceConsent(state)).toEqual(
      initialState.monthlyAcceptanceConsent
    ));
});
