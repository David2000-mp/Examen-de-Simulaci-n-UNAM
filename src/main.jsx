import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { registerSWWithPrompt } from "./pwa/registerSW";
import { ExamProvider } from "./state/ExamProvider";

registerSWWithPrompt();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ExamProvider>
        <App />
      </ExamProvider>
    </BrowserRouter>
  </React.StrictMode>
);
