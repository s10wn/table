import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

axios.defaults.baseURL = `https://jsonplaceholder.typicode.com`;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
