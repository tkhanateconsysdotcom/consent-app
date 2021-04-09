import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  monthlyAcceptanceConsent: 166,
};

const partners = createSlice({
  name: "consent",
  initialState,
  reducers: {
    setMonthlyAcceptanceConsent(state, action: PayloadAction<number>) {
      state.monthlyAcceptanceConsent = action.payload;
    },
  },
});

const { setMonthlyAcceptanceConsent } = partners.actions;

export const actions = { setMonthlyAcceptanceConsent };

export const namespace = partners.name;

export const reducer = partners.reducer;
