import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchAllReservations } from "../../actions/reservation_action";
import { fetchAllReviews } from "../../actions/review_action";

const mSTP = (state, ownProps) => {
    // console.log(state.entities.users)
    return {
        currentUserId: state.session.id,
        reservations: Object.values(state.entities.reservations),
        currentUser: state.session
    }
}

const mDTP = (dispatch) => {
    return {
        fetchAllReviews: () => dispatch(fetchAllReviews()),
        fetchAllReservations: () => dispatch(fetchAllReservations())
    }
}

export default connect(mSTP, mDTP)(UserProfile)