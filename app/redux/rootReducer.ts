import { combineReducers } from "@reduxjs/toolkit";

import { partners, consent, userPreferences } from "ducks";

const rootReducer = combineReducers({
  partners: partners.reducer,
  consent: consent.reducer,
  userPreferences: userPreferences.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
