import { useSelector } from "react-redux";

const DisplayCounter = () => {
  // useSelector() helps you connect your component to the Redux store and read state values(store pe subscription karna and subscription ko manage karna, ye sab karega)
  // in useSelector, store is there and here we are accessing the "counter value from store" i.e. (store) => store.counter
  // now whenever counter ka value change hoga, <p> will be displayed
  const counter = useSelector((store) => store.counter);

  return <p className="lead mb-4">Counter current Value: {counter}</p>; //bootstrap ka actual code ha in App.jsx me ha waha se liya ha
};

export default DisplayCounter;
