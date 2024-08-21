import {configureStore} from "@reduxjs/toolkit" //like createStore in redux, now configureStore in reduxToolkit
import counterSlice from "./counter";
import privacySlice from "./privacy";

const counterStore = configureStore({   //creating store object; it take object of one or many reducer
  reducer: { 
    //.reducer is the property that Redux Toolkit use when passing the reducer functions to configureStore
  mycounter: counterSlice.reducer, //myCounter: The state slice managed by counterSlice
  myprivacy: privacySlice.reducer, //myPrivacy: The state slice managed by privacySlice
}});

export default counterStore;