import {
  ElectricityEnum,
  FoodEnum,
  StreamingEnum,
  TransportEnum,
} from "carbon-footprint";
import {
  Appearance,
  ColorSchemeName,
  GestureResponderEvent,
  Linking,
} from "react-native";

import { PartnerType } from "interfaces";

import ui from "../";
import * as translationUtils from "../../translations/i18n";

describe("tests for ui.onHTMLBodyLinkPress", () => {
  beforeEach(() => {
    jest
      .spyOn(Linking, "openURL")
      .mockImplementation((url: string) => Promise.resolve(url ? true : true));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("invokes openUrl for the link which is passed, if a link exists", () => {
    // arrange
    const link = "some dummy URL link";

    // act
    ui.onHTMLBodyLinkPress({} as GestureResponderEvent, link);

    // assert
    expect(Linking.openURL).toBeCalledWith(link);
  });

  it("does not invoke openURL, if the link is undefined", () => {
    // arrange
    const link = undefined;

    // act
    ui.onHTMLBodyLinkPress({} as GestureResponderEvent, link);

    // assert
    expect(Linking.openURL).not.toBeCalled();
  });

  it("does not invoke openURL, if the link is null", () => {
    // arrange
    const link = null;

    // act
    ui.onHTMLBodyLinkPress({} as GestureResponderEvent, link);

    // assert
    expect(Linking.openURL).not.toBeCalled();
  });

  it("does not invoke openURL, if the link is empty string", () => {
    // arrange
    const link = "";

    // act
    ui.onHTMLBodyLinkPress({} as GestureResponderEvent, link);

    // assert
    expect(Linking.openURL).not.toBeCalled();
  });
});

describe("tests for ui.isDarkModeEnabled", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns true if the color scheme is 'dark'", () => {
    // arrange
    jest.spyOn(Appearance, "getColorScheme").mockImplementation(() => "dark");

    // act
    const isEnabled = ui.isDarkModeEnabled();

    // assert
    expect(isEnabled).toBe(true);
  });

  it("returns false if the color scheme is 'light'", () => {
    // arrange
    jest
      .spyOn(Appearance, "getColorScheme")
      .mockImplementation((): ColorSchemeName => "light");

    // act
    const isEnabled = ui.isDarkModeEnabled();

    // assert
    expect(isEnabled).toBe(false);
  });
});

describe("tests for ui.getIconFromModelType", () => {
  describe("electricity type partners", () => {
    it("returns md-flash if electricity Partner model", () => {
      // arrange
      const electricityPartners = Object.keys(ElectricityEnum);
      const partnerModelType =
        electricityPartners[
          Math.floor(Math.random() * electricityPartners.length)
        ];

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-flash");
    });
  });

  describe("custom type partners", () => {
    it("returns md-build if custom Partner model", () => {
      // arrange
      const partnerModelType = PartnerType.custom;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-build");
    });
  });

  describe("food type partners", () => {
    it("returns md-restaurant if it is food of type redMeat", () => {
      // arrange
      const partnerModelType = FoodEnum.redMeat;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-restaurant");
    });

    it("returns md-restaurant if it is food of type whiteMeat", () => {
      // arrange
      const partnerModelType = FoodEnum.whiteMeat;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-restaurant");
    });

    it("returns md-restaurant if it is food of type chocolate", () => {
      // arrange
      const partnerModelType = FoodEnum.chocolate;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-restaurant");
    });

    it("returns md-restaurant if it is food of type fish", () => {
      // arrange
      const partnerModelType = FoodEnum.fish;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-restaurant");
    });

    it("returns md-cafe if it is food of type coffee", () => {
      // arrange
      const partnerModelType = FoodEnum.coffee;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-cafe");
    });
  });

  describe("transport type partners", () => {
    it("returns md-airplane if it is transport of type shortHaulFlight", () => {
      // arrange
      const partnerModelType = TransportEnum.shortHaulFlight;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-airplane");
    });

    it("returns md-airplane if it is transport of type mediumHaulFlight", () => {
      // arrange
      const partnerModelType = TransportEnum.mediumHaulFlight;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-airplane");
    });

    it("returns md-airplane if it is transport of type longHaulFlight", () => {
      // arrange
      const partnerModelType = TransportEnum.longHaulFlight;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-airplane");
    });

    it("returns md-train if it is transport of type train", () => {
      // arrange
      const partnerModelType = TransportEnum.train;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-train");
    });

    it("returns md-car if it is transport of type car", () => {
      // arrange
      const partnerModelType = TransportEnum.car;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-car");
    });

    it("returns md-boat if it is transport of type boat", () => {
      // arrange
      const partnerModelType = TransportEnum.boat;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-boat");
    });

    it("returns md-motorbike if it is transport of type motorbike", () => {
      // arrange
      const partnerModelType = TransportEnum.motorbike;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-bicycle");
    });

    it("returns md-bus if it is transport of type bus", () => {
      // arrange
      const partnerModelType = TransportEnum.bus;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-bus");
    });
  });

  describe("streaming partner type", () => {
    it("returns md-film for HDVideo", () => {
      // arrange
      const partnerModelType = StreamingEnum.HDVideo;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-film");
    });

    it("returns md-film for fullHDVideo", () => {
      // arrange
      const partnerModelType = StreamingEnum.fullHDVideo;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-film");
    });

    it("returns md-film for ultraHDVideo", () => {
      // arrange
      const partnerModelType = StreamingEnum.ultraHDVideo;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-film");
    });

    it("returns md-musical-note for audioMP3", () => {
      // arrange
      const partnerModelType = StreamingEnum.audioMP3;

      // act
      const icon = ui.getIconFromModelType(partnerModelType);

      // assert
      expect(icon).toBe("md-musical-note");
    });
  });

  it("returns md-build for any random partner type", () => {
    // arrange
    const partnerModelType = "someRandomString";

    // act
    const icon = ui.getIconFromModelType(partnerModelType);

    // assert
    expect(icon).toBe("md-build");
  });
});

