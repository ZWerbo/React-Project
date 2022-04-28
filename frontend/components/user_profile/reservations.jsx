import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { deleteReservation, fetchAllReservations } from "../../actions/reservation_action";
import ReservationProfileItem from "./reservation_item";


// class ReservationProfile extends React.Component {
//     constructor(props) {
//         super(props)
//         this.currentDate = new Date();

//     }

const ReservationProfile = ({fetchAllReservations, reservations, deleteReservation}) => {

    const loadingChanges = useRef(true)
    

    useEffect(() => {
        // debugger
        if(loadingChanges.current) {
            fetchAllReservations()
            loadingChanges.current = false
        }
    }, [reservations])

 
        if(!reservations) return null;
     

        return (
            <div  className="reservation-container">
                <div>
                <div className="your-reservations-title">Your upcoming Reservations</div>
                {reservations.map(reservation => {
                       const current = new Date();
                       console.log(current)
                       var newCurrent = current.setDate(current.getDate()-2);
                    //    console.log(newCurrent)
                    //    console.log(new Date(reservation.date))
                    if(new Date(reservation.date) >= newCurrent) {
                        
                        return <ReservationProfileItem reservation={reservation} deleteReservation={deleteReservation} loadingChanges={loadingChanges}  />

                    }
                    })}
                </div>

                <div>
                <div className="your-reservations-title">Your past Reservations</div>
                {reservations.map(reservation => {
                    const current = new Date();
                    var newCurrent = current.setDate(current.getDate()- 2);
                    if(new Date(reservation.date) < newCurrent) {
                
                        return <ReservationProfileItem reservation={reservation} deleteReservation={deleteReservation} loadingChanges={loadingChanges}  />

                    }
                    })}
                </div>

                    


            </div>
        )
    }
// }




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