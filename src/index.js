import React from "react";
import { render } from "react-dom";
import "./index.css";
import { ContextProvider } from "./context/ContextProvider";
import App from "./App";

const root = document.getElementById("root");
render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  root
);
