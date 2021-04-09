import consent from "../";

describe("Consent actions should", () => {
  it("export expected actions", () =>
    expect(consent.actions).toMatchSnapshot());

  it("be able to set a monthly consent", () => {
    const monthlyAcceptanceConsent = 200;

    const expectedAction = {
      type: consent.actions.setMonthlyAcceptanceConsent.toString(),
      payload: monthlyAcceptanceConsent,
    };
    expect(
      consent.actions.setMonthlyAcceptanceConsent(monthlyAcceptanceConsent)
    ).toEqual(expectedAction);
  });
});
