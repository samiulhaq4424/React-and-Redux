import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={() => onButtonClick(buttonName)} // see below IMPORTANT
          > 
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;

/*
  --> onClick= {onButtonClick(buttonName)} [if we used, then-]

      In this line:
      - onButtonClick(buttonName): This is a function call. It immediately invokes the onButtonClick function with buttonName as an argument right when the component is rendered.
      - onClick: This is an attribute that expects a function to be executed when the button is clicked. By assigning onButtonClick(buttonName) directly, you are not assigning a function to onClick; instead, you are calling onButtonClick immediately during the rendering phase.

      Consequences:
      - Immediate Execution: onButtonClick gets called as soon as the component renders, not when the button is clicked.
      - No Event Handling: This setup does not work as intended for handling button clicks.

  --> onClick={() => onButtonClick(buttonName)}

      In this line:
      - () => onButtonClick(buttonName): This is an arrow function that returns the result of onButtonClick(buttonName).
      - onClick: This attribute now gets a function that will be executed when the button is clicked.

      How It Works:
      - Arrow Function: () => onButtonClick(buttonName) is an arrow function that does nothing on its own when the component renders. It just defines what should happen when the button is clicked.
      - Event Handling: When you click the button, React will call the arrow function, which in turn calls onButtonClick(buttonName) with the appropriate button name.
*/

/*
    --> onClick={onButtonClick}
        - If the onButtonClick function does not require any parameters and only needs to handle the click event, then using 
        onClick={onButtonClick} is perfectly fine. In this case, onButtonClick will be called when the button is clicked, and it will receive the click event as its argument.

      - If onButtonClick needs to receive additional arguments (such as the button name), then using onClick={onButtonClick} directly won't work. Instead, you need to pass an arrow function or another function that calls onButtonClick with the necessary parameters.
      onClick={() => onButtonClick(buttonName)}
*/