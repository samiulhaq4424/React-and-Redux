import { MyButton } from "./MyButton"; //here we are using {} ke andar MyButton as in MyButton.jsx, shorter method is used i.e. "export" is used and not "export default" in MyButton.jsx
import Hello from "./Hello"; //here we are not using {} as we have used "export default" in Hello.jsx
import Random from "./Random";

function App() {
  //name of component is App(it is a functional component)
  return (
    <div>
      <h1>Hi, I am learning React...!</h1>
      <MyButton></MyButton>
      <br />
      <Hello />
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
  );
}

export default App; //if we want component App to be used somewhere else
