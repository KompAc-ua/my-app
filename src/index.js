import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let dialogsData = [
  { id: 1, name: "Andrei" },
  { id: 2, name: "Vasya" },
  { id: 3, name: "Marina" },
  { id: 4, name: "Tolya" },
  { id: 5, name: "Kolya" },
  { id: 5, name: "Petya" },
];
let messageData = [
  { id: 1, message: "Hi! meet me pleas" },
  { id: 2, message: "OK i'm going to job interview" },
  { id: 3, message: "Thank you man! I aprisiate this much" },
  { id: 4, message: "Where are you" },
  { id: 5, message: "Nigga whatt?" },
];

ReactDOM.render(
  <React.StrictMode>
    <App d={dialogsData} m={messageData} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
