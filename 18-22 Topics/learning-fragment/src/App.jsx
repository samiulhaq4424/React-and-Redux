import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

import { useState } from "react"; //importing useState from react

/*
  --> In React, the useState hook 'returns' an array with two elements:
        1) The current state value: This represents the current state of the component.
        2) A function to update the state: This function allows you to change the state value.
*/

function App() {
  let [foodItems, setFoodItems] = useState([]); // useState() is a hook, here we are destructuring array returned by useState() where "foodItems" will have currently state value & "setFoodItems" is a function to update the state. Here, The argument passed to useState ([] in this case) is the initial value of the state. Here, it's an empty array, meaning that foodItems will start as an empty array.

  const onKeyDown = (event) => {
    // console.log(event);
    if (event.key === "Enter") { //event ke andar bht sara information ha, you can see in console, usme se ek "key" ha & when ENTER is pressed the key=ENTER
      let newFoodItem = event.target.value; //event ke andar bht sara information ha, you can see in console, usme se ek "target" ha, and "target" ke andar "value" ha
      event.target.value = ""; // Clear the input field(check by commentiong kya hota ha)
      let newItems = [...foodItems, newFoodItem]; // "..." is a spread operator jo current array (here) "foodItems" uska sara values "newItems" array me add kardega. Note: here "newFooditem" is also added to array "newItems" along withe the elements of "foodItems" array
      setFoodItems(newItems); //This tells React to update the foodItems state with the new array newItems. React will re-render the component with the updated state.
    }
  }

  /*
      <> is a React.Fragment, which is a component that allows you to group a list of children without adding extra nodes to the DOM. This is useful when you need to return multiple elements from a component without wrapping them in an additional element, such as a "div", i.e.
      <div>
        <Container>
          <h1 className="food-heading">Healthy Food</h1>
          <FoodInput handleKeyDown={onKeyDown}></FoodInput>
          <ErrorMessage items={foodItems}></ErrorMessage>
          <FoodItems items={foodItems}></FoodItems>
        </Container>
      </div>

      yaha sab div ke container me ajyega which is an extra node
  */
  return (
    <>
      <Container> 
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}//end of function

export default App;

// The "Container" component wraps it's children <h1>, <FoodInput>, <ErrorMessage>, and <FoodItems> components and ensures that all these components share the same container styling.