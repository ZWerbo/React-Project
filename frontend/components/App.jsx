import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { Link } from "react-router-dom";
import { AuthRoute } from "../utils/route_util";
import Modal from "./modal/modal.jsx";
import RestaurantIndexContainer from "./restaurant/restaurant_index_container";
import RestaurantShowContainer from "./restaurant/restaurant_show_container";
import SearchBar from "./searchbar/searchbar";

const App = () => (
  <div>
      <header className="top-header">
        <div className="top-of-the-page"></div>
        <a href="/">
          <img src="//cdn.otstatic.com/cfe/8/images/opentable-logo-153e80.svg" className="logo" />
        </a>
      </header>
    <Modal />
        <GreetingContainer />
    {/* <div className="index-page-search-box"></div> */}
    <Route exact path='/' component={SearchBar} />
    <Route exact path='/' component={RestaurantIndexContainer} />
    <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer}/>
  </div>
);

export default App;