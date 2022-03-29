import { connect } from "react-redux";
import { fetchAllRests } from "../../actions/restaurant_action";
import RestaurantIndex from "./restaurant_index";
import { fetchAllReviews } from "../../actions/review_action";

const mSTP = state => {

    return {
        restaurants: Object.values(state.entities.restaurants),
        reviews: Object.values(state.entities.reviews)
    }
}

const mDTP = dispatch => {
    return {
        fetchAllRests: () => dispatch(fetchAllRests()),
        fetchAllReviews: () => dispatch(fetchAllReviews())
    }
}

export default connect(mSTP, mDTP)(RestaurantIndex)