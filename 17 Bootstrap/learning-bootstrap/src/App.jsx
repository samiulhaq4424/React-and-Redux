import "./App.css";


function App() {
  return (
    <div>
      {/* below button code is taken from: https://getbootstrap.com/docs/5.3/components/buttons/ */}
      {/* here, added my class "myButton" to give margin to buttons */}
      <button type="button" className="btn btn-primary myButton">
        Primary
      </button>
      <button type="button" className="btn btn-secondary myButton">
        Secondary
      </button>
      <button type="button" className="btn btn-success myButton">
        Success
      </button>
      <button type="button" className="btn btn-danger myButton">
        Danger
      </button>
      <button type="button" className="btn btn-warning myButton">
        Warning
      </button>
      <button type="button" className="btn btn-info myButton">
        Info
      </button>
      <button type="button" className="btn btn-light myButton">
        Light
      </button>
      <button type="button" className="btn btn-dark myButton">
        Dark
      </button>
      <button type="button" className="btn btn-link myButton">
        Link
      </button>
    </div>
  );
}

export default App;
