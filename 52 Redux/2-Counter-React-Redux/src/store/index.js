import {createStore} from "redux";

const INITIAL_VALUE = { //say, INITIAL_VALUE
  counter: 0,
  privacy: false
}


/* here, {...store, counter: store.counter + 1} means:
  1) {...store}: Copies all existing properties from store into a new object.
  2) counter: store.counter + 1: Updates the counter property of the new object with the new value, while keeping the other properties   unchanged.
*/
const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === 'INCREMENT') {
    return {...store, counter: store.counter + 1};
  } else if (action.type === 'DECREMENT') {
    return {...store, counter: store.counter - 1};
  } else if (action.type === 'ADD') {
    return {...store, counter: store.counter + Number(action.payload.num)}; //Number() in JS is used to convert a value to a number, here action.payload.num is a string
  } else if (action.type === 'SUBTRACT') {
    return {...store, counter: store.counter - Number(action.payload.num)};
  } else if (action.type === 'PRIVACY_TOGGLE') {
    return {...store, privacy: !store.privacy};
  }
  return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;