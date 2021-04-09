import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Partner } from "interfaces";

const initialState: Partner[] = [];

const partners = createSlice({
  name: "partners",
  initialState,
  reducers: {
    createPartner(state, action: PayloadAction<Partner>) {
      state.push(action.payload);
    },
    deletePartnerById(state, action: PayloadAction<string>) {
      return (state = state.filter((item) => item.id !== action.payload));
    },
  },
});

const { createPartner, deletePartnerById } = partners.actions;

export const actions = { createPartner, deletePartnerById };

export const namespace = partners.name;

export const reducer = partners.reducer;
