import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ElectricityEnum } from "carbon-footprint";

import { Preference } from "interfaces/partner/partner.interface";

const initialState = {
  acceptedTermsOfUseVersion: 0,
  activatedNotifications: false,
  location: ElectricityEnum.world,
  preferences: [],
};

const userPreferences = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {
    acceptTermsOfUse(state, action: PayloadAction<number>) {
      state.acceptedTermsOfUseVersion = action.payload;
    },
    toggleNotifications(state, action: PayloadAction<boolean>) {
      state.activatedNotifications = action.payload;
    },
    updateLocation(state, action: PayloadAction<ElectricityEnum>) {
      state.location = action.payload;
    },
    addPreference(state, action: PayloadAction<Preference>) {
      state.preferences.push(action.payload);
    },
    removePreference(state, action: PayloadAction<Preference>) {
      const index = state.preferences.findIndex(
        (p) => p.id == action.payload.id
      );
      console.log(index);
      if (index > -1) {
        state.preferences.splice(index, 1);
      }
    },
  },
});

const {
  acceptTermsOfUse,
  updateLocation,
  toggleNotifications,
  addPreference,
  removePreference,
} = userPreferences.actions;

export const actions = {
  acceptTermsOfUse,
  updateLocation,
  toggleNotifications,
  addPreference,
  removePreference,
};

export const namespace = userPreferences.name;

export const reducer = userPreferences.reducer;
