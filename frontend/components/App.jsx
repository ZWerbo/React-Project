import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import Modal from "./modal/modal.jsx";
import RestaurantIndexContainer from "./restaurant/restaurant_index_container";
import RestaurantShowContainer from "./restaurant/restaurant_show_container";
import SearchBar from "./searchbar/searchbar";
import ReviewIndexContainer from "./review/review_index_container";
import CreateReview from "./review/review_form";
import ReviewFormContainer from "./review/review_form_container";
import EditReviewFormContainer from "./review/edit_review_form_container";
import ConfirmationReservationContainer from "./reservations/confirmation_reservation_container";
import UserProfileContainer from "./user_profile/user_profile_container";
const App = () => (
  <div>
        <div className="top-of-the-page"></div>

        <div className="logo-signup-profile">
        <a href="/">
          <img src="//cdn.otstatic.com/cfe/8/images/opentable-logo-153e80.svg" className="logo" />
        </a>
        {/* <div className="filldiv" ></div> */}
        <GreetingContainer className="greeting-container-class" />
        </div>


    <Modal />
    {/* <div className="index-page-search-box"></div> */}
    <Route exact path='/' component={SearchBar} />
    
    <Route exact path='/' component={RestaurantIndexContainer} />
    <Route exact path="/restaurants/:restaurantId" component={Modal}/>
    <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer}/>
    <Route exact path="/restaurants/:restaurantId/review" component={ReviewFormContainer}/>
    <Route exact path="/restaurants/:restaurantId/review/:reviewId" component={EditReviewFormContainer}/>
    <ProtectedRoute exact path="/reservations/:reservationId" component={ConfirmationReservationContainer} />
    <ProtectedRoute exact path="/:userId/profile" component={UserProfileContainer} />
    {/* <Route exact path="/restaurants/:restaurantId" component={ReviewIndexContainer}/> */}
    {/* <div className="footer-container"></div> */}
  </div>
);

export default App;