import React from "react";
// import { fetchAllReservations } from "../../actions/reservation_action";
import ReservationProfileItem from "./reservation_item";


class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.fetchAllReservations()
        this.props.fetchAllReviews()
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

        console.log(UserRez)
        return (
            <div>
               {
this.props.reservations.map(reservation => {
    if(this.props.currentUserId === reservation.user_id) {
        return < ReservationProfileItem reservation={reservation} />
    }
})
               }
            </div>
        )
    }
}

export default UserProfile