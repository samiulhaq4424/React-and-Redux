const redux = require('redux'); //used in Node.js and JavaScript environments to import the redux library

const INITIAL_VALUE = {
  counter: 0
};

const reducer = (store = INITIAL_VALUE, action) => { //reducer function; store = INITIAL_VALUE as initially when store is passed it will be "undefined"
  let newStore = store;
  if (action.type === 'INCREMENT') {
    newStore = {counter: store.counter + 1}; // making new store as store which is passed is immutable and not to be changed
  } else if (action.type === 'DECREMENT') {
    newStore = {counter: store.counter - 1};
  } else if (action.type === 'ADDITION') {
    newStore = {counter: store.counter + action.payload.number};
  }
  return newStore;
}

const store = redux.createStore(reducer); //creating store (it is deprecated but using here to learn basics), it takes a reducer function as parameter

//a "subscriber" refers to a function that listens for changes in the Redux store. When the store's state is updated, subscribers(i.e. a component) are notified, allowing them to react to these changes.
const subscriber = () => { 
  const state = store.getState(); //getState() is a method of the Redux store that allows you to access the current state of the store    i.e. const store = redux.createStore(reducer)
  console.log(state);
}


store.subscribe(subscriber); //subscribe() method is used to register a listener function that will be called whenever the state of the store changes; here subscriber function has subscribed to store, so any changes in store will be notified to subscriber function


/* 
    1) When you call store.dispatch(action), you are sending an action to the store. This action is then processed by the reducer function to produce a new state. 
    2) The reducer function receives the current state and the dispatched action, performs the necessary state updates, and returns the new state.
    3) The Redux store updates its state based on the result from the reducer and notifies subscribers of the state change.
*/
//parameter passed is an object which is an action and send the action to reducer
store.dispatch({type: 'INCREMENT'}); //output: { counter: 1 }
store.dispatch({type: 'DECREMENT'}); //output: { counter: 0 }
store.dispatch({type: 'INCREMENT'}); //output: { counter: 1 }
store.dispatch({type: 'ADDITION', payload: {number: 7}}); //output: { counter: 8 }
store.dispatch({type: 'DECREMENT'}); //output: { counter: 7 }