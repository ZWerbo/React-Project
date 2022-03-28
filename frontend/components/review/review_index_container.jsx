import { connect } from "react-redux";
import { fetchAllReviews, deleteReview } from "../../actions/review_action";
import ReviewIndex from "./review_index";
import { fetchAllUsers } from "../../actions/user_action";
import { openModal } from "../../actions/modal";

const mSTP = (state, ownProps) => {
    return {
        reviews: Object.values(state.entities.reviews),
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        // restaurants: state.entities.restaurants
        // restaurantId: state.entities.restaurants[ownProps.match.params.restaurantId]
        users: Object.values(state.entities.users)
    }
}

const mDTP = dispatch => {
    return {
        fetchAllReviews: (restaurantId) => dispatch(fetchAllReviews(restaurantId)),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        deleteReview: reviewId => dispatch(deleteReview(reviewId)),
        openModal: modal => dispatch(openModal(modal))
    }
}



export default connect(mSTP, mDTP)(ReviewIndex)