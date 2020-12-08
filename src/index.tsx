import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { defineCustomElements } from "@ionic/pwa-elements/loader";

const { REACT_APP_API_BASE_URL, REACT_APP_QR_CODE_BASE_URL } = process.env;
let missingEnvVars: string[] = [];

if (!REACT_APP_API_BASE_URL) {
  missingEnvVars = [...missingEnvVars, "REACT_APP_API_BASE_URL"];
}

if (!REACT_APP_QR_CODE_BASE_URL) {
  missingEnvVars = [...missingEnvVars, "REACT_APP_QR_CODE_BASE_URL"];
}
if (missingEnvVars.length > 0) {
  ReactDOM.render(
    <div style={{ color: "red", padding: "20px" }}>
      <h1>Environments variables are missing.</h1>
      <p>
        To fix this issue you can create a '.env' file at the root of the
        project and restart your application.
      </p>
      <p>The following variables are missing:</p>
      <ul>
        {missingEnvVars.map((envVar) => (
          <li key={envVar}>{envVar}</li>
        ))}
      </ul>
    </div>,
    document.getElementById("root")
  );
} else {
  // Call the element loader after the platform has been bootstrapped
  defineCustomElements(window);

  ReactDOM.render(<App />, document.getElementById("root"));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.register();
}
