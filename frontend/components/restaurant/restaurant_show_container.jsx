import { connect } from "react-redux";
import { fetchRest } from "../../actions/restaurant_action";
import RestaurantShow from "./restaurant_show";

const mSTP = (state, ownProps) => {
    return {
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        currentUser: state.session.currentUserId
    }
}

const mDTP = dispatch => {
    return {
        fetchRest: restaurantId => dispatch(fetchRest(restaurantId))
    }
}

export default connect(mSTP,mDTP)(RestaurantShow)