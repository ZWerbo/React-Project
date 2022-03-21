import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root.jsx"
import {login} from "./utils/session_api_util"



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore()
  ReactDOM.render(<Root store={store} />, root);
  window.getState = store.getState
  window.login = login
});


// let v = {username: 'zachwerb', password: 'password123'}

// let u = {username: 'zachwerb', email: 'fuckcoding@email.com', password: 'password123'}