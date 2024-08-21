import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayValue} // The value displayed in the input field
      readOnly //display me jo value hoga woh read only hoga
    />
  );
};

export default Display;
