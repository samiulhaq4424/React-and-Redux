import { createSlice } from "@reduxjs/toolkit"; //as store will be collection of slices 
/**
 * createSlice simplifies Redux state management by combining actions and reducers into a single slice.
 * Actions and reducers are defined in one place, making it easier to manage state and action logic.
 * createSlice integrates with Redux Toolkit’s configureStore for a streamlined store setup and immutable state management using Immer.
 */


const counterSlice = createSlice({ //takes object
  name: 'counter', //name of slice in a store
  initialState: {counterVal: 0}, // counter is an object whose initial value is 0
  reducers: { //reducers is an object having it's functions 
    increment: (state) => { //state Argument: Each reducer function receives the current state as its first argument. This state is a mutable draft provided by Immer.
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      // In Redux Toolkit, the payload is the data that is passed along with an action to a reducer function. 
      // action Object: The action object contains a payload property, which is the value you pass when you dispatch the action. 
      // action.payload: This is the data you want to use to update the state.
      state.counterVal += Number(action.payload);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload);
    }
  }
});

export const counterActions = counterSlice.actions; //we can export the actions also
// counterSlice.actions contains action creators corresponding to each of the reducer functions defined in the slice. For example, counterSlice.actions.increment is an action creator for the increment reducer function.

export default counterSlice;