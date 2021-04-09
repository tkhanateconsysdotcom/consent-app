import React, { useCallback, useState } from "react";
import moment, { Moment } from "moment";
import { useSelector } from "react-redux";
import {
  View,
  ScrollView,
  TouchableOpacity,
  AppRegistry,
  StyleSheet,
} from "react-native";
import { TransportEnum, FoodEnum, StreamingEnum } from "carbon-footprint";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import uuid from "uuid";

import { Text, Tag, TextInput, ListItem } from "components";
import { userPreferences } from "ducks";
import { PartnerType, PartnerPayload, Preference, Partner } from "interfaces";
import {
  calculation,
  t,
  withLocalization,
  LocalizationContextProps,
  ui,
  time,
} from "utils";
import { PreferenceSelection } from "components/PreferenceSelection/PreferenceSelection";

import styles from "./AddPartnerScreen.styles";
import navigationOptions from "./AddPartnerScreen.navigationOptions";
import {
  Food,
  Transport,
  Streaming,
  Custom,
  Electricity,
  AddPartnerButton,
} from "./components";

interface Props {
  navigation: {
    push: (screen: string) => void;
    goBack: () => void;
  };
}

/* multiply or divide by 1000 to have kilograms or meters */
const DEFAULT_SLIDER_VALUE_FOOD = 200 / 1000;
const DEFAULT_SLIDER_VALUE_TRANSPORT = 150 * 1000;
const DEFAULT_SLIDER_VALUE_ELECTRICITY = 100 * 3.6 * Math.pow(10, 6);
const DEFAULT_SLIDER_VALUE_STREAMING = 120 * 60;
const DEFAULT_SLIDER_VALUE_CUSTOM = 200;
const PARTNER_NAME_MAX_LENGTH = 150;

