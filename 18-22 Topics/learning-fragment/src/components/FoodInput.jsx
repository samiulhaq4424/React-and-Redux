import styles from "./FoodInput.module.css";

/*
  In React, "onKeyDown" is an event handler that can be used to capture and respond to keypresses when a user interacts with an element, such as an input field or a button. This event handler is similar to the "onkeydown" event in standard HTML/JavaScript but is used within React’s component-based architecture.
*/
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onKeyDown={handleKeyDown}/> // specifying that the handleKeyDown function should be called whenever a key is pressed down while the element has focus.
  );
};

export default FoodInput;
