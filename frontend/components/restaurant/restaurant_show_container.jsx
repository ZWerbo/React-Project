import { connect } from "react-redux";
import { fetchRest } from "../../actions/restaurant_action";
import RestaurantShow from "./restaurant_show";
import { openModal } from "../../actions/modal"


const mSTP = (state, ownProps) => {
    // console.log(ownProps)
    // console.log(state.entities.reviews)
    return {
        restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
        currentUserId: state.session.id,
        reviews: Object.values(state.entities.reviews)
    }
}

const mDTP = dispatch => {
    return {
        fetchRest: restaurantId => dispatch(fetchRest(restaurantId)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mSTP,mDTP)(RestaurantShow)