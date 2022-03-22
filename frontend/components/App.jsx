import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { Link } from "react-router-dom";
import Modal from "./modal";

const App = () => (
  <div>
      < Modal />
      <header className="top-header">
        <div className="top-of-the-page"></div>
        <Link to='/'>OpenTable</Link>
      </header>
        <GreetingContainer />
    <div className="index-page-search-box"></div>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;