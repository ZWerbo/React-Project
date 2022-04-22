import React from "react";
import { connect } from "react-redux";
import { fetchAllReservations } from "../../actions/reservation_action";
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
        // const current = new Date();
        // current.setDate(current.getDate()-1);
        // console.log(current)
     

        return (
            <div  className="reservation-container">
                <div>
                <h1>Your upcoming Reservations</h1>
                {this.props.reservations.map(reservation => {
                       const current = new Date();
                       var newCurrent = current.setDate(current.getDate()-1);
                    if(new Date(reservation.date) >= newCurrent) {
                
                        return <ReservationProfileItem reservation={reservation}  />

                    }
                    })}
                </div>

                <div>
                <h1>Your past Reservations</h1>
                {this.props.reservations.map(reservation => {
                    const current = new Date();
                    var newCurrent = current.setDate(current.getDate()-1);
                    if(new Date(reservation.date) < newCurrent) {
                
                        return <ReservationProfileItem reservation={reservation}  />

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
        fetchAllReservations: () => dispatch(fetchAllReservations())
    }
}

export default connect(mSTP, mDTP)(ReservationProfile)