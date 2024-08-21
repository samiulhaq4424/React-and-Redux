import { useState } from "react";
import Item from "./Item"; //importing items

const FoodItems = ({ items }) => { //destructing so using {items} where items is an array passed from App.jsx
  
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    // class "list-group" is from bootstrap
    <ul className="list-group"> 
      {items.map((item) => (
        <Item
          key={item} //key 
          foodItem={item}
          bought={activeItems.includes(item)} // .includes(item) is a JavaScript array method that checks if the item is present in the activeItems array. It returns true if the item is found and false otherwise.
          handleBuyButton={() => onBuyButton(item)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
