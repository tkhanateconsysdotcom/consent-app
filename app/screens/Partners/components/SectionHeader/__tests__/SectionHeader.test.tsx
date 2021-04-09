import React from "react";
import { create } from "react-test-renderer";

import SectionHeader from "../SectionHeader";

jest.unmock("../SectionHeader");

describe("SectionHeader", () => {
  const date = new Date("2020-12-24T03:24:00");

  it("should render when user is over consent", () => {
    const tree = create(
      <SectionHeader co2value={30} monthlyAcceptanceConsent={20} date={date} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render when user is below consent", () => {
    const tree = create(
      <SectionHeader co2value={10} monthlyAcceptanceConsent={20} date={date} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render when user has consent below 1%", () => {
    const tree = create(
      <SectionHeader co2value={1} monthlyAcceptanceConsent={1000} date={date} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render when co2value equals 0", () => {
    const tree = create(
      <SectionHeader co2value={0} monthlyAcceptanceConsent={1} date={date} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render when monthlyAcceptanceConsent equals 0", () => {
    const tree = create(
      <SectionHeader co2value={1} monthlyAcceptanceConsent={0} date={date} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render when monthlyAcceptanceConsent and co2value equals 0", () => {
    const tree = create(
      <SectionHeader co2value={0} monthlyAcceptanceConsent={0} date={date} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