const AddPartnerScreen = ({
  navigation,
  locale = "",
  language = "",
}: Props & LocalizationContextProps) => {
  const location = useSelector(userPreferences.selectors.getLocation);
  const [partnerName, setPartnerName] = useState<string>("");
  const [partnerType, setPartnerType] = useState<PartnerType>(
    PartnerType.longterm
  );
  const [transportType, setTransportType] = useState<TransportEnum>(
    TransportEnum.car
  );
  const [electricityConsumption, setElectricityConsumption] = useState<number>(
    DEFAULT_SLIDER_VALUE_ELECTRICITY
  );
  const [foodType, setFoodType] = useState<FoodEnum>(FoodEnum.redMeat);
  const [streamingType, setStreamingType] = useState<StreamingEnum>(
    StreamingEnum.HDVideo
  );
  const [durationMinutes, setDurationMinutes] = useState<number>(
    DEFAULT_SLIDER_VALUE_TRANSPORT / 1000
  );
  const [durationSeconds, setDurationSeconds] = useState<number>(
    DEFAULT_SLIDER_VALUE_STREAMING
  );
  const [co2eqKilograms, setCo2eqKilograms] = useState<number>(
    DEFAULT_SLIDER_VALUE_CUSTOM
  );
  const [distance, setDistance] = useState<number>(
    DEFAULT_SLIDER_VALUE_TRANSPORT
  );
  const [quantity, setQuantity] = useState<number>(DEFAULT_SLIDER_VALUE_FOOD);

  const [creationDate, setCreationDate] = useState<Moment>(moment().utc());

  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(
    false
  );

  const [partnerData, setPartnerData] = useState<Partner>({
    isMitigated: false,
    preferences: [],
    creationDate: "",
    id: uuid(),
    location: undefined,
    name: "",
    partnerModelType: undefined,
    partnerType: undefined,
    value: 0,
  });
  const showDatePicker = useCallback(() => setDatePickerVisibility(true), []);
  const hideDatePicker = useCallback(() => setDatePickerVisibility(false), []);

  const handleConfirm = useCallback(
    (date: Date) => {
      hideDatePicker();
      const now = new Date();
      const effectiveCreationDate = time.getEarlierDate(date, now);
      setCreationDate(moment(effectiveCreationDate));
    },
    [hideDatePicker]
  );

  const partnerPayload: PartnerPayload = {
    creationDate: creationDate.toISOString(),
    name: "",
    partnerType: partnerType,
    value: 0,
    partnerModelType: null,
  };

  const renderTransport = () => {
    if (partnerType === PartnerType.longterm) {
      if (transportType === TransportEnum.plane) {
        partnerPayload.value = calculation.getFlightPartnerValue(
          durationMinutes
        );
        partnerPayload.partnerModelType = calculation.getFlightType(
          durationMinutes
        );
      } else {
        partnerPayload.value = distance;
        partnerPayload.partnerModelType = transportType;
      }

      return (
        <Transport
          defaultValueSlider={DEFAULT_SLIDER_VALUE_TRANSPORT}
          setDistance={setDistance}
          setDurationMinutes={setDurationMinutes}
          setTransportType={setTransportType}
          transportType={transportType}
        />
      );
    }
    return null;
  };

  const renderElectricity = () => {
    if (partnerType === PartnerType.onenight) {
      partnerPayload.value = electricityConsumption;
      partnerPayload.partnerModelType = location;

      return (
        <Electricity
          electricityCountry={location}
          defaultValueSlider={DEFAULT_SLIDER_VALUE_ELECTRICITY}
          setElectricityConsumption={setElectricityConsumption}
        />
      );
    }
    return null;
  };

  const renderFood = () => {
    if (partnerType === PartnerType.romantic) {
      partnerPayload.value = quantity;
      partnerPayload.partnerModelType = foodType;

      return (
        <Food
          defaultValueSlider={DEFAULT_SLIDER_VALUE_FOOD}
          setQuantity={setQuantity}
          setFoodType={setFoodType}
          foodType={foodType}
        />
      );
    }
    return null;
  };

  const renderStreaming = () => {
    if (partnerType === PartnerType.platonic) {
      partnerPayload.value = durationSeconds;
      partnerPayload.partnerModelType = streamingType;
      partnerPayload.location = location;

      return (
        <Streaming
          electricityCountry={location}
          defaultValueSlider={DEFAULT_SLIDER_VALUE_STREAMING}
          setDurationSeconds={setDurationSeconds}
          setStreamingType={setStreamingType}
          streamingType={streamingType}
        />
      );
    }
    return null;
  };

  const renderCustom = () => {
    if (partnerType === PartnerType.custom) {
      partnerPayload.value = co2eqKilograms;
      partnerPayload.partnerModelType = "custom";

      return (
        <Custom
          defaultValueSlider={DEFAULT_SLIDER_VALUE_CUSTOM}
          setCo2eqKilograms={setCo2eqKilograms}
        />
      );
    }
    return null;
  };

  const onTransportTagPress = useCallback(() => {
    setPartnerType(PartnerType.longterm);
  }, []);
  const onFoodTagPress = useCallback(() => {
    setPartnerType(PartnerType.romantic);
  }, []);
  const onStreamingTagPress = useCallback(() => {
    setPartnerType(PartnerType.platonic);
  }, []);
  const onElectricityTagPress = useCallback(() => {
    setPartnerType(PartnerType.onenight);
  }, []);
  const onCustomTagPress = useCallback(() => {
    setPartnerType(PartnerType.custom);
  }, []);

  const isDarkModeEnabled = ui.isDarkModeEnabled();

  const onChangePartnerName = useCallback((name: string) => {
    if (name.length < PARTNER_NAME_MAX_LENGTH) {
      setPartnerName(name);
    }
  }, []);

  const stylesqr = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: "#r77",
    },
    textBold: {
      fontWeight: "500",
      color: "#000",
    },
    buttonText: {
      fontSize: 21,
      color: "rgb(0,122,255)",
    },
    buttonTouchable: {
      padding: 16,
    },
  });

  const onSuccess = (e) => {
    const p: Partner = JSON.parse(e.data);
    setPartnerData(p);
  };

  function onPress(p) {
    //do nothing
  }

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.typeContainer}>
        <View style={styles.textContainer}>
          <Text.H3>{t("ADD_PARTNER_SCREEN_PARTNER_TYPE")}</Text.H3>
        </View>
        <ScrollView horizontal style={styles.tagContainer}>
          <Tag
            icon={"md-airplane"}
            selected={partnerType === PartnerType.longterm}
            title={t("ADD_PARTNER_SCREEN_TRANSPORT")}
            onPress={onTransportTagPress}
          />
          <Tag
            icon={"md-restaurant"}
            selected={partnerType === PartnerType.romantic}
            title={t("ADD_PARTNER_SCREEN_FOOD")}
            onPress={onFoodTagPress}
          />
          <Tag
            icon={"md-play-circle"}
            selected={partnerType === PartnerType.platonic}
            title={t("ADD_PARTNER_SCREEN_STREAMING")}
            onPress={onStreamingTagPress}
          />
          <Tag
            icon={"md-flash"}
            selected={partnerType === PartnerType.onenight}
            title={t("ADD_PARTNER_SCREEN_ELECTRICITY")}
            onPress={onElectricityTagPress}
          />
          <Tag
            icon={"md-build"}
            selected={partnerType === PartnerType.custom}
            title={t("ADD_PARTNER_SCREEN_CUSTOM")}
            onPress={onCustomTagPress}
          />
          <View style={styles.separator} />
        </ScrollView>
      </View>

      {/*{renderTransport()}*/}
      {/*{renderFood()}*/}
      {/*{renderStreaming()}*/}
      {/*{renderElectricity()}*/}
      {/*{renderCustom()}*/}

      <TextInput
        isOptional
        placeholder={t("ADD_PARTNER_SCREEN_TEXTINPUT_PLACEHOLDER")}
        title={t("ADD_PARTNER_SCREEN_NAME_PARTNER")}
        onChangeText={onChangePartnerName}
        value={partnerName}
      />
      {partnerData.preferences && partnerData.preferences.length > 0 ? (
        <ScrollView style={styles.scrollContainer}>
          <ListItem
            title={"These are your partner's preferences"}
            onPress={() => onPress}
          />
          {partnerData.preferences.map((p: Preference) => (
            <PreferenceSelection
              key={p.id}
              preference={p}
              onSelectPreference={() => onPress(p)}
              selectedPreference={p}
            />
          ))}
        </ScrollView>
      ) : (
        () => {
          // render nothing
        }
      )}

      {/*<DateTimePicker*/}
      {/*  headerTextIOS={t("ADD_PARTNER_SCREEN_PICKER_MODAL_HEADER_TEXT")}*/}
      {/*  confirmTextIOS={t("ADD_PARTNER_SCREEN_PICKER_MODAL_CONFIRM")}*/}
      {/*  cancelTextIOS={t("ADD_PARTNER_SCREEN_PICKER_MODAL_CANCEL")}*/}
      {/*  locale={locale}*/}
      {/*  isVisible={isDatePickerVisible}*/}
      {/*  isDarkModeEnabled={isDarkModeEnabled}*/}
      {/*  mode="date"*/}
      {/*  onConfirm={handleConfirm}*/}
      {/*  onCancel={hideDatePicker}*/}
      {/*/>*/}

      {/*<View style={styles.textContainer}>*/}
      {/*  <Text.H3>{t("ADD_PARTNER_SCREEN_DATE")}</Text.H3>*/}
      {/*  <View style={styles.dateContainer}>*/}
      {/*    <Text.Primary lightGray bold>*/}
      {/*      {creationDate.locale(language).format("dddd Do MMMM YYYY")}*/}
      {/*    </Text.Primary>*/}
      {/*    <TouchableOpacity onPress={showDatePicker}>*/}
      {/*      <Text.Primary bold green>*/}
      {/*        {t("ADD_PARTNER_SCREEN_CHANGE")}*/}
      {/*      </Text.Primary>*/}
      {/*    </TouchableOpacity>*/}
      {/*  </View>*/}
      {/*</View>*/}
      {partnerData.preferences || partnerData.preferences.length == 0 ? (
        <QRCodeScanner
          cameraProps={{ flashMode: RNCamera.Constants.FlashMode.torch }}
          onRead={onSuccess}
          cameraType={"back"}
          topContent={
            <Text.Primary style={stylesqr.centerText}>
              Go to{" "}
              <Text.Primary style={stylesqr.textBold}>
                wikipedia.org/wiki/QR_code
              </Text.Primary>{" "}
              on your computer and scan the QR code.
            </Text.Primary>
          }
          bottomContent={
            <TouchableOpacity style={stylesqr.buttonTouchable}>
              <Text.Primary style={stylesqr.buttonText}>
                OK. Got it!
              </Text.Primary>
            </TouchableOpacity>
          }
        />
      ) : (
        () => {
          // render nothing
        }
      )}

      <AddPartnerButton
        goBack={navigation.goBack}
        partnerData={partnerData}
        partnerPayload={{
          ...partnerPayload,
          name: partnerName,
          creationDate: creationDate.toISOString(),
        }}
      />
    </KeyboardAwareScrollView>
  );
};

AddPartnerScreen.navigationOptions = navigationOptions;
AppRegistry.registerComponent("default", () => AddPartnerScreen);

export default withLocalization(AddPartnerScreen);
