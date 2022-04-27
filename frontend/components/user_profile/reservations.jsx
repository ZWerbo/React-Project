import React from "react";
import { connect } from "react-redux";
import { deleteReservation, fetchAllReservations } from "../../actions/reservation_action";
import ReservationProfileItem from "./reservation_item";


class ReservationProfile extends React.Component {
    constructor(props) {
        super(props)
        this.currentDate = new Date();

    }


    componentDidMount() {
        this.props.fetchAllReservations()
    }



    render() {
        if(!this.props.reservations) return null;
     

        return (
            <div  className="reservation-container">
                <div>
                <h1>Your upcoming Reservations</h1>
                {this.props.reservations.map(reservation => {
                       const current = new Date();
                       var newCurrent = current.setDate(current.getDate()-1);
                    if(new Date(reservation.date) >= newCurrent) {
                
                        return <ReservationProfileItem reservation={reservation} deleteReservation={this.props.deleteReservation}  />

                    }
                    })}
                </div>

                <div>
                <h1>Your past Reservations</h1>
                {this.props.reservations.map(reservation => {
                    const current = new Date();
                    var newCurrent = current.setDate(current.getDate()-1);
                    if(new Date(reservation.date) < newCurrent) {
                
                        return <ReservationProfileItem reservation={reservation} deleteReservation={this.props.deleteReservation}  />

                    }
                    })}
                </div>

                    


            </div>
        )
    }
}




const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        reservations: Object.values(state.entities.reservations),
        currentUserId: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        fetchAllReservations: () => dispatch(fetchAllReservations()),
        deleteReservation: reservationId => dispatch(deleteReservation(reservationId))
    }
}

export default connect(mSTP, mDTP)(ReservationProfile)