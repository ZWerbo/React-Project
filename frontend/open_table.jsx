import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root.jsx"
import {login, logout} from "./utils/session_api_util"



document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id, username: window.currentUser.username, email: window.currentUser.email }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  // const store = configureStore()
  ReactDOM.render(<Root store={store} />, root);
  window.getState = store.getState
  window.login = login
  window.logout= logout
});


// let v = {username: 'zachwerb', password: 'password123'}

// let u = {username: 'zachwerb', email: 'fuckcoding@email.com', password: 'password123'}