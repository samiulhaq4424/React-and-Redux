function Hello() {
  /*
      Note: Using {}, we can embed any JS expression directly within JSX. This includes variables, function calls, and more
  */
  let number = 778;
  let fullName = () => {
    return "Samiul Haque";
  };

  return (
    <p>
      MessageNo: {number}, I am your friend {fullName()}..!
    </p>
  );
}

export default Hello;
