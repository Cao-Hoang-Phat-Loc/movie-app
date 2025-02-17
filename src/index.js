import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { LoginProvider } from "./context/LoginContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoginProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LoginProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
