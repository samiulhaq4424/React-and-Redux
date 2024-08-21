import styles from "./Container.module.css";

// When using { children } in the parameter list of your functional component, you are destructuring the children prop from the props object. This is a shorthand for accessing props.children
const Container = ({ children }) => {
  return (<div className={styles.container}>{children}</div>); // or, className={styles["container"]}
};

export default Container;

/*
  - Container Component: It takes children as a prop and renders them inside a div with a class name derived from the Container.module.css file. 
  - The "Container" component wraps it's children <h1>, <FoodInput>, <ErrorMessage>, and <FoodItems> components and ensures that all these components 
    share the same container styling.
*/