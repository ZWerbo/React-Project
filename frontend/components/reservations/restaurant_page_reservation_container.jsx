import { connect } from "react-redux";
import RestaurantPageReservation from "./restaurant_page_reservation";
import { createReservation } from "../../actions/reservation_action";

const mSTP = (state, ownProps) => {
 
    return {
        currentUserId: state.session.id,
        currentUserEmail: state.session.email,
        restaurantId: Object.values(state.entities.restaurants)[0].id,
        reservations: Object.values(state.entities.reservations)
    }
}

const mDTP = (dispatch) => {
    return {
      createReservation: reservation => dispatch(createReservation(reservation))
    }   
}

export default connect(mSTP, mDTP)(RestaurantPageReservation)
