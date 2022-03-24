import { connect } from "react-redux";
import { fetchAllRests } from "../../actions/restaurant_action";
import RestaurantIndex from "./restaurant_index";

const mSTP = state => {
    return {
        restaurants: Object.values(state.entities.restaurants)
    }
}

const mDTP = dispatch => {
    return {
        fetchAllRests: () => dispatch(fetchAllRests())
    }
}

export default connect(mSTP, mDTP)(RestaurantIndex)