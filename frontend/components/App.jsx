import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { Link } from "react-router-dom";
import { AuthRoute } from "../utils/route_util";
import Modal from "./modal/modal.jsx";

const App = () => (
  <div>
      <header className="top-header">
        <div className="top-of-the-page"></div>
        <Link to='/'>OpenTable</Link>
      </header>
    <Modal />
        <GreetingContainer />
    <div className="index-page-search-box"></div>

    {/* <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} /> */}
  </div>
);

export default App;