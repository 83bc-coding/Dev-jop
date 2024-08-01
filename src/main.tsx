import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import JobsContextProvider from "./store/JobDetalis/JobsContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JobsContextProvider>
      {" "}
      <App />{" "}
    </JobsContextProvider>
  </React.StrictMode>
);
