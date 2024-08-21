const ErrorMessage = ({ items }) => {
  return (
  <>{items.length === 0 && <h3 style={{textAlign: "center"}}>I am still hungry.</h3>}</>
  );
  // here if condition is false, then falsy value is returned and jsx ignore all falsy values(null, undefined, NAN, 0, "")
};

export default ErrorMessage;
