import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Provider } from "react-redux"; //Provider imported from react-redux
import counterStore from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*Provider is given store and store is given updated value i.e. counterStore */}
    <Provider store={counterStore}> 
      <App />
    </Provider>
  </React.StrictMode>
);
