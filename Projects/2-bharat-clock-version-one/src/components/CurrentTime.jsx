//here "lead" is taken from bootstrap in text section

let CurrentTime = () => {
  let time = new Date();

  return (
    // <p className="lead">
    //   Current time: {time.toLocaleDateString()} -{" "}
    //   {time.toLocaleTimeString()}
    // </p>

    //other way:
    <p className="lead">
        {`Current time: ${time.toLocaleDateString()} - ${time.toLocaleTimeString()}`}
    </p>
  );
};

export default CurrentTime;
