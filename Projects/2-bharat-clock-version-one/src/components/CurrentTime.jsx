//here for function, just to see "=>" use kar rahe hai
//here "lead" is taken from bootstrap in text section

let CurrentTime = () => {
  let time = new Date();

  return (
    <p className="lead">
      Current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
