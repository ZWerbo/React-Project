import React from "react";
// import { fetchAllReservations } from "../../actions/reservation_action";
import ReservationProfileItem from "./reservation_item";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import  UserEditForm from "./user_edit_form";
import { Switch } from "react-router-dom";
import Reservations from "./reservations";
import UserReviews from "./user_reviews";


class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        // this.props.fetchAllReservations()
        // this.props.fetchAllReviews()
    }


    render() {
        // console.log(this.props.currentUserId)
        var UserRez;
        for(let i = 0; i < this.props.reservations.length; i++) {
            // console.log(this.props.reservations[i].user_id)
            if(this.props.currentUserId === this.props.reservations[i].userId) {
                UserRez = this.props.reservations[i]
            }
        }

        return (
            <div className="profile-page-main">
                <div className="profile-header" >
                    <h1>{this.props.currentUser}</h1>
                </div>


                <div className="flex-container">
                <div className="far-left-box"></div>

                <div className="left">
                    <ul>
                        <Link className="profile-link" to={`/${this.props.currentUserId}/profile/reservations`}>Reservations</Link>
                        <Link className="profile-link" to={`/${this.props.currentUserId}/profile`}>Account Details</Link>
                        <Link className="profile-link">Favorite Restaurants</Link>
                        <Link className="profile-link" to={`/${this.props.currentUserId}/profile/reviews`}>Reviews</Link>
                    </ul>
                </div>

                <div className="form-section">
                    <div className="user-row"></div>
             
                    <Route exact path={`/:userId/profile/reservations`}  component={Reservations}/>
                    <Route exact path={`/:userId/profile`} component={UserEditForm} />
                    <Route exact path={'/:userId/profile/reviews'} component={UserReviews}  /> 

         
                    {/* <Route exact path={`/users/:userId/bookings`} component={UserBookingIndexContainer} />
                    <Route exact path={`/users/:userId/fav`} component={UserFavIndexContainer} /> */}
                </div>
                    <div className="right-side"></div>
                </div>



                {/* {this.props.reviews[0].body}
               {
this.props.reservations.map(reservation => {
    if(this.props.currentUserId === reservation.user_id) {
        return < ReservationProfileItem reservation={reservation} key={reservation.id}/>
    }
})
               } */}
            </div>
        )
    }
}

export default UserProfile