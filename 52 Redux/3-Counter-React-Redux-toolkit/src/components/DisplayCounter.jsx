import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.mycounter); //in store, (store) => store.counter; name of slice is counter and counterVal is an object so (store) => store.counter returns an object
  return <p className="lead mb-4">Counter current Value: {counterVal}</p>;
};

export default DisplayCounter;
