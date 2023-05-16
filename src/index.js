import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import axios from 'axios'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App";
import store from './store'


axios.defaults.withCredentials = true

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
