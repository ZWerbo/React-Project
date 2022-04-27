import React, { useState } from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import Modal from "./modal/modal.jsx";
import RestaurantIndexContainer from "./restaurant/restaurant_index_container";
import RestaurantShowContainer from "./restaurant/restaurant_show_container";
import ReviewFormContainer from "./review/review_form_container";
import EditReviewFormContainer from "./review/edit_review_form_container";
import ConfirmationReservationContainer from "./reservations/confirmation_reservation_container";
import UserProfileContainer from "./user_profile/user_profile_container";
import SearchbarContainer from "./searchbar/searchbar_container";
import MainPage from './main/main_page.jsx'
import SearchPage from "./searchbar/search_page";
import SearchPageContainer from "./searchbar/search_page_container";
import EditReservation from "./reservations/edit_reservation";
const App = () => {
  //exact path broke the switch on the profile to make the routes go either way. 
  return (
  <div>
        <div className="top-of-the-page"></div>

        <div className="logo-signup-profile">
        <a href="/">
          <img src="//cdn.otstatic.com/cfe/8/images/opentable-logo-153e80.svg" className="logo" />
        </a>
        <GreetingContainer className="greeting-container-class" />
        </div>


    <Modal />
    {/* <div className="index-page-search-box"></div> */}
    {/* <Route exact path='/' component={() => <SearchbarContainer setUpdated={setUpdated}/>} />
    <Route exact path='/' component={RestaurantIndexContainer} updated={updated} /> */}
    <Route exact path='/' component={MainPage}   />
    <Route exact path='/search' component={SearchPageContainer} />
    <Route exact path="/restaurants/:restaurantId" component={Modal}/>
    <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer}/>
    <Route exact path="/restaurants/:restaurantName/:restaurantId/review" component={ReviewFormContainer}/>
    <Route exact path="/restaurants/:restaurantId/review/:reviewId" component={EditReviewFormContainer}/>
    <ProtectedRoute exact path="/reservations/:reservationId" component={ConfirmationReservationContainer} />
    <ProtectedRoute exact path="/reservations/:reservationId/edit" component={EditReservation} />
    <ProtectedRoute path="/:userId/profile" component={UserProfileContainer} />

    {/* <Route exact path="/restaurants/:restaurantId" component={ReviewIndexContainer}/> */}
    {/* <div className="footer-container"></div> */}

  
  </div>
  )
};

export default App;