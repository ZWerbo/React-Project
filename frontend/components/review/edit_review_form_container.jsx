import { connect } from "react-redux"
import EditReview from "./edit_review_form"
import { fetchReview } from "../../actions/review_action"
import { updateReview } from "../../actions/review_action"


const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        reviewId: ownProps.match.params.reviewId,
        review: state.entities.reviews[ownProps.match.params.reviewId]
        // review: _.find(state, 'id', ownProps.params.reviewId)
        // review: ownProps.review
        // review: state.entities.reviews[ownProps.match.params.review.id]
    }
}

const mDTP = (dispatch) => {
    return {
       fetchReview: reviewId => dispatch(fetchReview(reviewId)),
       updateReview: review => dispatch(updateReview(review))
    }
}


export default connect(mSTP, mDTP)(EditReview)