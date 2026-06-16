// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/style.css";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);