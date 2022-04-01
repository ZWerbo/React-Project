import { connect } from "react-redux";
import { fetchReservation, updateReservation } from "../../actions/reservation_action";
import ConfirmationReservation from "./confirmation_reservation";


//make it reservation id in the /reservationId/booking
//then access the ownProps to 
const mSTP = (state, ownProps) => {

    return {
        // currentUser: Object.values(state.entities.users)[0].id,
        currentUserId: state.session.id,
        reservationId: ownProps.match.params.reservationId,
        reservation: state.entities.reservations[ownProps.match.params.reservationId],
        email: Object.values(state.entities.users)[0].id

    }
}

const mDTP = (dispatch) => {
    return {
        updateReservation: reservation => dispatch(updateReservation(reservation)),
        fetchReservation: reservationId => dispatch(fetchReservation(reservationId))
    }
}

export default connect(mSTP, mDTP)(ConfirmationReservation)