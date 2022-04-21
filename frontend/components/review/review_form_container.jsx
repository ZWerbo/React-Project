import CreateReview from "./review_form";
import { createReview } from "../../actions/review_action";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal";

const mSTP = (state, ownProps) => {
    // console.log(ownProps.match.params.restaurantName)

    return {
        currentUserId: state.session.id,
        restaurantId: ownProps.match.params.restaurantId,
        restaurantName: ownProps.match.params.restaurantName

    }
}

const mDTP = dispatch => {
    return {
        createReview: review => dispatch(createReview(review)),
        closeModal: () => dispatch(closeModal())
    }
}


export default connect(mSTP, mDTP)(CreateReview)
