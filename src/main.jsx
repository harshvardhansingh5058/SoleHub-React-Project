// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer />
  </>
);