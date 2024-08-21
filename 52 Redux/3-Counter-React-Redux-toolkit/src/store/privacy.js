import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: 'privacy',
  initialState: false, //privacy is a boolean variabel whose initial value is false
  reducers: {
    toggle: (state) => {
      return state = !state;
      /**
       * Primitives (e.g., booleans): Returning a new value is fine. For boolean values, using return !state; is a common approach.
       * Complex State (e.g., objects/arrays): Use direct mutations. For example, state.someProperty = newValue; is the preferred method as done in counter.js
       */
    }
  }
});

export const privacyActions = privacySlice.actions;

export default privacySlice;