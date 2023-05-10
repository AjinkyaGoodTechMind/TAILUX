import React from "react";
import ReactDOM from "react-dom/client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "./index.css";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
