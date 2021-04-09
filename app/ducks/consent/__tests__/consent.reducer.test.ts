import consent from "../";

describe("Consent reducer should", () => {
  it("return the initial state", () => {
    // TODO: fix eslint complains bellow
    // eslint-disable-next-line
    expect(consent.reducer(undefined, {} as any)).toEqual({
      monthlyAcceptanceConsent: 166,
    });
  });

  it("handle a monthly consent change", () => {
    const monthlyAcceptanceConsent = 200;

    const expectedAction = {
      type: consent.actions.setMonthlyAcceptanceConsent.toString(),
      payload: monthlyAcceptanceConsent,
    };

    expect(consent.reducer(undefined, expectedAction)).toEqual({
      monthlyAcceptanceConsent: 200,
    });
  });
});
