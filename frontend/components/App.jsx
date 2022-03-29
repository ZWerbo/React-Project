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
import ReviewIndexContainer from "./review/review_index_container";
import CreateReview from "./review/review_form";
import ReviewFormContainer from "./review/review_form_container";
import EditReviewFormContainer from "./review/edit_review_form_container";

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
    <Route exact path="/restaurants/:restaurantId" component={Modal}/>
    <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer}/>
    <Route exact path="/restaurants/:restaurantId/review" component={ReviewFormContainer}/>
    <Route exact path="/restaurants/:restaurantId/review/:reviewId" component={EditReviewFormContainer}/>
    
    {/* <Route exact path="/restaurants/:restaurantId" component={ReviewIndexContainer}/> */}
    <footer className="footer-container"></footer>
  </div>
);

export default App;