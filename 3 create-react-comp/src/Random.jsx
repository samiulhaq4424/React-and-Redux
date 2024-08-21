function Random() {
  let number = Math.random() * 100;
  return (
    /* In JSX, the style attribute should be an object. The property names should be camelCase (e.g., "backgroundColor" instead of "background-color"), and the value should be a string. */
    <h1 style={{ backgroundColor: "#776691" }}>
      Random number is: {Math.round(number)}
    </h1>
  );
}

export default Random;
