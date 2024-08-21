import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  // useDispatch() is a hook from react-redux used to obtain the dispatch function, here we named the dispatch function as dispatch only, then we can use this dispatch function to send actions to the reducer function in index.js file, which then triggers state updates.
  const dispatch = useDispatch(); 

  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          class="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>

      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mycontrol-row"> {/* mycontrol-row class added*/}
        <input
          type="text"
          placeholder="Enter number"
          className="mynumber-input" //mynumber-input added to class
          ref={inputElement}
        />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;

/* div & button code taken from bootstrap: https://getbootstrap.com/docs/5.3/examples/heroes/ by using inspect

      <div class="px-4 py-5 my-5 text-center">
          <img class="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
          <h1 class="display-5 fw-bold text-body-emphasis">Centered hero</h1> ///this part only///
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
            </div>
          </div>
        </div>

*/