describe("tests for ui.getTranslationModelType", () => {
  beforeEach(() => {
    jest
      .spyOn(translationUtils, "t")
      .mockImplementation((key: string): string => key);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("electricity type partners", () => {
    it("returns UI_ELECTRICITY if electricity Partner model", () => {
      // arrange
      const electricityPartners = Object.keys(ElectricityEnum);
      const partnerModelType =
        electricityPartners[
          Math.floor(Math.random() * electricityPartners.length)
        ];

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_ELECTRICITY");
    });
  });

  describe("custom type partners", () => {
    it("returns UI_CUSTOM if custom Partner model", () => {
      // arrange
      const partnerModelType = PartnerType.custom;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_CUSTOM");
    });
  });

  describe("food type partners", () => {
    it("returns UI_RED_MEAT if it is food of type redMeat", () => {
      // arrange
      const partnerModelType = FoodEnum.redMeat;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_RED_MEAT");
    });

    it("returns UI_WHITE_MEAT if it is food of type whiteMeat", () => {
      // arrange
      const partnerModelType = FoodEnum.whiteMeat;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_WHITE_MEAT");
    });

    it("returns UI_CHOCOLATE if it is food of type chocolate", () => {
      // arrange
      const partnerModelType = FoodEnum.chocolate;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_CHOCOLATE");
    });

    it("returns UI_COFFEE if it is food of type coffee", () => {
      // arrange
      const partnerModelType = FoodEnum.coffee;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_COFFEE");
    });

    it("returns UI_FISH if it is food of type fish", () => {
      // arrange
      const partnerModelType = FoodEnum.fish;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_FISH");
    });
  });

  describe("transport type partners", () => {
    it("returns UI_PLANE if it is transport of type shortHaulFlight", () => {
      // arrange
      const partnerModelType = TransportEnum.shortHaulFlight;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_PLANE");
    });

    it("returns UI_PLANE if it is transport of type mediumHaulFlight", () => {
      // arrange
      const partnerModelType = TransportEnum.mediumHaulFlight;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_PLANE");
    });

    it("returns UI_PLANE if it is transport of type longHaulFlight", () => {
      // arrange
      const partnerModelType = TransportEnum.longHaulFlight;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_PLANE");
    });

    it("returns UI_TRAIN if it is transport of type train", () => {
      // arrange
      const partnerModelType = TransportEnum.train;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_TRAIN");
    });

    it("returns UI_CAR if it is transport of type car", () => {
      // arrange
      const partnerModelType = TransportEnum.car;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_CAR");
    });

    it("returns UI_BOAT if it is transport of type boat", () => {
      // arrange
      const partnerModelType = TransportEnum.boat;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_BOAT");
    });

    it("returns UI_MOTORBIKE if it is transport of type motorbike", () => {
      // arrange
      const partnerModelType = TransportEnum.motorbike;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_MOTORBIKE");
    });

    it("returns UI_BUS if it is transport of type bus", () => {
      // arrange
      const partnerModelType = TransportEnum.bus;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_BUS");
    });
  });

  describe("streaming partner type", () => {
    it("returns UI_HD_VIDEO for HDVideo", () => {
      // arrange
      const partnerModelType = StreamingEnum.HDVideo;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_HD_VIDEO");
    });

    it("returns UI_FULL_HD_VIDEO for fullHDVideo", () => {
      // arrange
      const partnerModelType = StreamingEnum.fullHDVideo;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_FULL_HD_VIDEO");
    });

    it("returns UI_ULTRA_HD_VIDEO for ultraHDVideo", () => {
      // arrange
      const partnerModelType = StreamingEnum.ultraHDVideo;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_ULTRA_HD_VIDEO");
    });

    it("returns UI_AUDIO for audioMP3", () => {
      // arrange
      const partnerModelType = StreamingEnum.audioMP3;

      // act
      const translationModelType = ui.getTranslationModelType(partnerModelType);

      // assert
      expect(translationModelType).toBe("UI_AUDIO");
    });
  });

  it("returns UI_CUSTOM for any random partner type", () => {
    // arrange
    const partnerModelType = "someRandomString";

    // act
    const translationModelType = ui.getTranslationModelType(partnerModelType);

    // assert
    expect(translationModelType).toBe("UI_CUSTOM");
  });
});
