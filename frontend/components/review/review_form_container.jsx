import CreateReview from "./review_form";
import { createReview } from "../../actions/review_action";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal";

const mSTP = (state, ownProps) => {
    // console.log(ownProps.ownProps.match.params.restaurantId)
    // console.log(state.entities)
    return {
        currentUserId: state.session.id,
        // restaurantId: ownProps.match.params.restaurantId
        // restaurantId: ownProps.ownProps.match.params.restaurantId
        // restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
        // review: state.entities.reviews[ownProps.match.params.reviewId]

    }
}

const mDTP = dispatch => {
    return {
        createReview: review => dispatch(createReview(review)),
        closeModal: () => dispatch(closeModal())
    }
}


export default connect(mSTP, mDTP)(CreateReview)
